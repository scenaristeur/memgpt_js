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
 * The OpenAIThread model module.
 * @module model/OpenAIThread
 * @version 0.1.0
 */
class OpenAIThread {
    /**
     * Constructs a new <code>OpenAIThread</code>.
     * Represents an OpenAI thread (equivalent to MemGPT agent)
     * @alias module:model/OpenAIThread
     * @param id {String} The unique identifier of the thread.
     * @param createdAt {Number} The unix timestamp of when the thread was created.
     */
    constructor(id, createdAt) { 
        
        OpenAIThread.initialize(this, id, createdAt);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, createdAt) { 
        obj['id'] = id;
        obj['created_at'] = createdAt;
    }

    /**
     * Constructs a <code>OpenAIThread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OpenAIThread} obj Optional instance to populate.
     * @return {module:model/OpenAIThread} The populated <code>OpenAIThread</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OpenAIThread();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('object')) {
                obj['object'] = ApiClient.convertToType(data['object'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OpenAIThread</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OpenAIThread</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of OpenAIThread.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['object'] && !(typeof data['object'] === 'string' || data['object'] instanceof String)) {
            throw new Error("Expected the field `object` to be a primitive type in the JSON string but got " + data['object']);
        }

        return true;
    }


}

OpenAIThread.RequiredProperties = ["id", "created_at"];

/**
 * The unique identifier of the thread.
 * @member {String} id
 */
OpenAIThread.prototype['id'] = undefined;

/**
 * @member {String} object
 * @default 'thread'
 */
OpenAIThread.prototype['object'] = 'thread';

/**
 * The unix timestamp of when the thread was created.
 * @member {Number} created_at
 */
OpenAIThread.prototype['created_at'] = undefined;

/**
 * Metadata associated with the thread.
 * @member {Object} metadata
 */
OpenAIThread.prototype['metadata'] = undefined;






export default OpenAIThread;

