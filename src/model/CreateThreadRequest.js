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
 * The CreateThreadRequest model module.
 * @module model/CreateThreadRequest
 * @version 0.1.0
 */
class CreateThreadRequest {
    /**
     * Constructs a new <code>CreateThreadRequest</code>.
     * @alias module:model/CreateThreadRequest
     */
    constructor() { 
        
        CreateThreadRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateThreadRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateThreadRequest} obj Optional instance to populate.
     * @return {module:model/CreateThreadRequest} The populated <code>CreateThreadRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateThreadRequest();

            if (data.hasOwnProperty('messages')) {
                obj['messages'] = ApiClient.convertToType(data['messages'], ['String']);
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
            if (data.hasOwnProperty('assistant_name')) {
                obj['assistant_name'] = ApiClient.convertToType(data['assistant_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateThreadRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateThreadRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['messages'])) {
            throw new Error("Expected the field `messages` to be an array in the JSON data but got " + data['messages']);
        }
        // ensure the json data is a string
        if (data['assistant_name'] && !(typeof data['assistant_name'] === 'string' || data['assistant_name'] instanceof String)) {
            throw new Error("Expected the field `assistant_name` to be a primitive type in the JSON string but got " + data['assistant_name']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} messages
 */
CreateThreadRequest.prototype['messages'] = undefined;

/**
 * @member {Object} metadata
 */
CreateThreadRequest.prototype['metadata'] = undefined;

/**
 * @member {String} assistant_name
 */
CreateThreadRequest.prototype['assistant_name'] = undefined;






export default CreateThreadRequest;

