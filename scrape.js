var request = require('request');

var cheerio = require('cheerio');

var fs = require('fs');

var mongoose = require('mongoose');

request('https://www.espn.com/', function(error, res) {
    if (!error && res.statusCode == 200) {
        console.log("ESPN SCRAPE COMPLETE YOU SHALL PASS!");

    }
});