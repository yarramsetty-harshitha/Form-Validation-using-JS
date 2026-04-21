import { users } from './data.js'

const checkFormData = (username, password) => 
    users.find(
        (user) => user.email === username && user.passkey === password
    );

const showPassword = (event) => {
    let isChecked = event.target.checked
    let password = document.getElementById("password")
    password.type = isChecked ? "text" : "password"
}
document.getElementById("showpass").addEventListener("change", showPassword)


const validateForm = (event) => {
    event.preventDefault()

    let username = document.getElementById("username")
    let password = document.getElementById("password")
    let message = document.getElementById("user-message")
    let isSuccess = true

    if (username.value === "" && password.value === "") {
        message.innerHTML = "Please enter username and password"
        username.style.borderColor = "red"
        password.style.borderColor = "red"
        isSuccess = false
    } else if (username.value === "" && password.value !== "") {
        message.innerHTML = "Please enter username"
        username.style.borderColor = "red"
        password.style.borderColor = "lightgray"
        isSuccess = false
    } else if (username.value !== "" && password.value === "") {
        message.innerHTML = "Please enter password"
        username.style.borderColor = "lightgray"
        password.style.borderColor = "red"
        isSuccess = false
    } else {
        username.style.borderColor = "lightgray"
        password.style.borderColor = "lightgray"
        
        if (checkFormData(username.value, password.value)) {
            message.innerHTML = "Login successful"
            isSuccess = true
             window.location.href = "dashboard.html"
        }
        else {
            message.innerHTML = "Invalid username or password"
            isSuccess = false
        }
    }
    
    message.classList.remove("success", "error")
    message.classList.add(isSuccess ? "success" : "error")
}
document.getElementById("form").addEventListener("submit", validateForm)
