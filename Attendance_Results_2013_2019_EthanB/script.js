//Data Source: https://data.cityofnewyork.us/Education/Attendance-Results-2013-2019/mg8s-7r2b/about_data
//global variables
let data, info, output;

async function init(){
  let link = "ar.json"; //https://data.cityofnewyork.us/resource/mg8s-7r2b.json";
  info = await fetch(link);
  data = await info.json();
  //console.log(data); 
  let output = get("output");
  let result = get("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    build += card(attendance);
    ct++;
  }

  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;  

  let years = fillDropDown("year");
  document.getElementById("Year").innerHTML = years;

  let demographs = fillDropDown("demographic_variable");
  document.getElementById("Demograph").innerHTML = demographs;

  let grades = fillDropDown("grade");
  document.getElementById("Grade").innerHTML = grades;
}


function filterByreporttypeandyear(){
  let output = get("output");
  let report_type = document.getElementById("report_type").value;
  let year = document.getElementById("Year").value;
  let result = get("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    if (attendance.report_type == report_type && attendance.year == year){    
      build += card(attendance);
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

}

function filterBydemographandgrades(){
  let output = get("output");
  let demographic = document.getElementById("Demograph").value;
  let grade = document.getElementById("Grade").value;
  let result = get("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    if (attendance.demographic_variable == demographic && attendance.grade == grade){   
      build += card(attendance);
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

}

