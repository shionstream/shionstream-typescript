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
import type { V1AnimeGet200ResponsePagination } from './V1AnimeGet200ResponsePagination';
import {
    V1AnimeGet200ResponsePaginationFromJSON,
    V1AnimeGet200ResponsePaginationFromJSONTyped,
    V1AnimeGet200ResponsePaginationToJSON,
    V1AnimeGet200ResponsePaginationToJSONTyped,
} from './V1AnimeGet200ResponsePagination';
import type { V1AnimeGet200ResponseDataInner } from './V1AnimeGet200ResponseDataInner';
import {
    V1AnimeGet200ResponseDataInnerFromJSON,
    V1AnimeGet200ResponseDataInnerFromJSONTyped,
    V1AnimeGet200ResponseDataInnerToJSON,
    V1AnimeGet200ResponseDataInnerToJSONTyped,
} from './V1AnimeGet200ResponseDataInner';

/**
 * 
 * @export
 * @interface V1AnimeGet200Response
 */
export interface V1AnimeGet200Response {
    /**
     * 
     */
    success: V1AnimeGet200ResponseSuccessEnum;
    /**
     * 
     */
    data: Array<V1AnimeGet200ResponseDataInner>;
    /**
     * 
     */
    pagination: V1AnimeGet200ResponsePagination;
}


/**
 * @export
 */
export const V1AnimeGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1AnimeGet200ResponseSuccessEnum = typeof V1AnimeGet200ResponseSuccessEnum[keyof typeof V1AnimeGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1AnimeGet200Response interface.
 */
export function instanceOfV1AnimeGet200Response(value: object): value is V1AnimeGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('pagination' in value) || value['pagination'] === undefined) return false;
    return true;
}

export function V1AnimeGet200ResponseFromJSON(json: any): V1AnimeGet200Response {
    return V1AnimeGet200ResponseFromJSONTyped(json, false);
}

export function V1AnimeGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': ((json['data'] as Array<any>).map(V1AnimeGet200ResponseDataInnerFromJSON)),
        'pagination': V1AnimeGet200ResponsePaginationFromJSON(json['pagination']),
    };
}

export function V1AnimeGet200ResponseToJSON(json: any): V1AnimeGet200Response {
    return V1AnimeGet200ResponseToJSONTyped(json, false);
}

export function V1AnimeGet200ResponseToJSONTyped(value?: V1AnimeGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': ((value['data'] as Array<any>).map(V1AnimeGet200ResponseDataInnerToJSON)),
        'pagination': V1AnimeGet200ResponsePaginationToJSON(value['pagination']),
    };
}

