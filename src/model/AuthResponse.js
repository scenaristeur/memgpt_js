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
 * The AuthResponse model module.
 * @module model/AuthResponse
 * @version 0.1.0
 */
class AuthResponse {
    /**
     * Constructs a new <code>AuthResponse</code>.
     * @alias module:model/AuthResponse
     * @param uuid {String} UUID of the user
     */
    constructor(uuid) { 
        
        AuthResponse.initialize(this, uuid);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, uuid) { 
        obj['uuid'] = uuid;
    }

    /**
     * Constructs a <code>AuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthResponse} obj Optional instance to populate.
     * @return {module:model/AuthResponse} The populated <code>AuthResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthResponse();

            if (data.hasOwnProperty('uuid')) {
                obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
            }
            if (data.hasOwnProperty('is_admin')) {
                obj['is_admin'] = ApiClient.convertToType(data['is_admin'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AuthResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['uuid'] && !(typeof data['uuid'] === 'string' || data['uuid'] instanceof String)) {
            throw new Error("Expected the field `uuid` to be a primitive type in the JSON string but got " + data['uuid']);
        }

        return true;
    }


}

AuthResponse.RequiredProperties = ["uuid"];

/**
 * UUID of the user
 * @member {String} uuid
 */
AuthResponse.prototype['uuid'] = undefined;

/**
 * @member {Boolean} is_admin
 */
AuthResponse.prototype['is_admin'] = undefined;






export default AuthResponse;
