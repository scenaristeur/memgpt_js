# OpenAiAssistantsApi.ModelsApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listModelsApiModelsGet**](ModelsApi.md#listModelsApiModelsGet) | **GET** /api/models | List Models



## listModelsApiModelsGet

> ListModelsResponse listModelsApiModelsGet()

List Models

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.ModelsApi();
apiInstance.listModelsApiModelsGet((error, data, response) => {
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

[**ListModelsResponse**](ListModelsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

