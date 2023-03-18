const mongoose = require('mongoose');


const tabeladb = new mongoose.Schema({
    id:ObjectId,
    title:String,
    description: String,
    price:Number
});


module.exports.main = async (args) => {
    
        try {
            const createdProduct= await tabeladb (req.body);
            console.log(createdProduct);
            return res.status(200).json(createdProduct);
        } catch (error) {
            console.log(error);
            return res.status(404);
        }
    };


