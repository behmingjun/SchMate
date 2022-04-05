// const csv = require('csvtojson');
// console.log('helloworld');
// (async() => {
//     const dummy = await csv().fromFile('../dummy.csv');
//     //show
//     console.log(dummy);
// })();
// getData();

//added from script.js




var test;

var interest = localStorage.getItem("Category");

localStorage.setItem("Course Checkbox", null);
localStorage.setItem("Course Details", null);

const data = fetch('../dummy.json')
  .then(response => response.json())
  .then(data => {
    var dynamic = document.querySelector('.dynamic_cards');
    var interestedCourseList = [];
    var fullCourseList = [];
    var tempInterest = localStorage.getItem("Category");
    console.log(tempInterest);
    //for now give a random value for interest
    // tempInterest = "Business";
    //if (data.length>5){len = 5};
    len = data.length;
    for (var i = 0; i < len; i++) { //note that the length here is 5, can be changed to length of obj
      let x=data[i].interest_card.split(',');
      // console.log(x);
      for (var j=0; j<x.length; j++){
      if (x[j] == tempInterest){ 
        console.log(data[i]);
        var hi = document.querySelector('.dynamic_cards').innerHTML;
      dynamic.innerHTML = hi + `<tr><td class="bs-checkbox">
      <input type="checkbox" class ="checkbox" value = '${data[i].id-1}'/>
    </td>
    
    <td>
      <div class="card mb-3" style="max-width: 1000px">
        <div class="row g-0">
          <div class="col-md-2" style="width: 200px">
            <img
              src="images/blue-square-image-3.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-lg-8">
            <div class="card-body">
              <p class="card-text">${data[i].university}</p>
              <p class="card-text">${data[i].school}</p>
              <h5 class="card-title">${data[i].degree}</h5>
              <p class="card-text">
                <button class="details" value="${data[i].id-1}" onclick="window.location.href = '../course_details/coursedetailspage.html';">View details</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </td></tr>`;
    interestedCourseList.push(data[i]); //insert at the end
      }
      else if (tempInterest == null){
        var hi = document.querySelector('.dynamic_cards').innerHTML;
      dynamic.innerHTML = hi + `<tr><td class="bs-checkbox">
      <input type="checkbox" class ="checkbox" value = '${data[i].id-1}'/>
    </td>
    
    <td>
      <div class="card mb-3" style="max-width: 1000px">
        <div class="row g-0">
          <div class="col-md-2" style="width: 200px">
            <img
              src="images/blue-square-image-3.png"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div class="col-lg-8">
            <div class="card-body">
              <p class="card-text">${data[i].university}</p>
              <p class="card-text">${data[i].school}</p>
              <h5 class="card-title">${data[i].degree}</h5>
              <p class="card-text">
                <button class="details" value="${data[i].id-1}" onclick="window.location.href = '../course_details/coursedetailspage.html';">View details</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </td></tr>`;
      }
      fullCourseList.push(data[i]);
    }}
    //debugPrintTesting(interestedCourseList);
    //debugPrint(data);

    //store interestedCourseList in local storage using async function
    storeInterestedCourses(interestedCourseList);

    //store fullCourseList in local storage using async function
    storeFullCourses(fullCourseList);

    addCompareCoursesChecker();
    addCourseSelectionCounter();


    //console.log(fullCourseList[16]);
    addDetailsLogic(fullCourseList);

    //console.log("seeing if sequential")
    //console.log(fullCourseList);
  });

//quick tut to use data in async func
//scope of data is within func hence need to def a new func to manipulate data
//func must also be async in order to wait for the data to be ready
async function debugPrint(data) {console.log(data[2]);}
async function debugPrintTesting(testing) {
  console.log(testing);
  test = [...testing];
  console.log("printing test")
  console.log(test);
}

