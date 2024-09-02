/**
 * OpenAI Assistants API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import MemgptSchemasOpenaiOpenaiToolCall from './MemgptSchemasOpenaiOpenaiToolCall';
import OpenAIThread from './OpenAIThread';

/**
 * The CreateThreadRunRequest model module.
 * @module model/CreateThreadRunRequest
 * @version 0.1.0
 */
class CreateThreadRunRequest {
    /**
     * Constructs a new <code>CreateThreadRunRequest</code>.
     * @alias module:model/CreateThreadRunRequest
     * @param assistantId {String} The unique identifier of the assistant.
     * @param thread {module:model/OpenAIThread} The thread to run.
     * @param model {String} The model used by the run.
     * @param instructions {String} The instructions for the run.
     */
    constructor(assistantId, thread, model, instructions) { 
        
        CreateThreadRunRequest.initialize(this, assistantId, thread, model, instructions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assistantId, thread, model, instructions) { 
        obj['assistant_id'] = assistantId;
        obj['thread'] = thread;
        obj['model'] = model;
        obj['instructions'] = instructions;
    }

    /**
     * Constructs a <code>CreateThreadRunRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateThreadRunRequest} obj Optional instance to populate.
     * @return {module:model/CreateThreadRunRequest} The populated <code>CreateThreadRunRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateThreadRunRequest();

            if (data.hasOwnProperty('assistant_id')) {
                obj['assistant_id'] = ApiClient.convertToType(data['assistant_id'], 'String');
            }
            if (data.hasOwnProperty('thread')) {
                obj['thread'] = ApiClient.convertToType(data['thread'], OpenAIThread);
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('tools')) {
                obj['tools'] = ApiClient.convertToType(data['tools'], [MemgptSchemasOpenaiOpenaiToolCall]);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateThreadRunRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateThreadRunRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateThreadRunRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['assistant_id'] && !(typeof data['assistant_id'] === 'string' || data['assistant_id'] instanceof String)) {
            throw new Error("Expected the field `assistant_id` to be a primitive type in the JSON string but got " + data['assistant_id']);
        }
        // validate the optional field `thread`
        if (data['thread']) { // data not null
          OpenAIThread.validateJSON(data['thread']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['instructions'] && !(typeof data['instructions'] === 'string' || data['instructions'] instanceof String)) {
            throw new Error("Expected the field `instructions` to be a primitive type in the JSON string but got " + data['instructions']);
        }
        if (data['tools']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tools'])) {
                throw new Error("Expected the field `tools` to be an array in the JSON data but got " + data['tools']);
            }
            // validate the optional field `tools` (array)
            for (const item of data['tools']) {
                MemgptSchemasOpenaiOpenaiToolCall.validateJSON(item);
            };
        }

        return true;
    }


}

CreateThreadRunRequest.RequiredProperties = ["assistant_id", "thread", "model", "instructions"];

/**
 * The unique identifier of the assistant.
 * @member {String} assistant_id
 */
CreateThreadRunRequest.prototype['assistant_id'] = undefined;

/**
 * The thread to run.
 * @member {module:model/OpenAIThread} thread
 */
CreateThreadRunRequest.prototype['thread'] = undefined;

/**
 * The model used by the run.
 * @member {String} model
 */
CreateThreadRunRequest.prototype['model'] = undefined;

/**
 * The instructions for the run.
 * @member {String} instructions
 */
CreateThreadRunRequest.prototype['instructions'] = undefined;

/**
 * @member {Array.<module:model/MemgptSchemasOpenaiOpenaiToolCall>} tools
 */
CreateThreadRunRequest.prototype['tools'] = undefined;

/**
 * @member {Object} metadata
 */
CreateThreadRunRequest.prototype['metadata'] = undefined;






export default CreateThreadRunRequest;

