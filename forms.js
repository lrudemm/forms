let todo = "";
const todoField = document.querySelector("#addItem");
const sectionTag = document.querySelector("ol");

document.querySelector('form').addEventListener("submit", function(event) {
    console.log("Submitting the form");
    event.preventDefault();

    todo = todoField.value;
    console.log(todo);
    let template =
    `
        <li> ${todo}</li>
    `;
    sectionTag.innerHTML = template;
})