// Parses information from course object to relevant HTML elements
const createUni = (course) => {
    // Parse school info and image
    // TODO: add image source into data.push()
    let tableName = document.getElementById("school-info");
    let tableLength = 3;
    let dataType = ['p', 'p', 'h3', 'img'];
    let data = [];
    for (i = 0; i < course.length; i++) {
        data.push(course[i].university,
            course[i].school,
            course[i].degree);
    }
    createTable(tableName, tableLength, dataType, data, course.length);

    // Parse duration info
    tableName = document.getElementById("course-duration");
    tableLength = 2;
    dataType.length = 0;
    dataType = Array(2).fill('p');
    data.length = 0;
    for (i = 0; i < course.length; i++) {
        data.push("Minimum: " + course[i].min_course_duration + " years",
            "Maximum: " + course[i].max_course_duration + " years");
    }
    createTable(tableName, tableLength, dataType, data, course.length);

    // Parse tution fees info
    tableName = document.getElementById("school-fees-grant");
    tableLength = 3;
    dataType.length = 0;
    dataType = Array(3).fill('p');
    data.length = 0;
    for (i = 0; i < course.length; i++) {
        data.push("$" + course[i].school_fees_sgporean + " (Singaporean)",
            "$" + course[i].school_fees_pr + " (Permenant Resident)",
            "$" + course[i].school_fees_international + " (International)");
    }
    createTable(tableName, tableLength, dataType, data, course.length);

    tableName = document.getElementById("school-fees");
    data.length = 0;
    for (i = 0; i < course.length; i++) {
        data.push("$" + course[i].tuition_grant_sgporean + " (Singaporean)",
            "$" + course[i].tuition_grant_pr + " (Permenant Resident)",
            "$" + course[i].tuition_grant_international + " (International)");
    }
    createTable(tableName, tableLength, dataType, data, course.length);

    // Parse entry requirements info
    // TODO: add 3H2_1H1 into data.push()
    tableName = document.getElementById("entry-score");
    data.length = 0;
    for (i = 0; i < course.length; i++) {
        data.push(course[i].poly_gpa + " (Polytechnique GPA)",
            course[i].rank_points_alevels + " (A Levels rank points)",
            course[i].rank_points_alevels + " (A Levels grades for 3H2/1H1)");
    }
    createTable(tableName, tableLength, dataType, data, course.length);

    // Parse employment rate info
    tableName = document.getElementById("employment");
    tableLength = 2;
    dataType.length = 0;
    dataType = Array(2).fill('p');
    data.length = 0;
    for (i = 0; i < course.length; i++) {
        data.push(course[i].employment_rate_ft_perm + " (Full time, permenant)",
            course[i].employment_rate_overall + " (Overall)");
    }
    createTable(tableName, tableLength, dataType, data, course.length);

    // Parse starting salary info
    tableName = document.getElementById("starting-pay");
    tableLength = 6;
    dataType.length = 0;
    dataType = Array(6).fill('p');
    data.length = 0;
    for (i = 0; i < course.length; i++) {
        data.push("$" + course[i].basic_monthly_mean + " (basic_monthly_mean)",
            "$" + course[i].basic_monthly_median + " (basic_monthly_median)",
            "$" + course[i].gross_monthly_mean + " (gross_monthly_mean)",
            "$" + course[i].gross_monthly_median + " (gross_monthly_median)",
            "$" + course[i].gross_mthly_25_percentile + " (gross_mthly_25_percentile)",
            "$" + course[i].gross_mthly_75_percentile + " (gross_mthly_75_percentile)");
    }
    createTable(tableName, tableLength, dataType, data, course.length);
}


// General function to populate table
const createTable = (tableName, tableLength, type, data, colSize) => {
    for (i = 0; i < tableLength; i++){
        const tableRow = document.createElement('tr');
        for (j = 0; j < colSize; j++){
            // Create cells
            const cell = document.createElement('td');
            if (colSize == 2) {
                cell.classList.add("col-lg-6", "col-md-6", "col-sm-6");
            }
            else if (colSize == 3) {
                cell.classList.add("col-lg-4", "col-md-4", "col-sm-4");
            }
        
            // Get attributes depending on row number
            const newElement = document.createElement(type[i]);
            switch(type[i]) {
                case 'p':
                case 'h3':
                    newElement.innerText = data[j * (data.length / 2) + i];
                    break;
                case 'img':
                    newElement.src = "https://www.ntu.edu.sg/images/librariesprovider118/ug-programmes-detail/singledegree_cs_775x465b5d2185e-4804-4142-a461-dc87d829455f.jpg?sfvrsn=91314e93_3";
                    newElement.classList.add("img-fluid");
                    break;
                default:
                    console.log("Error");
            }
            cell.append(newElement);                
            tableRow.append(cell);
        }
        tableName.appendChild(tableRow);
    }
}


// Get uni objects from local storage
uniArray = JSON.parse(localStorage.getItem("Course Comparison"));

// Call createUni()
createUni(uniArray);
