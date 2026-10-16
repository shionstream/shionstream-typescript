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
 * @interface V1UserSettingsPatch200Response
 */
export interface V1UserSettingsPatch200Response {
    /**
     * 
     */
    success: V1UserSettingsPatch200ResponseSuccessEnum;
    /**
     * 
     */
    message?: string;
}


/**
 * @export
 */
export const V1UserSettingsPatch200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1UserSettingsPatch200ResponseSuccessEnum = typeof V1UserSettingsPatch200ResponseSuccessEnum[keyof typeof V1UserSettingsPatch200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1UserSettingsPatch200Response interface.
 */
export function instanceOfV1UserSettingsPatch200Response(value: object): value is V1UserSettingsPatch200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    return true;
}

export function V1UserSettingsPatch200ResponseFromJSON(json: any): V1UserSettingsPatch200Response {
    return V1UserSettingsPatch200ResponseFromJSONTyped(json, false);
}

export function V1UserSettingsPatch200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsPatch200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function V1UserSettingsPatch200ResponseToJSON(json: any): V1UserSettingsPatch200Response {
    return V1UserSettingsPatch200ResponseToJSONTyped(json, false);
}

export function V1UserSettingsPatch200ResponseToJSONTyped(value?: V1UserSettingsPatch200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'message': value['message'],
    };
}

