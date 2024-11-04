
const basket1= document.querySelector (".Basket1 span") ;

const basket2= document.querySelector (".Basket2 span");

const Leftarrow = document.querySelector("#LeftArrow");
const Rightarrow = document.querySelector("#RightArrow");

let totleapplescount =10;
let SecondApplescount = 0;
let FirstApplescount = totleapplescount - SecondApplescount;


const totleapples = 10;

basket1.innerText  = totleapples;
basket2.innerText  = 0;

Rightarrow.addEventListener ("click",()=>{
    if ( FirstApplescount > 0 ){
    FirstApplescount--
    SecondApplescount++
    basket1.innerText = FirstApplescount;
    basket2.innerText = SecondApplescount ;
    }
})

Leftarrow.addEventListener ("click",()=>{
    if ( SecondApplescount >0 ){
    FirstApplescount++
    SecondApplescount--
    basket1.innerText = FirstApplescount;
    basket2.innerText = SecondApplescount ;
    }
})