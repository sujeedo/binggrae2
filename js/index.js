/*======================= Background =======================*/
// 1. 색종이 이미지를 아래로 반복 슬라이드하여 흩날리는 효과를 줍니다.
let con_img = document.querySelectorAll('#contetti img');
$(function(){
    $(con_img).not(':first').css('display','none');
    contettiSilding();
    
    function contettiSilding(){
        $(con_img).eq(0).animate({'top':'1080px'},3000,'linear');
        $(con_img).eq(1).css('display','block').css('top','-1080px').animate({'top':'0px'},3000,'linear',
        function(){
        $(con_img).eq(1).animate({'top':'1080px'},3000,'linear');
        $(con_img).eq(2).css('display','block').css('top','-1080px').animate({"top":"0px"},3000,'linear',
        function(){
        $(con_img).eq(2).animate({'top':'1080px'},3000,'linear');
        $(con_img).eq(0).css('display','block').css('top','-1080px').animate({"top":"0px"},3000,'linear',contettiSilding);
        });
        });
    }
});

/*======================= Header =======================*/

/* 우측에 위치한 사이드 메뉴에 동작을 줍니다.*/
// 1.햄버거 모양의 토글 버튼을 클릭하면 닫기 클래스가 추가되거나 빠져 모양이 바뀝니다.
const toggleicons = document.querySelectorAll('header .icon');
toggleicons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle('close');
  });
}); //(function(icon)

// 2. 토글 버튼을 클릭하면 메뉴에 show 클래스가 추가되거나 빠져 메뉴가 보이거나 안보입니다.
const menu = document.querySelector('header .menu');
const menu_list = document.querySelector('.menu__category');
const toggleicon = document.querySelector('header .icon'); 
toggleicon.addEventListener('click', () => {
  menu.classList.toggle('menu-slide');
  menu_list.classList.toggle('menu-fadein');
});

// 3. .main메뉴를 클릭하면 open-menu 클래스가 토글되어 좌측의 +아이콘이 -아이콘으로 바뀝니다.
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

// 4. .main메뉴를 클릭하면 .sub메뉴가 부드럽게 나타납니다.
$(function(){
  $('.main').eq(0).click(function(){
      $('.sub').eq(0).slideToggle(500);
      $('.sub').eq(1).slideToggle(500);
      $('.sub').eq(2).slideToggle(500);
      $('.sub').eq(3).slideUp(500);
      $('.sub').eq(4).slideUp(500);
      $('.sub').eq(5).slideUp(500);
      $('.sub').eq(6).slideUp(500);
      $('.sub').eq(7).slideUp(500);
      $('.sub').eq(8).slideUp(500);

  });

  $('.main').eq(1).click(function(){
      $('.sub').eq(0).slideUp(500);
      $('.sub').eq(1).slideUp(500);
      $('.sub').eq(2).slideUp(500);
      $('.sub').eq(3).slideToggle(500);
      $('.sub').eq(4).slideToggle(500);
      $('.sub').eq(5).slideUp(500);
      $('.sub').eq(6).slideUp(500);
      $('.sub').eq(7).slideUp(500);
      $('.sub').eq(8).slideUp(500);
  });

  $('.main').eq(2).click(function(){
      $('.sub').eq(0).slideUp(500);
      $('.sub').eq(1).slideUp(500);
      $('.sub').eq(2).slideUp(500);
      $('.sub').eq(3).slideUp(500);
      $('.sub').eq(4).slideUp(500);
      $('.sub').eq(5).slideToggle(500);
      $('.sub').eq(6).slideUp(500);
      $('.sub').eq(7).slideUp(500);
      $('.sub').eq(8).slideUp(500);
  });

  $('.main').eq(3).click(function(){
      $('.sub').eq(0).slideUp(500);
      $('.sub').eq(1).slideUp(500);
      $('.sub').eq(2).slideUp(500);
      $('.sub').eq(3).slideUp(500);
      $('.sub').eq(4).slideUp(500);
      $('.sub').eq(5).slideUp(500);
      $('.sub').eq(6).slideToggle(500);
      $('.sub').eq(7).slideToggle(500);
      $('.sub').eq(8).slideToggle(500);
  });
});

