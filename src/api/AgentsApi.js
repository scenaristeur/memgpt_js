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
import AgentState from '../model/AgentState';
import ArchivalMemorySummary from '../model/ArchivalMemorySummary';
import CreateAgent from '../model/CreateAgent';
import CreateArchivalMemory from '../model/CreateArchivalMemory';
import HTTPValidationError from '../model/HTTPValidationError';
import MemGPTRequest from '../model/MemGPTRequest';
import MemGPTResponse from '../model/MemGPTResponse';
import MemgptSchemasMessageMessage from '../model/MemgptSchemasMessageMessage';
import Memory from '../model/Memory';
import Passage from '../model/Passage';
import RecallMemorySummary from '../model/RecallMemorySummary';
import Source from '../model/Source';
import UpdateAgentState from '../model/UpdateAgentState';

/**
* Agents service.
* @module api/AgentsApi
* @version 0.1.0
*/
export default class AgentsApi {

    /**
    * Constructs a new AgentsApi. 
    * @alias module:api/AgentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createAgentApiAgentsPost operation.
     * @callback module:api/AgentsApi~createAgentApiAgentsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AgentState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Agent
     * Create a new agent with the specified configuration.
     * @param {module:model/CreateAgent} createAgent 
     * @param {module:api/AgentsApi~createAgentApiAgentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AgentState}
     */
    createAgentApiAgentsPost(createAgent, callback) {
      let postBody = createAgent;
      // verify the required parameter 'createAgent' is set
      if (createAgent === undefined || createAgent === null) {
        throw new Error("Missing the required parameter 'createAgent' when calling createAgentApiAgentsPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AgentState;
      return this.apiClient.callApi(
        '/api/agents', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAgentApiAgentsAgentIdDelete operation.
     * @callback module:api/AgentsApi~deleteAgentApiAgentsAgentIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Agent
     * Delete an agent.
     * @param {String} agentId 
     * @param {module:api/AgentsApi~deleteAgentApiAgentsAgentIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deleteAgentApiAgentsAgentIdDelete(agentId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling deleteAgentApiAgentsAgentIdDelete");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete operation.
     * @callback module:api/AgentsApi~deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Agent Archival Memory
     * Delete a memory from an agent's archival memory store.
     * @param {String} agentId 
     * @param {String} memoryId 
     * @param {module:api/AgentsApi~deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete(agentId, memoryId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete");
      }
      // verify the required parameter 'memoryId' is set
      if (memoryId === undefined || memoryId === null) {
        throw new Error("Missing the required parameter 'memoryId' when calling deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete");
      }

      let pathParams = {
        'agent_id': agentId,
        'memory_id': memoryId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/archival/{memory_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentArchivalMemoryApiAgentsAgentIdArchivalGet operation.
     * @callback module:api/AgentsApi~getAgentArchivalMemoryApiAgentsAgentIdArchivalGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Passage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Archival Memory
     * Retrieve the memories in an agent's archival memory store (paginated query).
     * @param {String} agentId 
     * @param {Object} opts Optional parameters
     * @param {Number} [after] Unique ID of the memory to start the query range at.
     * @param {Number} [before] Unique ID of the memory to end the query range at.
     * @param {Number} [limit] How many results to include in the response.
     * @param {module:api/AgentsApi~getAgentArchivalMemoryApiAgentsAgentIdArchivalGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Passage>}
     */
    getAgentArchivalMemoryApiAgentsAgentIdArchivalGet(agentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentArchivalMemoryApiAgentsAgentIdArchivalGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
        'after': opts['after'],
        'before': opts['before'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Passage];
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/archival', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet operation.
     * @callback module:api/AgentsApi~getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ArchivalMemorySummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Archival Memory Summary
     * Retrieve the summary of the archival memory of a specific agent.
     * @param {String} agentId 
     * @param {module:api/AgentsApi~getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ArchivalMemorySummary}
     */
    getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet(agentId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ArchivalMemorySummary;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/memory/archival', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet operation.
     * @callback module:api/AgentsApi~getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MemgptSchemasMessageMessage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent In Context Messages
     * Retrieve the messages in the context of a specific agent.
     * @param {String} agentId 
     * @param {module:api/AgentsApi~getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MemgptSchemasMessageMessage>}
     */
    getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet(agentId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MemgptSchemasMessageMessage];
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/memory/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentMemoryApiAgentsAgentIdMemoryGet operation.
     * @callback module:api/AgentsApi~getAgentMemoryApiAgentsAgentIdMemoryGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Memory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Memory
     * Retrieve the memory state of a specific agent.  This endpoint fetches the current memory state of the agent identified by the user ID and agent ID.
     * @param {String} agentId 
     * @param {module:api/AgentsApi~getAgentMemoryApiAgentsAgentIdMemoryGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Memory}
     */
    getAgentMemoryApiAgentsAgentIdMemoryGet(agentId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentMemoryApiAgentsAgentIdMemoryGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Memory;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/memory', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentMessagesApiAgentsAgentIdMessagesGet operation.
     * @callback module:api/AgentsApi~getAgentMessagesApiAgentsAgentIdMessagesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MemgptSchemasMessageMessage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Messages
     * Retrieve message history for an agent.
     * @param {String} agentId 
     * @param {Object} opts Optional parameters
     * @param {String} [before] Message before which to retrieve the returned messages.
     * @param {Number} [limit = 10)] Maximum number of messages to retrieve.
     * @param {module:api/AgentsApi~getAgentMessagesApiAgentsAgentIdMessagesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MemgptSchemasMessageMessage>}
     */
    getAgentMessagesApiAgentsAgentIdMessagesGet(agentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentMessagesApiAgentsAgentIdMessagesGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
        'before': opts['before'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MemgptSchemasMessageMessage];
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/messages', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet operation.
     * @callback module:api/AgentsApi~getAgentMessagesInContextApiAgentsAgentIdMessagesContextGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MemgptSchemasMessageMessage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Messages In Context
     * Retrieve the in-context messages of a specific agent. Paginated, provide start and count to iterate.
     * @param {String} agentId 
     * @param {Number} start Message index to start on (reverse chronological).
     * @param {Number} count How many messages to retrieve.
     * @param {module:api/AgentsApi~getAgentMessagesInContextApiAgentsAgentIdMessagesContextGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MemgptSchemasMessageMessage>}
     */
    getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet(agentId, start, count, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet");
      }
      // verify the required parameter 'start' is set
      if (start === undefined || start === null) {
        throw new Error("Missing the required parameter 'start' when calling getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet");
      }
      // verify the required parameter 'count' is set
      if (count === undefined || count === null) {
        throw new Error("Missing the required parameter 'count' when calling getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
        'start': start,
        'count': count
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MemgptSchemasMessageMessage];
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/messages/context/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet operation.
     * @callback module:api/AgentsApi~getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RecallMemorySummary} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Recall Memory Summary
     * Retrieve the summary of the recall memory of a specific agent.
     * @param {String} agentId 
     * @param {module:api/AgentsApi~getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RecallMemorySummary}
     */
    getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet(agentId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RecallMemorySummary;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/memory/recall', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentSourcesApiAgentsAgentIdSourcesGet operation.
     * @callback module:api/AgentsApi~getAgentSourcesApiAgentsAgentIdSourcesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Source>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent Sources
     * Get the sources associated with an agent.
     * @param {String} agentId 
     * @param {module:api/AgentsApi~getAgentSourcesApiAgentsAgentIdSourcesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Source>}
     */
    getAgentSourcesApiAgentsAgentIdSourcesGet(agentId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentSourcesApiAgentsAgentIdSourcesGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Source];
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAgentStateApiAgentsAgentIdGet operation.
     * @callback module:api/AgentsApi~getAgentStateApiAgentsAgentIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AgentState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Agent State
     * Get the state of the agent.
     * @param {String} agentId 
     * @param {module:api/AgentsApi~getAgentStateApiAgentsAgentIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AgentState}
     */
    getAgentStateApiAgentsAgentIdGet(agentId, callback) {
      let postBody = null;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling getAgentStateApiAgentsAgentIdGet");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AgentState;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAgentsApiAdminAgentsGet operation.
     * @callback module:api/AgentsApi~getAllAgentsApiAdminAgentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AgentState>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get All Agents
     * Get a list of all agents in the database
     * @param {module:api/AgentsApi~getAllAgentsApiAdminAgentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AgentState>}
     */
    getAllAgentsApiAdminAgentsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AgentState];
      return this.apiClient.callApi(
        '/api/admin/agents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost operation.
     * @callback module:api/AgentsApi~insertAgentArchivalMemoryApiAgentsAgentIdArchivalPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Passage>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Insert Agent Archival Memory
     * Insert a memory into an agent's archival memory store.
     * @param {String} agentId 
     * @param {module:model/CreateArchivalMemory} createArchivalMemory 
     * @param {module:api/AgentsApi~insertAgentArchivalMemoryApiAgentsAgentIdArchivalPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Passage>}
     */
    insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost(agentId, createArchivalMemory, callback) {
      let postBody = createArchivalMemory;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost");
      }
      // verify the required parameter 'createArchivalMemory' is set
      if (createArchivalMemory === undefined || createArchivalMemory === null) {
        throw new Error("Missing the required parameter 'createArchivalMemory' when calling insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = [Passage];
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/archival', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listAgentsApiAgentsGet operation.
     * @callback module:api/AgentsApi~listAgentsApiAgentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/AgentState>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Agents
     * List all agents associated with a given user.  This endpoint retrieves a list of all agents and their configurations associated with the specified user ID.
     * @param {module:api/AgentsApi~listAgentsApiAgentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/AgentState>}
     */
    listAgentsApiAgentsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AgentState];
      return this.apiClient.callApi(
        '/api/agents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the sendMessageApiAgentsAgentIdMessagesPost operation.
     * @callback module:api/AgentsApi~sendMessageApiAgentsAgentIdMessagesPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MemGPTResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send Message
     * Process a user message and return the agent's response.  This endpoint accepts a message from a user and processes it through the agent. It can optionally stream the response if 'stream' is set to True.
     * @param {String} agentId 
     * @param {module:model/MemGPTRequest} memGPTRequest 
     * @param {module:api/AgentsApi~sendMessageApiAgentsAgentIdMessagesPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MemGPTResponse}
     */
    sendMessageApiAgentsAgentIdMessagesPost(agentId, memGPTRequest, callback) {
      let postBody = memGPTRequest;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling sendMessageApiAgentsAgentIdMessagesPost");
      }
      // verify the required parameter 'memGPTRequest' is set
      if (memGPTRequest === undefined || memGPTRequest === null) {
        throw new Error("Missing the required parameter 'memGPTRequest' when calling sendMessageApiAgentsAgentIdMessagesPost");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = MemGPTResponse;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/messages', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAgentApiAgentsAgentIdPost operation.
     * @callback module:api/AgentsApi~updateAgentApiAgentsAgentIdPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AgentState} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Agent
     * Update an exsiting agent
     * @param {String} agentId 
     * @param {module:model/UpdateAgentState} updateAgentState 
     * @param {module:api/AgentsApi~updateAgentApiAgentsAgentIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AgentState}
     */
    updateAgentApiAgentsAgentIdPost(agentId, updateAgentState, callback) {
      let postBody = updateAgentState;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling updateAgentApiAgentsAgentIdPost");
      }
      // verify the required parameter 'updateAgentState' is set
      if (updateAgentState === undefined || updateAgentState === null) {
        throw new Error("Missing the required parameter 'updateAgentState' when calling updateAgentApiAgentsAgentIdPost");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AgentState;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAgentMemoryApiAgentsAgentIdMemoryPost operation.
     * @callback module:api/AgentsApi~updateAgentMemoryApiAgentsAgentIdMemoryPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Memory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Agent Memory
     * Update the core memory of a specific agent.  This endpoint accepts new memory contents (human and persona) and updates the core memory of the agent identified by the user ID and agent ID.
     * @param {String} agentId 
     * @param {Object.<String, Object>} body 
     * @param {module:api/AgentsApi~updateAgentMemoryApiAgentsAgentIdMemoryPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Memory}
     */
    updateAgentMemoryApiAgentsAgentIdMemoryPost(agentId, body, callback) {
      let postBody = body;
      // verify the required parameter 'agentId' is set
      if (agentId === undefined || agentId === null) {
        throw new Error("Missing the required parameter 'agentId' when calling updateAgentMemoryApiAgentsAgentIdMemoryPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateAgentMemoryApiAgentsAgentIdMemoryPost");
      }

      let pathParams = {
        'agent_id': agentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['HTTPBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Memory;
      return this.apiClient.callApi(
        '/api/agents/{agent_id}/memory', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
