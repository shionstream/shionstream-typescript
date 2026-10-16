/* tslint:disable */
/* eslint-disable */
/**
 * ShionStream API
 * Modular anime streaming and metadata API built with Hono on Cloudflare Workers.
 *
 * The version of the OpenAPI document: 1.0.0
 * Author: ShionStream Engineering Team
 * Contact: dev@gox.my.id
 * Website: https://gox.my.id
 * License: Apache-2.0 (https://www.apache.org/licenses/LICENSE-2.0.html)
 *
 * NOTE: This class is auto generated for ShionStream API.
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { V1UserProfileGet200ResponseDataActivity } from './V1UserProfileGet200ResponseDataActivity';
import {
    V1UserProfileGet200ResponseDataActivityFromJSON,
    V1UserProfileGet200ResponseDataActivityFromJSONTyped,
    V1UserProfileGet200ResponseDataActivityToJSON,
    V1UserProfileGet200ResponseDataActivityToJSONTyped,
} from './V1UserProfileGet200ResponseDataActivity';

/**
 * 
 * @export
 * @interface V1UserProfileGet200ResponseData
 */
export interface V1UserProfileGet200ResponseData {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    email: string;
    /**
     * 
     */
    image?: string;
    /**
     * 
     */
    role: string;
    /**
     * 
     */
    activity: V1UserProfileGet200ResponseDataActivity;
}

/**
 * Check if a given object implements the V1UserProfileGet200ResponseData interface.
 */
export function instanceOfV1UserProfileGet200ResponseData(value: object): value is V1UserProfileGet200ResponseData {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('activity' in value) || value['activity'] === undefined) return false;
    return true;
}

export function V1UserProfileGet200ResponseDataFromJSON(json: any): V1UserProfileGet200ResponseData {
    return V1UserProfileGet200ResponseDataFromJSONTyped(json, false);
}

export function V1UserProfileGet200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserProfileGet200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'email': json['email'],
        'image': json['image'] == null ? undefined : json['image'],
        'role': json['role'],
        'activity': V1UserProfileGet200ResponseDataActivityFromJSON(json['activity']),
    };
}

export function V1UserProfileGet200ResponseDataToJSON(json: any): V1UserProfileGet200ResponseData {
    return V1UserProfileGet200ResponseDataToJSONTyped(json, false);
}

export function V1UserProfileGet200ResponseDataToJSONTyped(value?: V1UserProfileGet200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'email': value['email'],
        'image': value['image'],
        'role': value['role'],
        'activity': V1UserProfileGet200ResponseDataActivityToJSON(value['activity']),
    };
}

