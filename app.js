document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Performance',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const activityFeed = document.getElementById('activityFeed');
    const notifications = document.getElementById('notifications');
    const sortOptions = document.getElementById('sortOptions');

    const activities = [
        { date: '2023-10-01', type: 'login', message: 'User logged in' },
        { date: '2023-10-02', type: 'purchase', message: 'User made a purchase' },
        { date: '2023-10-03', type: 'logout', message: 'User logged out' }
    ];

    const importantMetrics = [
        'High traffic detected',
        'New user sign-up spike'
    ];

    function renderActivityFeed() {
        activityFeed.innerHTML = '';
        activities.forEach(activity => {
            const li = document.createElement('li');
            li.className = 'list-group-item';
            li.textContent = `${activity.date} - ${activity.type}: ${activity.message}`;
            activityFeed.appendChild(li);
        });
    }

    function renderNotifications() {
        notifications.innerHTML = '';
        importantMetrics.forEach(metric => {
            const li = document.createElement('li');
            li.className = 'list-group-item list-group-item-warning';
            li.textContent = metric;
            notifications.appendChild(li);
        });
    }

    sortOptions.addEventListener('change', function() {
        const sortBy = sortOptions.value;
        activities.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
        renderActivityFeed();
    });

    renderActivityFeed();
    renderNotifications();

    setInterval(() => {
        const newActivity = { date: new Date().toISOString().split('T')[0], type: 'update', message: 'Real-time update' };
        activities.push(newActivity);
        renderActivityFeed();
    }, 5000);
});