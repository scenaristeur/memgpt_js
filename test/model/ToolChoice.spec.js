/**
 * OpenAI Assistants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
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
    factory(root.expect, root.OpenAiAssistantsApi);
  }
}(this, function(expect, OpenAiAssistantsApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenAiAssistantsApi.ToolChoice();
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

  describe('ToolChoice', function() {
    it('should create an instance of ToolChoice', function() {
      // uncomment below and update the code to test ToolChoice
      //var instance = new OpenAiAssistantsApi.ToolChoice();
      //expect(instance).to.be.a(OpenAiAssistantsApi.ToolChoice);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new OpenAiAssistantsApi.ToolChoice();
      //expect(instance).to.be();
    });

    it('should have the property _function (base name: "function")', function() {
      // uncomment below and update the code to test the property _function
      //var instance = new OpenAiAssistantsApi.ToolChoice();
      //expect(instance).to.be();
    });

  });

}));
