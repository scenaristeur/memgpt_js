# OpenAiAssistantsApi.MemGPTRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**[MessageCreate]**](MessageCreate.md) | The messages to be sent to the agent. | 
**runAsync** | **Boolean** | Whether to asynchronously send the messages to the agent. | [optional] [default to false]
**streamSteps** | **Boolean** | Flag to determine if the response should be streamed. Set to True for streaming agent steps. | [optional] [default to false]
**streamTokens** | **Boolean** | Flag to determine if individual tokens should be streamed. Set to True for token streaming (requires stream_steps &#x3D; True). | [optional] [default to false]
**returnMessageObject** | **Boolean** | Set True to return the raw Message object. Set False to return the Message in the format of the MemGPT API. | [optional] [default to false]


