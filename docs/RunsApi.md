# OpenAiAssistantsApi.RunsApi

All URIs are relative to *http://memgpt.localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelRunV1ThreadsThreadIdRunsRunIdCancelPost**](RunsApi.md#cancelRunV1ThreadsThreadIdRunsRunIdCancelPost) | **POST** /v1/threads/{thread_id}/runs/{run_id}/cancel | Cancel Run
[**createRunV1ThreadsThreadIdRunsPost**](RunsApi.md#createRunV1ThreadsThreadIdRunsPost) | **POST** /v1/threads/{thread_id}/runs | Create Run
[**createThreadAndRunV1ThreadsRunsPost**](RunsApi.md#createThreadAndRunV1ThreadsRunsPost) | **POST** /v1/threads/runs | Create Thread And Run
[**listRunStepsV1ThreadsThreadIdRunsRunIdStepsGet**](RunsApi.md#listRunStepsV1ThreadsThreadIdRunsRunIdStepsGet) | **GET** /v1/threads/{thread_id}/runs/{run_id}/steps | List Run Steps
[**listRunsV1ThreadsThreadIdRunsGet**](RunsApi.md#listRunsV1ThreadsThreadIdRunsGet) | **GET** /v1/threads/{thread_id}/runs | List Runs
[**modifyRunV1ThreadsThreadIdRunsRunIdPost**](RunsApi.md#modifyRunV1ThreadsThreadIdRunsRunIdPost) | **POST** /v1/threads/{thread_id}/runs/{run_id} | Modify Run
[**retrieveRunStepV1ThreadsThreadIdRunsRunIdStepsStepIdGet**](RunsApi.md#retrieveRunStepV1ThreadsThreadIdRunsRunIdStepsStepIdGet) | **GET** /v1/threads/{thread_id}/runs/{run_id}/steps/{step_id} | Retrieve Run Step
[**retrieveRunV1ThreadsThreadIdRunsRunIdGet**](RunsApi.md#retrieveRunV1ThreadsThreadIdRunsRunIdGet) | **GET** /v1/threads/{thread_id}/runs/{run_id} | Retrieve Run
[**submitToolOutputsToRunV1ThreadsThreadIdRunsRunIdSubmitToolOutputsPost**](RunsApi.md#submitToolOutputsToRunV1ThreadsThreadIdRunsRunIdSubmitToolOutputsPost) | **POST** /v1/threads/{thread_id}/runs/{run_id}/submit_tool_outputs | Submit Tool Outputs To Run



## cancelRunV1ThreadsThreadIdRunsRunIdCancelPost

> OpenAIRun cancelRunV1ThreadsThreadIdRunsRunIdCancelPost(threadId, runId)

Cancel Run

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let runId = "runId_example"; // String | The unique identifier of the run.
apiInstance.cancelRunV1ThreadsThreadIdRunsRunIdCancelPost(threadId, runId, (error, data, response) => {
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
 **runId** | **String**| The unique identifier of the run. | 

### Return type

[**OpenAIRun**](OpenAIRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createRunV1ThreadsThreadIdRunsPost

> OpenAIRun createRunV1ThreadsThreadIdRunsPost(threadId, createRunRequest)

Create Run

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let createRunRequest = new OpenAiAssistantsApi.CreateRunRequest(); // CreateRunRequest | 
apiInstance.createRunV1ThreadsThreadIdRunsPost(threadId, createRunRequest, (error, data, response) => {
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
 **createRunRequest** | [**CreateRunRequest**](CreateRunRequest.md)|  | 

### Return type

[**OpenAIRun**](OpenAIRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createThreadAndRunV1ThreadsRunsPost

> OpenAIRun createThreadAndRunV1ThreadsRunsPost(createThreadRunRequest)

Create Thread And Run

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let createThreadRunRequest = new OpenAiAssistantsApi.CreateThreadRunRequest(); // CreateThreadRunRequest | 
apiInstance.createThreadAndRunV1ThreadsRunsPost(createThreadRunRequest, (error, data, response) => {
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
 **createThreadRunRequest** | [**CreateThreadRunRequest**](CreateThreadRunRequest.md)|  | 

### Return type

[**OpenAIRun**](OpenAIRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## listRunStepsV1ThreadsThreadIdRunsRunIdStepsGet

> [OpenAIRunStep] listRunStepsV1ThreadsThreadIdRunsRunIdStepsGet(threadId, runId, opts)

List Run Steps

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let runId = "runId_example"; // String | The unique identifier of the run.
let opts = {
  'limit': 1000, // Number | How many run steps to retrieve.
  'order': "'asc'", // String | Order of run steps to retrieve (either 'asc' or 'desc').
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
  'before': "before_example" // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
};
apiInstance.listRunStepsV1ThreadsThreadIdRunsRunIdStepsGet(threadId, runId, opts, (error, data, response) => {
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
 **runId** | **String**| The unique identifier of the run. | 
 **limit** | **Number**| How many run steps to retrieve. | [optional] [default to 1000]
 **order** | **String**| Order of run steps to retrieve (either &#39;asc&#39; or &#39;desc&#39;). | [optional] [default to &#39;asc&#39;]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 

### Return type

[**[OpenAIRunStep]**](OpenAIRunStep.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRunsV1ThreadsThreadIdRunsGet

> [OpenAIRun] listRunsV1ThreadsThreadIdRunsGet(threadId, opts)

List Runs

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let opts = {
  'limit': 1000, // Number | How many runs to retrieve.
  'order': "'asc'", // String | Order of runs to retrieve (either 'asc' or 'desc').
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
  'before': "before_example" // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list.
};
apiInstance.listRunsV1ThreadsThreadIdRunsGet(threadId, opts, (error, data, response) => {
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
 **limit** | **Number**| How many runs to retrieve. | [optional] [default to 1000]
 **order** | **String**| Order of runs to retrieve (either &#39;asc&#39; or &#39;desc&#39;). | [optional] [default to &#39;asc&#39;]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. | [optional] 

### Return type

[**[OpenAIRun]**](OpenAIRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## modifyRunV1ThreadsThreadIdRunsRunIdPost

> OpenAIRun modifyRunV1ThreadsThreadIdRunsRunIdPost(threadId, runId, modifyRunRequest)

Modify Run

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let runId = "runId_example"; // String | The unique identifier of the run.
let modifyRunRequest = new OpenAiAssistantsApi.ModifyRunRequest(); // ModifyRunRequest | 
apiInstance.modifyRunV1ThreadsThreadIdRunsRunIdPost(threadId, runId, modifyRunRequest, (error, data, response) => {
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
 **runId** | **String**| The unique identifier of the run. | 
 **modifyRunRequest** | [**ModifyRunRequest**](ModifyRunRequest.md)|  | 

### Return type

[**OpenAIRun**](OpenAIRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## retrieveRunStepV1ThreadsThreadIdRunsRunIdStepsStepIdGet

> OpenAIRunStep retrieveRunStepV1ThreadsThreadIdRunsRunIdStepsStepIdGet(threadId, runId, stepId)

Retrieve Run Step

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let runId = "runId_example"; // String | The unique identifier of the run.
let stepId = "stepId_example"; // String | The unique identifier of the run step.
apiInstance.retrieveRunStepV1ThreadsThreadIdRunsRunIdStepsStepIdGet(threadId, runId, stepId, (error, data, response) => {
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
 **runId** | **String**| The unique identifier of the run. | 
 **stepId** | **String**| The unique identifier of the run step. | 

### Return type

[**OpenAIRunStep**](OpenAIRunStep.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## retrieveRunV1ThreadsThreadIdRunsRunIdGet

> OpenAIRun retrieveRunV1ThreadsThreadIdRunsRunIdGet(threadId, runId)

Retrieve Run

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let runId = "runId_example"; // String | The unique identifier of the run.
apiInstance.retrieveRunV1ThreadsThreadIdRunsRunIdGet(threadId, runId, (error, data, response) => {
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
 **runId** | **String**| The unique identifier of the run. | 

### Return type

[**OpenAIRun**](OpenAIRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitToolOutputsToRunV1ThreadsThreadIdRunsRunIdSubmitToolOutputsPost

> OpenAIRun submitToolOutputsToRunV1ThreadsThreadIdRunsRunIdSubmitToolOutputsPost(threadId, runId, submitToolOutputsToRunRequest)

Submit Tool Outputs To Run

### Example

```javascript
import OpenAiAssistantsApi from 'open_ai_assistants_api';

let apiInstance = new OpenAiAssistantsApi.RunsApi();
let threadId = "threadId_example"; // String | The unique identifier of the thread.
let runId = "runId_example"; // String | The unique identifier of the run.
let submitToolOutputsToRunRequest = new OpenAiAssistantsApi.SubmitToolOutputsToRunRequest(); // SubmitToolOutputsToRunRequest | 
apiInstance.submitToolOutputsToRunV1ThreadsThreadIdRunsRunIdSubmitToolOutputsPost(threadId, runId, submitToolOutputsToRunRequest, (error, data, response) => {
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
 **runId** | **String**| The unique identifier of the run. | 
 **submitToolOutputsToRunRequest** | [**SubmitToolOutputsToRunRequest**](SubmitToolOutputsToRunRequest.md)|  | 

### Return type

[**OpenAIRun**](OpenAIRun.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

