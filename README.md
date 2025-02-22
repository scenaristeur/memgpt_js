# open_ai_assistants_api

OpenAiAssistantsApi - JavaScript client for open_ai_assistants_api
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.1.0
- Package version: 0.1.0
- Generator version: 7.8.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install open_ai_assistants_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your open_ai_assistants_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var OpenAiAssistantsApi = require('open_ai_assistants_api');

var defaultClient = OpenAiAssistantsApi.ApiClient.instance;
// Configure Bearer access token for authorization: HTTPBearer
var HTTPBearer = defaultClient.authentications['HTTPBearer'];
HTTPBearer.accessToken = "YOUR ACCESS TOKEN"

var api = new OpenAiAssistantsApi.AdminApi()
var aPIKeyCreate = new OpenAiAssistantsApi.APIKeyCreate(); // {APIKeyCreate} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.createNewApiKeyAdminUsersKeysPost(aPIKeyCreate, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://memgpt.localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*OpenAiAssistantsApi.AdminApi* | [**createNewApiKeyAdminUsersKeysPost**](docs/AdminApi.md#createNewApiKeyAdminUsersKeysPost) | **POST** /admin/users/keys | Create New Api Key
*OpenAiAssistantsApi.AdminApi* | [**createUserAdminUsersPost**](docs/AdminApi.md#createUserAdminUsersPost) | **POST** /admin/users | Create User
*OpenAiAssistantsApi.AdminApi* | [**deleteApiKeyAdminUsersKeysDelete**](docs/AdminApi.md#deleteApiKeyAdminUsersKeysDelete) | **DELETE** /admin/users/keys | Delete Api Key
*OpenAiAssistantsApi.AdminApi* | [**deleteUserAdminUsersDelete**](docs/AdminApi.md#deleteUserAdminUsersDelete) | **DELETE** /admin/users | Delete User
*OpenAiAssistantsApi.AdminApi* | [**getAllUsersAdminUsersGet**](docs/AdminApi.md#getAllUsersAdminUsersGet) | **GET** /admin/users | Get All Users
*OpenAiAssistantsApi.AdminApi* | [**getApiKeysAdminUsersKeysGet**](docs/AdminApi.md#getApiKeysAdminUsersKeysGet) | **GET** /admin/users/keys | Get Api Keys
*OpenAiAssistantsApi.AgentsApi* | [**createAgentApiAgentsPost**](docs/AgentsApi.md#createAgentApiAgentsPost) | **POST** /api/agents | Create Agent
*OpenAiAssistantsApi.AgentsApi* | [**deleteAgentApiAgentsAgentIdDelete**](docs/AgentsApi.md#deleteAgentApiAgentsAgentIdDelete) | **DELETE** /api/agents/{agent_id} | Delete Agent
*OpenAiAssistantsApi.AgentsApi* | [**deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete**](docs/AgentsApi.md#deleteAgentArchivalMemoryApiAgentsAgentIdArchivalMemoryIdDelete) | **DELETE** /api/agents/{agent_id}/archival/{memory_id} | Delete Agent Archival Memory
*OpenAiAssistantsApi.AgentsApi* | [**getAgentArchivalMemoryApiAgentsAgentIdArchivalGet**](docs/AgentsApi.md#getAgentArchivalMemoryApiAgentsAgentIdArchivalGet) | **GET** /api/agents/{agent_id}/archival | Get Agent Archival Memory
*OpenAiAssistantsApi.AgentsApi* | [**getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet**](docs/AgentsApi.md#getAgentArchivalMemorySummaryApiAgentsAgentIdMemoryArchivalGet) | **GET** /api/agents/{agent_id}/memory/archival | Get Agent Archival Memory Summary
*OpenAiAssistantsApi.AgentsApi* | [**getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet**](docs/AgentsApi.md#getAgentInContextMessagesApiAgentsAgentIdMemoryMessagesGet) | **GET** /api/agents/{agent_id}/memory/messages | Get Agent In Context Messages
*OpenAiAssistantsApi.AgentsApi* | [**getAgentMemoryApiAgentsAgentIdMemoryGet**](docs/AgentsApi.md#getAgentMemoryApiAgentsAgentIdMemoryGet) | **GET** /api/agents/{agent_id}/memory | Get Agent Memory
*OpenAiAssistantsApi.AgentsApi* | [**getAgentMessagesApiAgentsAgentIdMessagesGet**](docs/AgentsApi.md#getAgentMessagesApiAgentsAgentIdMessagesGet) | **GET** /api/agents/{agent_id}/messages | Get Agent Messages
*OpenAiAssistantsApi.AgentsApi* | [**getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet**](docs/AgentsApi.md#getAgentMessagesInContextApiAgentsAgentIdMessagesContextGet) | **GET** /api/agents/{agent_id}/messages/context/ | Get Agent Messages In Context
*OpenAiAssistantsApi.AgentsApi* | [**getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet**](docs/AgentsApi.md#getAgentRecallMemorySummaryApiAgentsAgentIdMemoryRecallGet) | **GET** /api/agents/{agent_id}/memory/recall | Get Agent Recall Memory Summary
*OpenAiAssistantsApi.AgentsApi* | [**getAgentSourcesApiAgentsAgentIdSourcesGet**](docs/AgentsApi.md#getAgentSourcesApiAgentsAgentIdSourcesGet) | **GET** /api/agents/{agent_id}/sources | Get Agent Sources
*OpenAiAssistantsApi.AgentsApi* | [**getAgentStateApiAgentsAgentIdGet**](docs/AgentsApi.md#getAgentStateApiAgentsAgentIdGet) | **GET** /api/agents/{agent_id} | Get Agent State
*OpenAiAssistantsApi.AgentsApi* | [**getAllAgentsApiAdminAgentsGet**](docs/AgentsApi.md#getAllAgentsApiAdminAgentsGet) | **GET** /api/admin/agents | Get All Agents
*OpenAiAssistantsApi.AgentsApi* | [**insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost**](docs/AgentsApi.md#insertAgentArchivalMemoryApiAgentsAgentIdArchivalPost) | **POST** /api/agents/{agent_id}/archival | Insert Agent Archival Memory
*OpenAiAssistantsApi.AgentsApi* | [**listAgentsApiAgentsGet**](docs/AgentsApi.md#listAgentsApiAgentsGet) | **GET** /api/agents | List Agents
*OpenAiAssistantsApi.AgentsApi* | [**sendMessageApiAgentsAgentIdMessagesPost**](docs/AgentsApi.md#sendMessageApiAgentsAgentIdMessagesPost) | **POST** /api/agents/{agent_id}/messages | Send Message
*OpenAiAssistantsApi.AgentsApi* | [**updateAgentApiAgentsAgentIdPost**](docs/AgentsApi.md#updateAgentApiAgentsAgentIdPost) | **POST** /api/agents/{agent_id} | Update Agent
*OpenAiAssistantsApi.AgentsApi* | [**updateAgentMemoryApiAgentsAgentIdMemoryPost**](docs/AgentsApi.md#updateAgentMemoryApiAgentsAgentIdMemoryPost) | **POST** /api/agents/{agent_id}/memory | Update Agent Memory
*OpenAiAssistantsApi.AssistantsApi* | [**createAssistantFileV1AssistantsAssistantIdFilesPost**](docs/AssistantsApi.md#createAssistantFileV1AssistantsAssistantIdFilesPost) | **POST** /v1/assistants/{assistant_id}/files | Create Assistant File
*OpenAiAssistantsApi.AssistantsApi* | [**createAssistantV1AssistantsPost**](docs/AssistantsApi.md#createAssistantV1AssistantsPost) | **POST** /v1/assistants | Create Assistant
*OpenAiAssistantsApi.AssistantsApi* | [**deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete**](docs/AssistantsApi.md#deleteAssistantFileV1AssistantsAssistantIdFilesFileIdDelete) | **DELETE** /v1/assistants/{assistant_id}/files/{file_id} | Delete Assistant File
*OpenAiAssistantsApi.AssistantsApi* | [**deleteAssistantV1AssistantsAssistantIdDelete**](docs/AssistantsApi.md#deleteAssistantV1AssistantsAssistantIdDelete) | **DELETE** /v1/assistants/{assistant_id} | Delete Assistant
*OpenAiAssistantsApi.AssistantsApi* | [**listAssistantFilesV1AssistantsAssistantIdFilesGet**](docs/AssistantsApi.md#listAssistantFilesV1AssistantsAssistantIdFilesGet) | **GET** /v1/assistants/{assistant_id}/files | List Assistant Files
*OpenAiAssistantsApi.AssistantsApi* | [**listAssistantsV1AssistantsGet**](docs/AssistantsApi.md#listAssistantsV1AssistantsGet) | **GET** /v1/assistants | List Assistants
*OpenAiAssistantsApi.AssistantsApi* | [**modifyAssistantV1AssistantsAssistantIdPost**](docs/AssistantsApi.md#modifyAssistantV1AssistantsAssistantIdPost) | **POST** /v1/assistants/{assistant_id} | Modify Assistant
*OpenAiAssistantsApi.AssistantsApi* | [**retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet**](docs/AssistantsApi.md#retrieveAssistantFileV1AssistantsAssistantIdFilesFileIdGet) | **GET** /v1/assistants/{assistant_id}/files/{file_id} | Retrieve Assistant File
*OpenAiAssistantsApi.AssistantsApi* | [**retrieveAssistantV1AssistantsAssistantIdGet**](docs/AssistantsApi.md#retrieveAssistantV1AssistantsAssistantIdGet) | **GET** /v1/assistants/{assistant_id} | Retrieve Assistant
*OpenAiAssistantsApi.AuthApi* | [**authenticateUserApiAuthPost**](docs/AuthApi.md#authenticateUserApiAuthPost) | **POST** /api/auth | Authenticate User
*OpenAiAssistantsApi.BlockApi* | [**createBlockApiBlocksPost**](docs/BlockApi.md#createBlockApiBlocksPost) | **POST** /api/blocks | Create Block
*OpenAiAssistantsApi.BlockApi* | [**deleteBlockApiBlocksBlockIdDelete**](docs/BlockApi.md#deleteBlockApiBlocksBlockIdDelete) | **DELETE** /api/blocks/{block_id} | Delete Block
*OpenAiAssistantsApi.BlockApi* | [**getBlockApiBlocksBlockIdGet**](docs/BlockApi.md#getBlockApiBlocksBlockIdGet) | **GET** /api/blocks/{block_id} | Get Block
*OpenAiAssistantsApi.BlockApi* | [**listBlocksApiBlocksGet**](docs/BlockApi.md#listBlocksApiBlocksGet) | **GET** /api/blocks | List Blocks
*OpenAiAssistantsApi.BlockApi* | [**updateBlockApiBlocksBlockIdPost**](docs/BlockApi.md#updateBlockApiBlocksBlockIdPost) | **POST** /api/blocks/{block_id} | Update Block
*OpenAiAssistantsApi.ChatCompletionsApi* | [**createChatCompletionV1ChatCompletionsPost**](docs/ChatCompletionsApi.md#createChatCompletionV1ChatCompletionsPost) | **POST** /v1/chat/completions | Create Chat Completion
*OpenAiAssistantsApi.ConfigApi* | [**getEmbeddingConfigsApiConfigEmbeddingGet**](docs/ConfigApi.md#getEmbeddingConfigsApiConfigEmbeddingGet) | **GET** /api/config/embedding | Get Embedding Configs
*OpenAiAssistantsApi.ConfigApi* | [**getLlmConfigsApiConfigLlmGet**](docs/ConfigApi.md#getLlmConfigsApiConfigLlmGet) | **GET** /api/config/llm | Get Llm Configs
*OpenAiAssistantsApi.JobsApi* | [**getJobApiJobsJobIdGet**](docs/JobsApi.md#getJobApiJobsJobIdGet) | **GET** /api/jobs/{job_id} | Get Job
*OpenAiAssistantsApi.JobsApi* | [**listActiveJobsApiJobsActiveGet**](docs/JobsApi.md#listActiveJobsApiJobsActiveGet) | **GET** /api/jobs/active | List Active Jobs
*OpenAiAssistantsApi.JobsApi* | [**listJobsApiJobsGet**](docs/JobsApi.md#listJobsApiJobsGet) | **GET** /api/jobs | List Jobs
*OpenAiAssistantsApi.MessagesApi* | [**createMessageV1ThreadsThreadIdMessagesPost**](docs/MessagesApi.md#createMessageV1ThreadsThreadIdMessagesPost) | **POST** /v1/threads/{thread_id}/messages | Create Message
*OpenAiAssistantsApi.MessagesApi* | [**listMessagesV1ThreadsThreadIdMessagesGet**](docs/MessagesApi.md#listMessagesV1ThreadsThreadIdMessagesGet) | **GET** /v1/threads/{thread_id}/messages | List Messages
*OpenAiAssistantsApi.MessagesApi* | [**modifyMessageV1ThreadsThreadIdMessagesMessageIdPost**](docs/MessagesApi.md#modifyMessageV1ThreadsThreadIdMessagesMessageIdPost) | **POST** /v1/threads/{thread_id}/messages/{message_id} | Modify Message
*OpenAiAssistantsApi.MessagesApi* | [**retrieveMessageFileV1ThreadsThreadIdMessagesMessageIdFilesFileIdGet**](docs/MessagesApi.md#retrieveMessageFileV1ThreadsThreadIdMessagesMessageIdFilesFileIdGet) | **GET** /v1/threads/{thread_id}/messages/{message_id}/files/{file_id} | Retrieve Message File
*OpenAiAssistantsApi.ModelsApi* | [**listModelsApiModelsGet**](docs/ModelsApi.md#listModelsApiModelsGet) | **GET** /api/models | List Models
*OpenAiAssistantsApi.RunsApi* | [**cancelRunV1ThreadsThreadIdRunsRunIdCancelPost**](docs/RunsApi.md#cancelRunV1ThreadsThreadIdRunsRunIdCancelPost) | **POST** /v1/threads/{thread_id}/runs/{run_id}/cancel | Cancel Run
*OpenAiAssistantsApi.RunsApi* | [**createRunV1ThreadsThreadIdRunsPost**](docs/RunsApi.md#createRunV1ThreadsThreadIdRunsPost) | **POST** /v1/threads/{thread_id}/runs | Create Run
*OpenAiAssistantsApi.RunsApi* | [**createThreadAndRunV1ThreadsRunsPost**](docs/RunsApi.md#createThreadAndRunV1ThreadsRunsPost) | **POST** /v1/threads/runs | Create Thread And Run
*OpenAiAssistantsApi.RunsApi* | [**listRunStepsV1ThreadsThreadIdRunsRunIdStepsGet**](docs/RunsApi.md#listRunStepsV1ThreadsThreadIdRunsRunIdStepsGet) | **GET** /v1/threads/{thread_id}/runs/{run_id}/steps | List Run Steps
*OpenAiAssistantsApi.RunsApi* | [**listRunsV1ThreadsThreadIdRunsGet**](docs/RunsApi.md#listRunsV1ThreadsThreadIdRunsGet) | **GET** /v1/threads/{thread_id}/runs | List Runs
*OpenAiAssistantsApi.RunsApi* | [**modifyRunV1ThreadsThreadIdRunsRunIdPost**](docs/RunsApi.md#modifyRunV1ThreadsThreadIdRunsRunIdPost) | **POST** /v1/threads/{thread_id}/runs/{run_id} | Modify Run
*OpenAiAssistantsApi.RunsApi* | [**retrieveRunStepV1ThreadsThreadIdRunsRunIdStepsStepIdGet**](docs/RunsApi.md#retrieveRunStepV1ThreadsThreadIdRunsRunIdStepsStepIdGet) | **GET** /v1/threads/{thread_id}/runs/{run_id}/steps/{step_id} | Retrieve Run Step
*OpenAiAssistantsApi.RunsApi* | [**retrieveRunV1ThreadsThreadIdRunsRunIdGet**](docs/RunsApi.md#retrieveRunV1ThreadsThreadIdRunsRunIdGet) | **GET** /v1/threads/{thread_id}/runs/{run_id} | Retrieve Run
*OpenAiAssistantsApi.RunsApi* | [**submitToolOutputsToRunV1ThreadsThreadIdRunsRunIdSubmitToolOutputsPost**](docs/RunsApi.md#submitToolOutputsToRunV1ThreadsThreadIdRunsRunIdSubmitToolOutputsPost) | **POST** /v1/threads/{thread_id}/runs/{run_id}/submit_tool_outputs | Submit Tool Outputs To Run
*OpenAiAssistantsApi.SourcesApi* | [**attachSourceToAgentApiSourcesSourceIdAttachPost**](docs/SourcesApi.md#attachSourceToAgentApiSourcesSourceIdAttachPost) | **POST** /api/sources/{source_id}/attach | Attach Source To Agent
*OpenAiAssistantsApi.SourcesApi* | [**createSourceApiSourcesPost**](docs/SourcesApi.md#createSourceApiSourcesPost) | **POST** /api/sources | Create Source
*OpenAiAssistantsApi.SourcesApi* | [**deleteSourceApiSourcesSourceIdDelete**](docs/SourcesApi.md#deleteSourceApiSourcesSourceIdDelete) | **DELETE** /api/sources/{source_id} | Delete Source
*OpenAiAssistantsApi.SourcesApi* | [**detachSourceFromAgentApiSourcesSourceIdDetachPost**](docs/SourcesApi.md#detachSourceFromAgentApiSourcesSourceIdDetachPost) | **POST** /api/sources/{source_id}/detach | Detach Source From Agent
*OpenAiAssistantsApi.SourcesApi* | [**getJobApiSourcesStatusJobIdGet**](docs/SourcesApi.md#getJobApiSourcesStatusJobIdGet) | **GET** /api/sources/status/{job_id} | Get Job
*OpenAiAssistantsApi.SourcesApi* | [**getSourceApiSourcesSourceIdGet**](docs/SourcesApi.md#getSourceApiSourcesSourceIdGet) | **GET** /api/sources/{source_id} | Get Source
*OpenAiAssistantsApi.SourcesApi* | [**getSourceIdByNameApiSourcesNameSourceNameGet**](docs/SourcesApi.md#getSourceIdByNameApiSourcesNameSourceNameGet) | **GET** /api/sources/name/{source_name} | Get Source Id By Name
*OpenAiAssistantsApi.SourcesApi* | [**listDocumentsApiSourcesSourceIdDocumentsGet**](docs/SourcesApi.md#listDocumentsApiSourcesSourceIdDocumentsGet) | **GET** /api/sources/{source_id}/documents | List Documents
*OpenAiAssistantsApi.SourcesApi* | [**listPassagesApiSourcesSourceIdPassagesGet**](docs/SourcesApi.md#listPassagesApiSourcesSourceIdPassagesGet) | **GET** /api/sources/{source_id}/passages  | List Passages
*OpenAiAssistantsApi.SourcesApi* | [**listSourcesApiSourcesGet**](docs/SourcesApi.md#listSourcesApiSourcesGet) | **GET** /api/sources | List Sources
*OpenAiAssistantsApi.SourcesApi* | [**updateSourceApiSourcesSourceIdPost**](docs/SourcesApi.md#updateSourceApiSourcesSourceIdPost) | **POST** /api/sources/{source_id} | Update Source
*OpenAiAssistantsApi.SourcesApi* | [**uploadFileToSourceApiSourcesSourceIdUploadPost**](docs/SourcesApi.md#uploadFileToSourceApiSourcesSourceIdUploadPost) | **POST** /api/sources/{source_id}/upload | Upload File To Source
*OpenAiAssistantsApi.ThreadsApi* | [**createThreadV1ThreadsPost**](docs/ThreadsApi.md#createThreadV1ThreadsPost) | **POST** /v1/threads | Create Thread
*OpenAiAssistantsApi.ThreadsApi* | [**deleteThreadV1ThreadsThreadIdDelete**](docs/ThreadsApi.md#deleteThreadV1ThreadsThreadIdDelete) | **DELETE** /v1/threads/{thread_id} | Delete Thread
*OpenAiAssistantsApi.ThreadsApi* | [**modifyThreadV1ThreadsThreadIdGet**](docs/ThreadsApi.md#modifyThreadV1ThreadsThreadIdGet) | **GET** /v1/threads/{thread_id} | Modify Thread
*OpenAiAssistantsApi.ToolsApi* | [**createToolAdminToolsPost**](docs/ToolsApi.md#createToolAdminToolsPost) | **POST** /admin/tools | Create Tool
*OpenAiAssistantsApi.ToolsApi* | [**createToolApiToolsPost**](docs/ToolsApi.md#createToolApiToolsPost) | **POST** /api/tools | Create Tool
*OpenAiAssistantsApi.ToolsApi* | [**deleteToolAdminToolsToolNameDelete**](docs/ToolsApi.md#deleteToolAdminToolsToolNameDelete) | **DELETE** /admin/tools/{tool_name} | Delete Tool
*OpenAiAssistantsApi.ToolsApi* | [**deleteToolApiToolsToolIdDelete**](docs/ToolsApi.md#deleteToolApiToolsToolIdDelete) | **DELETE** /api/tools/{tool_id} | Delete Tool
*OpenAiAssistantsApi.ToolsApi* | [**getToolAdminToolsToolNameGet**](docs/ToolsApi.md#getToolAdminToolsToolNameGet) | **GET** /admin/tools/{tool_name} | Get Tool
*OpenAiAssistantsApi.ToolsApi* | [**getToolApiToolsToolIdGet**](docs/ToolsApi.md#getToolApiToolsToolIdGet) | **GET** /api/tools/{tool_id} | Get Tool
*OpenAiAssistantsApi.ToolsApi* | [**getToolIdApiToolsNameToolNameGet**](docs/ToolsApi.md#getToolIdApiToolsNameToolNameGet) | **GET** /api/tools/name/{tool_name} | Get Tool Id
*OpenAiAssistantsApi.ToolsApi* | [**listAllToolsAdminToolsGet**](docs/ToolsApi.md#listAllToolsAdminToolsGet) | **GET** /admin/tools | List All Tools
*OpenAiAssistantsApi.ToolsApi* | [**listAllToolsApiToolsGet**](docs/ToolsApi.md#listAllToolsApiToolsGet) | **GET** /api/tools | List All Tools
*OpenAiAssistantsApi.ToolsApi* | [**updateToolApiToolsToolIdPost**](docs/ToolsApi.md#updateToolApiToolsToolIdPost) | **POST** /api/tools/{tool_id} | Update Tool


## Documentation for Models

 - [OpenAiAssistantsApi.APIKey](docs/APIKey.md)
 - [OpenAiAssistantsApi.APIKeyCreate](docs/APIKeyCreate.md)
 - [OpenAiAssistantsApi.AgentState](docs/AgentState.md)
 - [OpenAiAssistantsApi.ArchivalMemorySummary](docs/ArchivalMemorySummary.md)
 - [OpenAiAssistantsApi.AssistantFile](docs/AssistantFile.md)
 - [OpenAiAssistantsApi.AssistantMessageInput](docs/AssistantMessageInput.md)
 - [OpenAiAssistantsApi.AssistantMessageOutput](docs/AssistantMessageOutput.md)
 - [OpenAiAssistantsApi.AuthRequest](docs/AuthRequest.md)
 - [OpenAiAssistantsApi.AuthResponse](docs/AuthResponse.md)
 - [OpenAiAssistantsApi.Block](docs/Block.md)
 - [OpenAiAssistantsApi.ChatCompletionRequest](docs/ChatCompletionRequest.md)
 - [OpenAiAssistantsApi.ChatCompletionRequestMessagesInner](docs/ChatCompletionRequestMessagesInner.md)
 - [OpenAiAssistantsApi.ChatCompletionResponse](docs/ChatCompletionResponse.md)
 - [OpenAiAssistantsApi.Choice](docs/Choice.md)
 - [OpenAiAssistantsApi.ChoiceLogprobsValue](docs/ChoiceLogprobsValue.md)
 - [OpenAiAssistantsApi.Content](docs/Content.md)
 - [OpenAiAssistantsApi.CreateAgent](docs/CreateAgent.md)
 - [OpenAiAssistantsApi.CreateArchivalMemory](docs/CreateArchivalMemory.md)
 - [OpenAiAssistantsApi.CreateAssistantFileRequest](docs/CreateAssistantFileRequest.md)
 - [OpenAiAssistantsApi.CreateAssistantRequest](docs/CreateAssistantRequest.md)
 - [OpenAiAssistantsApi.CreateBlock](docs/CreateBlock.md)
 - [OpenAiAssistantsApi.CreateMessageRequest](docs/CreateMessageRequest.md)
 - [OpenAiAssistantsApi.CreateRunRequest](docs/CreateRunRequest.md)
 - [OpenAiAssistantsApi.CreateThreadRequest](docs/CreateThreadRequest.md)
 - [OpenAiAssistantsApi.CreateThreadRunRequest](docs/CreateThreadRunRequest.md)
 - [OpenAiAssistantsApi.CreateToolRequest](docs/CreateToolRequest.md)
 - [OpenAiAssistantsApi.DeleteAssistantFileResponse](docs/DeleteAssistantFileResponse.md)
 - [OpenAiAssistantsApi.DeleteAssistantResponse](docs/DeleteAssistantResponse.md)
 - [OpenAiAssistantsApi.DeleteThreadResponse](docs/DeleteThreadResponse.md)
 - [OpenAiAssistantsApi.Document](docs/Document.md)
 - [OpenAiAssistantsApi.EmbeddingConfig](docs/EmbeddingConfig.md)
 - [OpenAiAssistantsApi.Function](docs/Function.md)
 - [OpenAiAssistantsApi.FunctionCall](docs/FunctionCall.md)
 - [OpenAiAssistantsApi.FunctionCall1](docs/FunctionCall1.md)
 - [OpenAiAssistantsApi.FunctionCallDelta](docs/FunctionCallDelta.md)
 - [OpenAiAssistantsApi.FunctionCallInput](docs/FunctionCallInput.md)
 - [OpenAiAssistantsApi.FunctionCallMessage](docs/FunctionCallMessage.md)
 - [OpenAiAssistantsApi.FunctionReturn](docs/FunctionReturn.md)
 - [OpenAiAssistantsApi.FunctionSchema](docs/FunctionSchema.md)
 - [OpenAiAssistantsApi.HTTPValidationError](docs/HTTPValidationError.md)
 - [OpenAiAssistantsApi.ImageFile](docs/ImageFile.md)
 - [OpenAiAssistantsApi.InternalMonologue](docs/InternalMonologue.md)
 - [OpenAiAssistantsApi.Job](docs/Job.md)
 - [OpenAiAssistantsApi.JobStatus](docs/JobStatus.md)
 - [OpenAiAssistantsApi.LLMConfig](docs/LLMConfig.md)
 - [OpenAiAssistantsApi.LegacyFunctionCallMessage](docs/LegacyFunctionCallMessage.md)
 - [OpenAiAssistantsApi.ListMessagesResponse](docs/ListMessagesResponse.md)
 - [OpenAiAssistantsApi.ListModelsResponse](docs/ListModelsResponse.md)
 - [OpenAiAssistantsApi.ListToolsResponse](docs/ListToolsResponse.md)
 - [OpenAiAssistantsApi.LogProbToken](docs/LogProbToken.md)
 - [OpenAiAssistantsApi.MemGPTRequest](docs/MemGPTRequest.md)
 - [OpenAiAssistantsApi.MemGPTResponse](docs/MemGPTResponse.md)
 - [OpenAiAssistantsApi.MemGPTUsageStatistics](docs/MemGPTUsageStatistics.md)
 - [OpenAiAssistantsApi.MemgptSchemasMemgptMessageFunctionCall](docs/MemgptSchemasMemgptMessageFunctionCall.md)
 - [OpenAiAssistantsApi.MemgptSchemasMessageMessage](docs/MemgptSchemasMessageMessage.md)
 - [OpenAiAssistantsApi.MemgptSchemasOpenaiChatCompletionRequestToolCall](docs/MemgptSchemasOpenaiChatCompletionRequestToolCall.md)
 - [OpenAiAssistantsApi.MemgptSchemasOpenaiChatCompletionResponseFunctionCall](docs/MemgptSchemasOpenaiChatCompletionResponseFunctionCall.md)
 - [OpenAiAssistantsApi.MemgptSchemasOpenaiChatCompletionResponseMessage](docs/MemgptSchemasOpenaiChatCompletionResponseMessage.md)
 - [OpenAiAssistantsApi.MemgptSchemasOpenaiChatCompletionResponseToolCall](docs/MemgptSchemasOpenaiChatCompletionResponseToolCall.md)
 - [OpenAiAssistantsApi.MemgptSchemasOpenaiChatCompletionsToolCall](docs/MemgptSchemasOpenaiChatCompletionsToolCall.md)
 - [OpenAiAssistantsApi.MemgptSchemasOpenaiOpenaiToolCall](docs/MemgptSchemasOpenaiOpenaiToolCall.md)
 - [OpenAiAssistantsApi.Memory](docs/Memory.md)
 - [OpenAiAssistantsApi.MessageContentLogProb](docs/MessageContentLogProb.md)
 - [OpenAiAssistantsApi.MessageCreate](docs/MessageCreate.md)
 - [OpenAiAssistantsApi.MessageFile](docs/MessageFile.md)
 - [OpenAiAssistantsApi.MessageRole](docs/MessageRole.md)
 - [OpenAiAssistantsApi.Messages](docs/Messages.md)
 - [OpenAiAssistantsApi.MessagesAnyOfInner](docs/MessagesAnyOfInner.md)
 - [OpenAiAssistantsApi.MessagesAnyOfInner1](docs/MessagesAnyOfInner1.md)
 - [OpenAiAssistantsApi.ModifyMessageRequest](docs/ModifyMessageRequest.md)
 - [OpenAiAssistantsApi.ModifyRunRequest](docs/ModifyRunRequest.md)
 - [OpenAiAssistantsApi.ModifyThreadRequest](docs/ModifyThreadRequest.md)
 - [OpenAiAssistantsApi.OpenAIAssistant](docs/OpenAIAssistant.md)
 - [OpenAiAssistantsApi.OpenAIError](docs/OpenAIError.md)
 - [OpenAiAssistantsApi.OpenAIMessage](docs/OpenAIMessage.md)
 - [OpenAiAssistantsApi.OpenAIMessageContentInner](docs/OpenAIMessageContentInner.md)
 - [OpenAiAssistantsApi.OpenAIMessageCreationStep](docs/OpenAIMessageCreationStep.md)
 - [OpenAiAssistantsApi.OpenAIRun](docs/OpenAIRun.md)
 - [OpenAiAssistantsApi.OpenAIRunStep](docs/OpenAIRunStep.md)
 - [OpenAiAssistantsApi.OpenAIThread](docs/OpenAIThread.md)
 - [OpenAiAssistantsApi.OpenAIToolCallsStep](docs/OpenAIToolCallsStep.md)
 - [OpenAiAssistantsApi.OpenAIUsage](docs/OpenAIUsage.md)
 - [OpenAiAssistantsApi.Passage](docs/Passage.md)
 - [OpenAiAssistantsApi.RecallMemorySummary](docs/RecallMemorySummary.md)
 - [OpenAiAssistantsApi.RequiredAction](docs/RequiredAction.md)
 - [OpenAiAssistantsApi.ResponseFormat](docs/ResponseFormat.md)
 - [OpenAiAssistantsApi.Source](docs/Source.md)
 - [OpenAiAssistantsApi.SourceCreate](docs/SourceCreate.md)
 - [OpenAiAssistantsApi.SourceUpdate](docs/SourceUpdate.md)
 - [OpenAiAssistantsApi.StepDefaults](docs/StepDefaults.md)
 - [OpenAiAssistantsApi.Stop](docs/Stop.md)
 - [OpenAiAssistantsApi.SubmitToolOutputsToRunRequest](docs/SubmitToolOutputsToRunRequest.md)
 - [OpenAiAssistantsApi.SystemMessage](docs/SystemMessage.md)
 - [OpenAiAssistantsApi.Text](docs/Text.md)
 - [OpenAiAssistantsApi.ToolCallFunctionInput](docs/ToolCallFunctionInput.md)
 - [OpenAiAssistantsApi.ToolCallFunctionOutput](docs/ToolCallFunctionOutput.md)
 - [OpenAiAssistantsApi.ToolCallOutput](docs/ToolCallOutput.md)
 - [OpenAiAssistantsApi.ToolChoice](docs/ToolChoice.md)
 - [OpenAiAssistantsApi.ToolCreate](docs/ToolCreate.md)
 - [OpenAiAssistantsApi.ToolFunctionChoice](docs/ToolFunctionChoice.md)
 - [OpenAiAssistantsApi.ToolInput](docs/ToolInput.md)
 - [OpenAiAssistantsApi.ToolMessage](docs/ToolMessage.md)
 - [OpenAiAssistantsApi.ToolOutput](docs/ToolOutput.md)
 - [OpenAiAssistantsApi.ToolUpdate](docs/ToolUpdate.md)
 - [OpenAiAssistantsApi.UpdateAgentState](docs/UpdateAgentState.md)
 - [OpenAiAssistantsApi.UpdateBlock](docs/UpdateBlock.md)
 - [OpenAiAssistantsApi.UsageStatistics](docs/UsageStatistics.md)
 - [OpenAiAssistantsApi.User](docs/User.md)
 - [OpenAiAssistantsApi.UserCreate](docs/UserCreate.md)
 - [OpenAiAssistantsApi.UserMessage](docs/UserMessage.md)
 - [OpenAiAssistantsApi.ValidationError](docs/ValidationError.md)
 - [OpenAiAssistantsApi.ValidationErrorLocInner](docs/ValidationErrorLocInner.md)
 - [OpenAiAssistantsApi.Value](docs/Value.md)


## Documentation for Authorization


Authentication schemes defined for the API:
### HTTPBearer

- **Type**: Bearer authentication

