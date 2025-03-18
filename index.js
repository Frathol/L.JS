// console.log(`tes`);

// document.getElementById("H1").textContent = 'Hello'

// let v1 = "Tes nama";
// let v2 = 20.66;
// let v3 = 2.1

// console.log(typeof v1)
// console.log(`variabel 1 : ${v1}`, typeof v1)

// document.getElementById("p1").textContent = v1;

let name ;
// name = window.prompt("Masukkan Nama :");
// console.log(name)

document.getElementById("bt1").onclick = function(){
    name = document.getElementById("in1").value
    console.log(name)
}


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);
    
    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You can't enter. You were just born.`
    }
    else if(age >= 18){
        resultElement.textContent = `You are old enough to enter this site`
    }
    else if(age < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}