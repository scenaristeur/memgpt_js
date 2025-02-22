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
    instance = new OpenAiAssistantsApi.MessageFile();
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

  describe('MessageFile', function() {
    it('should create an instance of MessageFile', function() {
      // uncomment below and update the code to test MessageFile
      //var instance = new OpenAiAssistantsApi.MessageFile();
      //expect(instance).to.be.a(OpenAiAssistantsApi.MessageFile);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new OpenAiAssistantsApi.MessageFile();
      //expect(instance).to.be();
    });

    it('should have the property object (base name: "object")', function() {
      // uncomment below and update the code to test the property object
      //var instance = new OpenAiAssistantsApi.MessageFile();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new OpenAiAssistantsApi.MessageFile();
      //expect(instance).to.be();
    });

    it('should have the property messageId (base name: "message_id")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new OpenAiAssistantsApi.MessageFile();
      //expect(instance).to.be();
    });

  });

}));
