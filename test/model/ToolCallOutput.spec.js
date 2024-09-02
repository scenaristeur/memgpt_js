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
    instance = new OpenAiAssistantsApi.ToolCallOutput();
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

  describe('ToolCallOutput', function() {
    it('should create an instance of ToolCallOutput', function() {
      // uncomment below and update the code to test ToolCallOutput
      //var instance = new OpenAiAssistantsApi.ToolCallOutput();
      //expect(instance).to.be.a(OpenAiAssistantsApi.ToolCallOutput);
    });

    it('should have the property toolCallId (base name: "tool_call_id")', function() {
      // uncomment below and update the code to test the property toolCallId
      //var instance = new OpenAiAssistantsApi.ToolCallOutput();
      //expect(instance).to.be();
    });

    it('should have the property output (base name: "output")', function() {
      // uncomment below and update the code to test the property output
      //var instance = new OpenAiAssistantsApi.ToolCallOutput();
      //expect(instance).to.be();
    });

  });

}));