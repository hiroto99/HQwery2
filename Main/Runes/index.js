const { endHiddenCallStack } = require('@babel/core/lib/errors/rewrite-stack-trace');
const fs = require('fs');
const path = require('path');
const { exit } = require('process');
// var files = require(path.relative( __dirname , process.env.NODE_RC_FILE ) );
// var filename = path.extname(files)

function run(out, hq_command, js_command, inp){
    for (const i in inp) {
        for (const u in hq_command) {
            if (~inp[i][0].indexOf(hq_command)) {
                for (const f in js_command) {
                    if (typeof js_command[u][f] == 'number') {
                        out += inp[i][1]
                    } else {
                        out += js_command[u][f]
                    }
                }
            }
        }
    }
    return out;
}

function build(out){
    eval(out);
}

const check = (file) => {
    let hasfaile = false;
    try {
        fs.statSync(file);
        hasfaile = true;
    } catch (err) {
        hasfaile = false;
    }
    return hasfaile;
}

let inpfile = "";
const read = (file) => {
    if (check(file)) {;
        inpfile = fs.readFileSync(file, 'utf8');
    }
    return inpfile;
}

/* if (filename = ".hq"){
    console();
} */
let thisfile = '../Test.hq'
let inp = (read(thisfile).replace(/\n/g, '')).split(/;/);
window.external.csharp(inp);
Main();

function Main(){
    var i = 0;
    let out = "";
    var hq_command = ["print "];
    var js_command = [['console.log("', 1, '");\n']];
    let thisfile = '../Test.hq'
    let inp = (read(thisfile).replace(/\n/g, '')).split(/;/);
    let inpbackup = inp
    for (const i in inp) {
        inp[i] = inp[i].split(/"/)
    }
    run(out, hq_command, js_command, inp);
    var hq_command = ["let "];
    var js_command = [['var "', 1, '" = "', 3, '";\n']]
    inp = inpbackup;
    for (const i in inp) {
        inp[i] = inp[i].split(/ /)
    }
    run(out, hq_command, js_command, inp);
    var hq_command = ["set "];
    var js_command = [['"', 1, '" = "', 3, '";\n']]
    inp = inpbackup;
    for (const i in inp) {
        inp[i] = inp[i].split(/ /)
    }
    run(out, hq_command, js_command, inp);
    build(out);
}