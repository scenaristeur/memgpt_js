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
    instance = new OpenAiAssistantsApi.AssistantsApi();
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

  describe('AssistantsApi', function() {
    describe('createAssistantFileV1AssistantsAssistantIdFilesPost', function() {
      it('should call createAssistantFileV1AssistantsAssistantIdFilesPost successfully', function(done) {
        //uncomment below and update the code to test createAssistantFileV1AssistantsAssistantIdFilesPost
        //instance.createAssistantFileV1AssistantsAssistantIdFilesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAssistantV1AssistantsPost', function() {
      it('should call createAssistantV1AssistantsPost successfully', function(done) {
        //uncomment below and update the code to test createAssistantV1AssistantsPost
        //instance.createAssistantV1AssistantsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete', function() {
      it('should call deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete
        //instance.deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAssistantV1AssistantsAssistantIdDelete', function() {
      it('should call deleteAssistantV1AssistantsAssistantIdDelete successfully', function(done) {
        //uncomment below and update the code to test deleteAssistantV1AssistantsAssistantIdDelete
        //instance.deleteAssistantV1AssistantsAssistantIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAssistantFilesV1AssistantsAssistantIdFilesGet', function() {
      it('should call listAssistantFilesV1AssistantsAssistantIdFilesGet successfully', function(done) {
        //uncomment below and update the code to test listAssistantFilesV1AssistantsAssistantIdFilesGet
        //instance.listAssistantFilesV1AssistantsAssistantIdFilesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAssistantsV1AssistantsGet', function() {
      it('should call listAssistantsV1AssistantsGet successfully', function(done) {
        //uncomment below and update the code to test listAssistantsV1AssistantsGet
        //instance.listAssistantsV1AssistantsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyAssistantV1AssistantsAssistantIdPost', function() {
      it('should call modifyAssistantV1AssistantsAssistantIdPost successfully', function(done) {
        //uncomment below and update the code to test modifyAssistantV1AssistantsAssistantIdPost
        //instance.modifyAssistantV1AssistantsAssistantIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet', function() {
      it('should call retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet successfully', function(done) {
        //uncomment below and update the code to test retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet
        //instance.retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('retrieveAssistantV1AssistantsAssistantIdGet', function() {
      it('should call retrieveAssistantV1AssistantsAssistantIdGet successfully', function(done) {
        //uncomment below and update the code to test retrieveAssistantV1AssistantsAssistantIdGet
        //instance.retrieveAssistantV1AssistantsAssistantIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));