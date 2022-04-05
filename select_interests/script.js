localStorage.setItem("Category", null);

let buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
    btn.addEventListener("click", function(){
        let value = this.id; // id of button that was clicked
        console.log("Printing value");
        console.log(value);
        localStorage.setItem("Category", value);
    })
});