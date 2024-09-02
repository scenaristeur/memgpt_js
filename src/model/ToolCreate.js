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
 * The ToolCreate model module.
 * @module model/ToolCreate
 * @version 0.1.0
 */
class ToolCreate {
    /**
     * Constructs a new <code>ToolCreate</code>.
     * @alias module:model/ToolCreate
     * @param tags {Array.<String>} Metadata tags.
     * @param sourceCode {String} The source code of the function.
     */
    constructor(tags, sourceCode) { 
        
        ToolCreate.initialize(this, tags, sourceCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tags, sourceCode) { 
        obj['tags'] = tags;
        obj['source_code'] = sourceCode;
    }

    /**
     * Constructs a <code>ToolCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ToolCreate} obj Optional instance to populate.
     * @return {module:model/ToolCreate} The populated <code>ToolCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ToolCreate();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('source_type')) {
                obj['source_type'] = ApiClient.convertToType(data['source_type'], 'String');
            }
            if (data.hasOwnProperty('module')) {
                obj['module'] = ApiClient.convertToType(data['module'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('source_code')) {
                obj['source_code'] = ApiClient.convertToType(data['source_code'], 'String');
            }
            if (data.hasOwnProperty('json_schema')) {
                obj['json_schema'] = ApiClient.convertToType(data['json_schema'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ToolCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ToolCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ToolCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['source_type'] && !(typeof data['source_type'] === 'string' || data['source_type'] instanceof String)) {
            throw new Error("Expected the field `source_type` to be a primitive type in the JSON string but got " + data['source_type']);
        }
        // ensure the json data is a string
        if (data['module'] && !(typeof data['module'] === 'string' || data['module'] instanceof String)) {
            throw new Error("Expected the field `module` to be a primitive type in the JSON string but got " + data['module']);
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
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['source_code'] && !(typeof data['source_code'] === 'string' || data['source_code'] instanceof String)) {
            throw new Error("Expected the field `source_code` to be a primitive type in the JSON string but got " + data['source_code']);
        }

        return true;
    }


}

ToolCreate.RequiredProperties = ["tags", "source_code"];

/**
 * @member {String} description
 */
ToolCreate.prototype['description'] = undefined;

/**
 * @member {String} source_type
 */
ToolCreate.prototype['source_type'] = undefined;

/**
 * @member {String} module
 */
ToolCreate.prototype['module'] = undefined;

/**
 * @member {String} user_id
 */
ToolCreate.prototype['user_id'] = undefined;

/**
 * @member {String} name
 */
ToolCreate.prototype['name'] = undefined;

/**
 * Metadata tags.
 * @member {Array.<String>} tags
 */
ToolCreate.prototype['tags'] = undefined;

/**
 * The source code of the function.
 * @member {String} source_code
 */
ToolCreate.prototype['source_code'] = undefined;

/**
 * @member {Object} json_schema
 */
ToolCreate.prototype['json_schema'] = undefined;






export default ToolCreate;

