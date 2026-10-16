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
 * @interface V1UserWatchlistAnimeIdPatchRequest
 */
export interface V1UserWatchlistAnimeIdPatchRequest {
    /**
     * 
     */
    status?: string;
    /**
     * 
     */
    isFavorite?: boolean;
}

/**
 * Check if a given object implements the V1UserWatchlistAnimeIdPatchRequest interface.
 */
export function instanceOfV1UserWatchlistAnimeIdPatchRequest(value: object): value is V1UserWatchlistAnimeIdPatchRequest {
    return true;
}

export function V1UserWatchlistAnimeIdPatchRequestFromJSON(json: any): V1UserWatchlistAnimeIdPatchRequest {
    return V1UserWatchlistAnimeIdPatchRequestFromJSONTyped(json, false);
}

export function V1UserWatchlistAnimeIdPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserWatchlistAnimeIdPatchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'] == null ? undefined : json['status'],
        'isFavorite': json['isFavorite'] == null ? undefined : json['isFavorite'],
    };
}

export function V1UserWatchlistAnimeIdPatchRequestToJSON(json: any): V1UserWatchlistAnimeIdPatchRequest {
    return V1UserWatchlistAnimeIdPatchRequestToJSONTyped(json, false);
}

export function V1UserWatchlistAnimeIdPatchRequestToJSONTyped(value?: V1UserWatchlistAnimeIdPatchRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'isFavorite': value['isFavorite'],
    };
}

