/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/app.js":
/*!********************!*\
  !*** ./app/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "@babel/polyfill");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);



var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");

var _require = __webpack_require__(/*! apollo-server-express */ "apollo-server-express"),
    ApolloServer = _require.ApolloServer;

var cors = __webpack_require__(/*! cors */ "cors");

var app = express__WEBPACK_IMPORTED_MODULE_1___default()();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
var server = new ApolloServer({
  modules: [__webpack_require__(/*! ./resolvers/index.js */ "./app/resolvers/index.js")]
});
server.applyMiddleware({
  app: app
});
app.get("/", function (req, res) {
  return res.send("okay boomer");
});
app.listen({
  port: 3000
}, function () {
  return console.log("\uD83D\uDE80 Server ready at http://localhost:3000/graphql");
}); //sequelize-auto -h localhost -d payments -u root -x password --dialect mysql -o ./app/models
//above mentioned command is used to change the schema of models automatically, if the structure of  database is changed
//sequelize-auto must be installed globally also
// sequelize-auto -h internathon.cedjgswziywb.ap-south-1.rds.amazonaws.com -d internathon -u admin -x dellhplinux!#123 --dialect mysql -o ./app/models

/***/ }),

/***/ "./app/database.js":
/*!*************************!*\
  !*** ./app/database.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

__webpack_require__(/*! dotenv/config */ "dotenv/config");

var db = {};
/*
db name=payments
username=root
password=
*/

var sequelize = new Sequelize("internathon", "dellhplinux!#123", "", {
  host: "internathon.cedjgswziywb.ap-south-1.rds.amazonaws.com",
  port: "3306",
  dialect: "mysql",
  define: {
    freezeTableName: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false
});
var models = [__webpack_require__(/*! ./models/data_uploaded.js */ "./app/models/data_uploaded.js"), __webpack_require__(/*! ./models/user.js */ "./app/models/user.js")]; // Initialize models

models.forEach(function (model) {
  var seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
}); // Apply associations

Object.keys(db).forEach(function (key) {
  if ("associate" in db[key]) {
    db[key].associate(db);
  }
}); //Apply relationships between tables

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;

/***/ }),

/***/ "./app/models/data_uploaded.js":
/*!*************************************!*\
  !*** ./app/models/data_uploaded.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('data_uploaded', {
    inc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uploaded_by: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    location_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    geotags: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    video_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    image_location: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    video_location: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize: sequelize,
    tableName: 'data_uploaded',
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "inc_id"
      }]
    }]
  });
};

/***/ }),

/***/ "./app/models/user.js":
/*!****************************!*\
  !*** ./app/models/user.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Sequelize = __webpack_require__(/*! sequelize */ "sequelize");

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('user', {
    inc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "username_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize: sequelize,
    tableName: 'user',
    hasTrigger: true,
    timestamps: false,
    indexes: [{
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "inc_id"
      }]
    }, {
      name: "username_UNIQUE",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "username"
      }]
    }, {
      name: "email_UNIQUE",
      unique: true,
      using: "BTREE",
      fields: [{
        name: "email"
      }]
    }]
  });
};

/***/ }),

/***/ "./app/resolvers/index.js":
/*!********************************!*\
  !*** ./app/resolvers/index.js ***!
  \********************************/
/*! exports provided: typeDefs, resolvers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ "apollo-server-express");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../database */ "./app/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query {\n    # filesDataAPI: [APISchema]!\n    testAPI: testSchema!\n  }\n  type testSchema {\n    status: Int!\n  }\n"])));
var resolvers = {
  Query: {
    testAPI: function () {
      var _testAPI = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj, args, context, info) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  status: 200
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function testAPI(_x, _x2, _x3, _x4) {
        return _testAPI.apply(this, arguments);
      }

      return testAPI;
    }()
  }
};

/***/ }),