function addCoursesCompare(){
  localStorage.setItem('Course Comparison',null)
  var courseIds = JSON.parse(localStorage.getItem('Course Checkbox'));
  var completeCourseList = JSON.parse(localStorage.getItem('Complete Courses List'));
  var x = JSON.parse(localStorage.getItem("Course Comparison"))||[];
  for (var j =0, k=courseIds.length;j<k;j++){
    for (var i =0, l=completeCourseList.length;i<l;i++){
      if (completeCourseList[i]['id']-1 == courseIds[j]){
        x.push(completeCourseList[i]);
      }
    }
  }
  // location.assign('../compare_courses/index.html');
  localStorage.setItem("Course Comparison",JSON.stringify(x));
  location.assign('../compare_courses/index.html');
}

async function addDetailsLogic(fullCourseList){
  var details = document.querySelectorAll(".details");
  for (var detail of details){
    //console.log(fullCourseList[JSON.parse(detail.value)]);
    detail.addEventListener('click', function(){
      localStorage.setItem("Course Details", JSON.stringify(fullCourseList[JSON.parse(this.value)])); //must use this.value inside here
    })
  }
}

async function addCompareCoursesChecker(){
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
}


async function addCourseSelectionCounter(){
  var courseCheckboxes = document.querySelectorAll(".checkbox");
  var courseCheckboxID = JSON.parse(localStorage.getItem("Course Checkbox"))||[];
  //console.log(courseCheckboxes.length);
  for (var checkbox of courseCheckboxes){
    checkbox.addEventListener('click', function(){
      if(this.checked == true){
        courseCheckboxID.push(this.value);
        console.log(courseCheckboxID);
        localStorage.setItem("Course Checkbox", JSON.stringify(courseCheckboxID));
      }
      else{
        courseCheckboxID = courseCheckboxID.filter(e => e != this.value);
        console.log(courseCheckboxID);
        localStorage.setItem("Course Checkbox", JSON.stringify(courseCheckboxID));
      }
    })
  }
}




async function storeInterestedCourses(interestedCourseList){
  localStorage.setItem("Interested Courses", JSON.stringify(interestedCourseList));
}

async function storeFullCourses(fullCourseList){
  localStorage.setItem("Complete Courses List", JSON.stringify(fullCourseList));
}


// var completeCoursesList = null;
// while (completeCoursesList == null){
//   completeCoursesList = localStorage.getItem("Complete Courses List");
// }




// var interestedCourses = null;
// if (interest != null){
//   while (interestedCourses == null){
//     interestedCourses = localStorage.getItem("Interested Courses");
//   }
// }

// let comparebtn = document.getElementById("compare-btn")

// let checkboxes = document.querySelectorAll(".bs-checkbox");

// checkboxes.forEach((checkbox) => {
//     checkbox.addEventListener("click", (event) => {
//         if (document.querySelectorAll('input[type="checkbox"]:checked').length === 2) {
// 			comparebtn.style.pointerEvents = "all";
// 		}
// 		else {
// 			comparebtn.style.pointerEvents = "none";
// 		}
//     })
// });

// //console.log(completeCoursesList);


// console.log(completeCoursesList[0]);
// var courseCheckboxes = document.querySelectorAll(".checkbox"); //this doesn't work
// console.log(courseCheckboxes.length);
// var courseCheckboxID = [];
// for (var checkbox of courseCheckboxes){
//   checkbox.addEventListener('click', function(){
//     if(this.checked == true){
//       courseCheckboxID.push(this.value);
//       console.log(courseCheckboxID);
//     }
//     else{
//       courseCheckboxID = courseCheckboxID.filter(e => e !== this.value);
//       console.log(courseCheckboxID);
//     }
//   })
// }


//console.log(interestedCourses);




// async function getData() {
//     const response = await fetch('../dummy.csv');
//     const data = await response.json();
//     var dynamic = document.querySelector('.dynamic_cards');  
// for (var i = 0; i < 5; i++) {
//   var hi = document.querySelector('.dynamic_cards').innerHTML;
//   dynamic.innerHTML = `<tr><td class="bs-checkbox">
//   <input type="checkbox" />
// </td>

