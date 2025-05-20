const path = require('path');
const wc = require('./src/wc');
const head = require('./src/head');
const ls = require('./src/ls');

const [,, command, ...args] = process.argv;

async function main() {
    const filePath = args[0];
    switch (command) {
        case 'wc':
            const wcOptions = args.slice(1);
            const wcResult = wc(filePath, wcOptions);
            console.log(wcResult.join(' '));
            break;
        case 'head':
            const headLines = parseInt(args[1]) || 10;
            head(filePath, headLines);
            break;
        case 'tail':
            // Dynamic import of tail.js since it's an async function
            const tailModule = require('./src/tails');
            const tailArgs = args[1] ? parseInt(args[1]) : 10;
            const lineCount = await tailModule.countLines(filePath);
            await tailModule.goToNthLine(filePath, tailArgs, lineCount);
            break;
        case 'ls':
            const dirPath = filePath || './';
            const lsOptions = args.slice(1);
            const lsResult = await ls(dirPath, lsOptions);
            console.log(lsResult.join('\n'));
            break;
        default:
            console.log('Usage: node index.js <command> [args]');
            console.log('Commands: wc <file> [-c -l -w], head <file> [numLines], tail <file> [numLines], ls <dir> [-a -l]');
    }
}

main();
