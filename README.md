# grunt-liquibase-postgresql [![Build Status](https://travis-ci.org/flocsy/grunt-liquibase-postgresql.svg?branch=master)](https://travis-ci.org/flocsy/grunt-liquibase-postgresql) [![Code Climate](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql/badges/gpa.svg)](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql) [![Issue Count](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql/badges/issue_count.svg)](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql) [![Dependency Status](https://david-dm.org/flocsy/grunt-liquibase-postgresql.png?branch=master)](https://david-dm.org/flocsy/grunt-liquibase-postgresql)
> PostgreSQL plugin for grunt-liquibase

## Getting Started
This plugin requires grunt-liquibase `>=1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-liquibase --save-dev
npm install grunt-liquibase-postgresql --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-liquibase-postgresql');
grunt.registerTask('default', ['liquibase']); 
```
