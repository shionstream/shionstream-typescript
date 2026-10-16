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
 * @interface V1UploadHlsPost200ResponseData
 */
export interface V1UploadHlsPost200ResponseData {
    /**
     * 
     */
    url: string;
    /**
     * 
     */
    key: string;
    /**
     * 
     */
    sizeBytes: number;
    /**
     * 
     */
    totalFiles: number;
}

/**
 * Check if a given object implements the V1UploadHlsPost200ResponseData interface.
 */
export function instanceOfV1UploadHlsPost200ResponseData(value: object): value is V1UploadHlsPost200ResponseData {
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('key' in value) || value['key'] === undefined) return false;
    if (!('sizeBytes' in value) || value['sizeBytes'] === undefined) return false;
    if (!('totalFiles' in value) || value['totalFiles'] === undefined) return false;
    return true;
}

export function V1UploadHlsPost200ResponseDataFromJSON(json: any): V1UploadHlsPost200ResponseData {
    return V1UploadHlsPost200ResponseDataFromJSONTyped(json, false);
}

export function V1UploadHlsPost200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UploadHlsPost200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'url': json['url'],
        'key': json['key'],
        'sizeBytes': json['sizeBytes'],
        'totalFiles': json['totalFiles'],
    };
}

export function V1UploadHlsPost200ResponseDataToJSON(json: any): V1UploadHlsPost200ResponseData {
    return V1UploadHlsPost200ResponseDataToJSONTyped(json, false);
}

export function V1UploadHlsPost200ResponseDataToJSONTyped(value?: V1UploadHlsPost200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'url': value['url'],
        'key': value['key'],
        'sizeBytes': value['sizeBytes'],
        'totalFiles': value['totalFiles'],
    };
}

