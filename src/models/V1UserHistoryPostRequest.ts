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
 * @interface V1UserHistoryPostRequest
 */
export interface V1UserHistoryPostRequest {
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
    progressPercent?: number;
    /**
     * 
     */
    durationSeconds?: number;
    /**
     * 
     */
    progressSeconds?: number;
}

/**
 * Check if a given object implements the V1UserHistoryPostRequest interface.
 */
export function instanceOfV1UserHistoryPostRequest(value: object): value is V1UserHistoryPostRequest {
    if (!('animeId' in value) || value['animeId'] === undefined) return false;
    if (!('episodeId' in value) || value['episodeId'] === undefined) return false;
    return true;
}

export function V1UserHistoryPostRequestFromJSON(json: any): V1UserHistoryPostRequest {
    return V1UserHistoryPostRequestFromJSONTyped(json, false);
}

export function V1UserHistoryPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserHistoryPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'animeId': json['animeId'],
        'episodeId': json['episodeId'],
        'episodeNumber': json['episodeNumber'] == null ? undefined : json['episodeNumber'],
        'progressPercent': json['progressPercent'] == null ? undefined : json['progressPercent'],
        'durationSeconds': json['durationSeconds'] == null ? undefined : json['durationSeconds'],
        'progressSeconds': json['progressSeconds'] == null ? undefined : json['progressSeconds'],
    };
}

export function V1UserHistoryPostRequestToJSON(json: any): V1UserHistoryPostRequest {
    return V1UserHistoryPostRequestToJSONTyped(json, false);
}

export function V1UserHistoryPostRequestToJSONTyped(value?: V1UserHistoryPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'animeId': value['animeId'],
        'episodeId': value['episodeId'],
        'episodeNumber': value['episodeNumber'],
        'progressPercent': value['progressPercent'],
        'durationSeconds': value['durationSeconds'],
        'progressSeconds': value['progressSeconds'],
    };
}