/* 현재 위치를 인식할 수 있도록 해주는 좌측 탭 메뉴에 동작을 줍니다.*/
// 1. 탭 메뉴를 항상 화면 중앙에 위치하게 합니다.
$(function () {
  let section_height = $(window).height();
  $("section").css("height", section_height + "px");
  let center_height = section_height / 2 - $(".scroll__menu").height() / 2;
  $(".scroll__menu").css("top", center_height + "px");

  // 2. 탭메뉴를 클릭하면 해당 섹션으로 스크롤링하여 이동합니다.
  $(".scroll__menu>li>a").click(function (e) {
    let target = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(target).offset().top }, 500);
    e.preventDefault();
  });

  // 3. 탭메뉴를 클릭 또는 스크롤링하여 각 섹션에 진입하면 탭메뉴에 active클래스가 추가되어 표시됩니다.
  /*$('.scroll__menu a').on('click', function (event) {
    $(this).addClass('chek'); 
    $(this).parents().find('.scroll__menu').find('a').not(this).removeClass('chek');
    $(this).siblings('.circle').addClass('here');
    $(this).parents().find('.scroll__menu').find('a').not(this).siblings('.circle').removeClass('here');
  });*/
  
  // 3. 탭메뉴가 섹션에 진입시 클래스가 추가되어 섹션의 위치를 표시합니다.
  $(window).on('scroll', function () {
      let window_top = $(window).scrollTop();
      let product_top = $('#product').offset().top;
      let event_top = $('#event').offset().top;
      let store_top = $('#store').offset().top;
      if (window_top < product_top) {
        $('.scroll__menu a').eq(0).addClass('chek');
        $('.scroll__menu a').not($('.scroll__menu a').eq(0)).removeClass('chek');
        $('.scroll__menu .circle').eq(0).addClass('here');
        $('.scroll__menu .circle').not($('.scroll__menu .circle').eq(0)).removeClass('here');
        $('.scroll__menu .square').eq(0).addClass('here2');
        $('.scroll__menu .square').not($('.scroll__menu .square').eq(0)).removeClass('here2');
      }
      else if (window_top < event_top) {
        $('.scroll__menu a').eq(1).addClass('chek');
        $('.scroll__menu a').not($('.scroll__menu a').eq(1)).removeClass('chek');
        $('.scroll__menu .circle').eq(1).addClass('here');
        $('.scroll__menu .circle').not($('.scroll__menu .circle').eq(1)).removeClass('here');
        $('.scroll__menu .square').eq(1).addClass('here2');
        $('.scroll__menu .square').not($('.scroll__menu .square').eq(1)).removeClass('here2');
      }
      else if (window_top < store_top) {
        $('.scroll__menu a').eq(2).addClass('chek');
        $('.scroll__menu a').not($('.scroll__menu a').eq(2)).removeClass('chek');
        $('.scroll__menu .circle').eq(2).addClass('here');
        $('.scroll__menu .circle').not($('.scroll__menu .circle').eq(2)).removeClass('here');
        $('.scroll__menu .square').eq(2).addClass('here2');
        $('.scroll__menu .square').not($('.scroll__menu .square').eq(2)).removeClass('here2');
      }
      else if (window_top >= store_top) {
        $('.scroll__menu a').eq(3).addClass('chek');
        $('.scroll__menu a').not($('.scroll__menu a').eq(3)).removeClass('chek');
        $('.scroll__menu .circle').eq(3).addClass('here');
        $('.scroll__menu .circle').not($('.scroll__menu .circle').eq(3)).removeClass('here');
        $('.scroll__menu .square').eq(3).addClass('here2');
        $('.scroll__menu .square').not($('.scroll__menu .square').eq(3)).removeClass('here2');
      }
  });
});

// 하단의 업다운버튼을 클릭하면 맨위로 맨아래로 이동합니다.
const arrow_btn = document.querySelectorAll('.arrow');
let home_top = document.querySelector('#home').offsetTop; //document.body.scrollTop
let body_height = document.body.scrollHeight // 4070px
arrow_btn[0].addEventListener('click',function(){
  window.scrollTo({top: home_top, behavior: 'smooth'});
});
arrow_btn[1].addEventListener('click',function(){
  window.scrollTo({top: body_height, behavior: 'smooth'});
});

