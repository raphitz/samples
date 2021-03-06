/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenapiJsClient);
  }
}(this, function(expect, OpenapiJsClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('IoBluebankBraidCordaServerProgressProgressNotification', function() {
    it('should create an instance of IoBluebankBraidCordaServerProgressProgressNotification', function() {
      // uncomment below and update the code to test IoBluebankBraidCordaServerProgressProgressNotification
      //var instane = new OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification();
      //expect(instance).to.be.a(OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification);
    });

    it('should have the property flowClass (base name: "flowClass")', function() {
      // uncomment below and update the code to test the property flowClass
      //var instane = new OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification();
      //expect(instance).to.be();
    });

    it('should have the property invocationId (base name: "invocationId")', function() {
      // uncomment below and update the code to test the property invocationId
      //var instane = new OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification();
      //expect(instance).to.be();
    });

    it('should have the property step (base name: "step")', function() {
      // uncomment below and update the code to test the property step
      //var instane = new OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification();
      //expect(instance).to.be();
    });

    it('should have the property complete (base name: "complete")', function() {
      // uncomment below and update the code to test the property complete
      //var instane = new OpenapiJsClient.IoBluebankBraidCordaServerProgressProgressNotification();
      //expect(instance).to.be();
    });

  });

}));
