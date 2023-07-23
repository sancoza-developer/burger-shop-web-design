let searchBtn =document.querySelector('#search-btn');

let searchForm= document.querySelector('.header .serch-form');

searchBtn.onclick = () => {
  searchBtn.classList.toggle('fa-times');
  searchForm.classList.toggle('active');
 
  searchBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}

let menuBtn =document.querySelector('#menu-btn');

let navbar= document.querySelector('.header .navbar');

menuBtn.onclick = () => {
  searchBtn.classList.toggle('fa-times');
  navbar.classList.toggle('active');
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  
}

window.onscroll = () => {
  searchBtn.classList.remove('fa-times');
  searchForm.classList.remove('active');
  searchBtn.classList.remove('fa-times');
  navbar.classList.remove('active');
}