// 탭메뉴와 업다운버튼이 홈의 중앙을 벗어나면 부드럽게 나타납니다.
const tabmenu = document.querySelector('.scroll__menu');
const home = document.querySelector('#home');
const home_Height = home.getBoundingClientRect().height;
document.addEventListener('scroll', function(){
  if(window.scrollY > home_Height / 2) {
    arrow_btn[0].classList.add('visible');
    arrow_btn[1].classList.add('visible');
  } else {
    arrow_btn[0].classList.remove('visible');
    arrow_btn[1].classList.remove('visible');
  }
});

/*======================= Home =======================*/

// 홈의 메인 타이틀 이미지를 반복 교체하여 반짝히는 효과를 줍니다. 
let i = 0;
function title_sparkle(){  
    let list = new Array("main","main2");
    let title = document.querySelector('.title__main>img');
    title.setAttribute("src","./image/home_tiltle_"+list[i]+".png");
    i++; 
    if(i > list.length-1){i = 0;}
}
setInterval("title_sparkle()",500);

// 홈 하단의 버튼을 클릭하면 해당 섹션으로 스크롤링하여 이동합니다. 
let section_moveBtn = document.querySelector('.button__container');
section_moveBtn.addEventListener('click',function(event){
  let target = event.target;
  let link = target.dataset.link;
  if(link == null) {
    return;
  }
  let scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: 'smooth', block: 'center'});
});


/*======================= Product =======================*/

// 상품 옆 버튼 클릭시 메모 팝업과 플러스에서 마이너스 모양 변환이 일어납니다.
const product_btns = document.querySelectorAll('.pop-icon');
const product_contents = document.querySelectorAll('.pop-content');
const product_icons = document.querySelectorAll('.pop-icon span');
product_btns[0].addEventListener('click', function(){
  product_contents[0].classList.toggle('visible');
  product_icons[0].classList.toggle('close');
  product_icons[1].classList.toggle('close');
});
product_btns[1].addEventListener('click', function(){
  product_contents[1].classList.toggle('visible');
  product_icons[2].classList.toggle('close');
  product_icons[3].classList.toggle('close');
});
product_btns[2].addEventListener('click', function(){
  product_contents[2].classList.toggle('visible');
  product_icons[4].classList.toggle('close');
  product_icons[5].classList.toggle('close');
});
product_btns[3].addEventListener('click', function(){
  product_contents[3].classList.toggle('visible');
  product_icons[6].classList.toggle('close');
  product_icons[7].classList.toggle('close');
});
product_btns[4].addEventListener('click', function(){
  product_contents[4].classList.toggle('visible');
  product_icons[8].classList.toggle('close');
  product_icons[9].classList.toggle('close');
});

/*======================= store =======================*/

let slideWrapper = document.querySelector('.store-card-wrap');    // slide-wrapper 슬라이드 커버
let slideIndex = 0;                                               // current slideIndexition 현재 슬라이드 인덱스
let slides = document.querySelectorAll('.store-card-zone li');    // items 슬라이드 될 요소
let totalSlides = slides.length;                                  // number of slides 슬라이드 번호 2
let sliderWidth = slideWrapper.clientWidth;                       // get the slide width 슬라이드 폭 얻기 560px
let nextBtn = document.getElementById('next');                    // next버튼
let prevBtn = document.getElementById('previous');                // previous 버튼
//set width of items 슬라이드 폭을 임의로 지정
//slides[0].style.width = sliderWidth + 'px';
//slides[1].style.width = sliderWidth + 'px';

//set width to be 'x' times the number of slides 슬라이드의 길이(너비)가 x(슬라이드카드숫자만큼)배로 설정됩니다.
let slider = document.querySelector('.store-card-zone');
slider.style.width = sliderWidth * totalSlides + 'px';


// 이전, 다음 버튼을 클릭하면 슬라이드 함수가 실행됩니다.
nextBtn.addEventListener('click', function () {
  plusSlides(1);
});
prevBtn.addEventListener('click', function () {
  plusSlides(-1);
});

