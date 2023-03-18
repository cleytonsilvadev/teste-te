require('./db');
const Blog = require('./Model');

// args -> query strings
// https://aicury.com/?title=Titulo&description='Isso é uma descrição'
const main = async (args) => {
    try {
        // args.title -> 'Titulo'
        // args.description -> 'Isso é uma descrição'
        const { title, description } = args;
        const createdProduct = await Blog.create({
            title,
            description,
        });
        return {
            statusCode: 201,
            body: {
                success: true,
                product: createdProduct,
            }
        }
    } catch (error) {
        console.log(error);
        return { body: { success: false } };
    }
};

// (async () => {
//    const blog = await main({ title: 'Titulo', description: 'Descrição' });
//    console.log(blog);
// })()

module.exports.main = main;

