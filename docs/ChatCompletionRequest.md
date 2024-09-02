# OpenAiAssistantsApi.ChatCompletionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model** | **String** |  | 
**messages** | [**[ChatCompletionRequestMessagesInner]**](ChatCompletionRequestMessagesInner.md) |  | 
**frequencyPenalty** | **Number** |  | [optional] 
**logitBias** | **{String: Number}** |  | [optional] 
**logprobs** | **Boolean** |  | [optional] 
**topLogprobs** | **Number** |  | [optional] 
**maxTokens** | **Number** |  | [optional] 
**n** | **Number** |  | [optional] 
**presencePenalty** | **Number** |  | [optional] 
**responseFormat** | [**ResponseFormat**](ResponseFormat.md) |  | [optional] 
**seed** | **Number** |  | [optional] 
**stop** | [**Stop**](Stop.md) |  | [optional] 
**stream** | **Boolean** |  | [optional] 
**temperature** | **Number** |  | [optional] 
**topP** | **Number** |  | [optional] 
**user** | **String** |  | [optional] 
**tools** | [**[ToolInput]**](ToolInput.md) |  | [optional] 
**toolChoice** | [**ToolChoice**](ToolChoice.md) |  | [optional] 
**functions** | [**[FunctionSchema]**](FunctionSchema.md) |  | [optional] 
**functionCall** | [**FunctionCall**](FunctionCall.md) |  | [optional] 


