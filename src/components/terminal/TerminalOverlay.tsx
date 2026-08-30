"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useTerminal } from "./terminal-provider";
import TerminalScrollback from "./TerminalScrollback";
import { run } from "@/terminal/commands";
import { complete } from "@/terminal/complete";
import { fsRoot } from "@/terminal/filesystem";
import { displayCwd } from "@/terminal/path";
import { loadHistory, pushHistory, saveHistory } from "@/terminal/history";
import type { TermLine } from "@/terminal/types";

const WELCOME: TermLine[] = [
  {
    text: "type `help` for commands, `ls` to look around, `open <name>` to jump to a page",
    tone: "muted",
  },
];

export default function TerminalOverlay() {
  const { isOpen, close } = useTerminal();
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState<TermLine[]>(WELCOME);
  const [cwd, setCwd] = useState("/");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [viewport, setViewport] = useState<{
    height: number;
    offsetTop: number;
  } | null>(null);

  const histCursor = useRef<number | null>(null);
  const draft = useRef("");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const restoreFocus = useRef<HTMLElement | null>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => setHistory(loadHistory()), []);

  useEffect(() => {
    if (!isOpen) return;
    restoreFocus.current = document.activeElement as HTMLElement | null;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(focusTimer);
      body.style.overflow = prevOverflow;
      restoreFocus.current?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  // Track the visual viewport so the input stays above the on-screen keyboard.
  useEffect(() => {
    if (!isOpen) return;
    const vv = window.visualViewport;
    if (!vv) return;
    const update = () =>
      setViewport({ height: vv.height, offsetTop: vv.offsetTop });
    update();
    vv.addEventListener("resize", update);
    vv.addEventListener("scroll", update);
    return () => {
      vv.removeEventListener("resize", update);
      vv.removeEventListener("scroll", update);
      setViewport(null);
    };
  }, [isOpen]);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines, isOpen, viewport]);

  const prompt = `${displayCwd(cwd)} $ `;

  function navigateTo(href: string, external: boolean) {
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }
    close();
    let samePageHash = "";
    try {
      const url = new URL(href, window.location.origin);
      if (url.pathname === window.location.pathname && url.hash) {
        samePageHash = url.hash.slice(1);
      }
    } catch {
      // fall through to router.push
    }
    if (samePageHash) {
      // let the overlay unmount and release focus, then jump to the section.
      // Setting the hash uses the page's own scroll-smooth + scroll-pt-20.
      window.setTimeout(() => {
        if (window.location.hash === `#${samePageHash}`) {
          document
            .getElementById(samePageHash)
            ?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.hash = samePageHash;
        }
      }, 0);
    } else {
      router.push(href);
    }
  }

  function submit() {
    const raw = input;
    const result = run(raw, { cwd, root: fsRoot, theme });

    if (result.clearScreen) {
      setLines([]);
    } else {
      setLines((prev) => [
        ...prev,
        { text: prompt + raw, tone: "prompt" },
        ...result.lines,
      ]);
    }

    if (result.cwd !== undefined) setCwd(result.cwd);
    if (result.setTheme) setTheme(result.setTheme);
    if (result.navigate) {
      navigateTo(result.navigate.href, result.navigate.external);
    }
    if (result.close) close();

    if (raw.trim()) {
      setHistory((prev) => {
        const next = pushHistory(prev, raw);
        saveHistory(next);
        return next;
      });
    }
    setInput("");
    histCursor.current = null;
  }

  function recall(direction: -1 | 1) {
    if (history.length === 0) return;
    let cursor = histCursor.current;
    if (cursor === null) {
      if (direction === 1) return;
      draft.current = input;
      cursor = history.length;
    }
    cursor = Math.max(0, cursor + direction);
    if (cursor >= history.length) {
      histCursor.current = null;
      setInput(draft.current);
      return;
    }
    histCursor.current = cursor;
    setInput(history[cursor]);
  }

  function applyCompletion() {
    const result = complete(input, { cwd, root: fsRoot });
    if (result.suggestions.length > 1) {
      setLines((prev) => [
        ...prev,
        { text: prompt + input, tone: "prompt" },
        { text: result.suggestions.join("   "), tone: "muted" },
      ]);
    }
    setInput(result.value);
  }

  function onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.metaKey || e.altKey) return;
    if (e.ctrlKey) {
      if (e.key.toLowerCase() === "l") {
        e.preventDefault();
        setLines([]);
      }
      return;
    }
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        submit();
        break;
      case "Tab":
        e.preventDefault();
        applyCompletion();
        break;
      case "ArrowUp":
        e.preventDefault();
        recall(-1);
        break;
      case "ArrowDown":
        e.preventDefault();
        recall(1);
        break;
      case "Escape":
        e.preventDefault();
        close();
        break;
    }
  }

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed left-0 top-0 z-[60] flex w-full items-center justify-center"
      style={{
        height: viewport ? viewport.height : "100dvh",
        transform: viewport
          ? `translateY(${viewport.offsetTop}px)`
          : undefined,
      }}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm motion-reduce:backdrop-blur-none"
        aria-hidden="true"
        onClick={close}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Interactive terminal"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={() => {
          const selection = window.getSelection();
          if (!selection || selection.isCollapsed) inputRef.current?.focus();
        }}
        onKeyDown={(e) => {
          if (e.key === "Tab") {
            e.preventDefault();
            inputRef.current?.focus();
          }
        }}
        className="relative flex h-full w-full flex-col overflow-hidden border border-border-strong bg-surface shadow-lg sm:h-[70vh] sm:w-[70vw] sm:max-w-[900px] sm:rounded-lg"
      >
        <div className="flex items-center gap-1.5 border-b border-border-strong px-4 py-3">
          <button
            type="button"
            onClick={close}
            aria-label="Close terminal"
            className="relative h-2.5 w-2.5 rounded-full bg-[#ff5f56] before:absolute before:-inset-3 before:content-['']"
          />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
          <span className="ml-3 font-mono text-xs text-text-faint">
            terminal · {displayCwd(cwd)}
          </span>
        </div>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto overscroll-contain p-4 font-mono text-[16px] leading-[1.6] sm:p-5 sm:text-[13px] sm:leading-[1.7]"
          aria-live="polite"
        >
          <TerminalScrollback lines={lines} />
          <div className="flex">
            <span className="shrink-0 whitespace-pre text-accent text-[16px] sm:text-[13px]">
              {prompt}
            </span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
              aria-label="Terminal input"
              className="min-w-0 flex-1 bg-transparent font-mono text-[16px] text-text-body caret-accent outline-none sm:text-[13px]"
            />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
