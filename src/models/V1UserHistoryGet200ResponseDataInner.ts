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
 * @interface V1UserHistoryGet200ResponseDataInner
 */
export interface V1UserHistoryGet200ResponseDataInner {
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
    episodeId: string;
    /**
     * 
     */
    episodeNumber?: number;
    /**
     * 
     */
    progressPercent: number;
    /**
     * 
     */
    durationSeconds: number;
    /**
     * 
     */
    progressSeconds: number;
    /**
     * 
     */
    lastWatchedAt: string;
}

/**
 * Check if a given object implements the V1UserHistoryGet200ResponseDataInner interface.
 */
export function instanceOfV1UserHistoryGet200ResponseDataInner(value: object): value is V1UserHistoryGet200ResponseDataInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('animeId' in value) || value['animeId'] === undefined) return false;
    if (!('episodeId' in value) || value['episodeId'] === undefined) return false;
    if (!('progressPercent' in value) || value['progressPercent'] === undefined) return false;
    if (!('durationSeconds' in value) || value['durationSeconds'] === undefined) return false;
    if (!('progressSeconds' in value) || value['progressSeconds'] === undefined) return false;
    if (!('lastWatchedAt' in value) || value['lastWatchedAt'] === undefined) return false;
    return true;
}

export function V1UserHistoryGet200ResponseDataInnerFromJSON(json: any): V1UserHistoryGet200ResponseDataInner {
    return V1UserHistoryGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function V1UserHistoryGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserHistoryGet200ResponseDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'animeId': json['animeId'],
        'episodeId': json['episodeId'],
        'episodeNumber': json['episodeNumber'] == null ? undefined : json['episodeNumber'],
        'progressPercent': json['progressPercent'],
        'durationSeconds': json['durationSeconds'],
        'progressSeconds': json['progressSeconds'],
        'lastWatchedAt': json['lastWatchedAt'],
    };
}

export function V1UserHistoryGet200ResponseDataInnerToJSON(json: any): V1UserHistoryGet200ResponseDataInner {
    return V1UserHistoryGet200ResponseDataInnerToJSONTyped(json, false);
}

export function V1UserHistoryGet200ResponseDataInnerToJSONTyped(value?: V1UserHistoryGet200ResponseDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'animeId': value['animeId'],
        'episodeId': value['episodeId'],
        'episodeNumber': value['episodeNumber'],
        'progressPercent': value['progressPercent'],
        'durationSeconds': value['durationSeconds'],
        'progressSeconds': value['progressSeconds'],
        'lastWatchedAt': value['lastWatchedAt'],
    };
}

