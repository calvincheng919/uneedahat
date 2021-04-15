'use strict'

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_slideout_container = document.querySelector('.social-slideout-container');

floating_btn.addEventListener('click', ()=> {
  social_slideout_container.classList.toggle("visible");
});

close_btn.addEventListener('click', ()=> {
  social_slideout_container.classList.toggle("visible");
})
