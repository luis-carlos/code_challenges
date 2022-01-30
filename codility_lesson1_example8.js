// For in set

const days = {'mon': 'Monday', 'tue': 'Tuesday', 'wed': 'Wednesday',
    'thu': 'Thursday', 'fri': 'Friday', 'sat': 'Saturday',
     'sun': 'Sunday'}
for (let day in days)
    console.log(`${day} stands for ${days[day]}`);