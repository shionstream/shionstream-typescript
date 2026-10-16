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
 * @interface V1UserWatchlistPostRequest
 */
export interface V1UserWatchlistPostRequest {
    /**
     * 
     */
    animeId: string;
    /**
     * 
     */
    status?: string;
}

/**
 * Check if a given object implements the V1UserWatchlistPostRequest interface.
 */
export function instanceOfV1UserWatchlistPostRequest(value: object): value is V1UserWatchlistPostRequest {
    if (!('animeId' in value) || value['animeId'] === undefined) return false;
    return true;
}

export function V1UserWatchlistPostRequestFromJSON(json: any): V1UserWatchlistPostRequest {
    return V1UserWatchlistPostRequestFromJSONTyped(json, false);
}

export function V1UserWatchlistPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserWatchlistPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'animeId': json['animeId'],
        'status': json['status'] == null ? undefined : json['status'],
    };
}

export function V1UserWatchlistPostRequestToJSON(json: any): V1UserWatchlistPostRequest {
    return V1UserWatchlistPostRequestToJSONTyped(json, false);
}

export function V1UserWatchlistPostRequestToJSONTyped(value?: V1UserWatchlistPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'animeId': value['animeId'],
        'status': value['status'],
    };
}

