const fs = require('fs');

function head(filePath, numLines=10) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        for (let i = 0; i < Math.min(numLines, lines.length); i++) {
            console.log(lines[i]);
        }
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

module.exports = head