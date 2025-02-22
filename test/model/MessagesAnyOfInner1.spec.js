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
    instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
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

  describe('MessagesAnyOfInner1', function() {
    it('should create an instance of MessagesAnyOfInner1', function() {
      // uncomment below and update the code to test MessagesAnyOfInner1
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be.a(OpenAiAssistantsApi.MessagesAnyOfInner1);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be();
    });

    it('should have the property internalMonologue (base name: "internal_monologue")', function() {
      // uncomment below and update the code to test the property internalMonologue
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be();
    });

    it('should have the property assistantMessage (base name: "assistant_message")', function() {
      // uncomment below and update the code to test the property assistantMessage
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be();
    });

    it('should have the property functionCall (base name: "function_call")', function() {
      // uncomment below and update the code to test the property functionCall
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be();
    });

    it('should have the property functionReturn (base name: "function_return")', function() {
      // uncomment below and update the code to test the property functionReturn
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new OpenAiAssistantsApi.MessagesAnyOfInner1();
      //expect(instance).to.be();
    });

  });

}));
