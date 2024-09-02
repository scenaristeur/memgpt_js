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
import ChoiceLogprobsValue from './ChoiceLogprobsValue';
import MemgptSchemasOpenaiChatCompletionResponseMessage from './MemgptSchemasOpenaiChatCompletionResponseMessage';

/**
 * The Choice model module.
 * @module model/Choice
 * @version 0.1.0
 */
class Choice {
    /**
     * Constructs a new <code>Choice</code>.
     * @alias module:model/Choice
     * @param finishReason {String} 
     * @param index {Number} 
     * @param message {module:model/MemgptSchemasOpenaiChatCompletionResponseMessage} 
     */
    constructor(finishReason, index, message) { 
        
        Choice.initialize(this, finishReason, index, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, finishReason, index, message) { 
        obj['finish_reason'] = finishReason;
        obj['index'] = index;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>Choice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Choice} obj Optional instance to populate.
     * @return {module:model/Choice} The populated <code>Choice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Choice();

            if (data.hasOwnProperty('finish_reason')) {
                obj['finish_reason'] = ApiClient.convertToType(data['finish_reason'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'Number');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = MemgptSchemasOpenaiChatCompletionResponseMessage.constructFromObject(data['message']);
            }
            if (data.hasOwnProperty('logprobs')) {
                obj['logprobs'] = ApiClient.convertToType(data['logprobs'], {'String': ChoiceLogprobsValue});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Choice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Choice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Choice.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['finish_reason'] && !(typeof data['finish_reason'] === 'string' || data['finish_reason'] instanceof String)) {
            throw new Error("Expected the field `finish_reason` to be a primitive type in the JSON string but got " + data['finish_reason']);
        }
        // validate the optional field `message`
        if (data['message']) { // data not null
          MemgptSchemasOpenaiChatCompletionResponseMessage.validateJSON(data['message']);
        }

        return true;
    }


}

Choice.RequiredProperties = ["finish_reason", "index", "message"];

/**
 * @member {String} finish_reason
 */
Choice.prototype['finish_reason'] = undefined;

/**
 * @member {Number} index
 */
Choice.prototype['index'] = undefined;

/**
 * @member {module:model/MemgptSchemasOpenaiChatCompletionResponseMessage} message
 */
Choice.prototype['message'] = undefined;

/**
 * @member {Object.<String, module:model/ChoiceLogprobsValue>} logprobs
 */
Choice.prototype['logprobs'] = undefined;






export default Choice;

