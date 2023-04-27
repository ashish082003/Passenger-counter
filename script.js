let count=0;
greeting="Welcome back";
name="Ashish Jadhav";
let c=document.getElementById("count-el");
let d=document.getElementById("text");
let e=document.getElementById("save-el");
function increment(){
    count++
    c.textContent=count;
    d.textContent=greeting+" "+name;
}
// save function
function save(){
    let countstr=count+"-";
    e.textContent+=countstr;
    console.log(count);
    c.textContent=0;
    count=0;
}

