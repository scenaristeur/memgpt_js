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


import ApiClient from "../ApiClient";
import AssistantFile from '../model/AssistantFile';
import CreateAssistantFileRequest from '../model/CreateAssistantFileRequest';
import CreateAssistantRequest from '../model/CreateAssistantRequest';
import DeleteAssistantFileResponse from '../model/DeleteAssistantFileResponse';
import DeleteAssistantResponse from '../model/DeleteAssistantResponse';
import HTTPValidationError from '../model/HTTPValidationError';
import OpenAIAssistant from '../model/OpenAIAssistant';

/**
* Assistants service.
* @module api/AssistantsApi
* @version 0.1.0
*/
export default class AssistantsApi {

    /**
    * Constructs a new AssistantsApi. 
    * @alias module:api/AssistantsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAssistantFileV1AssistantsAssistantIdFilesPost operation.
     * @callback module:api/AssistantsApi~createAssistantFileV1AssistantsAssistantIdFilesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssistantFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Assistant File
     * @param {String} assistantId The unique identifier of the assistant.
     * @param {module:model/CreateAssistantFileRequest} createAssistantFileRequest 
     * @param {module:api/AssistantsApi~createAssistantFileV1AssistantsAssistantIdFilesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssistantFile}
     */
    createAssistantFileV1AssistantsAssistantIdFilesPost(assistantId, createAssistantFileRequest, callback) {
      let postBody = createAssistantFileRequest;
      // verify the required parameter 'assistantId' is set
      if (assistantId === undefined || assistantId === null) {
        throw new Error("Missing the required parameter 'assistantId' when calling createAssistantFileV1AssistantsAssistantIdFilesPost");
      }
      // verify the required parameter 'createAssistantFileRequest' is set
      if (createAssistantFileRequest === undefined || createAssistantFileRequest === null) {
        throw new Error("Missing the required parameter 'createAssistantFileRequest' when calling createAssistantFileV1AssistantsAssistantIdFilesPost");
      }

      let pathParams = {
        'assistant_id': assistantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AssistantFile;
      return this.apiClient.callApi(
        '/v1/assistants/{assistant_id}/files', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createAssistantV1AssistantsPost operation.
     * @callback module:api/AssistantsApi~createAssistantV1AssistantsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenAIAssistant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Assistant
     * @param {module:model/CreateAssistantRequest} createAssistantRequest 
     * @param {module:api/AssistantsApi~createAssistantV1AssistantsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenAIAssistant}
     */
    createAssistantV1AssistantsPost(createAssistantRequest, callback) {
      let postBody = createAssistantRequest;
      // verify the required parameter 'createAssistantRequest' is set
      if (createAssistantRequest === undefined || createAssistantRequest === null) {
        throw new Error("Missing the required parameter 'createAssistantRequest' when calling createAssistantV1AssistantsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OpenAIAssistant;
      return this.apiClient.callApi(
        '/v1/assistants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete operation.
     * @callback module:api/AssistantsApi~deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAssistantFileResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Assistant File
     * @param {String} assistantId The unique identifier of the assistant.
     * @param {String} fileId The unique identifier of the file.
     * @param {module:api/AssistantsApi~deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAssistantFileResponse}
     */
    deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete(assistantId, fileId, callback) {
      let postBody = null;
      // verify the required parameter 'assistantId' is set
      if (assistantId === undefined || assistantId === null) {
        throw new Error("Missing the required parameter 'assistantId' when calling deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete");
      }
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete");
      }

      let pathParams = {
        'assistant_id': assistantId,
        'file_id': fileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteAssistantFileResponse;
      return this.apiClient.callApi(
        '/v1/assistants/{assistant_id}/files/{file_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAssistantV1AssistantsAssistantIdDelete operation.
     * @callback module:api/AssistantsApi~deleteAssistantV1AssistantsAssistantIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteAssistantResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Assistant
     * @param {String} assistantId The unique identifier of the assistant.
     * @param {module:api/AssistantsApi~deleteAssistantV1AssistantsAssistantIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteAssistantResponse}
     */
    deleteAssistantV1AssistantsAssistantIdDelete(assistantId, callback) {
      let postBody = null;
      // verify the required parameter 'assistantId' is set
      if (assistantId === undefined || assistantId === null) {
        throw new Error("Missing the required parameter 'assistantId' when calling deleteAssistantV1AssistantsAssistantIdDelete");
      }

      let pathParams = {
        'assistant_id': assistantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DeleteAssistantResponse;
      return this.apiClient.callApi(
        '/v1/assistants/{assistant_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssistantFilesV1AssistantsAssistantIdFilesGet operation.
     * @callback module:api/AssistantsApi~listAssistantFilesV1AssistantsAssistantIdFilesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AssistantFile>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Assistant Files
     * @param {String} assistantId The unique identifier of the assistant.
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 1000)] How many files to retrieve.
     * @param {String} [order = 'asc')] Order of files to retrieve (either 'asc' or 'desc').
     * @param {String} [after] A cursor for use in pagination. `after` is an object ID that defines your place in the list.
     * @param {String} [before] A cursor for use in pagination. `after` is an object ID that defines your place in the list.
     * @param {module:api/AssistantsApi~listAssistantFilesV1AssistantsAssistantIdFilesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AssistantFile>}
     */
    listAssistantFilesV1AssistantsAssistantIdFilesGet(assistantId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'assistantId' is set
      if (assistantId === undefined || assistantId === null) {
        throw new Error("Missing the required parameter 'assistantId' when calling listAssistantFilesV1AssistantsAssistantIdFilesGet");
      }

      let pathParams = {
        'assistant_id': assistantId
      };
      let queryParams = {
        'limit': opts['limit'],
        'order': opts['order'],
        'after': opts['after'],
        'before': opts['before']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AssistantFile];
      return this.apiClient.callApi(
        '/v1/assistants/{assistant_id}/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAssistantsV1AssistantsGet operation.
     * @callback module:api/AssistantsApi~listAssistantsV1AssistantsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/OpenAIAssistant>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Assistants
     * @param {Object} opts Optional parameters
     * @param {Number} [limit = 1000)] How many assistants to retrieve.
     * @param {String} [order = 'asc')] Order of assistants to retrieve (either 'asc' or 'desc').
     * @param {String} [after] A cursor for use in pagination. `after` is an object ID that defines your place in the list.
     * @param {String} [before] A cursor for use in pagination. `after` is an object ID that defines your place in the list.
     * @param {module:api/AssistantsApi~listAssistantsV1AssistantsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/OpenAIAssistant>}
     */
    listAssistantsV1AssistantsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'order': opts['order'],
        'after': opts['after'],
        'before': opts['before']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [OpenAIAssistant];
      return this.apiClient.callApi(
        '/v1/assistants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyAssistantV1AssistantsAssistantIdPost operation.
     * @callback module:api/AssistantsApi~modifyAssistantV1AssistantsAssistantIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenAIAssistant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Assistant
     * @param {String} assistantId The unique identifier of the assistant.
     * @param {module:model/CreateAssistantRequest} createAssistantRequest 
     * @param {module:api/AssistantsApi~modifyAssistantV1AssistantsAssistantIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenAIAssistant}
     */
    modifyAssistantV1AssistantsAssistantIdPost(assistantId, createAssistantRequest, callback) {
      let postBody = createAssistantRequest;
      // verify the required parameter 'assistantId' is set
      if (assistantId === undefined || assistantId === null) {
        throw new Error("Missing the required parameter 'assistantId' when calling modifyAssistantV1AssistantsAssistantIdPost");
      }
      // verify the required parameter 'createAssistantRequest' is set
      if (createAssistantRequest === undefined || createAssistantRequest === null) {
        throw new Error("Missing the required parameter 'createAssistantRequest' when calling modifyAssistantV1AssistantsAssistantIdPost");
      }

      let pathParams = {
        'assistant_id': assistantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = OpenAIAssistant;
      return this.apiClient.callApi(
        '/v1/assistants/{assistant_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet operation.
     * @callback module:api/AssistantsApi~retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AssistantFile} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Assistant File
     * @param {String} assistantId The unique identifier of the assistant.
     * @param {String} fileId The unique identifier of the file.
     * @param {module:api/AssistantsApi~retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AssistantFile}
     */
    retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet(assistantId, fileId, callback) {
      let postBody = null;
      // verify the required parameter 'assistantId' is set
      if (assistantId === undefined || assistantId === null) {
        throw new Error("Missing the required parameter 'assistantId' when calling retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet");
      }
      // verify the required parameter 'fileId' is set
      if (fileId === undefined || fileId === null) {
        throw new Error("Missing the required parameter 'fileId' when calling retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet");
      }

      let pathParams = {
        'assistant_id': assistantId,
        'file_id': fileId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AssistantFile;
      return this.apiClient.callApi(
        '/v1/assistants/{assistant_id}/files/{file_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the retrieveAssistantV1AssistantsAssistantIdGet operation.
     * @callback module:api/AssistantsApi~retrieveAssistantV1AssistantsAssistantIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenAIAssistant} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Assistant
     * @param {String} assistantId The unique identifier of the assistant.
     * @param {module:api/AssistantsApi~retrieveAssistantV1AssistantsAssistantIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenAIAssistant}
     */
    retrieveAssistantV1AssistantsAssistantIdGet(assistantId, callback) {
      let postBody = null;
      // verify the required parameter 'assistantId' is set
      if (assistantId === undefined || assistantId === null) {
        throw new Error("Missing the required parameter 'assistantId' when calling retrieveAssistantV1AssistantsAssistantIdGet");
      }

      let pathParams = {
        'assistant_id': assistantId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = OpenAIAssistant;
      return this.apiClient.callApi(
        '/v1/assistants/{assistant_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}