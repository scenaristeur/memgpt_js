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
 * The APIKey model module.
 * @module model/APIKey
 * @version 0.1.0
 */
class APIKey {
    /**
     * Constructs a new <code>APIKey</code>.
     * @alias module:model/APIKey
     * @param userId {String} The unique identifier of the user associated with the token.
     * @param key {String} The key value.
     * @param name {String} Name of the token.
     */
    constructor(userId, key, name) { 
        
        APIKey.initialize(this, userId, key, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId, key, name) { 
        obj['user_id'] = userId;
        obj['key'] = key;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>APIKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/APIKey} obj Optional instance to populate.
     * @return {module:model/APIKey} The populated <code>APIKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new APIKey();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>APIKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>APIKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of APIKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

APIKey.RequiredProperties = ["user_id", "key", "name"];

/**
 * The human-friendly ID of the Sk
 * @member {String} id
 */
APIKey.prototype['id'] = undefined;

/**
 * The unique identifier of the user associated with the token.
 * @member {String} user_id
 */
APIKey.prototype['user_id'] = undefined;

/**
 * The key value.
 * @member {String} key
 */
APIKey.prototype['key'] = undefined;

/**
 * Name of the token.
 * @member {String} name
 */
APIKey.prototype['name'] = undefined;






export default APIKey;
