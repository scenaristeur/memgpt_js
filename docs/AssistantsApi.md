# OpenAiAssistantsApi.AssistantsApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAssistantFileV1AssistantsAssistantIdFilesPost**](AssistantsApi.md#createAssistantFileV1AssistantsAssistantIdFilesPost) | **POST** /v1/assistants/{assistant_id}/files | Create Assistant File
[**createAssistantV1AssistantsPost**](AssistantsApi.md#createAssistantV1AssistantsPost) | **POST** /v1/assistants | Create Assistant
[**deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete**](AssistantsApi.md#deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete) | **DELETE** /v1/assistants/{assistant_id}/files/{file_id} | Delete Assistant File
[**deleteAssistantV1AssistantsAssistantIdDelete**](AssistantsApi.md#deleteAssistantV1AssistantsAssistantIdDelete) | **DELETE** /v1/assistants/{assistant_id} | Delete Assistant
[**listAssistantFilesV1AssistantsAssistantIdFilesGet**](AssistantsApi.md#listAssistantFilesV1AssistantsAssistantIdFilesGet) | **GET** /v1/assistants/{assistant_id}/files | List Assistant Files
[**listAssistantsV1AssistantsGet**](AssistantsApi.md#listAssistantsV1AssistantsGet) | **GET** /v1/assistants | List Assistants
[**modifyAssistantV1AssistantsAssistantIdPost**](AssistantsApi.md#modifyAssistantV1AssistantsAssistantIdPost) | **POST** /v1/assistants/{assistant_id} | Modify Assistant
[**retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet**](AssistantsApi.md#retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet) | **GET** /v1/assistants/{assistant_id}/files/{file_id} | Retrieve Assistant File
[**retrieveAssistantV1AssistantsAssistantIdGet**](AssistantsApi.md#retrieveAssistantV1AssistantsAssistantIdGet) | **GET** /v1/assistants/{assistant_id} | Retrieve Assistant



## createAssistantFileV1AssistantsAssistantIdFilesPost

> AssistantFile createAssistantFileV1AssistantsAssistantIdFilesPost(assistantId, createAssistantFileRequest)

Create Assistant File

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The unique identifier of the assistant.
let createAssistantFileRequest = new OpenAiAssistantsApi.CreateAssistantFileRequest(); // CreateAssistantFileRequest | 
apiInstance.createAssistantFileV1AssistantsAssistantIdFilesPost(assistantId, createAssistantFileRequest, (error, data, response) => {
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
 **assistantId** | **String**| The unique identifier of the assistant. | 
 **createAssistantFileRequest** | [**CreateAssistantFileRequest**](CreateAssistantFileRequest.md)|  | 

### Return type

[**AssistantFile**](AssistantFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createAssistantV1AssistantsPost

> OpenAIAssistant createAssistantV1AssistantsPost(createAssistantRequest)

Create Assistant

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let createAssistantRequest = new OpenAiAssistantsApi.CreateAssistantRequest(); // CreateAssistantRequest | 
apiInstance.createAssistantV1AssistantsPost(createAssistantRequest, (error, data, response) => {
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
 **createAssistantRequest** | [**CreateAssistantRequest**](CreateAssistantRequest.md)|  | 

### Return type

[**OpenAIAssistant**](OpenAIAssistant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete

> DeleteAssistantFileResponse deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete(assistantId, fileId)

Delete Assistant File

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The unique identifier of the assistant.
let fileId = "fileId_example"; // String | The unique identifier of the file.
apiInstance.deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete(assistantId, fileId, (error, data, response) => {
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
 **assistantId** | **String**| The unique identifier of the assistant. | 
 **fileId** | **String**| The unique identifier of the file. | 

### Return type

[**DeleteAssistantFileResponse**](DeleteAssistantFileResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteAssistantV1AssistantsAssistantIdDelete

> DeleteAssistantResponse deleteAssistantV1AssistantsAssistantIdDelete(assistantId)

Delete Assistant

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The unique identifier of the assistant.
apiInstance.deleteAssistantV1AssistantsAssistantIdDelete(assistantId, (error, data, response) => {
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
 **assistantId** | **String**| The unique identifier of the assistant. | 

### Return type

[**DeleteAssistantResponse**](DeleteAssistantResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAssistantFilesV1AssistantsAssistantIdFilesGet

> [AssistantFile] listAssistantFilesV1AssistantsAssistantIdFilesGet(assistantId, opts)

List Assistant Files

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The unique identifier of the assistant.
let opts = {
  'limit': 1000, // Number | How many files to retrieve.
  'order': "'asc'", // String | Order of files to retrieve (either 'asc' or 'desc').
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
  'before': "before_example" // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
};
apiInstance.listAssistantFilesV1AssistantsAssistantIdFilesGet(assistantId, opts, (error, data, response) => {
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
 **assistantId** | **String**| The unique identifier of the assistant. | 
 **limit** | **Number**| How many files to retrieve. | [optional] [default to 1000]
 **order** | **String**| Order of files to retrieve (either &#39;asc&#39; or &#39;desc&#39;). | [optional] [default to &#39;asc&#39;]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 

### Return type

[**[AssistantFile]**](AssistantFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listAssistantsV1AssistantsGet

> [OpenAIAssistant] listAssistantsV1AssistantsGet(opts)

List Assistants

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let opts = {
  'limit': 1000, // Number | How many assistants to retrieve.
  'order': "'asc'", // String | Order of assistants to retrieve (either 'asc' or 'desc').
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
  'before': "before_example" // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
};
apiInstance.listAssistantsV1AssistantsGet(opts, (error, data, response) => {
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
 **limit** | **Number**| How many assistants to retrieve. | [optional] [default to 1000]
 **order** | **String**| Order of assistants to retrieve (either &#39;asc&#39; or &#39;desc&#39;). | [optional] [default to &#39;asc&#39;]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 

### Return type

[**[OpenAIAssistant]**](OpenAIAssistant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyAssistantV1AssistantsAssistantIdPost

> OpenAIAssistant modifyAssistantV1AssistantsAssistantIdPost(assistantId, createAssistantRequest)

Modify Assistant

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The unique identifier of the assistant.
let createAssistantRequest = new OpenAiAssistantsApi.CreateAssistantRequest(); // CreateAssistantRequest | 
apiInstance.modifyAssistantV1AssistantsAssistantIdPost(assistantId, createAssistantRequest, (error, data, response) => {
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
 **assistantId** | **String**| The unique identifier of the assistant. | 
 **createAssistantRequest** | [**CreateAssistantRequest**](CreateAssistantRequest.md)|  | 

### Return type

[**OpenAIAssistant**](OpenAIAssistant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet

> AssistantFile retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet(assistantId, fileId)

Retrieve Assistant File

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The unique identifier of the assistant.
let fileId = "fileId_example"; // String | The unique identifier of the file.
apiInstance.retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet(assistantId, fileId, (error, data, response) => {
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
 **assistantId** | **String**| The unique identifier of the assistant. | 
 **fileId** | **String**| The unique identifier of the file. | 

### Return type

[**AssistantFile**](AssistantFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveAssistantV1AssistantsAssistantIdGet

> OpenAIAssistant retrieveAssistantV1AssistantsAssistantIdGet(assistantId)

Retrieve Assistant

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The unique identifier of the assistant.
apiInstance.retrieveAssistantV1AssistantsAssistantIdGet(assistantId, (error, data, response) => {
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
 **assistantId** | **String**| The unique identifier of the assistant. | 

### Return type

[**OpenAIAssistant**](OpenAIAssistant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

