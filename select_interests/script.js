let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        let value = event.target.id; // id of button that was clicked
        localStorage.setItem("Category", value);
    })
});