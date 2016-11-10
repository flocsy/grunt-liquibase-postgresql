# grunt-liquibase-postgresql [![Build Status](https://travis-ci.org/flocsy/grunt-liquibase-postgresql.svg?branch=master)](https://travis-ci.org/flocsy/grunt-liquibase-postgresql) [![Code Climate](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql/badges/gpa.svg)](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql) [![Issue Count](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql/badges/issue_count.svg)](https://codeclimate.com/github/flocsy/grunt-liquibase-postgresql) [![Dependency Status](https://david-dm.org/flocsy/grunt-liquibase-postgresql.png?branch=master)](https://david-dm.org/flocsy/grunt-liquibase-postgresql)
> PostgreSQL plugin for grunt-liquibase

## Getting Started
This plugin requires grunt-liquibase `>=1.0.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-liquibase-postgresql --save-dev
npm install grunt-liquibase --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-liquibase-postgresql');
```

## The "liquibase" task

### Overview
In your project's Gruntfile, add a section named `liquibase` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  liquibase: {
    options: {
      username: 'DB_USERNAME',
      password: 'DB_PASSWORD',
      url: 'jdbc:postgresql://DB_HOST:DB_PORT/DB_NAME'
    },
    updateSQL: {
      command: 'updateSQL'
    },
    version: {
      command: 'version'
    }
  },
});
```

Optionally instead of the `url` you can pass the `hostname` and `database` in `driver_options` and let the driver-plugin to add the url for you:
```js
grunt.initConfig({
  liquibase: {
    options: {
      username : 'DB_USERNAME',
      password : 'DB_PASSWORD'
    },
    driver_options: {
      hostname: 'localhost',
      database: 'test_db'
    },

    update: {
      command: 'update'
    }
  },
});
```
