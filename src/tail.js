const fs = require('fs');
const readline = require('readline');

async function countLines(filePath) { 
    try {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        let lineCount = 0;
        for await (const line of rl) {
            lineCount++;
        }
        return lineCount;
    } catch (error) {
        console.error('Error counting lines:', error);
        return 0;
    }
}


async function goToNthLine(filePath, n = 10, lineCount) {
    try {
        const fileStream = fs.createReadStream(filePath);
        const rl = readline.createInterface({
            input: fileStream,
            crlfDelay: Infinity
        });

        const nthLine = Math.max(lineCount - n, 0);
        let currentLine = 1;
        for await (const line of rl) {
            if (currentLine > nthLine) {
                console.log(line);
            }
            currentLine++;
        }
    } catch (error) {
        console.error('Error navigating to nth line:', error);
    }
}


module.exports = {
    countLines,
    goToNthLine
};