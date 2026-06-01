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
}

function filterByreporttypeandyear(){
  let output = get("output");
  let report_type = get("reporttype");
  let year = get("Year");
  let result = get("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    if (attendance.report_type == reporttype && attendance.year == years){    
      build += card(attendance);
      ct++;
    }
  }

  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;

}