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
import OpenAIError from './OpenAIError';
import OpenAIUsage from './OpenAIUsage';
import RequiredAction from './RequiredAction';

/**
 * The OpenAIRun model module.
 * @module model/OpenAIRun
 * @version 0.1.0
 */
class OpenAIRun {
    /**
     * Constructs a new <code>OpenAIRun</code>.
     * @alias module:model/OpenAIRun
     * @param id {String} The unique identifier of the run.
     * @param createdAt {Number} The unix timestamp of when the run was created.
     * @param threadId {String} The unique identifier of the thread.
     * @param assistantId {String} The unique identifier of the assistant.
     * @param status {String} The status of the run.
     * @param expiresAt {Number} The unix timestamp of when the run expires.
     * @param model {String} The model used by the run.
     * @param instructions {String} The instructions for the run.
     */
    constructor(id, createdAt, threadId, assistantId, status, expiresAt, model, instructions) { 
        
        OpenAIRun.initialize(this, id, createdAt, threadId, assistantId, status, expiresAt, model, instructions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt, threadId, assistantId, status, expiresAt, model, instructions) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
        obj['thread_id'] = threadId;
        obj['assistant_id'] = assistantId;
        obj['status'] = status;
        obj['expires_at'] = expiresAt;
        obj['model'] = model;
        obj['instructions'] = instructions;
    }

    /**
     * Constructs a <code>OpenAIRun</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OpenAIRun} obj Optional instance to populate.
     * @return {module:model/OpenAIRun} The populated <code>OpenAIRun</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenAIRun();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('thread_id')) {
                obj['thread_id'] = ApiClient.convertToType(data['thread_id'], 'String');
            }
            if (data.hasOwnProperty('assistant_id')) {
                obj['assistant_id'] = ApiClient.convertToType(data['assistant_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('required_action')) {
                obj['required_action'] = RequiredAction.constructFromObject(data['required_action']);
            }
            if (data.hasOwnProperty('last_error')) {
                obj['last_error'] = OpenAIError.constructFromObject(data['last_error']);
            }
            if (data.hasOwnProperty('expires_at')) {
                obj['expires_at'] = ApiClient.convertToType(data['expires_at'], 'Number');
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Number');
            }
            if (data.hasOwnProperty('cancelled_at')) {
                obj['cancelled_at'] = ApiClient.convertToType(data['cancelled_at'], 'Number');
            }
            if (data.hasOwnProperty('failed_at')) {
                obj['failed_at'] = ApiClient.convertToType(data['failed_at'], 'Number');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Number');
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
            if (data.hasOwnProperty('file_ids')) {
                obj['file_ids'] = ApiClient.convertToType(data['file_ids'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('usage')) {
                obj['usage'] = OpenAIUsage.constructFromObject(data['usage']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpenAIRun</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpenAIRun</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OpenAIRun.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['thread_id'] && !(typeof data['thread_id'] === 'string' || data['thread_id'] instanceof String)) {
            throw new Error("Expected the field `thread_id` to be a primitive type in the JSON string but got " + data['thread_id']);
        }
        // ensure the json data is a string
        if (data['assistant_id'] && !(typeof data['assistant_id'] === 'string' || data['assistant_id'] instanceof String)) {
            throw new Error("Expected the field `assistant_id` to be a primitive type in the JSON string but got " + data['assistant_id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `required_action`
        if (data['required_action']) { // data not null
          RequiredAction.validateJSON(data['required_action']);
        }
        // validate the optional field `last_error`
        if (data['last_error']) { // data not null
          OpenAIError.validateJSON(data['last_error']);
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
        // ensure the json data is an array
        if (!Array.isArray(data['file_ids'])) {
            throw new Error("Expected the field `file_ids` to be an array in the JSON data but got " + data['file_ids']);
        }
        // validate the optional field `usage`
        if (data['usage']) { // data not null
          OpenAIUsage.validateJSON(data['usage']);
        }

        return true;
    }


}

OpenAIRun.RequiredProperties = ["id", "created_at", "thread_id", "assistant_id", "status", "expires_at", "model", "instructions"];

/**
 * The unique identifier of the run.
 * @member {String} id
 */
OpenAIRun.prototype['id'] = undefined;

/**
 * @member {String} object
 * @default 'thread.run'
 */
OpenAIRun.prototype['object'] = 'thread.run';

/**
 * The unix timestamp of when the run was created.
 * @member {Number} created_at
 */
OpenAIRun.prototype['created_at'] = undefined;

/**
 * The unique identifier of the thread.
 * @member {String} thread_id
 */
OpenAIRun.prototype['thread_id'] = undefined;

/**
 * The unique identifier of the assistant.
 * @member {String} assistant_id
 */
OpenAIRun.prototype['assistant_id'] = undefined;

/**
 * The status of the run.
 * @member {String} status
 */
OpenAIRun.prototype['status'] = undefined;

/**
 * @member {module:model/RequiredAction} required_action
 */
OpenAIRun.prototype['required_action'] = undefined;

/**
 * @member {module:model/OpenAIError} last_error
 */
OpenAIRun.prototype['last_error'] = undefined;

/**
 * The unix timestamp of when the run expires.
 * @member {Number} expires_at
 */
OpenAIRun.prototype['expires_at'] = undefined;

/**
 * @member {Number} started_at
 */
OpenAIRun.prototype['started_at'] = undefined;

/**
 * @member {Number} cancelled_at
 */
OpenAIRun.prototype['cancelled_at'] = undefined;

/**
 * @member {Number} failed_at
 */
OpenAIRun.prototype['failed_at'] = undefined;

/**
 * @member {Number} completed_at
 */
OpenAIRun.prototype['completed_at'] = undefined;

/**
 * The model used by the run.
 * @member {String} model
 */
OpenAIRun.prototype['model'] = undefined;

/**
 * The instructions for the run.
 * @member {String} instructions
 */
OpenAIRun.prototype['instructions'] = undefined;

/**
 * @member {Array.<module:model/MemgptSchemasOpenaiOpenaiToolCall>} tools
 */
OpenAIRun.prototype['tools'] = undefined;

/**
 * @member {Array.<String>} file_ids
 */
OpenAIRun.prototype['file_ids'] = undefined;

/**
 * @member {Object} metadata
 */
OpenAIRun.prototype['metadata'] = undefined;

/**
 * @member {module:model/OpenAIUsage} usage
 */
OpenAIRun.prototype['usage'] = undefined;






export default OpenAIRun;
