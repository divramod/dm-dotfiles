// =========== [ REQUIRE ] ===========
var co = require("co");
var dmPrompt = require("dm-prompt").Inquirer;
var dmPath = require("dm-path");
var colors = require("colors");
var path = require("path");
var spawn = require("dm-shell").spawn;
require('shelljs/global');


// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function() {
    try {
        var snippetsPath = dmPath.replace("~/dotfiles/vim/snippets");
        var bundleSnippetsPath = dmPath.replace("~/dotfiles/vim/vim/bundle/vim-snippets/snippets");
        if (test("-d", snippetsPath) && test("-d", bundleSnippetsPath)) {

            var mySnippets = ls(snippetsPath);
            for (var i = 0, l = mySnippets.length; i < l; i++) {
                var s = mySnippets[i];
                // create directory if not existing
                var pathLanguage = path.resolve(bundleSnippetsPath, s);
                if (!test("-d", pathLanguage)) {
                    mkdir(pathLanguage);
                }

                // link files
                var files = ls(path.resolve(snippetsPath, s));
                for (var j = 0, ll = files.length; j < ll; j++) {
                    var f = files[j];
                    var src = path.resolve(snippetsPath, s, f);
                    var dest = path.resolve(bundleSnippetsPath, s, f);
                    var command = "ln -s " + src + " " + dest;
                    console.log(command);
                    spawn(command);
                }
            }
        } else {
            var message = snippetsPath.red + " or " + bundleSnippetsPath.red + " does not exist";
            console.log(message);
        }
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}; // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
