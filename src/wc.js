const fs = require('fs');

function wc(filePath , options=[]) {
    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n').length;
        const words = fileContent.split(' ').length;
        const byteSize = str => new Blob([str]).size;
        const bytes = byteSize(fileContent)
        result = []
        for(let i=0; i<options.length; i++){
            if(options[i] == '-c'){
                result.push(bytes)
            }
            if(options[i] == '-l'){
                result.push(lines)
            }
            if(options[i] == '-w'){
                result.push(words)
            }
        }
        if (result.length > 0){
            return result
        }
        return [lines, words, bytes]
    } catch (err) {
        console.error("Error reading file:", err);
    }
}

module.exports = wc
