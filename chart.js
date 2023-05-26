const ctx = document.getElementById('myChart');
const data = {
    labels: [
        'hp',
        'attack',
        'defense',
        'specialAttack',
        'specialDefense',
        'speed'
    ],
    datasets: [{
        label: 'Stats',
        data: [21,43,54,32,32,12],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};
  
const config = {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
};

chart = new Chart(ctx, config);

console.log("test");
