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
                recovered = 0,
                critical = 0,
                casesToday = 0,
                deathstoday = 0;
            for (let i = 0; i < places; i++) {
                confirmed = confirmed + data[i].cases;
                deaths = deaths + data[i].deaths;
                recovered = recovered + data[i].recovered;
                critical = critical + data[i].critical;
                casesToday = casesToday + data[i].todayCases;
                deathstoday = deathstoday + data[i].todayDeaths;
            }
            let deathpercent = (deaths * 100) / confirmed;
            let recoveredpercent = (recovered * 100) / confirmed;
            let html = ``;

            html += `
            <div class="row"> <div class="card column mt-4 mb-4 mr-4 ml-4" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Total Cases : ${confirmed}</h6>   
  </div>
</div>`;
            html += `
 <div class="card column mt-4 mb-4 mr-4 ml-4" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Total Deaths : ${deaths}</h6>   
</div>
</div>`;
            html += `
 <div class="card column mt-4 mb-4 mr-4 ml-4" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Total Recovered : ${recovered}</h6>   
</div>
</div>
</div>`;
            html += `
<div class="row"> <div class="card column mt-4 mb-4 mr-4 ml-4" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Critical Cases : ${critical}</h6>   
</div>
</div>`;
            html += `<div class="card column mt-4 mb-4 mr-4 ml-4" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Total Deaths Today : ${deathstoday}</h6>   
</div>
</div>`;
            html += ` <div class="card column mt-4 mb-4 mr-4 ml-4" style="width: 18rem;">
<div class="card-body">
<h5 class="card-title">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Total Cases Today : ${casesToday}</h6>   
</div>
</div>
</div>`;

            console.log(html);

            document.getElementById('virus').innerHTML = html;


            var ctx = document.getElementById('myChart').getContext('2d');
            var myChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Alive', 'Total Deaths', 'Recovered Cases'],
                    datasets: [{
                        label: 'Coronavirus Analysis',
                        data: [confirmed, todayDeaths, critical],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });

        })
        .catch(function(err) {
            console.log(err);
        });
}