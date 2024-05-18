function hideShowText() {
    var inputElement = document.getElementById("inputField");
    var buttonElement = document.getElementById("hideShowButton");

    if (inputElement.type === "text") {
        inputElement.type = "password";
        buttonElement.textContent = "Розкрити";
    } else {
        inputElement.type = "text";
        buttonElement.textContent = "Приховати";
    }
}