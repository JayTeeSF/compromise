'use strict';
//this file is not included in the build.
//use it for messing around.
const nlp = require('./src/index');
// require('./src/log').enable();

//bug 1. - support greedy +
// var arr = nlp('would have not had been walking').match('#Auxillary+ #Verb').check();


console.log('------');
// var m = nlp('he\'d be nice');
// m.contractions().expand();
// m.verbs().toNegative().check();

var m = nlp('the dog is nice');
m.verbs().replace('and').check();
// m.insertBefore('and').check();
console.log(m.out());
