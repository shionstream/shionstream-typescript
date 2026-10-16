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
import type { V1UploadImagePost200ResponseData } from './V1UploadImagePost200ResponseData';
import {
    V1UploadImagePost200ResponseDataFromJSON,
    V1UploadImagePost200ResponseDataFromJSONTyped,
    V1UploadImagePost200ResponseDataToJSON,
    V1UploadImagePost200ResponseDataToJSONTyped,
} from './V1UploadImagePost200ResponseData';

/**
 * 
 * @export
 * @interface V1UploadImagePost200Response
 */
export interface V1UploadImagePost200Response {
    /**
     * 
     */
    success: V1UploadImagePost200ResponseSuccessEnum;
    /**
     * 
     */
    data: V1UploadImagePost200ResponseData;
}


/**
 * @export
 */
export const V1UploadImagePost200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1UploadImagePost200ResponseSuccessEnum = typeof V1UploadImagePost200ResponseSuccessEnum[keyof typeof V1UploadImagePost200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1UploadImagePost200Response interface.
 */
export function instanceOfV1UploadImagePost200Response(value: object): value is V1UploadImagePost200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1UploadImagePost200ResponseFromJSON(json: any): V1UploadImagePost200Response {
    return V1UploadImagePost200ResponseFromJSONTyped(json, false);
}

export function V1UploadImagePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UploadImagePost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': V1UploadImagePost200ResponseDataFromJSON(json['data']),
    };
}

export function V1UploadImagePost200ResponseToJSON(json: any): V1UploadImagePost200Response {
    return V1UploadImagePost200ResponseToJSONTyped(json, false);
}

export function V1UploadImagePost200ResponseToJSONTyped(value?: V1UploadImagePost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': V1UploadImagePost200ResponseDataToJSON(value['data']),
    };
}

