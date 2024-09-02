# OpenAiAssistantsApi.ToolsApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createToolAdminToolsPost**](ToolsApi.md#createToolAdminToolsPost) | **POST** /admin/tools | Create Tool
[**createToolApiToolsPost**](ToolsApi.md#createToolApiToolsPost) | **POST** /api/tools | Create Tool
[**deleteToolAdminToolsToolNameDelete**](ToolsApi.md#deleteToolAdminToolsToolNameDelete) | **DELETE** /admin/tools/{tool_name} | Delete Tool
[**deleteToolApiToolsToolIdDelete**](ToolsApi.md#deleteToolApiToolsToolIdDelete) | **DELETE** /api/tools/{tool_id} | Delete Tool
[**getToolAdminToolsToolNameGet**](ToolsApi.md#getToolAdminToolsToolNameGet) | **GET** /admin/tools/{tool_name} | Get Tool
[**getToolApiToolsToolIdGet**](ToolsApi.md#getToolApiToolsToolIdGet) | **GET** /api/tools/{tool_id} | Get Tool
[**getToolIdApiToolsNameToolNameGet**](ToolsApi.md#getToolIdApiToolsNameToolNameGet) | **GET** /api/tools/name/{tool_name} | Get Tool Id
[**listAllToolsAdminToolsGet**](ToolsApi.md#listAllToolsAdminToolsGet) | **GET** /admin/tools | List All Tools
[**listAllToolsApiToolsGet**](ToolsApi.md#listAllToolsApiToolsGet) | **GET** /api/tools | List All Tools
[**updateToolApiToolsToolIdPost**](ToolsApi.md#updateToolApiToolsToolIdPost) | **POST** /api/tools/{tool_id} | Update Tool



## createToolAdminToolsPost

> ToolOutput createToolAdminToolsPost(createToolRequest)

Create Tool

Create a new tool

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let createToolRequest = new OpenAiAssistantsApi.CreateToolRequest(); // CreateToolRequest | 
apiInstance.createToolAdminToolsPost(createToolRequest, (error, data, response) => {
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
 **createToolRequest** | [**CreateToolRequest**](CreateToolRequest.md)|  | 

### Return type

[**ToolOutput**](ToolOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createToolApiToolsPost

> ToolOutput createToolApiToolsPost(toolCreate)

Create Tool

Create a new tool

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let toolCreate = new OpenAiAssistantsApi.ToolCreate(); // ToolCreate | 
apiInstance.createToolApiToolsPost(toolCreate, (error, data, response) => {
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
 **toolCreate** | [**ToolCreate**](ToolCreate.md)|  | 

### Return type

[**ToolOutput**](ToolOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteToolAdminToolsToolNameDelete

> Object deleteToolAdminToolsToolNameDelete(toolName)

Delete Tool

Delete a tool by name

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let toolName = "toolName_example"; // String | 
apiInstance.deleteToolAdminToolsToolNameDelete(toolName, (error, data, response) => {
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
 **toolName** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteToolApiToolsToolIdDelete

> Object deleteToolApiToolsToolIdDelete(toolId)

Delete Tool

Delete a tool by name

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let toolId = "toolId_example"; // String | 
apiInstance.deleteToolApiToolsToolIdDelete(toolId, (error, data, response) => {
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
 **toolId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getToolAdminToolsToolNameGet

> ToolOutput getToolAdminToolsToolNameGet(toolName)

Get Tool

Get a tool by name

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let toolName = "toolName_example"; // String | 
apiInstance.getToolAdminToolsToolNameGet(toolName, (error, data, response) => {
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
 **toolName** | **String**|  | 

### Return type

[**ToolOutput**](ToolOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getToolApiToolsToolIdGet

> ToolOutput getToolApiToolsToolIdGet(toolId)

Get Tool

Get a tool by name

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let toolId = "toolId_example"; // String | 
apiInstance.getToolApiToolsToolIdGet(toolId, (error, data, response) => {
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
 **toolId** | **String**|  | 

### Return type

[**ToolOutput**](ToolOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getToolIdApiToolsNameToolNameGet

> String getToolIdApiToolsNameToolNameGet(toolName)

Get Tool Id

Get a tool by name

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let toolName = "toolName_example"; // String | 
apiInstance.getToolIdApiToolsNameToolNameGet(toolName, (error, data, response) => {
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
 **toolName** | **String**|  | 

### Return type

**String**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllToolsAdminToolsGet

> ListToolsResponse listAllToolsAdminToolsGet()

List All Tools

Get a list of all tools available to agents created by a user

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
apiInstance.listAllToolsAdminToolsGet((error, data, response) => {
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

[**ListToolsResponse**](ListToolsResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAllToolsApiToolsGet

> [ToolOutput] listAllToolsApiToolsGet()

List All Tools

Get a list of all tools available to agents created by a user

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
apiInstance.listAllToolsApiToolsGet((error, data, response) => {
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

[**[ToolOutput]**](ToolOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateToolApiToolsToolIdPost

> ToolOutput updateToolApiToolsToolIdPost(toolId, toolUpdate)

Update Tool

Update an existing tool

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ToolsApi();
let toolId = "toolId_example"; // String | 
let toolUpdate = new OpenAiAssistantsApi.ToolUpdate(); // ToolUpdate | 
apiInstance.updateToolApiToolsToolIdPost(toolId, toolUpdate, (error, data, response) => {
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
 **toolId** | **String**|  | 
 **toolUpdate** | [**ToolUpdate**](ToolUpdate.md)|  | 

### Return type

[**ToolOutput**](ToolOutput.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

