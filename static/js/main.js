function navbarShrink () {
    const navbarCollapsible = document.body.querySelector('#navbarResponsive');

    // alert(!navbarCollapsible)
    if (!navbarCollapsible) {
        return;
    }
    const menu = document.body.querySelector('#navbarResponsive');

    if (menu.classList[2] == 'show') {
        menu.classList.remove('show')
    } else {
        menu.classList.add('show')
    }

};

function openModal (selectedModal) {
    let modal = document.getElementById(selectedModal);
    modal.style.display = "flex";

    document.body.style.overflow = 'hidden';
}

function closeModal (selectedModal) {
    let modal = document.getElementById(selectedModal);
    modal.style.display = "none";
    document.body.style.overflow = 'initial';
};

let detect = document.getElementsByName("detect");

window.onclick = function(event) {
    if (event.target.id == "cocoModal") {
        closeModal("cocoModal");
    } else if (event.target.id == "valeModal") {
        closeModal("valeModal");
    } else if (event.target.id == "botModal") {
        closeModal("botModal");
    } else if (event.target.id == "osaModal") {
        closeModal("osaModal");
    }
  }
