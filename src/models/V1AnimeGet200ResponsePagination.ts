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
 * @interface V1AnimeGet200ResponsePagination
 */
export interface V1AnimeGet200ResponsePagination {
    /**
     * 
     */
    page: number;
    /**
     * 
     */
    limit: number;
    /**
     * 
     */
    total: number;
    /**
     * 
     */
    totalPages: number;
}

/**
 * Check if a given object implements the V1AnimeGet200ResponsePagination interface.
 */
export function instanceOfV1AnimeGet200ResponsePagination(value: object): value is V1AnimeGet200ResponsePagination {
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('totalPages' in value) || value['totalPages'] === undefined) return false;
    return true;
}

export function V1AnimeGet200ResponsePaginationFromJSON(json: any): V1AnimeGet200ResponsePagination {
    return V1AnimeGet200ResponsePaginationFromJSONTyped(json, false);
}

export function V1AnimeGet200ResponsePaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeGet200ResponsePagination {
    if (json == null) {
        return json;
    }
    return {
        
        'page': json['page'],
        'limit': json['limit'],
        'total': json['total'],
        'totalPages': json['totalPages'],
    };
}

export function V1AnimeGet200ResponsePaginationToJSON(json: any): V1AnimeGet200ResponsePagination {
    return V1AnimeGet200ResponsePaginationToJSONTyped(json, false);
}

export function V1AnimeGet200ResponsePaginationToJSONTyped(value?: V1AnimeGet200ResponsePagination | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'page': value['page'],
        'limit': value['limit'],
        'total': value['total'],
        'totalPages': value['totalPages'],
    };
}

