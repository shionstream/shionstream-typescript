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
import type { V1AnimeSlugGet200ResponseData } from './V1AnimeSlugGet200ResponseData';
import {
    V1AnimeSlugGet200ResponseDataFromJSON,
    V1AnimeSlugGet200ResponseDataFromJSONTyped,
    V1AnimeSlugGet200ResponseDataToJSON,
    V1AnimeSlugGet200ResponseDataToJSONTyped,
} from './V1AnimeSlugGet200ResponseData';

/**
 * 
 * @export
 * @interface V1AnimeSlugGet200Response
 */
export interface V1AnimeSlugGet200Response {
    /**
     * 
     */
    success: V1AnimeSlugGet200ResponseSuccessEnum;
    /**
     * 
     */
    data: V1AnimeSlugGet200ResponseData;
}


/**
 * @export
 */
export const V1AnimeSlugGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1AnimeSlugGet200ResponseSuccessEnum = typeof V1AnimeSlugGet200ResponseSuccessEnum[keyof typeof V1AnimeSlugGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1AnimeSlugGet200Response interface.
 */
export function instanceOfV1AnimeSlugGet200Response(value: object): value is V1AnimeSlugGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1AnimeSlugGet200ResponseFromJSON(json: any): V1AnimeSlugGet200Response {
    return V1AnimeSlugGet200ResponseFromJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': V1AnimeSlugGet200ResponseDataFromJSON(json['data']),
    };
}

export function V1AnimeSlugGet200ResponseToJSON(json: any): V1AnimeSlugGet200Response {
    return V1AnimeSlugGet200ResponseToJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseToJSONTyped(value?: V1AnimeSlugGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': V1AnimeSlugGet200ResponseDataToJSON(value['data']),
    };
}

