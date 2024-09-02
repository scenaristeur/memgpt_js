# OpenAiAssistantsApi.ConfigApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmbeddingConfigsApiConfigEmbeddingGet**](ConfigApi.md#getEmbeddingConfigsApiConfigEmbeddingGet) | **GET** /api/config/embedding | Get Embedding Configs
[**getLlmConfigsApiConfigLlmGet**](ConfigApi.md#getLlmConfigsApiConfigLlmGet) | **GET** /api/config/llm | Get Llm Configs



## getEmbeddingConfigsApiConfigEmbeddingGet

> [EmbeddingConfig] getEmbeddingConfigsApiConfigEmbeddingGet()

Get Embedding Configs

Retrieve the base configuration for the server.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ConfigApi();
apiInstance.getEmbeddingConfigsApiConfigEmbeddingGet((error, data, response) => {
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

[**[EmbeddingConfig]**](EmbeddingConfig.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLlmConfigsApiConfigLlmGet

> [LLMConfig] getLlmConfigsApiConfigLlmGet()

Get Llm Configs

Retrieve the base configuration for the server.

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.ConfigApi();
apiInstance.getLlmConfigsApiConfigLlmGet((error, data, response) => {
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

[**[LLMConfig]**](LLMConfig.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

