// Import necessary modules
const fs = require('fs');
const readline = require('readline');

// Get file path and line number (n) from command line arguments
const filePath = process.argv[2];
const n = process.argv[3];

// Asynchronously count the number of lines in the file
async function countLines(filePath) { 
    try {
        // Create a read stream from the file
        const fileStream = fs.createReadStream(filePath);
        // Create an interface to read the stream line by line
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let lineCount = 0;
        // Iterate over each line in the file and count them
        for await (const line of rl) {
            lineCount++;
        }
        // Return the total line count
        return lineCount;
    } catch (error) {
        // Handle errors if any occur during line counting
        console.error('Error counting lines:', error);
    }
}

// Asynchronously navigate to the nth line in the file
async function goToNthLine(filePath, n = 10, lineCount) {
    try {
        // Create a read stream from the file
        const fileStream = fs.createReadStream(filePath);
        // Create an interface to read the stream line by line
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        // Calculate the starting line number for navigation
        const nthLine = Math.max(lineCount - n, 0);
        let currentLine = 1;
        // Iterate over each line in the file
        for await (const line of rl) {
            // Print the line if it's beyond the nth line
            if (currentLine > nthLine) {
                console.log(line);
            }
            currentLine++;
        }
    } catch (error) {
        // Handle errors if any occur during line navigation
        console.error('Error navigating to nth line:', error);
    }
}

// Count the lines in the file and navigate to the nth line
countLines(filePath)
    .then(lineCount => {
        // Once line count is obtained, navigate to the nth line
        goToNthLine(filePath, n, lineCount)
            .catch(error => console.error('Error:', error));
    })
    .catch(error => console.error('Error:', error));