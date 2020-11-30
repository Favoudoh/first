var ages = [23,25,26,31,32,100];
var name = "name";

var rev = ages.filter((number)=> number > 30);
var rev1 = rev.reduce((rev,curr)=> rev + curr);
var rev2 = ages.map((number, index) => number*100);

// console.log(rev)
// console.log(rev1)
// console.log(rev2)
