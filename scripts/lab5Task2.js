const inputField = document.getElementById("inputField");
const autocompleteContainer = document.getElementById("autocompleteContainer");

// List of autocomplete words
const autocompleteWords = [
    "apple",
    "banana",
    "cherry",
    "grape",
    "kiwi",
    "orange",
    "pear",
    "arrange",
];

inputField.addEventListener("input", function () {
const inputText = this.value.toLowerCase();
console.log(this);
let suggestions = [];

if (inputText) {
    suggestions = autocompleteWords.filter((word) =>
    word.startsWith(inputText)
    );
}

displaySuggestions(suggestions);
});

function displaySuggestions(suggestions) {
if (suggestions.length === 0) {
    autocompleteContainer.innerHTML = "";
    return;
}

const html = suggestions
    .map(
    (suggestion) =>
        `<div class="autocomplete-item">${suggestion}</div>`
    )
    .join("");
autocompleteContainer.innerHTML = html;

const autocompleteItems =
    document.querySelectorAll(".autocomplete-item");
autocompleteItems.forEach((item) => {
    item.addEventListener("click", function () {
    inputField.value = this.textContent;
    autocompleteContainer.innerHTML = "";
    });
});
}