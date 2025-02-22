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
 * The ArchivalMemorySummary model module.
 * @module model/ArchivalMemorySummary
 * @version 0.1.0
 */
class ArchivalMemorySummary {
    /**
     * Constructs a new <code>ArchivalMemorySummary</code>.
     * @alias module:model/ArchivalMemorySummary
     * @param size {Number} Number of rows in archival memory
     */
    constructor(size) { 
        
        ArchivalMemorySummary.initialize(this, size);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, size) { 
        obj['size'] = size;
    }

    /**
     * Constructs a <code>ArchivalMemorySummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ArchivalMemorySummary} obj Optional instance to populate.
     * @return {module:model/ArchivalMemorySummary} The populated <code>ArchivalMemorySummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ArchivalMemorySummary();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ArchivalMemorySummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ArchivalMemorySummary</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ArchivalMemorySummary.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

ArchivalMemorySummary.RequiredProperties = ["size"];

/**
 * Number of rows in archival memory
 * @member {Number} size
 */
ArchivalMemorySummary.prototype['size'] = undefined;






export default ArchivalMemorySummary;

