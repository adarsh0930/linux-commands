# linux-commands

A lightweight command-line toolset built with Node.js, inspired by basic UNIX utilities. This project includes implementations of common commands like wc, head, tail, and ls.

---

## 📦 About

This project replicates basic Unix command-line utilities using Node.js. It's designed for educational purposes, scripting, or lightweight CLI tasks in a cross-platform environment.

---

## 🚀 Features

- 📄 `wc`: Word, line, and byte count of a file.
- 🔼 `head`: Print the first N lines of a file.
- 🔽 `tail`: Print the last N lines of a file.
- 📁 `ls`: List directory contents with optional flags for hidden files and detailed view.

---

## 🛠️ Installation

```
git clone https://github.com/adarsh0930/linux-commands.git
cd linux-commands
npm install
```

---

## ⚙️ Usage
All commands can be run using:

```
node index.js <command> [arguments]
```
Or if using npm scripts:

```
npm run <command> -- <arguments>
```
## 📂 Commands & Examples

**🔢 wc — Word Count**
```
node index.js wc path/to/file.txt -l -w -c
```

Options:
-l: Number of lines
-w: Number of words
-c: Number of bytes

Example:
```
node index.js wc sample.txt -l -w
```

---

**🔼 head — Show Top Lines**
```
node index.js head path/to/file.txt [numLines]
```

Example:
```
node index.js head sample.txt 5
```

---

**🔽 tail — Show Last Lines**
```
node index.js tail path/to/file.txt [numLines]
```

Example:
```
node index.js tail sample.txt 10
```

---

**📁 ls — List Files in Directory**
```
node index.js ls [directory] [-a] [-l]
```

Options:
-a: Include hidden files
-l: Detailed listing

Example:
```
node index.js ls ./src -a -l
```

---

## 📜 Scripts
Shortcuts defined in package.json:

```
npm run wc -- file.txt -l -w
```
```
npm run head -- file.txt 10
```
```
npm run tail -- file.txt 5
```
```
npm run ls -- ./src -a
```

---

## 🧪 Requirements
Node.js (v14+ recommended)
No external dependencies required
