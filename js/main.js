// jshint esversion:10

import { CountUp } from './js/countUp.min.js';

window.onload = function() {
  var countUp = new CountUp('counter-1', 20000);
  countUp.start();
};
