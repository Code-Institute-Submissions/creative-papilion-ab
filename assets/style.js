const subHeader = document.querySelector(".sub-header");
const collapsibleToggle = document.querySelector(".collapsible-menu");

collapsibleToggle.addEventListener ('click', () => {
   collapsibleToggle.classList.toggle('active');
    subHeader.classList.toggle('active');
});

window.addEventListener('scroll', () => {

   const scroll = document.documentElement.scrollTop;

    if(scroll > 0) {
        /*document.documentElement.scrollTop;*/
        subHeader.classList.add('fixed');
    }
    else {
        subHeader.classList.remove('fixed');
    }
    //console.log();
});