# OpenAiAssistantsApi.OpenAIMessage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The unique identifier of the message. | 
**object** | **String** |  | [optional] [default to &#39;thread.message&#39;]
**createdAt** | **Number** | The unix timestamp of when the message was created. | 
**threadId** | **String** | The unique identifier of the thread. | 
**role** | **String** | Role of the message sender (either &#39;user&#39; or &#39;system&#39;) | 
**content** | [**[OpenAIMessageContentInner]**](OpenAIMessageContentInner.md) | The message content to be processed by the agent. | [optional] 
**assistantId** | **String** | The unique identifier of the assistant. | 
**runId** | **String** |  | [optional] 
**fileIds** | **[String]** |  | [optional] 
**metadata** | **Object** |  | [optional] 


