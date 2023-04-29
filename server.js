const http = require('http'); // Use http module for create server
const fs = require('fs'); // Use fs module to manipulate file system
const PORT = 3000; // Use 3000 port for this server

/**
 * Create a server and store it server variable
 * Manipulate File System
 */
const server = http.createServer((req, res) => {
    // Check the url
    if (req.url === '/') {
        // if the is root '/' url then read the file that store in public directory
        // Read the file Asynchronously
        fs.readFile('./public/index.html', (error, data) => {
            // Check the file exist or not
            if (error) {
                // if error then show the message that the file is not found
                res.writeHead(404, {'Content-Type': 'text/html'}); // Sent the status code 404
                res.write('<h1 style="text-align:center;">404, the File Not Found in the public directory</h1>'); // Write the message that we want to show
                res.end(); // End the response
            } else {
                // if the file exist then write the file
                res.writeHead(200, {'Content-Type': 'text/html'}); // Sent the status code 200
                res.write(data); // Write the data
                res.end(); // End the response
            }
        })
    } else if (req.url === '/about') {
        // Read the file Asynchronously
        fs.readFile('./public/about.html', (error, data) => {
            // Check the file exist or not
            if (error) {
                // if error then show the message that the file is not found
                res.writeHead(404, {'Content-Type': 'text/html'}); // Sent the status code 404
                res.write('<h1 style="text-align:center;">404, the File Not Found in the public directory</h1>'); // Write the message that we want to show
                res.end(); // End the response
            } else {
                // if the file exist then write the file
                res.writeHead(200, {'Content-Type': 'text/html'}); // Sent the status code 200
                res.write(data); // Write the data
                res.end(); // End the response
            }
        })
    }else if (req.url === '/not-exist') {
        // Read the file Asynchronously
        fs.readFile('./public/hello.html', (error, data) => {
            // Check the file exist or not
            if (error) {
                // if error then show the message that the file is not found
                res.writeHead(404, {'Content-Type': 'text/html'}); // Sent the status code 404
                res.write('<h1 style="text-align:center;">404, the File Not Found in the public directory</h1>'); // Write the message that we want to show
                res.end(); // End the response
            } else {
                // if the file exist then write the file
                res.writeHead(200, {'Content-Type': 'text/html'}); // Sent the status code 200
                res.write(data); // Write the data
                res.end(); // End the response
            }
        })
    } else if (req.url === "/style.css") {
        // Read the file Asynchronously
        fs.readFile('./public/style.css', (error, data) => {
            // Check the file exist or not
            if (error) {
                // if error then show the message that the file is not found
                res.writeHead(404, {'Content-Type': 'text/html'}); // Sent the status code 404
                res.write('<h1 style="text-align:center;">404, the File Not Found in the public directory</h1>'); // Write the message that we want to show
                res.end(); // End the response
            } else {
                // if the file exist then write the file
                res.writeHead(200, {'Content-Type': 'text/css'}); // Sent the status code 200
                res.write(data); // Write the data
                res.end(); // End the response
            }
        })
    } else {
        // if we give unknown url then read the 404.html file
        // Read the file Asynchronously
        fs.readFile('./public/404.html', (error, data) => {
            // Check the file exist or not
            if (error) {
                // if error then show the message that the file is not found
                res.writeHead(404, {'Content-Type': 'text/html'}); // Sent the status code 404
                res.write('<h1 style="text-align:center;">404, the File Not Found in the public directory</h1>'); // Write the message that we want to show
                res.end(); // End the response
            } else {
                // if the file exist then write the file
                res.writeHead(200, {'Content-Type': 'text/html'}); // Sent the status code 200
                res.write(data); // Write the data
                res.end(); // End the response
            }
        })
    }
})

// listen the server on port 3000 that we store our PORT variable
server.listen(PORT, () => {
    // if the port listen successfully then show the message bellow in the console
    console.log('Server run Successfully!');
    console.log(`Server listening on port ${PORT}`);
});

