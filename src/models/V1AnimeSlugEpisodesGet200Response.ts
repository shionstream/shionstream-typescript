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
import type { V1AnimeSlugEpisodesGet200ResponseAnime } from './V1AnimeSlugEpisodesGet200ResponseAnime';
import {
    V1AnimeSlugEpisodesGet200ResponseAnimeFromJSON,
    V1AnimeSlugEpisodesGet200ResponseAnimeFromJSONTyped,
    V1AnimeSlugEpisodesGet200ResponseAnimeToJSON,
    V1AnimeSlugEpisodesGet200ResponseAnimeToJSONTyped,
} from './V1AnimeSlugEpisodesGet200ResponseAnime';
import type { V1AnimeGet200ResponsePagination } from './V1AnimeGet200ResponsePagination';
import {
    V1AnimeGet200ResponsePaginationFromJSON,
    V1AnimeGet200ResponsePaginationFromJSONTyped,
    V1AnimeGet200ResponsePaginationToJSON,
    V1AnimeGet200ResponsePaginationToJSONTyped,
} from './V1AnimeGet200ResponsePagination';
import type { V1AnimeSlugEpisodesGet200ResponseDataInner } from './V1AnimeSlugEpisodesGet200ResponseDataInner';
import {
    V1AnimeSlugEpisodesGet200ResponseDataInnerFromJSON,
    V1AnimeSlugEpisodesGet200ResponseDataInnerFromJSONTyped,
    V1AnimeSlugEpisodesGet200ResponseDataInnerToJSON,
    V1AnimeSlugEpisodesGet200ResponseDataInnerToJSONTyped,
} from './V1AnimeSlugEpisodesGet200ResponseDataInner';

/**
 * 
 * @export
 * @interface V1AnimeSlugEpisodesGet200Response
 */
export interface V1AnimeSlugEpisodesGet200Response {
    /**
     * 
     */
    success: V1AnimeSlugEpisodesGet200ResponseSuccessEnum;
    /**
     * 
     */
    anime: V1AnimeSlugEpisodesGet200ResponseAnime;
    /**
     * 
     */
    data: Array<V1AnimeSlugEpisodesGet200ResponseDataInner>;
    /**
     * 
     */
    pagination: V1AnimeGet200ResponsePagination;
}


/**
 * @export
 */
export const V1AnimeSlugEpisodesGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1AnimeSlugEpisodesGet200ResponseSuccessEnum = typeof V1AnimeSlugEpisodesGet200ResponseSuccessEnum[keyof typeof V1AnimeSlugEpisodesGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1AnimeSlugEpisodesGet200Response interface.
 */
export function instanceOfV1AnimeSlugEpisodesGet200Response(value: object): value is V1AnimeSlugEpisodesGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('anime' in value) || value['anime'] === undefined) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    if (!('pagination' in value) || value['pagination'] === undefined) return false;
    return true;
}

export function V1AnimeSlugEpisodesGet200ResponseFromJSON(json: any): V1AnimeSlugEpisodesGet200Response {
    return V1AnimeSlugEpisodesGet200ResponseFromJSONTyped(json, false);
}

export function V1AnimeSlugEpisodesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugEpisodesGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'anime': V1AnimeSlugEpisodesGet200ResponseAnimeFromJSON(json['anime']),
        'data': ((json['data'] as Array<any>).map(V1AnimeSlugEpisodesGet200ResponseDataInnerFromJSON)),
        'pagination': V1AnimeGet200ResponsePaginationFromJSON(json['pagination']),
    };
}

export function V1AnimeSlugEpisodesGet200ResponseToJSON(json: any): V1AnimeSlugEpisodesGet200Response {
    return V1AnimeSlugEpisodesGet200ResponseToJSONTyped(json, false);
}

export function V1AnimeSlugEpisodesGet200ResponseToJSONTyped(value?: V1AnimeSlugEpisodesGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'anime': V1AnimeSlugEpisodesGet200ResponseAnimeToJSON(value['anime']),
        'data': ((value['data'] as Array<any>).map(V1AnimeSlugEpisodesGet200ResponseDataInnerToJSON)),
        'pagination': V1AnimeGet200ResponsePaginationToJSON(value['pagination']),
    };
}

