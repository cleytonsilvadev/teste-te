const mongoose = require('mongoose');

require('./db');

const blogsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
});

const Blog = mongoose.model('blogs', blogsSchema);


module.exports.main = async (args) => {
    
    const {id, body} = args;
    try {
        const blogs = await Blog.findByIdAndUpdate(id,body);
        return {
            statusCode: 200,
            body : {
                message: "Updated successfully"
            }
        };
        
    }catch (err) {
        console.log(err);
        return{
            statusCode: 500,
            body: err.message
        }
    }
}