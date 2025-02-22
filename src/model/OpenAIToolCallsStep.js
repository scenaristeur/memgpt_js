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

/**
 * The OpenAIToolCallsStep model module.
 * @module model/OpenAIToolCallsStep
 * @version 0.1.0
 */
class OpenAIToolCallsStep {
    /**
     * Constructs a new <code>OpenAIToolCallsStep</code>.
     * @alias module:model/OpenAIToolCallsStep
     * @param toolCalls {Array.<module:model/MemgptSchemasOpenaiOpenaiToolCall>} The tool calls.
     */
    constructor(toolCalls) { 
        
        OpenAIToolCallsStep.initialize(this, toolCalls);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, toolCalls) { 
        obj['tool_calls'] = toolCalls;
    }

    /**
     * Constructs a <code>OpenAIToolCallsStep</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OpenAIToolCallsStep} obj Optional instance to populate.
     * @return {module:model/OpenAIToolCallsStep} The populated <code>OpenAIToolCallsStep</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenAIToolCallsStep();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('tool_calls')) {
                obj['tool_calls'] = ApiClient.convertToType(data['tool_calls'], [MemgptSchemasOpenaiOpenaiToolCall]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpenAIToolCallsStep</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpenAIToolCallsStep</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OpenAIToolCallsStep.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        if (data['tool_calls']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['tool_calls'])) {
                throw new Error("Expected the field `tool_calls` to be an array in the JSON data but got " + data['tool_calls']);
            }
            // validate the optional field `tool_calls` (array)
            for (const item of data['tool_calls']) {
                MemgptSchemasOpenaiOpenaiToolCall.validateJSON(item);
            };
        }

        return true;
    }


}

OpenAIToolCallsStep.RequiredProperties = ["tool_calls"];

/**
 * @member {String} type
 * @default 'tool_calls'
 */
OpenAIToolCallsStep.prototype['type'] = 'tool_calls';

/**
 * The tool calls.
 * @member {Array.<module:model/MemgptSchemasOpenaiOpenaiToolCall>} tool_calls
 */
OpenAIToolCallsStep.prototype['tool_calls'] = undefined;






export default OpenAIToolCallsStep;

