function passwordNum() {
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
      
      console.log("resulkt is: ",result)
       let newPwd = [];
     
          if(specialCharacters.includes(result[0])){
            r = result[Math.floor(Math.random() * result.length)];
            newPwd.push(r)
          }   else{
              newPwd.push(result[Math.floor(Math.random() * result.length)])
          }         
        console.log("newPwd",newPwd.join(""))
      
      /* for (let i = 0; i < result.length; i++) {
        let newPwd = result[Math.floor(Math.random() * result.length)];     
    
      } */
     // return (result1.join(""));
    }
    console.log(passwordNum());