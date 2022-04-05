// let value = localStorage.getItem("Category");
// console.log(value);

// var Student =
// {
// 	name : "ABC",
// 	age : 18,
// 	dept : "CSE",
// 	score : 90
// };

let comparebtn = document.getElementById("compare-btn")

let checkboxes = document.querySelectorAll(".bs-checkbox");

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", (event) => {
        if (document.querySelectorAll('input[type="checkbox"]:checked').length === 2) {
			comparebtn.style.pointerEvents = "all";
		}
		else {
			comparebtn.style.pointerEvents = "none";
		}
    })
});

const courseCheckboxes = document.querySelectorAll(".checkbox");
var courseCheckboxID = [];
console.log(courseCheckboxes.length);
for (var checkbox of courseCheckboxes){
	checkbox.addEventListener('click', function(){
		if(this.checked == true){
			courseCheckboxID.push(this.value);
			console.log(courseCheckboxID);
		}
		else{
			courseCheckboxID = courseCheckboxID.filter(e => e !== this.value);
			console.log(courseCheckboxID);
		}
	})
}
