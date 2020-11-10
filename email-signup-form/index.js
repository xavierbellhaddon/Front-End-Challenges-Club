const submit = document.querySelector(".submit")
const input = document.querySelector(".email")

function validateEmail() 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.value))
  {
    console.log("yay!")
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    validateEmail()
})