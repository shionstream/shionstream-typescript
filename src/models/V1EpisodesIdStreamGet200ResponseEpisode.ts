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
 * @interface V1EpisodesIdStreamGet200ResponseEpisode
 */
export interface V1EpisodesIdStreamGet200ResponseEpisode {
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
    number: number;
    /**
     * 
     */
    title: string;
}

/**
 * Check if a given object implements the V1EpisodesIdStreamGet200ResponseEpisode interface.
 */
export function instanceOfV1EpisodesIdStreamGet200ResponseEpisode(value: object): value is V1EpisodesIdStreamGet200ResponseEpisode {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('animeId' in value) || value['animeId'] === undefined) return false;
    if (!('number' in value) || value['number'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    return true;
}

export function V1EpisodesIdStreamGet200ResponseEpisodeFromJSON(json: any): V1EpisodesIdStreamGet200ResponseEpisode {
    return V1EpisodesIdStreamGet200ResponseEpisodeFromJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseEpisodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EpisodesIdStreamGet200ResponseEpisode {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'animeId': json['animeId'],
        'number': json['number'],
        'title': json['title'],
    };
}

export function V1EpisodesIdStreamGet200ResponseEpisodeToJSON(json: any): V1EpisodesIdStreamGet200ResponseEpisode {
    return V1EpisodesIdStreamGet200ResponseEpisodeToJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseEpisodeToJSONTyped(value?: V1EpisodesIdStreamGet200ResponseEpisode | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'animeId': value['animeId'],
        'number': value['number'],
        'title': value['title'],
    };
}

