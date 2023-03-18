const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Connected to database")
    } catch (error) {
        console.log(error.message);
    }
})();

