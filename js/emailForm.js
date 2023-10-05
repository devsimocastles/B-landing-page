

// CONTACT FORM COMPONENTS //////////////////////////////////////
const email_form = document.getElementById("email_form");
const email_input = document.getElementById("email_input");

// ERROR COMPONENTS /////////////////////////////////////////////
const email_input_container = document.getElementById("email_input_container");
const error_icon = document.getElementById("error_icon");
const error_msg = document.getElementById("error-msg");


email_form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email_input.value)) {
        email_input_container.classList.add("error");
        error_icon.classList.add("active");
        error_msg.classList.add("active");
    } else {
        email_input_container.classList.remove("error");
        error_icon.classList.remove("active");
        error_msg.classList.remove("active");
    }
});