const form = document.querySelector(".form")
const submit = document.querySelector(".submit");
const input = document.querySelector(".email");
const error = document.querySelector(".error");
const success = document.querySelector(".success");

function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value))
  {
    form.style.display = "none";
    error.style.display = "none";
    success.style.display = "block";
    return true
  }
    error.style.display = "block";
    return false
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmail()
})