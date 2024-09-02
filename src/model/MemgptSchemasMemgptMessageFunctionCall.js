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
 * The MemgptSchemasMemgptMessageFunctionCall model module.
 * @module model/MemgptSchemasMemgptMessageFunctionCall
 * @version 0.1.0
 */
class MemgptSchemasMemgptMessageFunctionCall {
    /**
     * Constructs a new <code>MemgptSchemasMemgptMessageFunctionCall</code>.
     * @alias module:model/MemgptSchemasMemgptMessageFunctionCall
     * @param name {String} 
     * @param _arguments {String} 
     */
    constructor(name, _arguments) { 
        
        MemgptSchemasMemgptMessageFunctionCall.initialize(this, name, _arguments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, _arguments) { 
        obj['name'] = name;
        obj['arguments'] = _arguments;
    }

    /**
     * Constructs a <code>MemgptSchemasMemgptMessageFunctionCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MemgptSchemasMemgptMessageFunctionCall} obj Optional instance to populate.
     * @return {module:model/MemgptSchemasMemgptMessageFunctionCall} The populated <code>MemgptSchemasMemgptMessageFunctionCall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MemgptSchemasMemgptMessageFunctionCall();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('arguments')) {
                obj['arguments'] = ApiClient.convertToType(data['arguments'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MemgptSchemasMemgptMessageFunctionCall</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MemgptSchemasMemgptMessageFunctionCall</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MemgptSchemasMemgptMessageFunctionCall.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['arguments'] && !(typeof data['arguments'] === 'string' || data['arguments'] instanceof String)) {
            throw new Error("Expected the field `arguments` to be a primitive type in the JSON string but got " + data['arguments']);
        }

        return true;
    }


}

MemgptSchemasMemgptMessageFunctionCall.RequiredProperties = ["name", "arguments"];

/**
 * @member {String} name
 */
MemgptSchemasMemgptMessageFunctionCall.prototype['name'] = undefined;

/**
 * @member {String} arguments
 */
MemgptSchemasMemgptMessageFunctionCall.prototype['arguments'] = undefined;






export default MemgptSchemasMemgptMessageFunctionCall;

