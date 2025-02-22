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
 * The FunctionSchema model module.
 * @module model/FunctionSchema
 * @version 0.1.0
 */
class FunctionSchema {
    /**
     * Constructs a new <code>FunctionSchema</code>.
     * @alias module:model/FunctionSchema
     * @param name {String} 
     */
    constructor(name) { 
        
        FunctionSchema.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>FunctionSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FunctionSchema} obj Optional instance to populate.
     * @return {module:model/FunctionSchema} The populated <code>FunctionSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FunctionSchema();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('parameters')) {
                obj['parameters'] = ApiClient.convertToType(data['parameters'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FunctionSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FunctionSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of FunctionSchema.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }

        return true;
    }


}

FunctionSchema.RequiredProperties = ["name"];

/**
 * @member {String} name
 */
FunctionSchema.prototype['name'] = undefined;

/**
 * @member {String} description
 */
FunctionSchema.prototype['description'] = undefined;

/**
 * @member {Object} parameters
 */
FunctionSchema.prototype['parameters'] = undefined;






export default FunctionSchema;

