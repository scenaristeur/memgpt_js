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
import JobStatus from './JobStatus';

/**
 * The Job model module.
 * @module model/Job
 * @version 0.1.0
 */
class Job {
    /**
     * Constructs a new <code>Job</code>.
     * Representation of offline jobs.
     * @alias module:model/Job
     * @param userId {String} The unique identifier of the user associated with the job.
     */
    constructor(userId) { 
        
        Job.initialize(this, userId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userId) { 
        obj['user_id'] = userId;
    }

    /**
     * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Job} obj Optional instance to populate.
     * @return {module:model/Job} The populated <code>Job</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Job();

            if (data.hasOwnProperty('metadata_')) {
                obj['metadata_'] = ApiClient.convertToType(data['metadata_'], Object);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], JobStatus);
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('completed_at')) {
                obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Job</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Job</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Job.RequiredProperties) {
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

        return true;
    }


}

Job.RequiredProperties = ["user_id"];

/**
 * @member {Object} metadata_
 */
Job.prototype['metadata_'] = undefined;

/**
 * The human-friendly ID of the Job
 * @member {String} id
 */
Job.prototype['id'] = undefined;

/**
 * The status of the job.
 * @member {module:model/JobStatus} status
 */
Job.prototype['status'] = undefined;

/**
 * The unix timestamp of when the job was created.
 * @member {Date} created_at
 */
Job.prototype['created_at'] = undefined;

/**
 * @member {Date} completed_at
 */
Job.prototype['completed_at'] = undefined;

/**
 * The unique identifier of the user associated with the job.
 * @member {String} user_id
 */
Job.prototype['user_id'] = undefined;






export default Job;

