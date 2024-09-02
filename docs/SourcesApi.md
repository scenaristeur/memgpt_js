# OpenAiAssistantsApi.SourcesApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachSourceToAgentApiSourcesSourceIdAttachPost**](SourcesApi.md#attachSourceToAgentApiSourcesSourceIdAttachPost) | **POST** /api/sources/{source_id}/attach | Attach Source To Agent
[**createSourceApiSourcesPost**](SourcesApi.md#createSourceApiSourcesPost) | **POST** /api/sources | Create Source
[**deleteSourceApiSourcesSourceIdDelete**](SourcesApi.md#deleteSourceApiSourcesSourceIdDelete) | **DELETE** /api/sources/{source_id} | Delete Source
[**detachSourceFromAgentApiSourcesSourceIdDetachPost**](SourcesApi.md#detachSourceFromAgentApiSourcesSourceIdDetachPost) | **POST** /api/sources/{source_id}/detach | Detach Source From Agent
[**getJobApiSourcesStatusJobIdGet**](SourcesApi.md#getJobApiSourcesStatusJobIdGet) | **GET** /api/sources/status/{job_id} | Get Job
[**getSourceApiSourcesSourceIdGet**](SourcesApi.md#getSourceApiSourcesSourceIdGet) | **GET** /api/sources/{source_id} | Get Source
[**getSourceIdByNameApiSourcesNameSourceNameGet**](SourcesApi.md#getSourceIdByNameApiSourcesNameSourceNameGet) | **GET** /api/sources/name/{source_name} | Get Source Id By Name
[**listDocumentsApiSourcesSourceIdDocumentsGet**](SourcesApi.md#listDocumentsApiSourcesSourceIdDocumentsGet) | **GET** /api/sources/{source_id}/documents | List Documents
[**listPassagesApiSourcesSourceIdPassagesGet**](SourcesApi.md#listPassagesApiSourcesSourceIdPassagesGet) | **GET** /api/sources/{source_id}/passages  | List Passages
[**listSourcesApiSourcesGet**](SourcesApi.md#listSourcesApiSourcesGet) | **GET** /api/sources | List Sources
[**updateSourceApiSourcesSourceIdPost**](SourcesApi.md#updateSourceApiSourcesSourceIdPost) | **POST** /api/sources/{source_id} | Update Source
[**uploadFileToSourceApiSourcesSourceIdUploadPost**](SourcesApi.md#uploadFileToSourceApiSourcesSourceIdUploadPost) | **POST** /api/sources/{source_id}/upload | Upload File To Source



## attachSourceToAgentApiSourcesSourceIdAttachPost

> Source attachSourceToAgentApiSourcesSourceIdAttachPost(sourceId, agentId)

Attach Source To Agent

Attach a data source to an existing agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
let agentId = "agentId_example"; // String | The unique identifier of the agent to attach the source to.
apiInstance.attachSourceToAgentApiSourcesSourceIdAttachPost(sourceId, agentId, (error, data, response) => {
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
 **sourceId** | **String**|  | 
 **agentId** | **String**| The unique identifier of the agent to attach the source to. | 

### Return type

[**Source**](Source.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createSourceApiSourcesPost

> Source createSourceApiSourcesPost(sourceCreate)

Create Source

Create a new data source.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceCreate = new OpenAiAssistantsApi.SourceCreate(); // SourceCreate | 
apiInstance.createSourceApiSourcesPost(sourceCreate, (error, data, response) => {
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
 **sourceCreate** | [**SourceCreate**](SourceCreate.md)|  | 

### Return type

[**Source**](Source.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSourceApiSourcesSourceIdDelete

> Object deleteSourceApiSourcesSourceIdDelete(sourceId)

Delete Source

Delete a data source.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
apiInstance.deleteSourceApiSourcesSourceIdDelete(sourceId, (error, data, response) => {
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
 **sourceId** | **String**|  | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## detachSourceFromAgentApiSourcesSourceIdDetachPost

> Object detachSourceFromAgentApiSourcesSourceIdDetachPost(sourceId, agentId)

Detach Source From Agent

Detach a data source from an existing agent.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
let agentId = "agentId_example"; // String | The unique identifier of the agent to detach the source from.
apiInstance.detachSourceFromAgentApiSourcesSourceIdDetachPost(sourceId, agentId, (error, data, response) => {
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
 **sourceId** | **String**|  | 
 **agentId** | **String**| The unique identifier of the agent to detach the source from. | 

### Return type

**Object**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getJobApiSourcesStatusJobIdGet

> Job getJobApiSourcesStatusJobIdGet(jobId)

Get Job

Get the status of a job.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let jobId = "jobId_example"; // String | 
apiInstance.getJobApiSourcesStatusJobIdGet(jobId, (error, data, response) => {
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
 **jobId** | **String**|  | 

### Return type

[**Job**](Job.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceApiSourcesSourceIdGet

> Source getSourceApiSourcesSourceIdGet(sourceId)

Get Source

Get all sources

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
apiInstance.getSourceApiSourcesSourceIdGet(sourceId, (error, data, response) => {
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
 **sourceId** | **String**|  | 

### Return type

[**Source**](Source.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSourceIdByNameApiSourcesNameSourceNameGet

> String getSourceIdByNameApiSourcesNameSourceNameGet(sourceName)

Get Source Id By Name

Get a source by name

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceName = "sourceName_example"; // String | 
apiInstance.getSourceIdByNameApiSourcesNameSourceNameGet(sourceName, (error, data, response) => {
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
 **sourceName** | **String**|  | 

### Return type

**String**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listDocumentsApiSourcesSourceIdDocumentsGet

> [Document] listDocumentsApiSourcesSourceIdDocumentsGet(sourceId)

List Documents

List all documents associated with a data source.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
apiInstance.listDocumentsApiSourcesSourceIdDocumentsGet(sourceId, (error, data, response) => {
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
 **sourceId** | **String**|  | 

### Return type

[**[Document]**](Document.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listPassagesApiSourcesSourceIdPassagesGet

> [Passage] listPassagesApiSourcesSourceIdPassagesGet(sourceId)

List Passages

List all passages associated with a data source.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
apiInstance.listPassagesApiSourcesSourceIdPassagesGet(sourceId, (error, data, response) => {
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
 **sourceId** | **String**|  | 

### Return type

[**[Passage]**](Passage.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listSourcesApiSourcesGet

> [Source] listSourcesApiSourcesGet()

List Sources

List all data sources created by a user.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
apiInstance.listSourcesApiSourcesGet((error, data, response) => {
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

[**[Source]**](Source.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSourceApiSourcesSourceIdPost

> Source updateSourceApiSourcesSourceIdPost(sourceId, sourceUpdate)

Update Source

Update the name or documentation of an existing data source.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
let sourceUpdate = new OpenAiAssistantsApi.SourceUpdate(); // SourceUpdate | 
apiInstance.updateSourceApiSourcesSourceIdPost(sourceId, sourceUpdate, (error, data, response) => {
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
 **sourceId** | **String**|  | 
 **sourceUpdate** | [**SourceUpdate**](SourceUpdate.md)|  | 

### Return type

[**Source**](Source.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## uploadFileToSourceApiSourcesSourceIdUploadPost

> Job uploadFileToSourceApiSourcesSourceIdUploadPost(sourceId, file)

Upload File To Source

Upload a file to a data source.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.SourcesApi();
let sourceId = "sourceId_example"; // String | 
let file = "/path/to/file"; // File | 
apiInstance.uploadFileToSourceApiSourcesSourceIdUploadPost(sourceId, file, (error, data, response) => {
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
 **sourceId** | **String**|  | 
 **file** | **File**|  | 

### Return type

[**Job**](Job.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

