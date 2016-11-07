/*
* grunt-liquibase-mysql
* https://github.com/flocsy/grunt-liquibase-postgresql
*
* Copyright (c) 2016 Gavriel Fleischer
* Licensed under the MIT license.
*/

'use strict';

const path = require('path');
const merge = require('merge');

module.exports = function(grunt) {
  grunt.initConfig(merge.recursive({
    liquibase: {
      options: {
        url: `jdbc:postgresql://${grunt.config.data.liquibase.hostname}:5432/${grunt.config.data.liquibase.database}`,
        classpath: path.join(__dirname, '..', 'lib', 'postgresql-9.4-1206-jdbc41.jar'),
        driver: 'org.postgresql.Driver'
      }
    }
  }, grunt.config.data));
  grunt.loadNpmTasks('grunt-liquibase');
};
