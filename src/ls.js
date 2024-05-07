const fs = require('fs').promises;
const path = require('path');

async function ls(directoryPath, options = []) {
    try {
        let files = await fs.readdir(directoryPath);
        if (!options.includes('-a')) {
            const visibleFiles = files.filter(file => !file.startsWith('.'));
            files = visibleFiles;
        }

        if (!options.includes('-l')) {
            return files;
        }
        else {
            const fileStats = await Promise.all(
                files.map(async file => {
                    const fullPath = path.join(directoryPath, file);
                    return await fs.stat(fullPath);
                })
            );
            
            const output = fileStats.map((stats, index) => {
                const file = files[index];
                const nlink = stats.nlink;
                const mode = stats.mode.toString(8).slice(-3); // File permissions in octal format
                const size = stats.size;
                const mtime = stats.mtime.toLocaleString();
                const isDirectory = stats.isDirectory() ? 'd' : '-';
                return `${mode} ${nlink} ${isDirectory} ${mode} ${size} ${mtime} ${file}`;
            });
    
            return output;
        }
    } catch (error) {
        throw new Error(`Error listing directory: ${error}`);
    }
}

const directoryPath = './';
const options = process.argv;


ls(directoryPath, options)
    .then(output => {
        console.log(output.join('\n'));
    })
    .catch(error => console.error(error));