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
import MemgptSchemasOpenaiChatCompletionResponseFunctionCall from './MemgptSchemasOpenaiChatCompletionResponseFunctionCall';

/**
 * The MemgptSchemasOpenaiChatCompletionResponseToolCall model module.
 * @module model/MemgptSchemasOpenaiChatCompletionResponseToolCall
 * @version 0.1.0
 */
class MemgptSchemasOpenaiChatCompletionResponseToolCall {
    /**
     * Constructs a new <code>MemgptSchemasOpenaiChatCompletionResponseToolCall</code>.
     * @alias module:model/MemgptSchemasOpenaiChatCompletionResponseToolCall
     * @param id {String} 
     * @param _function {module:model/MemgptSchemasOpenaiChatCompletionResponseFunctionCall} 
     */
    constructor(id, _function) { 
        
        MemgptSchemasOpenaiChatCompletionResponseToolCall.initialize(this, id, _function);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, _function) { 
        obj['id'] = id;
        obj['function'] = _function;
    }

    /**
     * Constructs a <code>MemgptSchemasOpenaiChatCompletionResponseToolCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemgptSchemasOpenaiChatCompletionResponseToolCall} obj Optional instance to populate.
     * @return {module:model/MemgptSchemasOpenaiChatCompletionResponseToolCall} The populated <code>MemgptSchemasOpenaiChatCompletionResponseToolCall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemgptSchemasOpenaiChatCompletionResponseToolCall();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('function')) {
                obj['function'] = MemgptSchemasOpenaiChatCompletionResponseFunctionCall.constructFromObject(data['function']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MemgptSchemasOpenaiChatCompletionResponseToolCall</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MemgptSchemasOpenaiChatCompletionResponseToolCall</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MemgptSchemasOpenaiChatCompletionResponseToolCall.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `function`
        if (data['function']) { // data not null
          MemgptSchemasOpenaiChatCompletionResponseFunctionCall.validateJSON(data['function']);
        }

        return true;
    }


}

MemgptSchemasOpenaiChatCompletionResponseToolCall.RequiredProperties = ["id", "function"];

/**
 * @member {String} id
 */
MemgptSchemasOpenaiChatCompletionResponseToolCall.prototype['id'] = undefined;

/**
 * @member {module:model/MemgptSchemasOpenaiChatCompletionResponseToolCall.TypeEnum} type
 * @default 'function'
 */
MemgptSchemasOpenaiChatCompletionResponseToolCall.prototype['type'] = 'function';

/**
 * @member {module:model/MemgptSchemasOpenaiChatCompletionResponseFunctionCall} function
 */
MemgptSchemasOpenaiChatCompletionResponseToolCall.prototype['function'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
MemgptSchemasOpenaiChatCompletionResponseToolCall['TypeEnum'] = {

    /**
     * value: "function"
     * @const
     */
    "function": "function"
};



export default MemgptSchemasOpenaiChatCompletionResponseToolCall;
