# OpenAiAssistantsApi.ChatCompletionsApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChatCompletionV1ChatCompletionsPost**](ChatCompletionsApi.md#createChatCompletionV1ChatCompletionsPost) | **POST** /v1/chat/completions | Create Chat Completion



## createChatCompletionV1ChatCompletionsPost

> ChatCompletionResponse createChatCompletionV1ChatCompletionsPost(chatCompletionRequest)

Create Chat Completion

Send a message to a MemGPT agent via a /chat/completions request  The bearer token will be used to identify the user. The &#39;user&#39; field in the request should be set to the agent ID.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ChatCompletionsApi();
let chatCompletionRequest = new OpenAiAssistantsApi.ChatCompletionRequest(); // ChatCompletionRequest | 
apiInstance.createChatCompletionV1ChatCompletionsPost(chatCompletionRequest, (error, data, response) => {
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
 **chatCompletionRequest** | [**ChatCompletionRequest**](ChatCompletionRequest.md)|  | 

### Return type

[**ChatCompletionResponse**](ChatCompletionResponse.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

