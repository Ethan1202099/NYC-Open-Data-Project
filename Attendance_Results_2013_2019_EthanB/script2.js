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

}

function ByAttendanceResult(){
  let k12 = 0, kin = 0, first = 0, sec = 0, third = 0, fourth = 0, fifth = 0, sixth = 0, seventh = 0, eighth = 0, fm = 0, soph = 0, jun = 0, sen = 0, other = 0;

  for(let i = 0; i < data.length; i++){
    let attendance = data[i];
    if(attendance.grade == "PK in K-12 Schools"){
      k12++;
    }else if(attendance.grade == "0K"){
      kin++;
    }else if(attendance.grade == "1"){
      first++;
    }else if(attendance.grade == "2"){
      sec++;
    }else if(attendance.grade == "3"){
      third++;
    }else if(attendance.grade == "4"){
      fourth++;
    }else if(attendance.grade == "5"){
      fifth++;
    }else if(attendance.grade == "6"){
      sixth++;
    }else if(attendance.grade == "7"){
      seventh++;
    }else if(attendance.grade == "8"){
      eighth++;
    }else if(attendance.grade == "9"){
      fm++;
    }else if(attendance.grade == "10"){
      soph++;
    }else if(attendance.grade == "11"){
      jun++;
    }else if(attendance.grade == "12"){
      sen++;
    }else other++; 
  }
  let chartData = [
      ["PK in K-12 Schools", k12],
      ["0K", kin],
      ["1", first],
      ["2", sec],
      ["3", third],
      ["4", fourth],
      ["5", fifth],
      ["6", sixth],
      ["7", seventh],
      ["8", eighth],
      ["9", fm],
      ["10", soph],
      ["11", jun],
      ["12", sen],
      ["OTHER", other]
    ];

  let chartType = document.getElementById("chartType").value;

  displayChart(chartData, "output", chartType);
}

function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}