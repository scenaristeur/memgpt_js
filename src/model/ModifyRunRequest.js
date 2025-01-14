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
 * The ModifyRunRequest model module.
 * @module model/ModifyRunRequest
 * @version 0.1.0
 */
class ModifyRunRequest {
    /**
     * Constructs a new <code>ModifyRunRequest</code>.
     * @alias module:model/ModifyRunRequest
     */
    constructor() { 
        
        ModifyRunRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ModifyRunRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyRunRequest} obj Optional instance to populate.
     * @return {module:model/ModifyRunRequest} The populated <code>ModifyRunRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ModifyRunRequest();

            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ModifyRunRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ModifyRunRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * Metadata associated with the run.
 * @member {Object} metadata
 */
ModifyRunRequest.prototype['metadata'] = undefined;






export default ModifyRunRequest;

