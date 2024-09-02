# OpenAiAssistantsApi.AuthApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateUserApiAuthPost**](AuthApi.md#authenticateUserApiAuthPost) | **POST** /api/auth | Authenticate User



## authenticateUserApiAuthPost

> AuthResponse authenticateUserApiAuthPost(authRequest)

Authenticate User

Authenticates the user and sends response with User related data.  Currently, this is a placeholder that simply returns a UUID placeholder

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.AuthApi();
let authRequest = new OpenAiAssistantsApi.AuthRequest(); // AuthRequest | 
apiInstance.authenticateUserApiAuthPost(authRequest, (error, data, response) => {
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
 **authRequest** | [**AuthRequest**](AuthRequest.md)|  | 

### Return type

[**AuthResponse**](AuthResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

