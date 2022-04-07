// General function to populate table
const createTable = (tableName, tableLength, type, data, colSize) => {
	for (i = 0; i < tableLength; i++) {
		const tableRow = document.createElement('tr');
		for (j = 0; j < colSize; j++) {
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
			switch (type[i]) {
				case 'p':
				case 'h3':
					newElement.innerText = data[j * (data.length / colSize) + i];
					break;
				case 'img':
					newElement.src = data[j * (data.length / colSize) + i];
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


// Calls createTable() to dynamically populate tables with relevant attributes
const populateUni = (course) => {
	// Parse school info and image
	let tableName = document.getElementById("school-info");
	let tableLength = 4;
	let dataType = ['p', 'p', 'h3', 'img'];
	let data = [];
	for (i = 0; i < course.length; i++) {
		data.push(course[i].university,
			course[i].school,
			course[i].degree);

		let imgSource = ""

		switch (course[i].university) {
			case "Nanyang Technological University":
				switch (course[i].school) {
					case "College of Engineering":
						imgSource = "https://www.ntu.edu.sg/images/librariesprovider44/undergraduate-programme/banner2fb652c7e-4c31-47b3-a712-b2ec0211caa3.jpg?sfvrsn=41616842_3";
						break;
					case "College of Business (Nanyang Business School)":
						imgSource = "https://admission24.s3.ap-south-1.amazonaws.com/api_main/public/images/1568626041dd.jpg";
						break;
					case "College of Humanities, Arts & Social Sciences":
						imgSource = "https://static1.straitstimes.com.sg/s3fs-public/styles/large30x20/public/articles/2019/10/19/file77ln6yri8o712t71enpa.jpg?VersionId=kjy3LKoq..JcYEfMbj5WXenOom7dAb.5";
						break;
					case "National Institute of Education (NIE)":
						imgSource = "https://static.mothership.sg/1/2018/02/maxresdefault.jpg";
						break;
					case "College of Sciences":
						imgSource = "https://upload.wikimedia.org/wikipedia/commons/b/b0/NTU_SPMS.jpg";
						break;
				}
				break;
			case "National University of Singapore":
				switch (course[i].school) {
					case "Faculty of Law":
						imgSource = "https://images.squarespace-cdn.com/content/v1/5c776369b10f2560b0d0f66a/1621946277032-XB3OYR8S5W3PBSZ5MYDS/B12746EE-352E-4330-90D2-C21934563EDE+2.jpg?format=1500w";
						break;
					case "Faculty of Science":
						imgSource = "https://miro.medium.com/max/800/1*1uOi7kwwIq_POfXtQSx1og.jpeg";
						break;
					case "NUS Business School":
						imgSource = "https://bschool.nus.edu.sg/wp-content/uploads/2021/01/Jan_4.jpg";
						break;
					case "School of Computing":
					case "School of Computing, Faculty of Engineering":
						imgSource = "https://www.comp.nus.edu.sg/images/resources/20190225_School_Facade_About_Page.jpg";
						break;
					case "School of Design & Environment":
						imgSource = "https://www.c2d.com.sg/wp-content/uploads/2020/08/NUS-Schoolof-design-environment.png";
						break;
					case "Yong Loo Lin School (Medicine)":
						imgSource = "https://medicine.nus.edu.sg/wp-content/uploads/2017/06/newsinfomain_medscicluster_300617.jpg";
						break;
					case "Faculty of Dentistry":
						imgSource = "https://www.dentistry.nus.edu.sg/Faculty/images/NUCOHS%20_logo.jpg";
						break;
				}
				break;
			case "Singapore Management University":
				switch (course[i].school) {
					case "School of Business":
						imgSource = "https://upload.wikimedia.org/wikipedia/commons/3/35/Singapore_Management_University_22%2C_Aug_06.JPG";
						break;
					case "School of Economics":
						imgSource = "https://economics.smu.edu.sg/sites/economics.smu.edu.sg/files/soe_1_0_1.jpg";
						break;
					case "School of Information Systems":
						imgSource = "https://scis.smu.edu.sg/sites/sis.smu.edu.sg/files/sis/programmes/MITB/images/highlights/banner-mitb-qs-rankings.jpg";
						break;
					case "School of Social Sciences":
						imgSource = "https://socsc.smu.edu.sg/sites/socsc.smu.edu.sg/files/socsc/SOSS%20Panoramic-resize.jpg";
						break;
				}
				break;
		}
		data.push(imgSource);
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
		data.push("Singaporean: $" + course[i].school_fees_sgporean,
			"Permenant Resident: $" + course[i].school_fees_pr,
			"International: $" + course[i].school_fees_international);
	}
	createTable(tableName, tableLength, dataType, data, course.length);

	tableName = document.getElementById("tuition-grant");
	data.length = 0;
	for (i = 0; i < course.length; i++) {
		data.push("Singaporean: $" + course[i].tuition_grant_sgporean,
			"Permenant Resident: $" + course[i].tuition_grant_pr,
			"International: $" + course[i].tuition_grant_international);
	}
	createTable(tableName, tableLength, dataType, data, course.length);

	// Parse entry requirements info
	tableName = document.getElementById("entry-score");
	data.length = 0;
	for (i = 0; i < course.length; i++) {
		data.push("Polytechnique GPA: " + course[i].poly_gpa,
			"A Levels rank points: " + course[i].rank_points_alevels,
			"A Levels grades for 3H2/1H1: " + course[i]["3H2_1H1"]);
	}
	createTable(tableName, tableLength, dataType, data, course.length);

	// Parse employment rate info
	tableName = document.getElementById("employment");
	tableLength = 2;
	dataType.length = 0;
	dataType = Array(2).fill('p');
	data.length = 0;
	for (i = 0; i < course.length; i++) {
		data.push("Full time, permenant: " + course[i].employment_rate_ft_perm + "%",
			"Overall: " + course[i].employment_rate_overall + "%");
	}
	createTable(tableName, tableLength, dataType, data, course.length);

	// Parse starting salary info
	tableName = document.getElementById("starting-pay");
	tableLength = 6;
	dataType.length = 0;
	dataType = Array(6).fill('p');
	data.length = 0;
	for (i = 0; i < course.length; i++) {
		data.push("Basic, mean: $" + course[i].basic_monthly_mean,
			"Basic, median: $" + course[i].basic_monthly_median,
			"Gross, mean: $" + course[i].gross_monthly_mean,
			"Gross, 25th percentile: $" + course[i].gross_mthly_25_percentile,
			"Gross, median: $" + course[i].gross_monthly_median,
			"Gross, 75th percentile: $" + course[i].gross_mthly_75_percentile);
	}
	createTable(tableName, tableLength, dataType, data, course.length);
}


// Main function to call all necessary functions
const main = () => {
	// Get uni objects from local storage
	uniArray = JSON.parse(localStorage.getItem("Course Comparison"));

	// Call createUni()
	populateUni(uniArray);
	console.log(uniArray[0]);
}


// Call main()
main();
