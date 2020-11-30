var clazz = [
{  
    name:"favour",
    age: 23,
    gender: "male"
},
{
    name:"christ",
    age: 25,
    gender: "male"
},
{
    name:"victor",
    age: 20,
    gender: "male"
},
{
    name:"pep",
    age: 26,
    gender: "female"
},
{
    name: "arit",
    age: 55,
    gender: "female"
},
{
    name: "jamme",
    age: 32,
    gender: "male"
},
{
    name: "joe",
    age: 44,
    gender: "male"
},
{
    name: "jine",
    age: 27,
    gender: "female"
},
{
    name:"glowwer",
    age: 26,
    gender: "female"
},
{
    name: "athenna",
    age: 22,
    gender: "female"
},
{
    name: "jules",
    age: 27,
    gender: "male"
},
{
    name: "hatther",
    age: 23,
    gender: "female"
},
{
    name: "ruth",
    age: 20,
    gender: "female" 
},
{   name: "elias",
    age: 22,
    gender : "male"
},
{
    name: "jerome",
    age : 19,
    gender : "male"
},
{
    name : "ghooulee",
    age : 27,
    gender : "female"
},
{
    name : "foolish",
    age : 20,
    gender : "male"
},
{
    name : "the end",
    age : 27,
    gender : "female"
}
];

var women= clazz.filter((clazz)=>clazz.gender=="female")
console.log(women);

var men=clazz.filter((clazz)=>clazz.gender=="male")
console.log(men);


var womenAge = women.map((woman)=> woman.age);
var womenTotalAge = womenAge.reduce((rev,curr)=> rev + curr);
var womenAgeAvg = womenTotalAge/womenAge.length
console.log(womenAgeAvg);

var ageofmen = men.map((men)=> men.age);
var menTotalAge = ageofmen.reduce((rev,curr)=> rev + curr);
var menAgeAvg = menTotalAge/ageofmen.length
console.log(menAgeAvg);

var round = Math.round(menAgeAvg)
console.log(`therefore the average age of women is ${round} `)

var roundw = Math.round(womenAgeAvg)
console.log(`and the average age  of women ${roundw}`);

var geh = clazz.filter((clazz)=>clazz.age<25)