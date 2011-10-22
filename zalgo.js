#!/usr/bin/env node
/*
 * zalgo
 * wrapper for Marak's colors zalgo generator
 * Cam Pedersen
 * Oct 21, 2011
 */

var colors = require('colors'),
    spit = function(text){
      console.log('\n\n' + text + '\n\n');
    };

if (!process.argv[2]) {
  spit('usage: zalgo "he comes"'.magenta);
}

console.log(
  colors.zalgo(process.argv[2]).rainbow
);
