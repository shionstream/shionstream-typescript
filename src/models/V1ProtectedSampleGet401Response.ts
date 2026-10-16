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
 * @interface V1ProtectedSampleGet401Response
 */
export interface V1ProtectedSampleGet401Response {
    /**
     * 
     */
    success: V1ProtectedSampleGet401ResponseSuccessEnum;
    /**
     * 
     */
    error: string;
}


/**
 * @export
 */
export const V1ProtectedSampleGet401ResponseSuccessEnum = {
    False: false,
} as const;
export type V1ProtectedSampleGet401ResponseSuccessEnum = typeof V1ProtectedSampleGet401ResponseSuccessEnum[keyof typeof V1ProtectedSampleGet401ResponseSuccessEnum];


/**
 * Check if a given object implements the V1ProtectedSampleGet401Response interface.
 */
export function instanceOfV1ProtectedSampleGet401Response(value: object): value is V1ProtectedSampleGet401Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== false) return false;
    if (!('error' in value) || value['error'] === undefined) return false;
    return true;
}

export function V1ProtectedSampleGet401ResponseFromJSON(json: any): V1ProtectedSampleGet401Response {
    return V1ProtectedSampleGet401ResponseFromJSONTyped(json, false);
}

export function V1ProtectedSampleGet401ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1ProtectedSampleGet401Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'error': json['error'],
    };
}

export function V1ProtectedSampleGet401ResponseToJSON(json: any): V1ProtectedSampleGet401Response {
    return V1ProtectedSampleGet401ResponseToJSONTyped(json, false);
}

export function V1ProtectedSampleGet401ResponseToJSONTyped(value?: V1ProtectedSampleGet401Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'error': value['error'],
    };
}

