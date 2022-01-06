const fs = require('fs');
const path = require('path');


// append

// fs.appendFile(path.join(__dirname, "text.txt"), " itsaa mee", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("append successful!");
//     }
// });

// read file

// fs.readFile(__dirname + "/text.txt", "utf8", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(data, "Successfully read!");
//     }
// });

// fs.writeFile(__dirname + '/text.txt', 'yellow', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("update is a success");
//     }
// })

// fs.rename(__dirname + '/text.txt', __dirname + '/newText.txt', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("rename is successful")
//     }
// });

fs.unlink(__dirname + "/newText.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("deleted");
    }
})