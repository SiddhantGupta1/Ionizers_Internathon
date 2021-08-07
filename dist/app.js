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

var sequelize = new Sequelize("internathon", "admin", "dellhplinux!#123", {
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




var aws = __webpack_require__(/*! aws-sdk */ "aws-sdk");

var bcrypt = __webpack_require__(/*! bcryptjs */ "bcryptjs");

aws.config.update({
  secretAccessKey: "/hSqYJI9NnDxLA0Kq1EJ+zwZRg1KiIEwzNkxBCgv",
  accessKeyId: "AKIAUFJNEO36NCF3U5FV",
  region: "ap-south-1"
});
var typeDefs = Object(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__["gql"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  extend type Query {\n    createUser(input: data): String!\n  }\n  input data {\n    fname: String!\n    lname: String!\n    email: String!\n    username: String!\n    password: String!\n  }\n"])));
var resolvers = {
  Query: {
    createUser: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(obj, args, context, info) {
        var data, salt, hashedPassword, input;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = JSON.parse(JSON.stringify(args.input));
                _context.next = 3;
                return bcrypt.genSalt(13);

              case 3:
                salt = _context.sent;
                _context.next = 6;
                return bcrypt.hash(data.password, salt);

              case 6:
                hashedPassword = _context.sent;
                _context.next = 9;
                return _database__WEBPACK_IMPORTED_MODULE_1__["user"].create({
                  fname: data.fname,
                  lname: data.lname,
                  email: data.email,
                  username: data.username,
                  password: hashedPassword
                });

              case 9:
                input = _context.sent;
                return _context.abrupt("return", "user created");

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createUser(_x, _x2, _x3, _x4) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
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

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvZGF0YWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL21vZGVscy9kYXRhX3VwbG9hZGVkLmpzIiwid2VicGFjazovLy8uL2FwcC9tb2RlbHMvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcmVzb2x2ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF3cy1zZGtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiY3J5cHRqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJvZHktcGFyc2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRvdGVudi9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VxdWVsaXplXCIiXSwibmFtZXMiOlsiYm9keVBhcnNlciIsInJlcXVpcmUiLCJBcG9sbG9TZXJ2ZXIiLCJjb3JzIiwiYXBwIiwiZXhwcmVzcyIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXJ2ZXIiLCJtb2R1bGVzIiwiYXBwbHlNaWRkbGV3YXJlIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZCIsImxpc3RlbiIsInBvcnQiLCJjb25zb2xlIiwibG9nIiwiU2VxdWVsaXplIiwiZGIiLCJzZXF1ZWxpemUiLCJob3N0IiwiZGlhbGVjdCIsImRlZmluZSIsImZyZWV6ZVRhYmxlTmFtZSIsInBvb2wiLCJtYXgiLCJtaW4iLCJhY3F1aXJlIiwiaWRsZSIsIm9wZXJhdG9yc0FsaWFzZXMiLCJtb2RlbHMiLCJmb3JFYWNoIiwibW9kZWwiLCJzZXFNb2RlbCIsIm5hbWUiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwiYXNzb2NpYXRlIiwibW9kdWxlIiwiZXhwb3J0cyIsIkRhdGFUeXBlcyIsImluY19pZCIsImF1dG9JbmNyZW1lbnQiLCJ0eXBlIiwiSU5URUdFUiIsImFsbG93TnVsbCIsInByaW1hcnlLZXkiLCJ1cGxvYWRlZF9ieSIsIlNUUklORyIsImxvY2F0aW9uX25hbWUiLCJnZW90YWdzIiwiZGVzY3JpcHRpb24iLCJpbWFnZV9pZCIsInZpZGVvX2lkIiwiaW1hZ2VfbG9jYXRpb24iLCJ2aWRlb19sb2NhdGlvbiIsInN0YXRlIiwiY2l0eSIsImNvdW50cnkiLCJ0YWJsZU5hbWUiLCJ0aW1lc3RhbXBzIiwiaW5kZXhlcyIsInVuaXF1ZSIsInVzaW5nIiwiZmllbGRzIiwiZm5hbWUiLCJsbmFtZSIsInVzZXJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhc1RyaWdnZXIiLCJhd3MiLCJiY3J5cHQiLCJjb25maWciLCJ1cGRhdGUiLCJzZWNyZXRBY2Nlc3NLZXkiLCJhY2Nlc3NLZXlJZCIsInJlZ2lvbiIsInR5cGVEZWZzIiwiZ3FsIiwicmVzb2x2ZXJzIiwiUXVlcnkiLCJjcmVhdGVVc2VyIiwib2JqIiwiYXJncyIsImNvbnRleHQiLCJpbmZvIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImlucHV0IiwiZ2VuU2FsdCIsInNhbHQiLCJoYXNoIiwiaGFzaGVkUGFzc3dvcmQiLCJjcmVhdGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFB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dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hcHAvYXBwLmpzXCIpO1xuIiwiaW1wb3J0IFwiQGJhYmVsL3BvbHlmaWxsXCI7XHJcbmltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XHJcbmNvbnN0IHsgQXBvbGxvU2VydmVyIH0gPSByZXF1aXJlKFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCIpO1xyXG5jb25zdCBjb3JzID0gcmVxdWlyZShcImNvcnNcIik7XHJcbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IHRydWUgfSkpO1xyXG5hcHAudXNlKGNvcnMoKSk7XHJcblxyXG5jb25zdCBzZXJ2ZXIgPSBuZXcgQXBvbGxvU2VydmVyKHtcclxuICBtb2R1bGVzOiBbcmVxdWlyZShcIi4vcmVzb2x2ZXJzL2luZGV4LmpzXCIpXSxcclxufSk7XHJcblxyXG5zZXJ2ZXIuYXBwbHlNaWRkbGV3YXJlKHsgYXBwIH0pO1xyXG5cclxuYXBwLmdldChcIi9cIiwgKHJlcSwgcmVzKSA9PiByZXMuc2VuZChcIm9rYXkgYm9vbWVyXCIpKTtcclxuXHJcbmFwcC5saXN0ZW4oeyBwb3J0OiAzMDAwIH0sICgpID0+XHJcbiAgY29uc29sZS5sb2coYPCfmoAgU2VydmVyIHJlYWR5IGF0IGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncmFwaHFsYClcclxuKTtcclxuXHJcbi8vc2VxdWVsaXplLWF1dG8gLWggbG9jYWxob3N0IC1kIHBheW1lbnRzIC11IHJvb3QgLXggcGFzc3dvcmQgLS1kaWFsZWN0IG15c3FsIC1vIC4vYXBwL21vZGVsc1xyXG4vL2Fib3ZlIG1lbnRpb25lZCBjb21tYW5kIGlzIHVzZWQgdG8gY2hhbmdlIHRoZSBzY2hlbWEgb2YgbW9kZWxzIGF1dG9tYXRpY2FsbHksIGlmIHRoZSBzdHJ1Y3R1cmUgb2YgIGRhdGFiYXNlIGlzIGNoYW5nZWRcclxuLy9zZXF1ZWxpemUtYXV0byBtdXN0IGJlIGluc3RhbGxlZCBnbG9iYWxseSBhbHNvXHJcblxyXG4vLyBzZXF1ZWxpemUtYXV0byAtaCBpbnRlcm5hdGhvbi5jZWRqZ3N3eml5d2IuYXAtc291dGgtMS5yZHMuYW1hem9uYXdzLmNvbSAtZCBpbnRlcm5hdGhvbiAtdSBhZG1pbiAteCBkZWxsaHBsaW51eCEjMTIzIC0tZGlhbGVjdCBteXNxbCAtbyAuL2FwcC9tb2RlbHNcclxuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcclxucmVxdWlyZShcImRvdGVudi9jb25maWdcIik7XHJcbnZhciBkYiA9IHt9O1xyXG5cclxuLypcclxuZGIgbmFtZT1wYXltZW50c1xyXG51c2VybmFtZT1yb290XHJcbnBhc3N3b3JkPVxyXG4qL1xyXG5cclxuY29uc3Qgc2VxdWVsaXplID0gbmV3IFNlcXVlbGl6ZShcImludGVybmF0aG9uXCIsIFwiYWRtaW5cIiwgXCJkZWxsaHBsaW51eCEjMTIzXCIsIHtcclxuICBob3N0OiBcImludGVybmF0aG9uLmNlZGpnc3d6aXl3Yi5hcC1zb3V0aC0xLnJkcy5hbWF6b25hd3MuY29tXCIsXHJcbiAgcG9ydDogXCIzMzA2XCIsXHJcbiAgZGlhbGVjdDogXCJteXNxbFwiLFxyXG4gIGRlZmluZToge1xyXG4gICAgZnJlZXplVGFibGVOYW1lOiB0cnVlLFxyXG4gIH0sXHJcbiAgcG9vbDoge1xyXG4gICAgbWF4OiA1LFxyXG4gICAgbWluOiAwLFxyXG4gICAgYWNxdWlyZTogMzAwMDAsXHJcbiAgICBpZGxlOiAxMDAwMCxcclxuICB9LFxyXG4gIC8vIGh0dHA6Ly9kb2NzLnNlcXVlbGl6ZWpzLmNvbS9tYW51YWwvdHV0b3JpYWwvcXVlcnlpbmcuaHRtbCNvcGVyYXRvcnNcclxuICBvcGVyYXRvcnNBbGlhc2VzOiBmYWxzZSxcclxufSk7XHJcblxyXG5sZXQgbW9kZWxzID0gW1xyXG4gIHJlcXVpcmUoXCIuL21vZGVscy9kYXRhX3VwbG9hZGVkLmpzXCIpLFxyXG4gIHJlcXVpcmUoXCIuL21vZGVscy91c2VyLmpzXCIpLFxyXG5dO1xyXG5cclxuLy8gSW5pdGlhbGl6ZSBtb2RlbHNcclxubW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XHJcbiAgY29uc3Qgc2VxTW9kZWwgPSBtb2RlbChzZXF1ZWxpemUsIFNlcXVlbGl6ZSk7XHJcbiAgZGJbc2VxTW9kZWwubmFtZV0gPSBzZXFNb2RlbDtcclxufSk7XHJcblxyXG4vLyBBcHBseSBhc3NvY2lhdGlvbnNcclxuT2JqZWN0LmtleXMoZGIpLmZvckVhY2goKGtleSkgPT4ge1xyXG4gIGlmIChcImFzc29jaWF0ZVwiIGluIGRiW2tleV0pIHtcclxuICAgIGRiW2tleV0uYXNzb2NpYXRlKGRiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy9BcHBseSByZWxhdGlvbnNoaXBzIGJldHdlZW4gdGFibGVzXHJcblxyXG5kYi5zZXF1ZWxpemUgPSBzZXF1ZWxpemU7XHJcbmRiLlNlcXVlbGl6ZSA9IFNlcXVlbGl6ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZGI7XHJcbiIsImNvbnN0IFNlcXVlbGl6ZSA9IHJlcXVpcmUoJ3NlcXVlbGl6ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzZXF1ZWxpemUsIERhdGFUeXBlcykge1xuICByZXR1cm4gc2VxdWVsaXplLmRlZmluZSgnZGF0YV91cGxvYWRlZCcsIHtcbiAgICBpbmNfaWQ6IHtcbiAgICAgIGF1dG9JbmNyZW1lbnQ6IHRydWUsXG4gICAgICB0eXBlOiBEYXRhVHlwZXMuSU5URUdFUixcbiAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICBwcmltYXJ5S2V5OiB0cnVlXG4gICAgfSxcbiAgICB1cGxvYWRlZF9ieToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGxvY2F0aW9uX25hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBnZW90YWdzOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDI1NiksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgaW1hZ2VfaWQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICB2aWRlb19pZDoge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGltYWdlX2xvY2F0aW9uOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgdmlkZW9fbG9jYXRpb246IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBzdGF0ZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWVcbiAgICB9LFxuICAgIGNpdHk6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICBjb3VudHJ5OiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH1cbiAgfSwge1xuICAgIHNlcXVlbGl6ZSxcbiAgICB0YWJsZU5hbWU6ICdkYXRhX3VwbG9hZGVkJyxcbiAgICB0aW1lc3RhbXBzOiBmYWxzZSxcbiAgICBpbmRleGVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwiUFJJTUFSWVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJpbmNfaWRcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSk7XG59O1xuIiwiY29uc3QgU2VxdWVsaXplID0gcmVxdWlyZSgnc2VxdWVsaXplJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHNlcXVlbGl6ZSwgRGF0YVR5cGVzKSB7XG4gIHJldHVybiBzZXF1ZWxpemUuZGVmaW5lKCd1c2VyJywge1xuICAgIGluY19pZDoge1xuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5JTlRFR0VSLFxuICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICAgIHByaW1hcnlLZXk6IHRydWVcbiAgICB9LFxuICAgIGZuYW1lOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDQ1KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgIH0sXG4gICAgbG5hbWU6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfSxcbiAgICB1c2VybmFtZToge1xuICAgICAgdHlwZTogRGF0YVR5cGVzLlNUUklORyg0NSksXG4gICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgICB1bmlxdWU6IFwidXNlcm5hbWVfVU5JUVVFXCJcbiAgICB9LFxuICAgIGVtYWlsOiB7XG4gICAgICB0eXBlOiBEYXRhVHlwZXMuU1RSSU5HKDY0KSxcbiAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogXCJlbWFpbF9VTklRVUVcIlxuICAgIH0sXG4gICAgcGFzc3dvcmQ6IHtcbiAgICAgIHR5cGU6IERhdGFUeXBlcy5TVFJJTkcoNDUpLFxuICAgICAgYWxsb3dOdWxsOiB0cnVlXG4gICAgfVxuICB9LCB7XG4gICAgc2VxdWVsaXplLFxuICAgIHRhYmxlTmFtZTogJ3VzZXInLFxuICAgIGhhc1RyaWdnZXI6IHRydWUsXG4gICAgdGltZXN0YW1wczogZmFsc2UsXG4gICAgaW5kZXhlczogW1xuICAgICAge1xuICAgICAgICBuYW1lOiBcIlBSSU1BUllcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwiaW5jX2lkXCIgfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogXCJ1c2VybmFtZV9VTklRVUVcIixcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICB1c2luZzogXCJCVFJFRVwiLFxuICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICB7IG5hbWU6IFwidXNlcm5hbWVcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiBcImVtYWlsX1VOSVFVRVwiLFxuICAgICAgICB1bmlxdWU6IHRydWUsXG4gICAgICAgIHVzaW5nOiBcIkJUUkVFXCIsXG4gICAgICAgIGZpZWxkczogW1xuICAgICAgICAgIHsgbmFtZTogXCJlbWFpbFwiIH0sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9KTtcbn07XG4iLCJpbXBvcnQgeyBncWwgfSBmcm9tIFwiYXBvbGxvLXNlcnZlci1leHByZXNzXCI7XHJcbmltcG9ydCAqIGFzIGRiIGZyb20gXCIuLy4uL2RhdGFiYXNlXCI7XHJcbnZhciBhd3MgPSByZXF1aXJlKFwiYXdzLXNka1wiKTtcclxudmFyIGJjcnlwdCA9IHJlcXVpcmUoXCJiY3J5cHRqc1wiKTtcclxuXHJcbmF3cy5jb25maWcudXBkYXRlKHtcclxuICBzZWNyZXRBY2Nlc3NLZXk6IFwiL2hTcVlKSTlObkR4TEEwS3ExRUorendaUmcxS2lJRXd6Tmt4QkNndlwiLFxyXG4gIGFjY2Vzc0tleUlkOiBcIkFLSUFVRkpORU8zNk5DRjNVNUZWXCIsXHJcbiAgcmVnaW9uOiBcImFwLXNvdXRoLTFcIixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgdHlwZURlZnMgPSBncWxgXHJcbiAgZXh0ZW5kIHR5cGUgUXVlcnkge1xyXG4gICAgY3JlYXRlVXNlcihpbnB1dDogZGF0YSk6IFN0cmluZyFcclxuICB9XHJcbiAgaW5wdXQgZGF0YSB7XHJcbiAgICBmbmFtZTogU3RyaW5nIVxyXG4gICAgbG5hbWU6IFN0cmluZyFcclxuICAgIGVtYWlsOiBTdHJpbmchXHJcbiAgICB1c2VybmFtZTogU3RyaW5nIVxyXG4gICAgcGFzc3dvcmQ6IFN0cmluZyFcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XHJcbiAgUXVlcnk6IHtcclxuICAgIGNyZWF0ZVVzZXI6IGFzeW5jIChvYmosIGFyZ3MsIGNvbnRleHQsIGluZm8pID0+IHtcclxuICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFyZ3MuaW5wdXQpKTtcclxuICAgICAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEzKTtcclxuICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChkYXRhLnBhc3N3b3JkLCBzYWx0KTtcclxuICAgICAgdmFyIGlucHV0ID0gYXdhaXQgZGIudXNlci5jcmVhdGUoe1xyXG4gICAgICAgIGZuYW1lOiBkYXRhLmZuYW1lLFxyXG4gICAgICAgIGxuYW1lOiBkYXRhLmxuYW1lLFxyXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgIHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcclxuICAgICAgfSk7XHJcbiAgICAgIC8vY29uc29sZS5sb2coaW5wdXQpO1xyXG4gICAgICByZXR1cm4gXCJ1c2VyIGNyZWF0ZWRcIjtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3BvbHlmaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby1zZXJ2ZXItZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd3Mtc2RrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZG90ZW52L2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9