//password
/* 1. includes 0123456789
2.alphabets abc...z
3. atleast 1 special characters
4. atleast 1 uppercase

 6. max length 6
 */
let pwd = document.querySelector("#showMe");

function passwordNum() {
    /* let result = [];
      let numAndString = "0123456789abcdefghijklmnopqrstuvwxyz$&@%";
      for(let i = 0; i < 8; i++){
          result.push(numAndString[Math.floor(Math.random() * numAndString.length)]);
      }
      pwd.innerHTML = result.join("");
      return pwd.innerHTML; */
  let result1 = [];
    let number = "0123456789";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = lowerCase.toUpperCase();
    let specialCharacters = "$@&%";
    let numberResult = [];
    let lowerCaseResult = [];
    let upperCaseResult = [];
    let specialCharactersResult = [];
    
    for (let i = 0; i < 3; i++) {
   
      numberResult.push(number[Math.floor(Math.random() * number.length)]);
      lowerCaseResult.push(
        lowerCase[Math.floor(Math.random() * lowerCase.length)]
      );
      upperCaseResult.push(
        uppercase[Math.floor(Math.random() * uppercase.length)]
      );
      specialCharactersResult.push(
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      );
     
    }
    let result =
      numberResult.join("") +
      lowerCaseResult.join("") +
      upperCaseResult.join("") +
      specialCharactersResult.join("");
      for (let i = 0; i < result.length; i++) {
        result1.push(result[Math.floor(Math.random() * result.length)]);    
    
     pwd.innerHTML = result1.join("");
      }
    return result1.join("");
  }
  console.log(passwordNum());