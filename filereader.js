var fs         = require('fs'),
    path       = require('path'),
    htmlToText = require('html-to-text');
var Indexer = {
  extractHTML : function( fileData ){
    console.log( fileData.toString());

  },

  fileIterator : function( instance ){

    fs.readdir("./walgreens_html", function(err, list) {
      // var extractHTML = Indexer.extractHTML;
      list.forEach(function( file, index) {

        // Perform operation on file here.
        // console.log('Processing file ' + file);
        if( file.length > 32 ) {
          console.log('This file name is too long');
        } else {
          // Do work to process file here
          // console.log(file);
          // var fileData = fs.readFileSync(__dirname + "/walgreens_html/" + file);
          // Indexer.extractHTML( fileData );
          htmlToText.fromFileSync(path.join(__dirname + "/walgreens_html", file), {
          }, function(err, text) {
            if (err) return console.error(err);
            console.log(text);
          });
        }
      }, function(err){
          // if any of the file processing produced an error, err would equal that error
          if( err ) {
            // One of the iterations produced an error.
            // All processing will now stop.
            console.log('A file failed to process');
          } else {
            console.log('All files have been processed successfully');
          }
      });
    });
  }
}

Indexer.fileIterator(this);
