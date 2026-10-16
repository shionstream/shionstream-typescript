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
 * @interface V1UserWatchlistGet200ResponseDataInner
 */
export interface V1UserWatchlistGet200ResponseDataInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    animeId: string;
    /**
     * 
     */
    status: string;
    /**
     * 
     */
    isFavorite: boolean;
    /**
     * 
     */
    currentEpisode: number;
    /**
     * 
     */
    userRating?: number;
    /**
     * 
     */
    createdAt: string;
    /**
     * 
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the V1UserWatchlistGet200ResponseDataInner interface.
 */
export function instanceOfV1UserWatchlistGet200ResponseDataInner(value: object): value is V1UserWatchlistGet200ResponseDataInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('animeId' in value) || value['animeId'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('isFavorite' in value) || value['isFavorite'] === undefined) return false;
    if (!('currentEpisode' in value) || value['currentEpisode'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function V1UserWatchlistGet200ResponseDataInnerFromJSON(json: any): V1UserWatchlistGet200ResponseDataInner {
    return V1UserWatchlistGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function V1UserWatchlistGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserWatchlistGet200ResponseDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'animeId': json['animeId'],
        'status': json['status'],
        'isFavorite': json['isFavorite'],
        'currentEpisode': json['currentEpisode'],
        'userRating': json['userRating'] == null ? undefined : json['userRating'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}

export function V1UserWatchlistGet200ResponseDataInnerToJSON(json: any): V1UserWatchlistGet200ResponseDataInner {
    return V1UserWatchlistGet200ResponseDataInnerToJSONTyped(json, false);
}

export function V1UserWatchlistGet200ResponseDataInnerToJSONTyped(value?: V1UserWatchlistGet200ResponseDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'animeId': value['animeId'],
        'status': value['status'],
        'isFavorite': value['isFavorite'],
        'currentEpisode': value['currentEpisode'],
        'userRating': value['userRating'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}

