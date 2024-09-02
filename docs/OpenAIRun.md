# OpenAiAssistantsApi.OpenAIRun

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the run. | 
**object** | **String** |  | [optional] [default to &#39;thread.run&#39;]
**createdAt** | **Number** | The unix timestamp of when the run was created. | 
**threadId** | **String** | The unique identifier of the thread. | 
**assistantId** | **String** | The unique identifier of the assistant. | 
**status** | **String** | The status of the run. | 
**requiredAction** | [**RequiredAction**](RequiredAction.md) |  | [optional] 
**lastError** | [**OpenAIError**](OpenAIError.md) |  | [optional] 
**expiresAt** | **Number** | The unix timestamp of when the run expires. | 
**startedAt** | **Number** |  | [optional] 
**cancelledAt** | **Number** |  | [optional] 
**failedAt** | **Number** |  | [optional] 
**completedAt** | **Number** |  | [optional] 
**model** | **String** | The model used by the run. | 
**instructions** | **String** | The instructions for the run. | 
**tools** | [**[MemgptSchemasOpenaiOpenaiToolCall]**](MemgptSchemasOpenaiOpenaiToolCall.md) |  | [optional] 
**fileIds** | **[String]** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**usage** | [**OpenAIUsage**](OpenAIUsage.md) |  | [optional] 


