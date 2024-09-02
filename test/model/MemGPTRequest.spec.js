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
    instance = new OpenAiAssistantsApi.MemGPTRequest();
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

  describe('MemGPTRequest', function() {
    it('should create an instance of MemGPTRequest', function() {
      // uncomment below and update the code to test MemGPTRequest
      //var instance = new OpenAiAssistantsApi.MemGPTRequest();
      //expect(instance).to.be.a(OpenAiAssistantsApi.MemGPTRequest);
    });

    it('should have the property messages (base name: "messages")', function() {
      // uncomment below and update the code to test the property messages
      //var instance = new OpenAiAssistantsApi.MemGPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property runAsync (base name: "run_async")', function() {
      // uncomment below and update the code to test the property runAsync
      //var instance = new OpenAiAssistantsApi.MemGPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property streamSteps (base name: "stream_steps")', function() {
      // uncomment below and update the code to test the property streamSteps
      //var instance = new OpenAiAssistantsApi.MemGPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property streamTokens (base name: "stream_tokens")', function() {
      // uncomment below and update the code to test the property streamTokens
      //var instance = new OpenAiAssistantsApi.MemGPTRequest();
      //expect(instance).to.be();
    });

    it('should have the property returnMessageObject (base name: "return_message_object")', function() {
      // uncomment below and update the code to test the property returnMessageObject
      //var instance = new OpenAiAssistantsApi.MemGPTRequest();
      //expect(instance).to.be();
    });

  });

}));