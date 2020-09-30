const subHeader = document.querySelector(".sub-header");
const collapsibleToggle = document.querySelector(".collapsible-menu");


let slideIndex = 0;
const links = document.querySelectorAll(".link");
    


e.collapsibleToggle.addEventListener ('click', (e) => {
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

/*--------javascript code for slider from www.webscript.info courtesy of Rizwan Khan---*/


function carousel() {
let i;
let x = document.getblockByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 2000); 
}

carousel();


