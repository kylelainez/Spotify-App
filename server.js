const express = require('express');
const path = require('path');
const logger = require('morgan');
const favicon = require('serve-favicon');
const { use } = require('./server/api/spotify');

const app = express();

// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/spotify', require('./server/api/spotify'))
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});