/***/ "@babel/polyfill":
/*!**********************************!*\
  !*** external "@babel/polyfill" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/polyfill");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-express");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv/config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9kYXRhX3VwbG9hZGVkLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVzb2x2ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiYm9keVBhcnNlciIsInJlcXVpcmUiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXJ2ZXIiLCJtb2R1bGVzIiwiYXBwbHlNaWRkbGV3YXJlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwiU2VxdWVsaXplIiwiZGIiLCJzZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsImRlZmluZSIsImZyZWV6ZVRhYmxlTmFtZSIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSIsIm9wZXJhdG9yc0FsaWFzZXMiLCJtb2RlbHMiLCJmb3JFYWNoIiwibW9kZWwiLCJzZXFNb2RlbCIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXNzb2NpYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRhdGFUeXBlcyIsImluY19pZCIsImF1dG9JbmNyZW1lbnQiLCJ0eXBlIiwiSU5URUdFUiIsImFsbG93TnVsbCIsInByaW1hcnlLZXkiLCJ1cGxvYWRlZF9ieSIsIlNUUklORyIsImxvY2F0aW9uX25hbWUiLCJnZW90YWdzIiwiZGVzY3JpcHRpb24iLCJpbWFnZV9pZCIsInZpZGVvX2lkIiwiaW1hZ2VfbG9jYXRpb24iLCJ2aWRlb19sb2NhdGlvbiIsInN0YXRlIiwiY2l0eSIsImNvdW50cnkiLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVuaXF1ZSIsInVzaW5nIiwiZmllbGRzIiwiZm5hbWUiLCJsbmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhc1RyaWdnZXIiLCJ0eXBlRGVmcyIsImdxbCIsInJlc29sdmVycyIsIlF1ZXJ5IiwidGVzdEFQSSIsIm9iaiIsImFyZ3MiLCJjb250ZXh0IiwiaW5mbyIsInN0YXR1cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVB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QUUvQixZQUFJLEVBQUU7QUFBUixPQURNO0FBSlYsS0FETyxFQVNQO0FBQ0VBLFVBQUksRUFBRSxpQkFEUjtBQUVFNkIsWUFBTSxFQUFFLElBRlY7QUFHRUMsV0FBSyxFQUFFLE9BSFQ7QUFJRUMsWUFBTSxFQUFFLENBQ047QUFBRS9CLFlBQUksRUFBRTtBQUFSLE9BRE07QUFKVixLQVRPLEVBaUJQO0FBQ0VBLFVBQUksRUFBRSxjQURSO0FBRUU2QixZQUFNLEVBQUUsSUFGVjtBQUdFQyxXQUFLLEVBQUUsT0FIVDtBQUlFQyxZQUFNLEVBQUUsQ0FDTjtBQUFFL0IsWUFBSSxFQUFFO0FBQVIsT0FETTtBQUpWLEtBakJPO0FBTFIsR0E3QkksQ0FBUDtBQTZERCxDQTlERCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUNBO0FBRU8sSUFBTXNDLFFBQVEsR0FBR0MsaUVBQUgsMk1BQWQ7QUFTQSxJQUFNQyxTQUFTLEdBQUc7QUFDdkJDLE9BQUssRUFBRTtBQUNMQyxXQUFPO0FBQUEsNkVBQUUsaUJBQU9DLEdBQVAsRUFBWUMsSUFBWixFQUFrQkMsT0FBbEIsRUFBMkJDLElBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpREFDQTtBQUNMQyx3QkFBTSxFQUFFO0FBREgsaUJBREE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQURGO0FBRGdCLENBQWxCLEM7Ozs7Ozs7Ozs7O0FDWlAsNEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsb0M7Ozs7Ozs7Ozs7O0FDQUEsc0MiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XHJcbmNvbnN0IHsgQXBvbGxvU2VydmVyIH0gPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpO1xyXG5jb25zdCBjb3JzID0gcmVxdWlyZShcImNvcnNcIik7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5hcHAudXNlKGNvcnMoKSk7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICBtb2R1bGVzOiBbcmVxdWlyZShcIi4vcmVzb2x2ZXJzL2luZGV4LmpzXCIpXSxcclxufSk7XHJcblxyXG5zZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pO1xyXG5cclxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiByZXMuc2VuZChcIm9rYXkgYm9vbWVyXCIpKTtcclxuXHJcbmFwcC5saXN0ZW4oeyBwb3J0OiAzMDAwIH0sICgpID0+XHJcbiAgY29uc29sZS5sb2coYPCfmoAgU2VydmVyIHJlYWR5IGF0IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsYClcclxuKTtcclxuXHJcbi8vc2VxdWVsaXplLWF1dG8gLWggbG9jYWxob3N0IC1kIHBheW1lbnRzIC11IHJvb3QgLXggcGFzc3dvcmQgLS1kaWFsZWN0IG15c3FsIC1vIC4vYXBwL21vZGVsc1xyXG4vL2Fib3ZlIG1lbnRpb25lZCBjb21tYW5kIGlzIHVzZWQgdG8gY2hhbmdlIHRoZSBzY2hlbWEgb2YgbW9kZWxzIGF1dG9tYXRpY2FsbHksIGlmIHRoZSBzdHJ1Y3R1cmUgb2YgIGRhdGFiYXNlIGlzIGNoYW5nZWRcclxuLy9zZXF1ZWxpemUtYXV0byBtdXN0IGJlIGluc3RhbGxlZCBnbG9iYWxseSBhbHNvXHJcblxyXG4vLyBzZXF1ZWxpemUtYXV0byAtaCBpbnRlcm5hdGhvbi5jZWRqZ3N3eml5d2IuYXAtc291dGgtMS5yZHMuYW1hem9uYXdzLmNvbSAtZCBpbnRlcm5hdGhvbiAtdSBhZG1pbiAteCBkZWxsaHBsaW51eCEjMTIzIC0tZGlhbGVjdCBteXNxbCAtbyAuL2FwcC9tb2RlbHNcclxuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxucmVxdWlyZShcImRvdGVudi9jb25maWdcIik7XHJcbnZhciBkYiA9IHt9O1xyXG5cclxuLypcclxuZGIgbmFtZT1wYXltZW50c1xyXG51c2VybmFtZT1yb290XHJcbnBhc3N3b3JkPVxyXG4qL1xyXG5cclxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcImludGVybmF0aG9uXCIsIFwiZGVsbGhwbGludXghIzEyM1wiLCBcIlwiLCB7XHJcbiAgaG9zdDogXCJpbnRlcm5hdGhvbi5jZWRqZ3N3eml5d2IuYXAtc291dGgtMS5yZHMuYW1hem9uYXdzLmNvbVwiLFxyXG4gIHBvcnQ6IFwiMzMwNlwiLFxyXG4gIGRpYWxlY3Q6IFwibXlzcWxcIixcclxuICBkZWZpbmU6IHtcclxuICAgIGZyZWV6ZVRhYmxlTmFtZTogdHJ1ZSxcclxuICB9LFxyXG4gIHBvb2w6IHtcclxuICAgIG1heDogNSxcclxuICAgIG1pbjogMCxcclxuICAgIGFjcXVpcmU6IDMwMDAwLFxyXG4gICAgaWRsZTogMTAwMDAsXHJcbiAgfSxcclxuICAvLyBodHRwOi8vZG9jcy5zZXF1ZWxpemVqcy5jb20vbWFudWFsL3R1dG9yaWFsL3F1ZXJ5aW5nLmh0bWwjb3BlcmF0b3JzXHJcbiAgb3BlcmF0b3JzQWxpYXNlczogZmFsc2UsXHJcbn0pO1xyXG5cclxubGV0IG1vZGVscyA9IFtcclxuICByZXF1aXJlKFwiLi9tb2RlbHMvZGF0YV91cGxvYWRlZC5qc1wiKSxcclxuICByZXF1aXJlKFwiLi9tb2RlbHMvdXNlci5qc1wiKSxcclxuXTtcclxuXHJcbi8vIEluaXRpYWxpemUgbW9kZWxzXHJcbm1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xyXG4gIGNvbnN0IHNlcU1vZGVsID0gbW9kZWwoc2VxdWVsaXplLCBTZXF1ZWxpemUpO1xyXG4gIGRiW3NlcU1vZGVsLm5hbWVdID0gc2VxTW9kZWw7XHJcbn0pO1xyXG5cclxuLy8gQXBwbHkgYXNzb2NpYXRpb25zXHJcbk9iamVjdC5rZXlzKGRiKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICBpZiAoXCJhc3NvY2lhdGVcIiBpbiBkYltrZXldKSB7XHJcbiAgICBkYltrZXldLmFzc29jaWF0ZShkYik7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vQXBwbHkgcmVsYXRpb25zaGlwcyBiZXR3ZWVuIHRhYmxlc1xyXG5cclxuZGIuc2VxdWVsaXplID0gc2VxdWVsaXplO1xyXG5kYi5TZXF1ZWxpemUgPSBTZXF1ZWxpemU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGRiO1xyXG4iLCJjb25zdCBTZXF1ZWxpemUgPSByZXF1aXJlKCdzZXF1ZWxpemUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VxdWVsaXplLCBEYXRhVHlwZXMpIHtcbiAgcmV0dXJuIHNlcXVlbGl6ZS5kZWZpbmUoJ2RhdGFfdXBsb2FkZWQnLCB7XG4gICAgaW5jX2lkOiB7XG4gICAgICBhdXRvSW5jcmVtZW50OiB0cnVlLFxuICAgICAgdHlwZTogRGF0YVR5cGVzLklOVEVHRVIsXG4gICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgcHJpbWFyeUtleTogdHJ1ZVxuICAgIH0sXG4gICAgdXBsb2FkZWRfYnk6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBsb2NhdGlvbl9uYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgZ2VvdGFnczoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORygyNTYpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGltYWdlX2lkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgdmlkZW9faWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBpbWFnZV9sb2NhdGlvbjoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIHZpZGVvX2xvY2F0aW9uOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgc3RhdGU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBjaXR5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgY291bnRyeToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9XG4gIH0sIHtcbiAgICBzZXF1ZWxpemUsXG4gICAgdGFibGVOYW1lOiAnZGF0YV91cGxvYWRlZCcsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgaW5kZXhlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBSSU1BUllcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiaW5jX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICBdXG4gIH0pO1xufTtcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgndXNlcicsIHtcbiAgICBpbmNfaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICBmbmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGxuYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgdXNlcm5hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlLFxuICAgICAgdW5pcXVlOiBcInVzZXJuYW1lX1VOSVFVRVwiXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg2NCksXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICB1bmlxdWU6IFwiZW1haWxfVU5JUVVFXCJcbiAgICB9LFxuICAgIHBhc3N3b3JkOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICd1c2VyJyxcbiAgICBoYXNUcmlnZ2VyOiB0cnVlLFxuICAgIHRpbWVzdGFtcHM6IGZhbHNlLFxuICAgIGluZGV4ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJQUklNQVJZXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcImluY19pZFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwidXNlcm5hbWVfVU5JUVVFXCIsXG4gICAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICAgICAgdXNpbmc6IFwiQlRSRUVcIixcbiAgICAgICAgZmllbGRzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInVzZXJuYW1lXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJlbWFpbF9VTklRVUVcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiZW1haWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiO1xyXG5pbXBvcnQgKiBhcyBkYiBmcm9tIFwiLi8uLi9kYXRhYmFzZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxyXG4gIGV4dGVuZCB0eXBlIFF1ZXJ5IHtcclxuICAgICMgZmlsZXNEYXRhQVBJOiBbQVBJU2NoZW1hXSFcclxuICAgIHRlc3RBUEk6IHRlc3RTY2hlbWEhXHJcbiAgfVxyXG4gIHR5cGUgdGVzdFNjaGVtYSB7XHJcbiAgICBzdGF0dXM6IEludCFcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6IHtcclxuICAgIHRlc3RBUEk6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0dXM6IDIwMCxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJib2R5LXBhcnNlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudi9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZXF1ZWxpemVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==