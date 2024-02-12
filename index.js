let form = document.querySelector(".sign-up-Form");
let user = document.querySelector("#name");
let password = document.querySelector("#password");
let passwordPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*[0-9]).{8,15}";
let namePattern = /^[A-Z a-z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let passwordValue = password.value;
  console.log(passwordValue);
  let result = passwordValue.match(passwordPattern);
  console.log(result);
  if (result) {
    console.log("Your Password is Strong");
  } else {
    console.log("Try again");
  }
  //UserName Chcek
  let username = user.value;
  console.log(username);
  let resultUser = namePattern.test(username);
  if (resultUser == true) {
    console.log("username is valid");
  } else {
    console.log("username is invalid");
  }
});
user.addEventListener('keyup',(e)=>{
  if(namePattern.test(e.target.value)){
    user.setAttribute('class','success');
  }else{
    user.setAttribute('class','error')
  }
})