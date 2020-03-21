setTimeout(getJson, 1);

function getJson() {
    fetch('https://coronavirus-19-api.herokuapp.com/countries')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            const places = data.length;
            console.log(places);
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

            console.log(recoveredpercent);
            console.log(deathpercent);
            console.log(confirmed);
            console.log(deaths);
            console.log(recovered);
            html += ``;
            for (let i = 0; i < places; i++) {
                if (i % 3 == 0) {

                    html += `<div class="popup">
                    <div class="row">
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <div class = "card-body" style="background:black">
                  <h1 class = "card-title text-white" >${data[i].country}</h1>

                  <h4 class = "card-title text-white" > Confirmed Cases :${data[i].cases} </h4> 
                  <h4 class = "card-title text-white" > Deadths :${data[i].deaths} </h4> 
                  <h4 class = "card-title text-white" > Recovered :${data[i].recovered} </h4> 
                  <h4 class = "card-title text-white" > Today Cases :${data[i].todayCases} </h4> 
                  <h4 class = "card-title text-white" > Today Deaths :${data[i].todayDeaths} </h4> 
                  <h4 class = "card-title text-white" > Critical :${data[i].critical} </h4> 
  
                  </div> 
                 </div>
                
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                <div class = "card-body" style="background:black">
                <h1 class = "card-title text-white" >${data[i].country}</h1>

                <h4 class = "card-title text-white" > Confirmed Cases :${data[i].cases} </h4> 
                <h4 class = "card-title text-white" > Deadths :${data[i].deaths} </h4> 
                <h4 class = "card-title text-white" > Recovered :${data[i].recovered} </h4> 
                <h4 class = "card-title text-white" > Today Cases :${data[i].todayCases} </h4> 
                <h4 class = "card-title text-white" > Today Deaths :${data[i].todayDeaths} </h4> 
                <h4 class = "card-title text-white" > Critical :${data[i].critical} </h4> 


                </div> 
                  </div>
                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                <div class = "card-body" style="background:black">
                <h1 class = "card-title text-white" >${data[i].country}</h1>

                  <h4 class = "card-title text-white" > Confirmed Cases :${data[i].cases} </h4> 
                  <h4 class = "card-title text-white" > Deadths :${data[i].deaths} </h4> 
                  <h4 class = "card-title text-white" > Recovered :${data[i].recovered} </h4> 
                  <h4 class = "card-title text-white" > Today Cases :${data[i].todayCases} </h4> 
                  <h4 class = "card-title text-white" > Today Deaths :${data[i].todayDeaths} </h4> 
                  <h4 class = "card-title text-white" > Critical :${data[i].critical} </h4> 
  
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
