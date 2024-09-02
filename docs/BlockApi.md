# OpenAiAssistantsApi.BlockApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBlockApiBlocksPost**](BlockApi.md#createBlockApiBlocksPost) | **POST** /api/blocks | Create Block
[**deleteBlockApiBlocksBlockIdDelete**](BlockApi.md#deleteBlockApiBlocksBlockIdDelete) | **DELETE** /api/blocks/{block_id} | Delete Block
[**getBlockApiBlocksBlockIdGet**](BlockApi.md#getBlockApiBlocksBlockIdGet) | **GET** /api/blocks/{block_id} | Get Block
[**listBlocksApiBlocksGet**](BlockApi.md#listBlocksApiBlocksGet) | **GET** /api/blocks | List Blocks
[**updateBlockApiBlocksBlockIdPost**](BlockApi.md#updateBlockApiBlocksBlockIdPost) | **POST** /api/blocks/{block_id} | Update Block



## createBlockApiBlocksPost

> Block createBlockApiBlocksPost(createBlock)

Create Block

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.BlockApi();
let createBlock = new OpenAiAssistantsApi.CreateBlock(); // CreateBlock | 
apiInstance.createBlockApiBlocksPost(createBlock, (error, data, response) => {
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
 **createBlock** | [**CreateBlock**](CreateBlock.md)|  | 

### Return type

[**Block**](Block.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteBlockApiBlocksBlockIdDelete

> Block deleteBlockApiBlocksBlockIdDelete(blockId)

Delete Block

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.BlockApi();
let blockId = "blockId_example"; // String | 
apiInstance.deleteBlockApiBlocksBlockIdDelete(blockId, (error, data, response) => {
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
 **blockId** | **String**|  | 

### Return type

[**Block**](Block.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getBlockApiBlocksBlockIdGet

> Block getBlockApiBlocksBlockIdGet(blockId)

Get Block

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.BlockApi();
let blockId = "blockId_example"; // String | 
apiInstance.getBlockApiBlocksBlockIdGet(blockId, (error, data, response) => {
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
 **blockId** | **String**|  | 

### Return type

[**Block**](Block.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listBlocksApiBlocksGet

> [Block] listBlocksApiBlocksGet(opts)

List Blocks

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.BlockApi();
let opts = {
  'label': "label_example", // String | Labels to include (e.g. human, persona)
  'templatesOnly': true, // Boolean | Whether to include only templates
  'name': "name_example" // String | Name of the block
};
apiInstance.listBlocksApiBlocksGet(opts, (error, data, response) => {
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
 **label** | **String**| Labels to include (e.g. human, persona) | [optional] 
 **templatesOnly** | **Boolean**| Whether to include only templates | [optional] [default to true]
 **name** | **String**| Name of the block | [optional] 

### Return type

[**[Block]**](Block.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateBlockApiBlocksBlockIdPost

> Block updateBlockApiBlocksBlockIdPost(blockId, updateBlock)

Update Block

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';
let defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
let HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new OpenAiAssistantsApi.BlockApi();
let blockId = "blockId_example"; // String | 
let updateBlock = new OpenAiAssistantsApi.UpdateBlock(); // UpdateBlock | 
apiInstance.updateBlockApiBlocksBlockIdPost(blockId, updateBlock, (error, data, response) => {
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
 **blockId** | **String**|  | 
 **updateBlock** | [**UpdateBlock**](UpdateBlock.md)|  | 

### Return type

[**Block**](Block.md)

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

