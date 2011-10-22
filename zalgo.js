#!/usr/bin/env node
/*
 * zalgo
 * wrapper for Marak's colors zalgo generator
 * Cam Pedersen
 * Oct 21, 2011
 */

var colors = require('colors'),
    spit = function(text, padding){
      padding = (Array(padding) || Array(2)).join('\n');
      console.log(padding + text + padding);
    };

if (!process.argv[2]) {
  spit('usage: zalgo "he comes"'.magenta);
  process.exit();
}

spit(colors.zalgo(process.argv[2]).rainbow,5);
