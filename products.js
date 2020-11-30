var products = [
    {   
        item : "mango",
        cost : 280,
},
    {
        item : "orange",
        cost : 480,
    },
    {
        item : "grape",
        cost : 340,
    },
    {
        item : "apple",
        cost : 334,
    },
    {
        item : "flask",
        cost : 260,
    },
    {
        item : "film",
        cost : 560,
    },
    {
        item : "folder",
        cost : 336,
    },
    {
        item : "router",
        cost : 189,
    },
    {
        item : "wands",
        cost : 480,
    },
    {
        item : "sachett",
        cost : 680,
    },
    {
        item : "glooves",
        cost : 940,
    },
    {
        item : "wings",
        cost : 450,
    },
    {
        item : "ray gun",
        cost : 870,
    },
    {
        item : "haddon coloder",
        cost : 1800,
    },
    {
        item : "wingsuit",
        cost : 480,
    },
    {
        item : "fluidworks",
        cost : 456,
    },
    {
        item : "ghosh ship",
        cost : 900,
    },
    {
        item : "plutonium",
        cost : 674,
    },
    {
        item : "fuel",
        cost : 10,
    },
    {
        item : "crude oil",
        cost : 40,
    },
    {
        item : "flags",
        cost : 567,
    },
    {
        item : "food",
        cost : 866,
    },
    {
        item : "glucagon",
        cost : 896,
    },
    {
        item : "fooga",
        cost : 677
    },
    {
        item : "crude oil",
        cost : 3,
    },
    {
        item : "doves",
        cost : 440,
    },
    {
        item : "colorado",
        cost : 234,
        
    },
    {
        item : "flimsy fimsy",
        cost : 240,
    },
    {
        item : "bulbs",
        cost : 186,
    },
    {
        item : "feed",
        cost : 390,
    },
    {
        item : "bacteria",
        cost : 690,
    },
    {
        item : "bubbly",
        cost : 520,
    },
    {
        item : "m414",
        cost : 610,
    },
    {
        item : "groza",
        cost : 620,
    },
    {
        item : "akm",
        cost : 540,
    },
    {
        item : "akimbo",
        cost : 555
    },
    {
        item : "m762",
        cost : 344,
    },
    {
        item : "dp29",
        cost : 760,
    },
    {
        item : "kar98",
        cost : 448,
    }

]


var itemz = products.filter((products)=>products.item=="colorado");
console.log (itemz);

let cost = [];
for (i =0; i<products.length; i++){
    console.log(products[i].cost);
    cost.push(products[i].cost);
}

console.log("The maximum cost is: " + Math.max(...cost));

for (i =0; i<products.length; i++){
    if (products[i].cost == Math.max(...cost)){
        console.log("item name: " + products[i].item);
    }
}


