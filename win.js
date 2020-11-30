// const ghost = require ("readline");

// const flow = ghost.createInterface({
//     output: process.stdout,
//     input: process.stdin
// });

// flow.question("who are you\n", (answer)=>{
//     console.log(answer)
// }
// )

// const gloom = require ("readline");

// const gone = gloom.createInterface({
//     output : process.stdout,
//     input : process.stdin
// });

// gone.question("how old are you\n", (answer)=>{
//     console.log (answer)});



const x = require ("readline");

const y = x.createInterface({
    output : process.stdout,
    input : process.stdin
});

y.question("who is this\n", (answer)=>{
    console.log (answer)
});
