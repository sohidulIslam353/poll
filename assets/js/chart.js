// Data for the charts
const countryNames = ['Dhaka', 'Comilla', 'Chittagong', 'Khulna', 'Barishal','Rangpur','Sylhet','Mymensing']; // Example country names
const voteCounts = [120, 80, 150, 200, 50,30,60,80]; // Corresponding vote counts

// Bar Chart Configuration
const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
        labels: countryNames,
        datasets: [{
            label: 'Vote Count',
            data: voteCounts,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        maintainAspectRatio: false
    }
});

// Pie Chart Configuration
const pieChart = new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
        labels: countryNames,
        datasets: [{
            label: 'Vote Distribution',
            data: voteCounts,
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 206, 86, 0.6)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
