var heffalumps = {name:"Heffalumps"}
var eeyore = {name:"Eeyore"}
var kanga = {name:"Kanga"}
var owl = {name:"Owl"}
var chris = {name:"Christopher Robin"}
var rabbit = {name:"Rabbit"}
var gopher = {name:"Gopher"}
var piglet = {name:"Piglet"}
var pooh = {name:"Winnie the Pooh"}
var bees = {name:"Bees"}
var tigger = {name:"Tigger"}

heffalumps.west = eeyore;
eeyore.east = heffalumps;
eeyore.south = kanga;
kanga.north = eeyore;
kanga.south = chris;
chris.north = kanga;
chris.west = owl;
chris.east = rabbit;
chris.south = pooh;
owl.east = chris;
owl.south = piglet;
piglet.north = owl;
piglet.east = pooh;
pooh.north = chris;
pooh.west = piglet;
pooh.south = tigger;
pooh.east = bees;
tigger.north = pooh;
bees.north = rabbit;
bees.west = pooh;
rabbit.west = chris;
rabbit.east = gopher;
gopher.west = rabbit;

var player = {
    location: tigger
} 

console.log(player);

function move(dir){
    if (dir != "north" || dir != "west" || dir != "east" || dir != "south"){
        console.log("invalid direction");
    }
    player.location = player.dir;
    return player.location

}