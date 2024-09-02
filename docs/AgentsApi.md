# OpenAiAssistantsApi.AgentsApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgentApiAgentsPost**](AgentsApi.md#createAgentApiAgentsPost) | **POST** /api/agents | Create Agent
[**deleteAgentApiAgentsAgentIdDelete**](AgentsApi.md#deleteAgentApiAgentsAgentIdDelete) | **DELETE** /api/agents/{agent_id} | Delete Agent
[**deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete**](AgentsApi.md#deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete) | **DELETE** /api/agents/{agent_id}/archival/{memory_id} | Delete Agent Archival Memory
[**getAgentArchivalMemoryApiAgentsAgentIdArchivalGet**](AgentsApi.md#getAgentArchivalMemoryApiAgentsAgentIdArchivalGet) | **GET** /api/agents/{agent_id}/archival | Get Agent Archival Memory
[**getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet**](AgentsApi.md#getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet) | **GET** /api/agents/{agent_id}/memory/archival | Get Agent Archival Memory Summary
[**getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet**](AgentsApi.md#getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet) | **GET** /api/agents/{agent_id}/memory/messages | Get Agent In Context Messages
[**getAgentMemoryApiAgentsAgentIdMemoryGet**](AgentsApi.md#getAgentMemoryApiAgentsAgentIdMemoryGet) | **GET** /api/agents/{agent_id}/memory | Get Agent Memory
[**getAgentMessagesApiAgentsAgentIdMessagesGet**](AgentsApi.md#getAgentMessagesApiAgentsAgentIdMessagesGet) | **GET** /api/agents/{agent_id}/messages | Get Agent Messages
[**getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet**](AgentsApi.md#getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet) | **GET** /api/agents/{agent_id}/messages/context/ | Get Agent Messages In Context
[**getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet**](AgentsApi.md#getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet) | **GET** /api/agents/{agent_id}/memory/recall | Get Agent Recall Memory Summary
[**getAgentSourcesApiAgentsAgentIdSourcesGet**](AgentsApi.md#getAgentSourcesApiAgentsAgentIdSourcesGet) | **GET** /api/agents/{agent_id}/sources | Get Agent Sources
[**getAgentStateApiAgentsAgentIdGet**](AgentsApi.md#getAgentStateApiAgentsAgentIdGet) | **GET** /api/agents/{agent_id} | Get Agent State
[**getAllAgentsApiAdminAgentsGet**](AgentsApi.md#getAllAgentsApiAdminAgentsGet) | **GET** /api/admin/agents | Get All Agents
[**insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost**](AgentsApi.md#insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost) | **POST** /api/agents/{agent_id}/archival | Insert Agent Archival Memory
[**listAgentsApiAgentsGet**](AgentsApi.md#listAgentsApiAgentsGet) | **GET** /api/agents | List Agents
[**sendMessageApiAgentsAgentIdMessagesPost**](AgentsApi.md#sendMessageApiAgentsAgentIdMessagesPost) | **POST** /api/agents/{agent_id}/messages | Send Message
[**updateAgentApiAgentsAgentIdPost**](AgentsApi.md#updateAgentApiAgentsAgentIdPost) | **POST** /api/agents/{agent_id} | Update Agent
[**updateAgentMemoryApiAgentsAgentIdMemoryPost**](AgentsApi.md#updateAgentMemoryApiAgentsAgentIdMemoryPost) | **POST** /api/agents/{agent_id}/memory | Update Agent Memory



## createAgentApiAgentsPost

> AgentState createAgentApiAgentsPost(createAgent)

Create Agent

Create a new agent with the specified configuration.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let createAgent = new OpenAiAssistantsApi.CreateAgent(); // CreateAgent | 
apiInstance.createAgentApiAgentsPost(createAgent, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAgent** | [**CreateAgent**](CreateAgent.md)|  | 

### Return type

[**AgentState**](AgentState.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAgentApiAgentsAgentIdDelete

> Object deleteAgentApiAgentsAgentIdDelete(agentId)

Delete Agent

Delete an agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
apiInstance.deleteAgentApiAgentsAgentIdDelete(agentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete

> Object deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete(agentId, memoryId)

Delete Agent Archival Memory

Delete a memory from an agent&#39;s archival memory store.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let memoryId = "memoryId_example"; // String | 
apiInstance.deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete(agentId, memoryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **memoryId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentArchivalMemoryApiAgentsAgentIdArchivalGet

> [Passage] getAgentArchivalMemoryApiAgentsAgentIdArchivalGet(agentId, opts)

Get Agent Archival Memory

Retrieve the memories in an agent&#39;s archival memory store (paginated query).

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let opts = {
  'after': 56, // Number | Unique ID of the memory to start the query range at.
  'before': 56, // Number | Unique ID of the memory to end the query range at.
  'limit': 56 // Number | How many results to include in the response.
};
apiInstance.getAgentArchivalMemoryApiAgentsAgentIdArchivalGet(agentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **after** | **Number**| Unique ID of the memory to start the query range at. | [optional] 
 **before** | **Number**| Unique ID of the memory to end the query range at. | [optional] 
 **limit** | **Number**| How many results to include in the response. | [optional] 

### Return type

[**[Passage]**](Passage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet

> ArchivalMemorySummary getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet(agentId)

Get Agent Archival Memory Summary

Retrieve the summary of the archival memory of a specific agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
apiInstance.getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet(agentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 

### Return type

[**ArchivalMemorySummary**](ArchivalMemorySummary.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet

> [MemgptSchemasMessageMessage] getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet(agentId)

Get Agent In Context Messages

Retrieve the messages in the context of a specific agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
apiInstance.getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet(agentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 

### Return type

[**[MemgptSchemasMessageMessage]**](MemgptSchemasMessageMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentMemoryApiAgentsAgentIdMemoryGet

> Memory getAgentMemoryApiAgentsAgentIdMemoryGet(agentId)

Get Agent Memory

Retrieve the memory state of a specific agent.  This endpoint fetches the current memory state of the agent identified by the user ID and agent ID.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
apiInstance.getAgentMemoryApiAgentsAgentIdMemoryGet(agentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 

### Return type

[**Memory**](Memory.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentMessagesApiAgentsAgentIdMessagesGet

> [MemgptSchemasMessageMessage] getAgentMessagesApiAgentsAgentIdMessagesGet(agentId, opts)

Get Agent Messages

Retrieve message history for an agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let opts = {
  'before': "before_example", // String | Message before which to retrieve the returned messages.
  'limit': 10 // Number | Maximum number of messages to retrieve.
};
apiInstance.getAgentMessagesApiAgentsAgentIdMessagesGet(agentId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **before** | **String**| Message before which to retrieve the returned messages. | [optional] 
 **limit** | **Number**| Maximum number of messages to retrieve. | [optional] [default to 10]

### Return type

[**[MemgptSchemasMessageMessage]**](MemgptSchemasMessageMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet

> [MemgptSchemasMessageMessage] getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet(agentId, start, count)

Get Agent Messages In Context

Retrieve the in-context messages of a specific agent. Paginated, provide start and count to iterate.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let start = 56; // Number | Message index to start on (reverse chronological).
let count = 56; // Number | How many messages to retrieve.
apiInstance.getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet(agentId, start, count, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **start** | **Number**| Message index to start on (reverse chronological). | 
 **count** | **Number**| How many messages to retrieve. | 

### Return type

[**[MemgptSchemasMessageMessage]**](MemgptSchemasMessageMessage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet

> RecallMemorySummary getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet(agentId)

Get Agent Recall Memory Summary

Retrieve the summary of the recall memory of a specific agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
apiInstance.getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet(agentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 

### Return type

[**RecallMemorySummary**](RecallMemorySummary.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentSourcesApiAgentsAgentIdSourcesGet

> [Source] getAgentSourcesApiAgentsAgentIdSourcesGet(agentId)

Get Agent Sources

Get the sources associated with an agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
apiInstance.getAgentSourcesApiAgentsAgentIdSourcesGet(agentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 

### Return type

[**[Source]**](Source.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAgentStateApiAgentsAgentIdGet

> AgentState getAgentStateApiAgentsAgentIdGet(agentId)

Get Agent State

Get the state of the agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
apiInstance.getAgentStateApiAgentsAgentIdGet(agentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 

### Return type

[**AgentState**](AgentState.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllAgentsApiAdminAgentsGet

> [AgentState] getAllAgentsApiAdminAgentsGet()

Get All Agents

Get a list of all agents in the database

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
apiInstance.getAllAgentsApiAdminAgentsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[AgentState]**](AgentState.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost

> [Passage] insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost(agentId, createArchivalMemory)

Insert Agent Archival Memory

Insert a memory into an agent&#39;s archival memory store.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let createArchivalMemory = new OpenAiAssistantsApi.CreateArchivalMemory(); // CreateArchivalMemory | 
apiInstance.insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost(agentId, createArchivalMemory, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **createArchivalMemory** | [**CreateArchivalMemory**](CreateArchivalMemory.md)|  | 

### Return type

[**[Passage]**](Passage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listAgentsApiAgentsGet

> [AgentState] listAgentsApiAgentsGet()

List Agents

List all agents associated with a given user.  This endpoint retrieves a list of all agents and their configurations associated with the specified user ID.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
apiInstance.listAgentsApiAgentsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[AgentState]**](AgentState.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendMessageApiAgentsAgentIdMessagesPost

> MemGPTResponse sendMessageApiAgentsAgentIdMessagesPost(agentId, memGPTRequest)

Send Message

Process a user message and return the agent&#39;s response.  This endpoint accepts a message from a user and processes it through the agent. It can optionally stream the response if &#39;stream&#39; is set to True.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let memGPTRequest = new OpenAiAssistantsApi.MemGPTRequest(); // MemGPTRequest | 
apiInstance.sendMessageApiAgentsAgentIdMessagesPost(agentId, memGPTRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **memGPTRequest** | [**MemGPTRequest**](MemGPTRequest.md)|  | 

### Return type

[**MemGPTResponse**](MemGPTResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgentApiAgentsAgentIdPost

> AgentState updateAgentApiAgentsAgentIdPost(agentId, updateAgentState)

Update Agent

Update an exsiting agent

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let updateAgentState = new OpenAiAssistantsApi.UpdateAgentState(); // UpdateAgentState | 
apiInstance.updateAgentApiAgentsAgentIdPost(agentId, updateAgentState, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **updateAgentState** | [**UpdateAgentState**](UpdateAgentState.md)|  | 

### Return type

[**AgentState**](AgentState.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateAgentMemoryApiAgentsAgentIdMemoryPost

> Memory updateAgentMemoryApiAgentsAgentIdMemoryPost(agentId, body)

Update Agent Memory

Update the core memory of a specific agent.  This endpoint accepts new memory contents (human and persona) and updates the core memory of the agent identified by the user ID and agent ID.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AgentsApi();
let agentId = "agentId_example"; // String | 
let body = {key: null}; // Object | 
apiInstance.updateAgentMemoryApiAgentsAgentIdMemoryPost(agentId, body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentId** | **String**|  | 
 **body** | **Object**|  | 

### Return type

[**Memory**](Memory.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

