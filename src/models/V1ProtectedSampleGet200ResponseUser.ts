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
/**
 * 
 * @export
 * @interface V1ProtectedSampleGet200ResponseUser
 */
export interface V1ProtectedSampleGet200ResponseUser {
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
    role: string;
}

/**
 * Check if a given object implements the V1ProtectedSampleGet200ResponseUser interface.
 */
export function instanceOfV1ProtectedSampleGet200ResponseUser(value: object): value is V1ProtectedSampleGet200ResponseUser {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function V1ProtectedSampleGet200ResponseUserFromJSON(json: any): V1ProtectedSampleGet200ResponseUser {
    return V1ProtectedSampleGet200ResponseUserFromJSONTyped(json, false);
}

export function V1ProtectedSampleGet200ResponseUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProtectedSampleGet200ResponseUser {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'email': json['email'],
        'role': json['role'],
    };
}

export function V1ProtectedSampleGet200ResponseUserToJSON(json: any): V1ProtectedSampleGet200ResponseUser {
    return V1ProtectedSampleGet200ResponseUserToJSONTyped(json, false);
}

export function V1ProtectedSampleGet200ResponseUserToJSONTyped(value?: V1ProtectedSampleGet200ResponseUser | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'email': value['email'],
        'role': value['role'],
    };
}