// 이전, 다음 버튼을 클릭하면 매개변수로 1이 들어와 값이 플러스 되거나 유지 됩니다.
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlides(n) {
  showSlides(slideIndex = n);
}
// 플러스되거나 유지 된 값이 매개변수로 들어와 슬라이드 인덱스 번호가 됩니다.
// 만약 들어온 값이 -1과 같다면, 슬라이드 인덱스 갯수에서 -1된 값이 번호로 할당되어 인덱스 마지막 번호부터 불러옵니다.
// 또는 들어온 값이 슬라이드 갯수와 완전히 일치한다면 슬라이드 인덱스 번호는 0이 됩어 인덱스 첫번호를 불러옵니다.
// 슬라이드의 왼쪽 값이 슬라이드 너바(560)에 슬라이드 인덱스 번호를 곱한 길이(px)가 됩니다.
// 그리곤 페이지네이션 함수를 호출합니다.
function showSlides(n) {
  slideIndex = n;
  if (slideIndex == -1) {
      slideIndex = totalSlides - 1;
  } else if (slideIndex === totalSlides) {
      slideIndex = 0;
  }
  slider.style.left = -(sliderWidth * slideIndex) + 'px';
  pagination();
}

// Array.from() 메서드를 통해 NodeList slides를 순수 배열로 가져옵니다.
// forEach() 메서드는 주어진 함수를 배열 요소 각각에 실행합니다.
// appendChild() 메서드는 마지막부분에 자식 노드를 추가합니다.
Array.from(slides).forEach(function () {
  let li = document.createElement('li'); // HTML요소를 생성하여 변수에 할당합니다.
  let ul = document.querySelector('.slider-pagination-dot');
  ul.appendChild(li);
});

// 함수가 실행되면 슬라이드 갯수만큼 추가된 dots 요소 각각에 클래스가 들어갑니다.
// 슬라이드 인덱스 번호가 바뀌면 dots 요소의 인덱스 번호도 바뀌고 해당 dots 요소의 클래스는 지워집니다. 
function pagination() {
  let dots = document.querySelectorAll('.slider-pagination-dot li');
  dots.forEach(function (element) {
      element.classList.remove('active-dot');
  });
  dots[slideIndex].classList.add('active-dot');
}
pagination(); // pagination()은 늘 호출되어있습니다. 인덱스가 바뀌면 클래스를 지워줍니다.

let autoSlider = setInterval(function () {
  plusSlides(1); // 버튼을 클릭하지 않아도 슬라이드됩니다.
}, 5000);

/*// 슬라이드 커버에 커서를 호버하면 클래스가 토글됩니다.
slideWrapper.addEventListener('mouseover', function () {
  this.classList.add('active');
  clearInterval(autoSlider);
});
slideWrapper.addEventListener('mouseleave', function () {
  this.classList.remove('active');
  autoSlider = setInterval(function () {
      plusSlides(1);
  }, 3000);
});*/

/*======================= Event =======================*/

// 이벤트 페이지에 진입시 오픈북 애니메이션이 실행됩니다.
$(function () {
  $(window).on('scroll', function () {
    let window_top = $(window).scrollTop();
    let product_top = $('#product').offset().top;
    let event_top = $('#event').offset().top;
    let store_top = $('#store').offset().top;
    if (window_top < product_top) {
      $('.event__book').removeClass('book-openmoving');
      $('.event__book').removeClass('book-closemoving');
      $('.event-book-btn').removeClass('book-btn-start');
    }
    else if (window_top < event_top) {
      $('.event__book').removeClass('book-openmoving');
      $('.event__book').removeClass('book-closemoving');
      $('.event-book-btn').removeClass('book-btn-start');
    }
    else if (window_top < store_top) {
      $('.event__book').addClass('book-openmoving');
      $('.event-book-btn').addClass('book-btn-start');
    }
    else if (window_top >= store_top) {
      $('.event__book').removeClass('book-openmoving');
      $('.event__book').removeClass('book-closemoving');
      $('.event-book-btn').removeClass('book-btn-start');
    }
  });
});

// 북버튼을 클릭하면 클로즈북 애니메이션이 실행됩니다.
const book_close_btn = document.querySelector('.event-book-btn');
const event_book = document.querySelector('.event__book');
const event_book2 = document.querySelectorAll('.event-book');
book_close_btn.addEventListener('click',function(){
  event_book.classList.toggle('book-openmoving');
  event_book.classList.toggle('book-closemoving');
});