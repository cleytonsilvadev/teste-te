const mongoose = require('mongoose');
const Blog = require('./Blog');

// args -> query strings
// https://aicury.com/?title='Titulo'&description=Descrição
const main = async (args) => {
    try {
        // args.title && args.description
        const { title, description } = args;
        const product = await Blog.create({
            title,
            description
        })
        return {
            statusCode: 201,
            body: {
                success: true,
                product,
            },
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: {
                success: false,
            },
        }
    }
};

(async () => {
    const blog = await main({ title: 'Titulo', description: 'Descrição' });
    console.log(blog);
})();

module.exports.main = main;
