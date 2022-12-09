const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  //Aparezca Menu
const btnMenu=document.querySelector("body > header > button");
const menu=document.querySelector("body > header > nav.menu-navR");


btnMenu.addEventListener("click",()=>
{

menu.classList.toggle("show");
   
});





//Aparezcan las flechas al click

const productosMenu=document.querySelector("body > header > section.productos > div");
const btnAtras=document.querySelector("body > header > section.productos > button.pre-btn");
const btnAdelante=document.querySelector("body > header > section.productos > button.nxt-btn");

productosMenu.addEventListener("click",()=>{
  btnAtras.classList.toggle("showArrow");
  btnAdelante.classList.toggle("showArrow");
})



//funcionamiento de las flechas
const productsContainers=[...document.querySelectorAll(`.contenedor-productos`)];
const nxtBtn=[...document.querySelectorAll(`.nxt-btn`)];
const prevBtn=[...document.querySelectorAll(`.pre-btn`)];



productsContainers.forEach((item,i)=>{
  let containerDimentions=item.getBoundingClientRect();
  let containerWidth=containerDimentions.width;


  nxtBtn[i].addEventListener(`click`,()=>{
    item.scrollLeft+=containerWidth;
  }); 

  prevBtn[i].addEventListener(`click`,()=>{
    item.scrollLeft-=containerWidth;
  })
});