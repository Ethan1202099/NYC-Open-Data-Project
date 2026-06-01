// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

function display(info){
  document.getElementById("output").innerHTML += `<div class="card">${info}</div>`;
  console.log(info);
}

function card( info ){
  let build = `<div class="fitted card">
                <h3>${info.report_type}</h3>
                <hr>
                <p>Year:${info.year}</p>
                <p>Demograph:${info.demographic_variable}</p>
                <p>Grade:${info.grade}</p>
                <hr>
                <p>No. of Absences:${info.days_absent}</p>
                <h4>Attendance Rate:${info.attendance}</h4>
                <hr>
                <p>Total Days:${info.total_days}</p>`;
  build +=    `</div>`;
  return build;
  
}
//Function to generate Chart (accepts data, id of div for chart, and chart type)
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type:chart_type
    }
  });
}