// TITLES DEFINITIONS
const universityInput = document.getElementById("university");
const schoolNameInput = document.getElementById("school-name");
const courseNameInput = document.getElementById("course-name");

// DETAILS DEFINITIONS
const employmentOverallInput = document.getElementById("employment-rate-overall");
const employmentFtPermInput = document.getElementById("employment-rate-ft-perm");
const basicMeanInput = document.getElementById("basic-monthly-mean");
const basicMedianInput = document.getElementById("basic-monthly-median");
const grossMeanInput = document.getElementById("gross-monthly-mean");
const grossMedianInput = document.getElementById("gross-monthly-median");
const gross25Input = document.getElementById("gross-monthly-25-percentile");
const gross75Input = document.getElementById("gross-monthly-75-percentile");
const categoryInput = document.getElementById("interest-card");
const descriptionInput = document.getElementById("description");
const h2h1Input = document.getElementById("3H2-1H1");
const rpAlevelsInput = document.getElementById("rank-points-alevels");
const polyGpaInput = document.getElementById("poly-gpa");
const schoolFeesSGInput = document.getElementById("school-fees-sgporean");
const schoolFeesPRInput = document.getElementById("school-fees-pr");
const schoolFeesIntlInput = document.getElementById("school-fees-international");
const tuitionGrantSGInput = document.getElementById("tuition-grant-sgporean");
const tuitionGrantPRInput = document.getElementById("tuition-grant-pr");
const tuitionGrantIntlInput = document.getElementById("tuition-grant-international");
const minCourseDurationInput = document.getElementById("min-course-duration");
const maxCourseDurationInput = document.getElementById("max-course-duration");

// RETRIEVE INPUT FROM COURSE CATALOGUE
const CCinput = JSON.parse(localStorage.getItem("Course Details")) || {
    "id": "ID",
    "university": "University",
    "school": "School Name",
    "degree": "Course Name",
    "employment_rate_overall": "Unavailable",
    "employment_rate_ft_perm": "Unavailable",
    "basic_monthly_mean": "Unavailable",
    "basic_monthly_median": "Unavailable",
    "gross_monthly_mean": "Unavailable",
    "gross_monthly_median": "Unavailable",
    "gross_mthly_25_percentile": "Unavailable",
    "gross_mthly_75_percentile": "Unavailable",
    "interest_card": "Category", 
    "description": "Description",
    "3H2_1H1": "Unavailable",
    "rank_points_alevels": "Unavailable",
    "poly_gpa": "Unavailable",
    "school_fees_sgporean": "Unavailable",
    "school_fees_pr": "Unavailable",
    "school_fees_international": "Unavailable",
    "tuition_grant_sgporean": "Unavailable",
    "tuition_grant_pr": "Unavailable",
    "tuition_grant_international": "Unavailable",
    "min_course_duration": "Unavailable",
    "max_course_duration": "Unavailable",
};

// ALLOCATE INPUTS
universityInput.innerText = CCinput["university"];
schoolNameInput.innerText = CCinput["school"];
courseNameInput.innerText = CCinput["degree"];

employmentOverallInput.innerText = CCinput["employment_rate_overall"];
employmentFtPermInput.innerText = CCinput["employment_rate_ft_perm"];
basicMeanInput.innerText = CCinput["basic_monthly_mean"];
basicMedianInput.innerText = CCinput["basic_monthly_median"];
grossMeanInput.innerText = CCinput["gross_monthly_mean"];
grossMedianInput.innerText = CCinput["gross_monthly_median"];
gross25Input.innerText = CCinput["gross_mthly_25_percentile"];
gross75Input.innerText = CCinput["gross_mthly_75_percentile"];
categoryInput.innerText = CCinput["interest_card"];
descriptionInput.innerText = CCinput["description"];
h2h1Input.innerText = CCinput["3H2_1H1"];
rpAlevelsInput.innerText = CCinput["rank_points_alevels"];
polyGpaInput.innerText = CCinput["poly_gpa"];
schoolFeesSGInput.innerText = CCinput["school_fees_sgporean"];
schoolFeesPRInput.innerText = CCinput["school_fees_pr"];
schoolFeesIntlInput.innerText = CCinput["school_fees_international"];
tuitionGrantSGInput.innerText = CCinput["tuition_grant_sgporean"];
tuitionGrantPRInput.innerText = CCinput["tuition_grant_pr"];
tuitionGrantIntlInput.innerText = CCinput["tuition_grant_international"];
minCourseDurationInput.innerText = CCinput["min_course_duration"];
maxCourseDurationInput.innerText = CCinput["max_course_duration"];

const uniLogo = document.getElementById("uni-logo");
const uniBackground = document.getElementById("uni-background");
if (universityInput.innerText == "Nanyang Technological University") {
    uniLogo.src = "./images/ntu_logo.jpeg";
    uniBackground.src = "./images/ntu_background.jpeg";
}
else if (universityInput.innerText == "National University of Singapore") {
    uniLogo.src = "./images/nus_logo.jpeg";
    uniBackground.src = "./images/nus_background.jpeg";
}
else if (universityInput.innerText == "Singapore Management University") {
    uniLogo.src = "./images/smu_logo.jpeg";
    uniBackground.src = "./images/smu_background.jpeg";
}
else if (universityInput.innerText == "Singapore University of Technology and Design") {
    uniLogo.src = "./images/sutd_logo.jpeg";
    uniBackground.src = "./images/sutd_background.jpeg";
}
else if (universityInput.innerText == "Singapore University of Social Sciences") {
    uniLogo.src = "./images/suss_logo.jpeg";
    uniBackground.src = "./images/suss_background.jpeg";
}
else if (universityInput.innerText == "Singapore Institute of Technology") {
    uniLogo.src = "./images/sit_logo.jpeg";
    uniBackground.src = "./images/sit_background.jpeg";
}
else {
    uniLogo.src = "./images/no_logo.png";
    uniBackground.src = "./images/no_background.png";
}
