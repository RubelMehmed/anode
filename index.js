const School = require('./schools');
const school = new School();

school.on('bellring', ({
    period, text
}) => {
    console.log(`We need to run beacause ${period} ${text}`)
})

school.startPeriod();