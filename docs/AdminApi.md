# OpenAiAssistantsApi.AdminApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewApiKeyAdminUsersKeysPost**](AdminApi.md#createNewApiKeyAdminUsersKeysPost) | **POST** /admin/users/keys | Create New Api Key
[**createUserAdminUsersPost**](AdminApi.md#createUserAdminUsersPost) | **POST** /admin/users | Create User
[**deleteApiKeyAdminUsersKeysDelete**](AdminApi.md#deleteApiKeyAdminUsersKeysDelete) | **DELETE** /admin/users/keys | Delete Api Key
[**deleteUserAdminUsersDelete**](AdminApi.md#deleteUserAdminUsersDelete) | **DELETE** /admin/users | Delete User
[**getAllUsersAdminUsersGet**](AdminApi.md#getAllUsersAdminUsersGet) | **GET** /admin/users | Get All Users
[**getApiKeysAdminUsersKeysGet**](AdminApi.md#getApiKeysAdminUsersKeysGet) | **GET** /admin/users/keys | Get Api Keys



## createNewApiKeyAdminUsersKeysPost

> APIKey createNewApiKeyAdminUsersKeysPost(aPIKeyCreate)

Create New Api Key

Create a new API key for a user

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AdminApi();
let aPIKeyCreate = new OpenAiAssistantsApi.APIKeyCreate(); // APIKeyCreate | 
apiInstance.createNewApiKeyAdminUsersKeysPost(aPIKeyCreate, (error, data, response) => {
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
 **aPIKeyCreate** | [**APIKeyCreate**](APIKeyCreate.md)|  | 

### Return type

[**APIKey**](APIKey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createUserAdminUsersPost

> User createUserAdminUsersPost(userCreate)

Create User

Create a new user in the database

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AdminApi();
let userCreate = new OpenAiAssistantsApi.UserCreate(); // UserCreate | 
apiInstance.createUserAdminUsersPost(userCreate, (error, data, response) => {
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
 **userCreate** | [**UserCreate**](UserCreate.md)|  | 

### Return type

[**User**](User.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteApiKeyAdminUsersKeysDelete

> APIKey deleteApiKeyAdminUsersKeysDelete(apiKey)

Delete Api Key

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AdminApi();
let apiKey = "apiKey_example"; // String | The API key to be deleted.
apiInstance.deleteApiKeyAdminUsersKeysDelete(apiKey, (error, data, response) => {
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
 **apiKey** | **String**| The API key to be deleted. | 

### Return type

[**APIKey**](APIKey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteUserAdminUsersDelete

> User deleteUserAdminUsersDelete(userId)

Delete User

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AdminApi();
let userId = "userId_example"; // String | The user_id key to be deleted.
apiInstance.deleteUserAdminUsersDelete(userId, (error, data, response) => {
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
 **userId** | **String**| The user_id key to be deleted. | 

### Return type

[**User**](User.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllUsersAdminUsersGet

> [User] getAllUsersAdminUsersGet(opts)

Get All Users

Get a list of all users in the database

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AdminApi();
let opts = {
  'cursor': "cursor_example", // String | 
  'limit': 56 // Number | 
};
apiInstance.getAllUsersAdminUsersGet(opts, (error, data, response) => {
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
 **cursor** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getApiKeysAdminUsersKeysGet

> [APIKey] getApiKeysAdminUsersKeysGet(userId)

Get Api Keys

Get a list of all API keys for a user

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.AdminApi();
let userId = "userId_example"; // String | The unique identifier of the user.
apiInstance.getApiKeysAdminUsersKeysGet(userId, (error, data, response) => {
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
 **userId** | **String**| The unique identifier of the user. | 

### Return type

[**[APIKey]**](APIKey.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

