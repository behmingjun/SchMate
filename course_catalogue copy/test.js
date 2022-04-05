// const csv = require('csvtojson');
console.log('helloworld');
// var obj = $.csv.toObjects(csv):

// CHANGE 2 changed to promise , cuz i only know how to use promise
// let p = new Promise((resolve,reject) => {
//     resolve(csv().fromFile('../dummy.csv'));
//     reject('failed');
//     //show
//     // console.log(dummy);
// })
// p.then((dummy)=>{
//     console.log(dummy)
// }).catch(()=>{
//     console.log('failed')
// });

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

var titlearray =["css","js","python","java","android","jquery","ruby"];
var descriptionarray =["css style","js program","python code","java objects","android program","jquery objects","ruby code"];

var dynamic = document.querySelector('.dynamic_cards');  
for (var i = 0; i < obj.length; i++) {
  var fetch = document.querySelector('.dynamic_cards').innerHTML;
  dynamic.innerHTML = `<tr><td class="bs-checkbox">
  <input type="checkbox" />
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
          <p class="card-text">${obj[i].university}</p>
          <p class="card-text">${obj[i].school}</p>
          <h5 class="card-title">${obj[i].degree}</h5>
          <p class="card-text">
            <a href="details.html">View details</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</td></tr>` + fetch ;
}