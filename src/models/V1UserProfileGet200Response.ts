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
import type { V1UserProfileGet200ResponseData } from './V1UserProfileGet200ResponseData';
import {
    V1UserProfileGet200ResponseDataFromJSON,
    V1UserProfileGet200ResponseDataFromJSONTyped,
    V1UserProfileGet200ResponseDataToJSON,
    V1UserProfileGet200ResponseDataToJSONTyped,
} from './V1UserProfileGet200ResponseData';

/**
 * 
 * @export
 * @interface V1UserProfileGet200Response
 */
export interface V1UserProfileGet200Response {
    /**
     * 
     */
    success: V1UserProfileGet200ResponseSuccessEnum;
    /**
     * 
     */
    data: V1UserProfileGet200ResponseData;
}


/**
 * @export
 */
export const V1UserProfileGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1UserProfileGet200ResponseSuccessEnum = typeof V1UserProfileGet200ResponseSuccessEnum[keyof typeof V1UserProfileGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1UserProfileGet200Response interface.
 */
export function instanceOfV1UserProfileGet200Response(value: object): value is V1UserProfileGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1UserProfileGet200ResponseFromJSON(json: any): V1UserProfileGet200Response {
    return V1UserProfileGet200ResponseFromJSONTyped(json, false);
}

export function V1UserProfileGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserProfileGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': V1UserProfileGet200ResponseDataFromJSON(json['data']),
    };
}

export function V1UserProfileGet200ResponseToJSON(json: any): V1UserProfileGet200Response {
    return V1UserProfileGet200ResponseToJSONTyped(json, false);
}

export function V1UserProfileGet200ResponseToJSONTyped(value?: V1UserProfileGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': V1UserProfileGet200ResponseDataToJSON(value['data']),
    };
}

