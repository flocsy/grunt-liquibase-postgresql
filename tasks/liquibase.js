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
  var driver_options = {
    liquibase: {
      options: {
        classpath: path.join(__dirname, '..', 'lib', 'postgresql-9.4-1206-jdbc41.jar'),
        driver: 'org.postgresql.Driver'
      }
    }
  };
  if (grunt.config.data.liquibase.driver_options) {
    driver_options.liquibase.options.url =
      `jdbc:postgresql://${grunt.config.data.liquibase.driver_options.hostname}:5432/${grunt.config.data.liquibase.driver_options.database}`;
  }
  grunt.initConfig(merge.recursive(driver_options, grunt.config.data));
  grunt.loadNpmTasks('grunt-liquibase');
};
