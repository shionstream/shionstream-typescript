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
import type { V1ProtectedSampleGet200ResponseUser } from './V1ProtectedSampleGet200ResponseUser';
import {
    V1ProtectedSampleGet200ResponseUserFromJSON,
    V1ProtectedSampleGet200ResponseUserFromJSONTyped,
    V1ProtectedSampleGet200ResponseUserToJSON,
    V1ProtectedSampleGet200ResponseUserToJSONTyped,
} from './V1ProtectedSampleGet200ResponseUser';

/**
 * 
 * @export
 * @interface V1ProtectedSampleGet200Response
 */
export interface V1ProtectedSampleGet200Response {
    /**
     * 
     */
    success: V1ProtectedSampleGet200ResponseSuccessEnum;
    /**
     * 
     */
    message: string;
    /**
     * 
     */
    user: V1ProtectedSampleGet200ResponseUser;
}


/**
 * @export
 */
export const V1ProtectedSampleGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1ProtectedSampleGet200ResponseSuccessEnum = typeof V1ProtectedSampleGet200ResponseSuccessEnum[keyof typeof V1ProtectedSampleGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1ProtectedSampleGet200Response interface.
 */
export function instanceOfV1ProtectedSampleGet200Response(value: object): value is V1ProtectedSampleGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    return true;
}

export function V1ProtectedSampleGet200ResponseFromJSON(json: any): V1ProtectedSampleGet200Response {
    return V1ProtectedSampleGet200ResponseFromJSONTyped(json, false);
}

export function V1ProtectedSampleGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProtectedSampleGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'message': json['message'],
        'user': V1ProtectedSampleGet200ResponseUserFromJSON(json['user']),
    };
}

export function V1ProtectedSampleGet200ResponseToJSON(json: any): V1ProtectedSampleGet200Response {
    return V1ProtectedSampleGet200ResponseToJSONTyped(json, false);
}

export function V1ProtectedSampleGet200ResponseToJSONTyped(value?: V1ProtectedSampleGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'message': value['message'],
        'user': V1ProtectedSampleGet200ResponseUserToJSON(value['user']),
    };
}

