"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import dynamic from "next/dynamic";

const TerminalOverlay = dynamic(() => import("./TerminalOverlay"), {
  ssr: false,
});

export interface TerminalApi {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const TerminalContext = createContext<TerminalApi | null>(null);

export function useTerminal(): TerminalApi {
  const ctx = useContext(TerminalContext);
  if (!ctx) {
    throw new Error("useTerminal must be used within <TerminalProvider>");
  }
  return ctx;
}

export function TerminalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  // Once true, the overlay stays mounted so scrollback/history survive close.
  // Keeps the terminal chunk out of first load until the first open.
  const [everOpened, setEverOpened] = useState(false);

  const open = useCallback(() => {
    setEverOpened(true);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => {
    setEverOpened(true);
    setIsOpen((v) => !v);
  }, []);

  const value = useMemo<TerminalApi>(
    () => ({ isOpen, open, close, toggle }),
    [isOpen, open, close, toggle],
  );

  return (
    <TerminalContext.Provider value={value}>
      {children}
      {everOpened && <TerminalOverlay />}
    </TerminalContext.Provider>
  );
}
