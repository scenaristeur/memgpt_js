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
 * The RecallMemorySummary model module.
 * @module model/RecallMemorySummary
 * @version 0.1.0
 */
class RecallMemorySummary {
    /**
     * Constructs a new <code>RecallMemorySummary</code>.
     * @alias module:model/RecallMemorySummary
     * @param size {Number} Number of rows in recall memory
     */
    constructor(size) { 
        
        RecallMemorySummary.initialize(this, size);
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
     * Constructs a <code>RecallMemorySummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RecallMemorySummary} obj Optional instance to populate.
     * @return {module:model/RecallMemorySummary} The populated <code>RecallMemorySummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RecallMemorySummary();

            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RecallMemorySummary</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RecallMemorySummary</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RecallMemorySummary.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }


}

RecallMemorySummary.RequiredProperties = ["size"];

/**
 * Number of rows in recall memory
 * @member {Number} size
 */
RecallMemorySummary.prototype['size'] = undefined;






export default RecallMemorySummary;
