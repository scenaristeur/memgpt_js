# OpenAiAssistantsApi.OpenAIRunStep

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the run step. | 
**object** | **String** |  | [optional] [default to &#39;thread.run.step&#39;]
**createdAt** | **Number** | The unix timestamp of when the run step was created. | 
**assistantId** | **String** | The unique identifier of the assistant. | 
**threadId** | **String** | The unique identifier of the thread. | 
**runId** | **String** | The unique identifier of the run. | 
**type** | **String** | The type of the run step. | 
**status** | **String** | The status of the run step. | 
**stepDefaults** | [**StepDefaults**](StepDefaults.md) |  | 
**lastError** | [**OpenAIError**](OpenAIError.md) |  | [optional] 
**expiredAt** | **Number** |  | [optional] 
**failedAt** | **Number** |  | [optional] 
**completedAt** | **Number** |  | [optional] 
**usage** | [**OpenAIUsage**](OpenAIUsage.md) |  | [optional] 


