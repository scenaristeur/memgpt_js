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
import CreateThreadRequest from '../model/CreateThreadRequest';
import DeleteThreadResponse from '../model/DeleteThreadResponse';
import HTTPValidationError from '../model/HTTPValidationError';
import ModifyThreadRequest from '../model/ModifyThreadRequest';
import OpenAIThread from '../model/OpenAIThread';

/**
* Threads service.
* @module api/ThreadsApi
* @version 0.1.0
*/
export default class ThreadsApi {

    /**
    * Constructs a new ThreadsApi. 
    * @alias module:api/ThreadsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createThreadV1ThreadsPost operation.
     * @callback module:api/ThreadsApi~createThreadV1ThreadsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenAIThread} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Thread
     * @param {module:model/CreateThreadRequest} createThreadRequest 
     * @param {module:api/ThreadsApi~createThreadV1ThreadsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenAIThread}
     */
    createThreadV1ThreadsPost(createThreadRequest, callback) {
      let postBody = createThreadRequest;
      // verify the required parameter 'createThreadRequest' is set
      if (createThreadRequest === undefined || createThreadRequest === null) {
        throw new Error("Missing the required parameter 'createThreadRequest' when calling createThreadV1ThreadsPost");
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
      let returnType = OpenAIThread;
      return this.apiClient.callApi(
        '/v1/threads', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteThreadV1ThreadsThreadIdDelete operation.
     * @callback module:api/ThreadsApi~deleteThreadV1ThreadsThreadIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeleteThreadResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Thread
     * @param {String} threadId The unique identifier of the thread.
     * @param {module:api/ThreadsApi~deleteThreadV1ThreadsThreadIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeleteThreadResponse}
     */
    deleteThreadV1ThreadsThreadIdDelete(threadId, callback) {
      let postBody = null;
      // verify the required parameter 'threadId' is set
      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling deleteThreadV1ThreadsThreadIdDelete");
      }

      let pathParams = {
        'thread_id': threadId
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
      let returnType = DeleteThreadResponse;
      return this.apiClient.callApi(
        '/v1/threads/{thread_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyThreadV1ThreadsThreadIdGet operation.
     * @callback module:api/ThreadsApi~modifyThreadV1ThreadsThreadIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/OpenAIThread} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Thread
     * @param {String} threadId The unique identifier of the thread.
     * @param {module:model/ModifyThreadRequest} modifyThreadRequest 
     * @param {module:api/ThreadsApi~modifyThreadV1ThreadsThreadIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/OpenAIThread}
     */
    modifyThreadV1ThreadsThreadIdGet(threadId, modifyThreadRequest, callback) {
      let postBody = modifyThreadRequest;
      // verify the required parameter 'threadId' is set
      if (threadId === undefined || threadId === null) {
        throw new Error("Missing the required parameter 'threadId' when calling modifyThreadV1ThreadsThreadIdGet");
      }
      // verify the required parameter 'modifyThreadRequest' is set
      if (modifyThreadRequest === undefined || modifyThreadRequest === null) {
        throw new Error("Missing the required parameter 'modifyThreadRequest' when calling modifyThreadV1ThreadsThreadIdGet");
      }

      let pathParams = {
        'thread_id': threadId
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
      let returnType = OpenAIThread;
      return this.apiClient.callApi(
        '/v1/threads/{thread_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
