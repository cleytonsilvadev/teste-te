const mongoose = require('mongoose')
const dbURI = process.env.DB_URI;

    async () => {
        try {
            await mongoose.connect(dbURI);
            console.log("Connected to database")
        } catch (error) {
            console.log(error.message);
        }
    }


    