'use strict';
const price = document.querySelector('.price-det-val');
const range = document.querySelector('#customRange');

let sliderval;
range.addEventListener('input', function () {
  //Here we are selecting the slider value based on the input
  sliderval = range.value;

  //We then insert the input element on the price html
  price.innerHTML = sliderval;
});
