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
import type { V1UserSettingsGet200ResponseData } from './V1UserSettingsGet200ResponseData';
import {
    V1UserSettingsGet200ResponseDataFromJSON,
    V1UserSettingsGet200ResponseDataFromJSONTyped,
    V1UserSettingsGet200ResponseDataToJSON,
    V1UserSettingsGet200ResponseDataToJSONTyped,
} from './V1UserSettingsGet200ResponseData';

/**
 * 
 * @export
 * @interface V1UserSettingsGet200Response
 */
export interface V1UserSettingsGet200Response {
    /**
     * 
     */
    success: V1UserSettingsGet200ResponseSuccessEnum;
    /**
     * 
     */
    data: V1UserSettingsGet200ResponseData;
}


/**
 * @export
 */
export const V1UserSettingsGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1UserSettingsGet200ResponseSuccessEnum = typeof V1UserSettingsGet200ResponseSuccessEnum[keyof typeof V1UserSettingsGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1UserSettingsGet200Response interface.
 */
export function instanceOfV1UserSettingsGet200Response(value: object): value is V1UserSettingsGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1UserSettingsGet200ResponseFromJSON(json: any): V1UserSettingsGet200Response {
    return V1UserSettingsGet200ResponseFromJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': V1UserSettingsGet200ResponseDataFromJSON(json['data']),
    };
}

export function V1UserSettingsGet200ResponseToJSON(json: any): V1UserSettingsGet200Response {
    return V1UserSettingsGet200ResponseToJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseToJSONTyped(value?: V1UserSettingsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': V1UserSettingsGet200ResponseDataToJSON(value['data']),
    };
}

