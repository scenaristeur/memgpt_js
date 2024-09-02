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

/**
 * The OpenAIAssistant model module.
 * @module model/OpenAIAssistant
 * @version 0.1.0
 */
class OpenAIAssistant {
    /**
     * Constructs a new <code>OpenAIAssistant</code>.
     * Represents an OpenAI assistant (equivalent to MemGPT preset)
     * @alias module:model/OpenAIAssistant
     * @param id {String} The unique identifier of the assistant.
     * @param name {String} The name of the assistant.
     * @param createdAt {Number} The unix timestamp of when the assistant was created.
     * @param model {String} The model used by the assistant.
     * @param instructions {String} The instructions for the assistant.
     */
    constructor(id, name, createdAt, model, instructions) { 
        
        OpenAIAssistant.initialize(this, id, name, createdAt, model, instructions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, createdAt, model, instructions) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['created_at'] = createdAt;
        obj['model'] = model;
        obj['instructions'] = instructions;
    }

    /**
     * Constructs a <code>OpenAIAssistant</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OpenAIAssistant} obj Optional instance to populate.
     * @return {module:model/OpenAIAssistant} The populated <code>OpenAIAssistant</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenAIAssistant();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('instructions')) {
                obj['instructions'] = ApiClient.convertToType(data['instructions'], 'String');
            }
            if (data.hasOwnProperty('tools')) {
                obj['tools'] = ApiClient.convertToType(data['tools'], ['String']);
            }
            if (data.hasOwnProperty('file_ids')) {
                obj['file_ids'] = ApiClient.convertToType(data['file_ids'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpenAIAssistant</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpenAIAssistant</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OpenAIAssistant.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['model'] && !(typeof data['model'] === 'string' || data['model'] instanceof String)) {
            throw new Error("Expected the field `model` to be a primitive type in the JSON string but got " + data['model']);
        }
        // ensure the json data is a string
        if (data['instructions'] && !(typeof data['instructions'] === 'string' || data['instructions'] instanceof String)) {
            throw new Error("Expected the field `instructions` to be a primitive type in the JSON string but got " + data['instructions']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tools'])) {
            throw new Error("Expected the field `tools` to be an array in the JSON data but got " + data['tools']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['file_ids'])) {
            throw new Error("Expected the field `file_ids` to be an array in the JSON data but got " + data['file_ids']);
        }

        return true;
    }


}

OpenAIAssistant.RequiredProperties = ["id", "name", "created_at", "model", "instructions"];

/**
 * The unique identifier of the assistant.
 * @member {String} id
 */
OpenAIAssistant.prototype['id'] = undefined;

/**
 * The name of the assistant.
 * @member {String} name
 */
OpenAIAssistant.prototype['name'] = undefined;

/**
 * @member {String} object
 * @default 'assistant'
 */
OpenAIAssistant.prototype['object'] = 'assistant';

/**
 * @member {String} description
 */
OpenAIAssistant.prototype['description'] = undefined;

/**
 * The unix timestamp of when the assistant was created.
 * @member {Number} created_at
 */
OpenAIAssistant.prototype['created_at'] = undefined;

/**
 * The model used by the assistant.
 * @member {String} model
 */
OpenAIAssistant.prototype['model'] = undefined;

/**
 * The instructions for the assistant.
 * @member {String} instructions
 */
OpenAIAssistant.prototype['instructions'] = undefined;

/**
 * @member {Array.<String>} tools
 */
OpenAIAssistant.prototype['tools'] = undefined;

/**
 * @member {Array.<String>} file_ids
 */
OpenAIAssistant.prototype['file_ids'] = undefined;

/**
 * @member {Object} metadata
 */
OpenAIAssistant.prototype['metadata'] = undefined;






export default OpenAIAssistant;
