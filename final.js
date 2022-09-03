let planetLabel = [], diameterData = [], moonsData = [], tempData = [], yearData = []



async function planetChart1() {
  await getPlanetData() 

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: planetLabel,
        datasets: [{
          label: 'Year in Earth Days',
          backgroundColor: 'black',
          borderColor: 'rgb(192, 192, 192)',
          data: yearData 
      },
      ]
    },
    options: {
      tooltips: {
        mode: 'index',
      }
    }
})}

planetChart1()


async function planetChart2() {
  await getPlanetData() 

const ctx = document.getElementById('myChart2').getContext('2d');

const chart = new Chart(ctx, {
    
    type: 'bar',
    data: {
        labels: planetLabel,
        datasets: [{
            label: 'Moons',
            backgroundColor: 'purple',
            borderColor: 'rgb(192, 192, 192)',
            data: moonsData 
        },
      ]
    },
    options: {
      tooltips: {
        mode: 'index',
      }
    }
})}

planetChart2() 





async function planetChart3() {
  await getPlanetData()  

const ctx = document.getElementById('myChart3').getContext('2d');

const chart = new Chart(ctx, {
    
    type: 'bar',
    data: {
        labels: planetLabel,
        datasets: [{
          label: 'Diameter Km',
          backgroundColor: 'green',
          borderColor: 'rgb(192, 192, 192)',
          data: diameterData 
      },
      ]
    },
    options: {
      tooltips: {
        mode: 'index',
      }
    }
})}

planetChart3() 





async function planetChart4() {
  await getPlanetData() 

const ctx = document.getElementById('myChart4').getContext('2d');

const chart = new Chart(ctx, {
    
    type: 'line',
    data: {
        labels: planetLabel,
        datasets: [{
          label: 'Average Temperature °C',
          backgroundColor: 'magenta',
          borderColor: 'rgb(192, 192, 192)',
          data: tempData 
      },
      ]
    },
    options: {
      tooltips: {
        mode: 'index',
      }
    }
})}

planetChart4() 












async function getPlanetData() {
  const apiUrl = "https://630e26f7109c16b9abf5ca5b.mockapi.io/api/v1/planets" 

  const response = await fetch(apiUrl) 
  const barChatData = await response.json() 
  const diameter = barChatData.map((x) => x.diameter)
  const planet = barChatData.map((x) => x.planet_name)
  const moons = barChatData.map((x) => x.moons) 
  const temp = barChatData.map((x) => x.average_temp)
  const year = barChatData.map((x) => x.year_duration)

 diameterData = diameter
 planetLabel = planet
 moonsData = moons
 tempData = temp
 yearData = year
}
