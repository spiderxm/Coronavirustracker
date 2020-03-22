setTimeout(getJson, 1);

function getJson() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const places = data.length;
            let confirmed = 0,
                deaths = 0,
                recovered = 0;
            let html = '';
            for (let i = 0; i < places; i++) {
                confirmed = confirmed + data[i].cases;
                deaths = deaths + data[i].deaths;
                recovered = recovered + data[i].recovered;
            }
            let deathpercent = (deaths * 100) / confirmed;
            let recoveredpercent = (recovered * 100) / confirmed;
            html += ``;
            for (let i = 0; i < places; i++) {
                if (i % 3 == 0) {

                    html += `<div class="popup">
                    <div class="row">
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <div class = "card-body" style="background:#D0D0D0">
                  <h1 class = "card-title" style="color:black;" >${data[i].country}</h1>

                  <h4 class = "card-title text-dark" > Confirmed Cases :${data[i].cases} </h4> 
                  <h4 class = "card-title text-dark" > Deaths :${data[i].deaths} </h4> 
                  <h4 class = "card-title text-dark" > Recovered :${data[i].recovered} </h4> 
                  <h4 class = "card-title text-dark" > Today Cases :${data[i].todayCases} </h4> 
                  <h4 class = "card-title text-dark" > Today Deaths :${data[i].todayDeaths} </h4> 
                  <h4 class = "card-title text-dark" > Critical :${data[i].critical} </h4> 
  
                  </div> 
                 </div>
                
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                <div class = "card-body" style="background:#D0D0D0">
                  <h1 class = "card-title" style="color:black;" >${data[i].country}</h1>

                  <h4 class = "card-title text-dark" > Confirmed Cases :${data[i].cases} </h4> 
                  <h4 class = "card-title text-dark" > Deaths :${data[i].deaths} </h4> 
                  <h4 class = "card-title text-dark" > Recovered :${data[i].recovered} </h4> 
                  <h4 class = "card-title text-dark" > Today Cases :${data[i].todayCases} </h4> 
                  <h4 class = "card-title text-dark" > Today Deaths :${data[i].todayDeaths} </h4> 
                  <h4 class = "card-title text-dark" > Critical :${data[i].critical} </h4> 
  

                </div> 
                  </div>
                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                <div class = "card-body" style="background:#D0D0D0">
                  <h1 class = "card-title" style="color:black;" >${data[i].country}</h1>

                  <h4 class = "card-title text-dark" > Confirmed Cases :${data[i].cases} </h4> 
                  <h4 class = "card-title text-dark" > Deaths :${data[i].deaths} </h4> 
                  <h4 class = "card-title text-dark" > Recovered :${data[i].recovered} </h4> 
                  <h4 class = "card-title text-dark" > Today Cases :${data[i].todayCases} </h4> 
                  <h4 class = "card-title text-dark" > Today Deaths :${data[i].todayDeaths} </h4> 
                  <h4 class = "card-title text-dark" > Critical :${data[i].critical} </h4> 
  
                  </div> 
                  </div>
                  </div>
                  `;

                }
            }
            document.getElementById('virus').innerHTML = html;
        })
        .catch(function(err) {
            console.log(err);
        });
}
