'use strict';
var redux = require('../../node_modules/redux/dist/redux.min'); //jfc my dude.
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var rootReducer = require('../reducers');

module.exports = function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware());
};
