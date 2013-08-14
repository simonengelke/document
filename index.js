"use strict";

var Document = require('./src/document');
Document.Annotator = require('./src/annotator');
Document.Cursor = require('./src/cursor');
Document.Selection = require('./src/selection');
Document.Controller = require('./src/controller');
Document.Transformer = require('./src/transformer');

// Compatibility
Document.Writer = require('./src/controller');

module.exports = Document;
