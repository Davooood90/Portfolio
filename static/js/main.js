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

     
