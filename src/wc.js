const fs = require('fs');

function wc(filePath , option) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n').length;
        const words = fileContent.split(' ').length;
        const byteSize = str => new Blob([str]).size;
        const bytes = byteSize(fileContent)
        if(option == '-c'){
            return bytes
        }
        if(option == '-l'){
            return lines
        }
        if(option == '-w'){
            return words
        }
        return [lines, words, bytes]
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

module.exports = wc