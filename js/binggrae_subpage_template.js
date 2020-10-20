const main_menu = document.querySelectorAll('.menu__category .main');
main_menu[0].addEventListener('click', () => {
  main_menu[0].classList.toggle('open-menu');
});
main_menu[1].addEventListener('click', () => {
  main_menu[1].classList.toggle('open-menu');
});
main_menu[2].addEventListener('click', () => {
  main_menu[2].classList.toggle('open-menu');
});
main_menu[3].addEventListener('click', () => {
  main_menu[3].classList.toggle('open-menu');
});

$(function(){
  $('.sub').eq(0).css("display","block").css("background","rgb(38, 143, 134)");
  $('.sub span ').eq(0).css("width","4px");
  $('.sub').eq(1).css("display","block");
  $('.sub').eq(2).css("display","block");
  

  $('.main').eq(0).click(function(){
      $('.sub').eq(0).slideToggle(500);
      $('.sub').eq(1).slideToggle(500);
      $('.sub').eq(2).slideToggle(500);

  });

  $('.main').eq(1).click(function(){
      $('.sub').eq(3).slideToggle(500);
      $('.sub').eq(4).slideToggle(500);
  });

  $('.main').eq(2).click(function(){
      $('.sub').eq(5).slideToggle(500);
  });

  $('.main').eq(3).click(function(){
      $('.sub').eq(6).slideToggle(500);
      $('.sub').eq(7).slideToggle(500);
      $('.sub').eq(8).slideToggle(500);
  });
});

const toggleicons = document.querySelectorAll('header .icon');
toggleicons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle('close');
  });
}); 

const menu = document.querySelector('header .menu');
const menu_list = document.querySelector('.menu__category');
const toggleicon = document.querySelector('header .icon'); 
toggleicon.addEventListener('click', () => {
  menu.classList.toggle('menu-slide');
  menu_list.classList.toggle('menu-fadein');
});