
//////////set/////////////

const set=new Set();
set.add(10);
set.add(20);
set.add(30);
set.add(40);
set.add(50);


set.forEach(element => {
    console.log(element);
});
console.log(set);


/////////////map////////


const map=new Map();
map.set("name","khushi");
map.set("age","18");
map.set("email","khushi3333@gmail.com");

console.log(map.get("name"));

map.delete("age");

map.forEach((element,ele)=>{
    console.log(`${element} : ${ele}`);
});