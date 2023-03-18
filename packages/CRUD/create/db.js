const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect('mongodb+srv://heitor:dzqp8OIT0fvzlMWs@cluster0.5hxhpwl.mongodb.net/%3FretryWrites=true&w=majority');
        console.log("Connected to database")
    } catch (error) {
        console.log(error.message);
    }
})();
