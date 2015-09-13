var tasks = {};

// automatically add tasks here
tasks.vimLinkSnippets = require("./tasks/vimLinkSnippets/index.js").start;
tasks.test1 = require("./tasks/test1/index.js").start;
tasks.exampleAsync = require("./tasks/exampleAsync/index.js").start;
tasks.exampleSync = require("./tasks/exampleSync/index.js").start;

module.exports = tasks;