// <td>
//   <div class="card mb-3" style="max-width: 1000px">
//     <div class="row g-0">
//       <div class="col-md-2" style="width: 200px">
//         <img
//           src="images/blue-square-image-3.png"
//           class="img-fluid rounded-start"
//           alt="..."
//         />
//       </div>
//       <div class="col-md-4">
//         <div class="card-body">
//           <p class="card-text">${data[i].university}</p>
//           <p class="card-text">${data[i].school}</p>
//           <h5 class="card-title">${data[i].degree}</h5>
//           <p class="card-text">
//             <a href="details.html">View details</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </td></tr>` + hi ;
// }
// console.log(data);
// }

// $(document).ready(function() {
//     $.ajax({
//         type: "GET",
//         url: "../dummy.csv",
//         dataType: "text",
//         success: function(data) {console.log(data);}
//      });
// });

let Student =
{
	name : "ABC",
	age : 18,
	dept : "CSE",
	score : 90
};


// var obj = [{
//     university: 'Singapore Institute of Technology',
//     school: 'Singapore Institute of Technology (SIT)',
//     degree: 'Bachelor of Engineering with Honours in Information & Communications Technology (Information Security)',
//     employment_rate_overall: '97.5',
//     employment_rate_ft_perm: '95',
//     basic_monthly_mean: '4171',
//     basic_monthly_median: '4000',
//     gross_monthly_mean: '4319',
//     gross_monthly_median: '4100',
//     gross_mthly_25_percentile: '3900',
//     gross_mthly_75_percentile: '5000',
//     interest_card: 'Engineering, Technology',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '30000',
//     school_fees_pr: '62880',
//     school_fees_international: '84744',
//     tuition_grant_sgporean: '99172',
//     tuition_grant_pr: '66292',
//     tuition_grant_international: '44428',
//     min_course_duration: '4',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'Singapore Institute of Technology (SIT)',
//     degree: 'Bachelor of Engineering with Honours in Information & Communications Technology (Software Engineering)',
//     employment_rate_overall: '100',
//     employment_rate_ft_perm: '97.4',
//     basic_monthly_mean: '4090',
//     basic_monthly_median: '4034',
//     gross_monthly_mean: '4188',
//     gross_monthly_median: '4190',
//     gross_mthly_25_percentile: '3600',
//     gross_mthly_75_percentile: '4550',
//     interest_card: 'Engineering, Technology',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '30000',
//     school_fees_pr: '62880',
//     school_fees_international: '84744',
//     tuition_grant_sgporean: '99172',
//     tuition_grant_pr: '66292',
//     tuition_grant_international: '44428',
//     min_course_duration: '4',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'Singapore Institute of Technology (SIT)',
//     degree: 'Bachelor of Engineering with Honours in Pharmaceutical Engineering',
//     employment_rate_overall: '92.2',
//     employment_rate_ft_perm: '90.6',
//     basic_monthly_mean: '3237',
//     basic_monthly_median: '3162',
//     gross_monthly_mean: '3748',
//     gross_monthly_median: '3660',
//     gross_mthly_25_percentile: '3500',
//     gross_mthly_75_percentile: '4044',
//     interest_card: 'Engineering',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '30000',
//     school_fees_pr: '62880',
//     school_fees_international: '84744',
//     tuition_grant_sgporean: '99172',
//     tuition_grant_pr: '66292',
//     tuition_grant_international: '44428',
//     min_course_duration: '4',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'Singapore Institute of Technology (SIT)',
//     degree: 'Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Building Services)',
//     employment_rate_overall: '92.5',
//     employment_rate_ft_perm: '92.5',
//     basic_monthly_mean: '3433',
//     basic_monthly_median: '3360',
//     gross_monthly_mean: '3484',
//     gross_monthly_median: '3500',
//     gross_mthly_25_percentile: '3200',
//     gross_mthly_75_percentile: '3700',
//     interest_card: 'Engineering',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '22500',
//     school_fees_pr: '47160',
//     school_fees_international: '63558',
//     tuition_grant_sgporean: '74379',
//     tuition_grant_pr: '49719',
//     tuition_grant_international: '33321',
//     min_course_duration: '3',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'Singapore Institute of Technology (SIT)',
//     degree: 'Bachelor of Engineering with Honours in Sustainable Infrastructure Engineering (Land)',
//     employment_rate_overall: '93.8',
//     employment_rate_ft_perm: '90.6',
//     basic_monthly_mean: '3856',
//     basic_monthly_median: '3800',
//     gross_monthly_mean: '3976',
//     gross_monthly_median: '3842',
//     gross_mthly_25_percentile: '3700',
//     gross_mthly_75_percentile: '4210',
//     interest_card: 'Engineering',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '22500',
//     school_fees_pr: '47160',
//     school_fees_international: '63558',
//     tuition_grant_sgporean: '74379',
//     tuition_grant_pr: '49719',
//     tuition_grant_international: '33321',
//     min_course_duration: '3',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'Singapore Institute of Technology (SIT)',
//     degree: 'Bachelor of Engineering with Honours in Telematics (Intelligent Transportation Systems Engineering)',
//     employment_rate_overall: '100',
//     employment_rate_ft_perm: '97',
//     basic_monthly_mean: '3777',
//     basic_monthly_median: '3750',
//     gross_monthly_mean: '3811',
//     gross_monthly_median: '3750',
//     gross_mthly_25_percentile: '3500',
//     gross_mthly_75_percentile: '4000',
//     interest_card: 'Engineering',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '22500',
//     school_fees_pr: '47160',
//     school_fees_international: '63558',
//     tuition_grant_sgporean: '74379',
//     tuition_grant_pr: '49719',
//     tuition_grant_international: '33321',
//     min_course_duration: '3',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'Singapore Institute of Technology (SIT)',
//     degree: 'Bachelor of Hospitality Business with Honours',
//     employment_rate_overall: '89.1',
//     employment_rate_ft_perm: '74.6',
//     basic_monthly_mean: '2972',
//     basic_monthly_median: '2800',
//     gross_monthly_mean: '3102',
//     gross_monthly_median: '3000',
//     gross_mthly_25_percentile: '2800',
//     gross_mthly_75_percentile: '3270',
//     interest_card: 'Business',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '27900',
//     school_fees_pr: '53100',
//     school_fees_international: '72225',
//     tuition_grant_sgporean: '81978',
//     tuition_grant_pr: '56778',
//     tuition_grant_international: '37653',
//     min_course_duration: '3',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'SIT-DigiPen Institute of Technology',
//     degree: 'Bachelor of Engineering in Systems Engineering (ElectroMechanical Systems)',
//     employment_rate_overall: '95.2',
//     employment_rate_ft_perm: '90.5',
//     basic_monthly_mean: '3931',
//     basic_monthly_median: '3921',
//     gross_monthly_mean: '4024',
//     gross_monthly_median: '3975',
//     gross_mthly_25_percentile: '3500',
//     gross_mthly_75_percentile: '4470',
//     interest_card: 'Engineering',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '43320',
//     school_fees_pr: '84000',
//     school_fees_international: '113248.8',
//     tuition_grant_sgporean: '115768',
//     tuition_grant_pr: '75088',
//     tuition_grant_international: '45839.2',
//     min_course_duration: '4',
//     max_course_duration: '',
//     rank_point: ''
//   },
//   {
//     university: 'Singapore Institute of Technology',
//     school: 'SIT-Massey University',
//     degree: 'Bachelor of Food Technology with Honours',
//     employment_rate_overall: '93',
//     employment_rate_ft_perm: '88.4',
//     basic_monthly_mean: '2962',
//     basic_monthly_median: '2975',
//     gross_monthly_mean: '2978',
//     gross_monthly_median: '2975',
//     gross_mthly_25_percentile: '2750',
//     gross_mthly_75_percentile: '3250',
//     interest_card: 'Science, Technology',
//     description: '',
//     '3H2_1H1': '',
//     rank_points_alevels: 'na',
//     poly_gpa: '',
//     school_fees_sgporean: '41520',
//     school_fees_pr: '80800',
//     school_fees_international: '109140',
//     tuition_grant_sgporean: '111276',
//     tuition_grant_pr: '71996',
//     tuition_grant_international: '41520',
//     min_course_duration: '4',
//     max_course_duration: '',
//     rank_point: ''
//   }
// ]