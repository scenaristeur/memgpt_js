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
import EmbeddingConfig from './EmbeddingConfig';
import LLMConfig from './LLMConfig';
import Memory from './Memory';

/**
 * The CreateAgent model module.
 * @module model/CreateAgent
 * @version 0.1.0
 */
class CreateAgent {
    /**
     * Constructs a new <code>CreateAgent</code>.
     * @alias module:model/CreateAgent
     */
    constructor() { 
        
        CreateAgent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateAgent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAgent} obj Optional instance to populate.
     * @return {module:model/CreateAgent} The populated <code>CreateAgent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAgent();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('metadata_')) {
                obj['metadata_'] = ApiClient.convertToType(data['metadata_'], Object);
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('message_ids')) {
                obj['message_ids'] = ApiClient.convertToType(data['message_ids'], ['String']);
            }
            if (data.hasOwnProperty('memory')) {
                obj['memory'] = Memory.constructFromObject(data['memory']);
            }
            if (data.hasOwnProperty('tools')) {
                obj['tools'] = ApiClient.convertToType(data['tools'], ['String']);
            }
            if (data.hasOwnProperty('system')) {
                obj['system'] = ApiClient.convertToType(data['system'], 'String');
            }
            if (data.hasOwnProperty('llm_config')) {
                obj['llm_config'] = LLMConfig.constructFromObject(data['llm_config']);
            }
            if (data.hasOwnProperty('embedding_config')) {
                obj['embedding_config'] = EmbeddingConfig.constructFromObject(data['embedding_config']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateAgent</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateAgent</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['message_ids'])) {
            throw new Error("Expected the field `message_ids` to be an array in the JSON data but got " + data['message_ids']);
        }
        // validate the optional field `memory`
        if (data['memory']) { // data not null
          Memory.validateJSON(data['memory']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tools'])) {
            throw new Error("Expected the field `tools` to be an array in the JSON data but got " + data['tools']);
        }
        // ensure the json data is a string
        if (data['system'] && !(typeof data['system'] === 'string' || data['system'] instanceof String)) {
            throw new Error("Expected the field `system` to be a primitive type in the JSON string but got " + data['system']);
        }
        // validate the optional field `llm_config`
        if (data['llm_config']) { // data not null
          LLMConfig.validateJSON(data['llm_config']);
        }
        // validate the optional field `embedding_config`
        if (data['embedding_config']) { // data not null
          EmbeddingConfig.validateJSON(data['embedding_config']);
        }

        return true;
    }


}



/**
 * @member {String} description
 */
CreateAgent.prototype['description'] = undefined;

/**
 * @member {Object} metadata_
 */
CreateAgent.prototype['metadata_'] = undefined;

/**
 * @member {String} user_id
 */
CreateAgent.prototype['user_id'] = undefined;

/**
 * @member {String} name
 */
CreateAgent.prototype['name'] = undefined;

/**
 * @member {Array.<String>} message_ids
 */
CreateAgent.prototype['message_ids'] = undefined;

/**
 * @member {module:model/Memory} memory
 */
CreateAgent.prototype['memory'] = undefined;

/**
 * @member {Array.<String>} tools
 */
CreateAgent.prototype['tools'] = undefined;

/**
 * @member {String} system
 */
CreateAgent.prototype['system'] = undefined;

/**
 * @member {module:model/LLMConfig} llm_config
 */
CreateAgent.prototype['llm_config'] = undefined;

/**
 * @member {module:model/EmbeddingConfig} embedding_config
 */
CreateAgent.prototype['embedding_config'] = undefined;






export default CreateAgent;

