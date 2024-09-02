# OpenAiAssistantsApi.MessagesApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMessageV1ThreadsThreadIdMessagesPost**](MessagesApi.md#createMessageV1ThreadsThreadIdMessagesPost) | **POST** /v1/threads/{thread_id}/messages | Create Message
[**listMessagesV1ThreadsThreadIdMessagesGet**](MessagesApi.md#listMessagesV1ThreadsThreadIdMessagesGet) | **GET** /v1/threads/{thread_id}/messages | List Messages
[**modifyMessageV1ThreadsThreadIdMessagesMessageIdPost**](MessagesApi.md#modifyMessageV1ThreadsThreadIdMessagesMessageIdPost) | **POST** /v1/threads/{thread_id}/messages/{message_id} | Modify Message
[**retrieveMessageFileV1ThreadsThreadIdMessagesMessageIdFilesFileIdGet**](MessagesApi.md#retrieveMessageFileV1ThreadsThreadIdMessagesMessageIdFilesFileIdGet) | **GET** /v1/threads/{thread_id}/messages/{message_id}/files/{file_id} | Retrieve Message File



## createMessageV1ThreadsThreadIdMessagesPost

> OpenAIMessage createMessageV1ThreadsThreadIdMessagesPost(threadId, createMessageRequest)

Create Message

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.MessagesApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let createMessageRequest = new OpenAiAssistantsApi.CreateMessageRequest(); // CreateMessageRequest | 
apiInstance.createMessageV1ThreadsThreadIdMessagesPost(threadId, createMessageRequest, (error, data, response) => {
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
 **createMessageRequest** | [**CreateMessageRequest**](CreateMessageRequest.md)|  | 

### Return type

[**OpenAIMessage**](OpenAIMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listMessagesV1ThreadsThreadIdMessagesGet

> ListMessagesResponse listMessagesV1ThreadsThreadIdMessagesGet(threadId, opts)

List Messages

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.MessagesApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let opts = {
  'limit': 1000, // Number | How many messages to retrieve.
  'order': "'asc'", // String | Order of messages to retrieve (either 'asc' or 'desc').
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
  'before': "before_example" // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
};
apiInstance.listMessagesV1ThreadsThreadIdMessagesGet(threadId, opts, (error, data, response) => {
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
 **limit** | **Number**| How many messages to retrieve. | [optional] [default to 1000]
 **order** | **String**| Order of messages to retrieve (either &#39;asc&#39; or &#39;desc&#39;). | [optional] [default to &#39;asc&#39;]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 

### Return type

[**ListMessagesResponse**](ListMessagesResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyMessageV1ThreadsThreadIdMessagesMessageIdPost

> OpenAIMessage modifyMessageV1ThreadsThreadIdMessagesMessageIdPost(threadId, messageId, modifyMessageRequest)

Modify Message

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.MessagesApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let messageId = "messageId_example"; // String | The unique identifier of the message.
let modifyMessageRequest = new OpenAiAssistantsApi.ModifyMessageRequest(); // ModifyMessageRequest | 
apiInstance.modifyMessageV1ThreadsThreadIdMessagesMessageIdPost(threadId, messageId, modifyMessageRequest, (error, data, response) => {
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
 **messageId** | **String**| The unique identifier of the message. | 
 **modifyMessageRequest** | [**ModifyMessageRequest**](ModifyMessageRequest.md)|  | 

### Return type

[**OpenAIMessage**](OpenAIMessage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveMessageFileV1ThreadsThreadIdMessagesMessageIdFilesFileIdGet

> MessageFile retrieveMessageFileV1ThreadsThreadIdMessagesMessageIdFilesFileIdGet(threadId, messageId, fileId)

Retrieve Message File

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.MessagesApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let messageId = "messageId_example"; // String | The unique identifier of the message.
let fileId = "fileId_example"; // String | The unique identifier of the file.
apiInstance.retrieveMessageFileV1ThreadsThreadIdMessagesMessageIdFilesFileIdGet(threadId, messageId, fileId, (error, data, response) => {
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
 **messageId** | **String**| The unique identifier of the message. | 
 **fileId** | **String**| The unique identifier of the file. | 

### Return type

[**MessageFile**](MessageFile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

