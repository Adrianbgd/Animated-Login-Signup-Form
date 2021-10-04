const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");

signupBtn.onclick = (()=> {
    loginForm.style.marginLeft = "-50%";
});
        
loginBtn.onclick = (()=> {
    loginForm.style.marginLeft = "0%";
});
        
signupLink.onclick =(()=> {
    signupBtn.click();
});