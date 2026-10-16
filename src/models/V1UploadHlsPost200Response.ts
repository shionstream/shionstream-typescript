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
import type { V1UploadHlsPost200ResponseData } from './V1UploadHlsPost200ResponseData';
import {
    V1UploadHlsPost200ResponseDataFromJSON,
    V1UploadHlsPost200ResponseDataFromJSONTyped,
    V1UploadHlsPost200ResponseDataToJSON,
    V1UploadHlsPost200ResponseDataToJSONTyped,
} from './V1UploadHlsPost200ResponseData';

/**
 * 
 * @export
 * @interface V1UploadHlsPost200Response
 */
export interface V1UploadHlsPost200Response {
    /**
     * 
     */
    success: V1UploadHlsPost200ResponseSuccessEnum;
    /**
     * 
     */
    data: V1UploadHlsPost200ResponseData;
}


/**
 * @export
 */
export const V1UploadHlsPost200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1UploadHlsPost200ResponseSuccessEnum = typeof V1UploadHlsPost200ResponseSuccessEnum[keyof typeof V1UploadHlsPost200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1UploadHlsPost200Response interface.
 */
export function instanceOfV1UploadHlsPost200Response(value: object): value is V1UploadHlsPost200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1UploadHlsPost200ResponseFromJSON(json: any): V1UploadHlsPost200Response {
    return V1UploadHlsPost200ResponseFromJSONTyped(json, false);
}

export function V1UploadHlsPost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UploadHlsPost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': V1UploadHlsPost200ResponseDataFromJSON(json['data']),
    };
}

export function V1UploadHlsPost200ResponseToJSON(json: any): V1UploadHlsPost200Response {
    return V1UploadHlsPost200ResponseToJSONTyped(json, false);
}

export function V1UploadHlsPost200ResponseToJSONTyped(value?: V1UploadHlsPost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': V1UploadHlsPost200ResponseDataToJSON(value['data']),
    };
}

