
/*** ============================================================ ***/
/*** ===================== Registration Form =================== ***/
/*** ============================================================ ***/

// Get Information of Inputs Fields
let labels      = document.querySelectorAll(".label"),
    inputsField = document.querySelectorAll(".input"),
    showPass    = document.querySelectorAll(".eye");

inputsField.forEach((inputField) => {
    inputField.onfocus = function()
    {
        // Add Class Active On Focus Field
        inputField.previousElementSibling.firstElementChild.nextElementSibling.classList.add("active");
    }

    inputField.onblur = function()
    {
        // Add Class Active On Blur Field
        inputField.previousElementSibling.firstElementChild.nextElementSibling.classList.remove("active");
        
        // Add Class Active On Focus Field If Input Field doesn't Empty
        if(inputField.value !== "")
            inputField.previousElementSibling.firstElementChild.nextElementSibling.classList.add("active");
    }
});

labels.forEach((label) => {
    label.addEventListener("click", () =>{
        // Add Focus To Input Field If Click Label
        label.parentElement.nextElementSibling.focus();
    });
});

// Show or Hide Password
showPass.forEach((show) => {
    show.addEventListener("click", () => {
        // To Show Pasword
        if(show.parentElement.nextElementSibling.type === "password")
        {
            show.parentElement.nextElementSibling.type = "text";
            show.classList.remove("fa-eye-slash")
            show.classList.add("fa-eye");
        }
        // To Hide Password
        else
        {
            show.parentElement.nextElementSibling.type = "password";
            show.classList.add("fa-eye-slash")
            show.classList.remove("fa-eye");
        }
    });
});

// Get Information of Info Div
let divRegister = document.querySelector(".register"),
    divInfo     = document.querySelector(".register .info");

// Information Of Info Div
let textOne     = divInfo.firstElementChild.innerHTML,
    textTwo     = divInfo.firstElementChild.nextElementSibling.innerHTML,
    buttonText  = divInfo.lastElementChild.innerHTML;

divInfo.lastElementChild.onclick = function()
{
    // To Toggle Right Class
    divRegister.classList.toggle("right");
    
    // If Register Div Contains Right Class Go To Right
    if(divRegister.classList.contains("right"))
    {
        // To Move Right
        divRegister.style.transform = "translateX(100%)";
        
        // First Paragraph
        divInfo.firstElementChild.innerHTML = "Welcome To My WebSite";

        // Second Paragraph
        divInfo.firstElementChild.nextElementSibling.innerHTML = "Click below to sign in <3";

        // Last Paragraph
        divInfo.lastElementChild.innerHTML = "Sign In";
    }
    // If Register Div doesn't Contains Right Class Go To Left
    else
    {
        // To Move left
        divRegister.style.transform = "translateX(0)";

        // First Paragraph
        divInfo.firstElementChild.innerHTML = textOne;

        // Second Paragraph
        divInfo.firstElementChild.nextElementSibling.innerHTML = textTwo;

        // Last Paragraph
        divInfo.lastElementChild.innerHTML = buttonText;
    }
}

// Responsive Registration Form
let signInSignUp = document.querySelectorAll(".sign-in-sign-up .form"),
    mainSignIn   = document.querySelector(".main .sign-in"),
    mainSignUp   = document.querySelector(".main .sign-up");

// Switch Between Form on Click
signInSignUp.forEach((register) => {
    register.onclick = function()
    {
        signInSignUp.forEach((ele) => {
            // Remove All Active Class From Switch Button
            ele.classList.remove("active");
        })

        // Add Active Class To Current Button
        register.classList.add("active");

        // If Switching To Sign In
        if(register.innerHTML === "Sign In")
        {
            // Sign Up Form Hide
            mainSignUp.style.display = "none";

            // Sign In Form Show
            mainSignIn.style.display = "block";
        }
        else
        {
            // Sign In Form Hide
            mainSignIn.style.display = "none";

            // Sign Up Form Show
            mainSignUp.style.display = "block";
        }
    }
});