# OpenAiAssistantsApi.AgentState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** |  | [optional] 
**metadata** | **Object** |  | [optional] 
**userId** | **String** |  | [optional] 
**id** | **String** | The human-friendly ID of the Agent | [optional] 
**name** | **String** | The name of the agent. | 
**createdAt** | **Date** | The datetime the agent was created. | [optional] 
**messageIds** | **[String]** |  | [optional] 
**memory** | [**Memory**](Memory.md) | The in-context memory of the agent. | [optional] 
**tools** | **[String]** | The tools used by the agent. | 
**system** | **String** | The system prompt used by the agent. | 
**llmConfig** | [**LLMConfig**](LLMConfig.md) | The LLM configuration used by the agent. | 
**embeddingConfig** | [**EmbeddingConfig**](EmbeddingConfig.md) | The embedding configuration used by the agent. | 


