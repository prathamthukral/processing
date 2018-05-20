// dependencies
var express = require("express")
var app = express()
var querystring = require('querystring')
const testFolder = './views/';
var fs = require('fs');
var port = 3000;
app.use(express.json());
app.listen(port, () => {
    console.log("Server listening on port: " + port)
})

app.get("/setup", (req, res) => {
    res.sendFile(__dirname + "/setup_osx.txt")
})

app.use(express.static(__dirname + '/'))

// used to get names of all files in folder
app.get('/', (req, res) => {
    var html = getIndexHtml(getFiles());
    // var html = "<!--Starter code for Processing JS tutorial--><!DOCTYPE html><html><head><title>Processing JS</title><!--Processing JS File--><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script><script src='../js/processing.js'></script>"
    // html+="<script>$(document).ready(() => {$('canvas').hide();$('canvas').attr('data-processing-sources',$('select').val());$('canvas').show();$('button').click(() => {$('canvas').attr('data-processing-sources',$('select').val());$('canvas').show();})})</script>"
    // html+="<head><body><div class='container'><select name='files'>"

    // for (var i = 0; i < files.length; i++) {
    //     html += "<option value='" + files[i] + "'>" + files[i] + "</option>"
    // }
    // html += "</select><button>Click</button><br><canvas data-processing-sources='views/processing.pde'></canvas></div></body></html>"

    res.send(html)
})

app.get('/getCanvas', (req, res) => {
    var fileName = req.query.files
    res.send(outCanvas(getFiles(), fileName))
})

function getIndexHtml(files, fileName) {
    var html = "<!--Starter code for Processing JS tutorial--><!DOCTYPE html><html><head><title>Processing JS</title><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script><!-- <script src='../js/processing.js'></script> --></head><body><div class='container'><form action='/getCanvas'><select name='files'>"
    for (var i = 0; i < files.length; i++) {
        html += "<option value='" + files[i] + "'>" + files[i] + "</option>"
    }
    html += "</select><input type='submit'></form></div></body></html>"
    return html
}

function outCanvas(files, fileName) {
    var html = "<!--Starter code for Processing JS tutorial--><!DOCTYPE html><html><head><title>Processing JS</title><script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script><script src='../js/processing.js'></script></head><div class='container'><form action='/getCanvas'><select name='files'>"
    for (var i = 0; i < files.length; i++) {
        if (fileName == files[i]) {
            html += "<option value='" + files[i] + "' selected>" + files[i] + "</option>"
        } else {
            html += "<option value='" + files[i] + "'>" + files[i] + "</option>"
        }

    }
    html += "</select><input type='submit'></form></div><canvas data-processing-sources='/views/" + fileName + "'></canvas></body></html>"
    return html
}

function getFiles() {
    var files = []
    fs.readdirSync(testFolder).forEach(file => {
        if (file.search(".pde") > 0) {
            files.push(file)
        }
    })
    return files
}