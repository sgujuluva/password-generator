//password
/* 1. includes 0123456789
2.alphabets abc...z
3. atleast 1 special characters
4. atleast 1 uppercase

 6. max length 6
 */
 let pwd = document.querySelector("#showMe");

 function passwordNum(){
    let result = [];
    let numAndString = "0123456789abcdefghijklmnopqrstuvwxyz$&@%";
    for(let i = 0; i < 8; i++){
        result.push(numAndString[Math.floor(Math.random() * numAndString.length)]);
    }
    pwd.innerHTML = result.join("");


  /*    let result = [];
     let number = "0123456789";
     let lowerCase="abcdefghijklmnopqrstuvwxyz";
     let uppercase = lowerCase.toUpperCase();
    let specialCharacters = "$@&%";
    
    for ( let i = 0; i < 6; i++){
        result.push(number[Math.floor(Math.random() * number.length)])
    } */
 }
passwordNum();