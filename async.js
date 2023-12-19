const { readFile, writeFile } = require('fs').promises;

const start = async () => {
    try {
        const first = await readFile('./content/test.txt', 'utf8');
        const scnd = await readFile('./content/subContent/test2.txt', 'utf8');
        await writeFile('./content/writePromise.txt', `This is awesome: ${first} ${scnd}`);
        console.log(first, scnd);
    } catch (err) {
        console.log(err);
    }
}

start();

// older way of doing the same thing

// const start = async () => {
//     try{
//         const first = await(getText('./content/test.txt'));
//         const scnd = await(getText('./content/subContent/test2.txt'));
//         console.log(first, scnd);
//     } catch(err) {
//         console.log(err);
//     }
// }

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if(err) reject(err);
//             else resolve(data);
//         })
//     }) 
// }

// getText('./content/test.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err));

/********** Comments **********

 "promises" in the "fs" method is used to convert the traditional callback-based functions (fs.readFile and fs.writeFile) into Promise-based functions. When you use promises, it returns a version of the function that returns a Promise instead of using callbacks.

With fs.promises, you can work with the functions in a more modern, Promise-based syntax, using async/await for better readability and control flow. The resulting readFile and writeFile functions return Promises, and therefore you can use them with await instead of providing callback functions.

This approach simplifies the error handling and makes the code look more synchronous, even though it's still asynchronous under the hood. The async/await syntax allows you to write asynchronous code in a way that resembles synchronous code, making it easier to understand and maintain.
 */