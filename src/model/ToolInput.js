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
import FunctionSchema from './FunctionSchema';

/**
 * The ToolInput model module.
 * @module model/ToolInput
 * @version 0.1.0
 */
class ToolInput {
    /**
     * Constructs a new <code>ToolInput</code>.
     * @alias module:model/ToolInput
     * @param _function {module:model/FunctionSchema} 
     */
    constructor(_function) { 
        
        ToolInput.initialize(this, _function);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, _function) { 
        obj['function'] = _function;
    }

    /**
     * Constructs a <code>ToolInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ToolInput} obj Optional instance to populate.
     * @return {module:model/ToolInput} The populated <code>ToolInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ToolInput();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('function')) {
                obj['function'] = FunctionSchema.constructFromObject(data['function']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ToolInput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ToolInput</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ToolInput.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `function`
        if (data['function']) { // data not null
          FunctionSchema.validateJSON(data['function']);
        }

        return true;
    }


}

ToolInput.RequiredProperties = ["function"];

/**
 * @member {module:model/ToolInput.TypeEnum} type
 * @default 'function'
 */
ToolInput.prototype['type'] = 'function';

/**
 * @member {module:model/FunctionSchema} function
 */
ToolInput.prototype['function'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ToolInput['TypeEnum'] = {

    /**
     * value: "function"
     * @const
     */
    "function": "function"
};



export default ToolInput;

