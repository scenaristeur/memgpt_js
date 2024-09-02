# OpenAiAssistantsApi.ThreadsApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createThreadV1ThreadsPost**](ThreadsApi.md#createThreadV1ThreadsPost) | **POST** /v1/threads | Create Thread
[**deleteThreadV1ThreadsThreadIdDelete**](ThreadsApi.md#deleteThreadV1ThreadsThreadIdDelete) | **DELETE** /v1/threads/{thread_id} | Delete Thread
[**modifyThreadV1ThreadsThreadIdGet**](ThreadsApi.md#modifyThreadV1ThreadsThreadIdGet) | **GET** /v1/threads/{thread_id} | Modify Thread



## createThreadV1ThreadsPost

> OpenAIThread createThreadV1ThreadsPost(createThreadRequest)

Create Thread

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.ThreadsApi();
let createThreadRequest = new OpenAiAssistantsApi.CreateThreadRequest(); // CreateThreadRequest | 
apiInstance.createThreadV1ThreadsPost(createThreadRequest, (error, data, response) => {
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
 **createThreadRequest** | [**CreateThreadRequest**](CreateThreadRequest.md)|  | 

### Return type

[**OpenAIThread**](OpenAIThread.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteThreadV1ThreadsThreadIdDelete

> DeleteThreadResponse deleteThreadV1ThreadsThreadIdDelete(threadId)

Delete Thread

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.ThreadsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
apiInstance.deleteThreadV1ThreadsThreadIdDelete(threadId, (error, data, response) => {
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
 **threadId** | **String**| The unique identifier of the thread. | 

### Return type

[**DeleteThreadResponse**](DeleteThreadResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyThreadV1ThreadsThreadIdGet

> OpenAIThread modifyThreadV1ThreadsThreadIdGet(threadId, modifyThreadRequest)

Modify Thread

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.ThreadsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let modifyThreadRequest = new OpenAiAssistantsApi.ModifyThreadRequest(); // ModifyThreadRequest | 
apiInstance.modifyThreadV1ThreadsThreadIdGet(threadId, modifyThreadRequest, (error, data, response) => {
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
 **threadId** | **String**| The unique identifier of the thread. | 
 **modifyThreadRequest** | [**ModifyThreadRequest**](ModifyThreadRequest.md)|  | 

### Return type

[**OpenAIThread**](OpenAIThread.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

