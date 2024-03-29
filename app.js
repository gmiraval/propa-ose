'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');


module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);

 // add documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  var port = process.env.PORT || 8080;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/version']) {
    console.log('try this:\ncurl "http://127.0.0.1:' + port + '/version" -w "\\n" ');
  }
});
