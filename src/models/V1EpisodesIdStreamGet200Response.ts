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
import type { V1EpisodesIdStreamGet200ResponseSourcesInner } from './V1EpisodesIdStreamGet200ResponseSourcesInner';
import {
    V1EpisodesIdStreamGet200ResponseSourcesInnerFromJSON,
    V1EpisodesIdStreamGet200ResponseSourcesInnerFromJSONTyped,
    V1EpisodesIdStreamGet200ResponseSourcesInnerToJSON,
    V1EpisodesIdStreamGet200ResponseSourcesInnerToJSONTyped,
} from './V1EpisodesIdStreamGet200ResponseSourcesInner';
import type { V1EpisodesIdStreamGet200ResponseEpisode } from './V1EpisodesIdStreamGet200ResponseEpisode';
import {
    V1EpisodesIdStreamGet200ResponseEpisodeFromJSON,
    V1EpisodesIdStreamGet200ResponseEpisodeFromJSONTyped,
    V1EpisodesIdStreamGet200ResponseEpisodeToJSON,
    V1EpisodesIdStreamGet200ResponseEpisodeToJSONTyped,
} from './V1EpisodesIdStreamGet200ResponseEpisode';
import type { V1EpisodesIdStreamGet200ResponseSubtitlesInner } from './V1EpisodesIdStreamGet200ResponseSubtitlesInner';
import {
    V1EpisodesIdStreamGet200ResponseSubtitlesInnerFromJSON,
    V1EpisodesIdStreamGet200ResponseSubtitlesInnerFromJSONTyped,
    V1EpisodesIdStreamGet200ResponseSubtitlesInnerToJSON,
    V1EpisodesIdStreamGet200ResponseSubtitlesInnerToJSONTyped,
} from './V1EpisodesIdStreamGet200ResponseSubtitlesInner';
import type { V1EpisodesIdStreamGet200ResponseAudioInner } from './V1EpisodesIdStreamGet200ResponseAudioInner';
import {
    V1EpisodesIdStreamGet200ResponseAudioInnerFromJSON,
    V1EpisodesIdStreamGet200ResponseAudioInnerFromJSONTyped,
    V1EpisodesIdStreamGet200ResponseAudioInnerToJSON,
    V1EpisodesIdStreamGet200ResponseAudioInnerToJSONTyped,
} from './V1EpisodesIdStreamGet200ResponseAudioInner';

/**
 * 
 * @export
 * @interface V1EpisodesIdStreamGet200Response
 */
export interface V1EpisodesIdStreamGet200Response {
    /**
     * 
     */
    success: V1EpisodesIdStreamGet200ResponseSuccessEnum;
    /**
     * 
     */
    episode: V1EpisodesIdStreamGet200ResponseEpisode;
    /**
     * 
     */
    sources: Array<V1EpisodesIdStreamGet200ResponseSourcesInner>;
    /**
     * 
     */
    subtitles: Array<V1EpisodesIdStreamGet200ResponseSubtitlesInner>;
    /**
     * 
     */
    audio: Array<V1EpisodesIdStreamGet200ResponseAudioInner>;
}


/**
 * @export
 */
export const V1EpisodesIdStreamGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1EpisodesIdStreamGet200ResponseSuccessEnum = typeof V1EpisodesIdStreamGet200ResponseSuccessEnum[keyof typeof V1EpisodesIdStreamGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1EpisodesIdStreamGet200Response interface.
 */
export function instanceOfV1EpisodesIdStreamGet200Response(value: object): value is V1EpisodesIdStreamGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('episode' in value) || value['episode'] === undefined) return false;
    if (!('sources' in value) || value['sources'] === undefined) return false;
    if (!('subtitles' in value) || value['subtitles'] === undefined) return false;
    if (!('audio' in value) || value['audio'] === undefined) return false;
    return true;
}

export function V1EpisodesIdStreamGet200ResponseFromJSON(json: any): V1EpisodesIdStreamGet200Response {
    return V1EpisodesIdStreamGet200ResponseFromJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EpisodesIdStreamGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'episode': V1EpisodesIdStreamGet200ResponseEpisodeFromJSON(json['episode']),
        'sources': ((json['sources'] as Array<any>).map(V1EpisodesIdStreamGet200ResponseSourcesInnerFromJSON)),
        'subtitles': ((json['subtitles'] as Array<any>).map(V1EpisodesIdStreamGet200ResponseSubtitlesInnerFromJSON)),
        'audio': ((json['audio'] as Array<any>).map(V1EpisodesIdStreamGet200ResponseAudioInnerFromJSON)),
    };
}

export function V1EpisodesIdStreamGet200ResponseToJSON(json: any): V1EpisodesIdStreamGet200Response {
    return V1EpisodesIdStreamGet200ResponseToJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseToJSONTyped(value?: V1EpisodesIdStreamGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'episode': V1EpisodesIdStreamGet200ResponseEpisodeToJSON(value['episode']),
        'sources': ((value['sources'] as Array<any>).map(V1EpisodesIdStreamGet200ResponseSourcesInnerToJSON)),
        'subtitles': ((value['subtitles'] as Array<any>).map(V1EpisodesIdStreamGet200ResponseSubtitlesInnerToJSON)),
        'audio': ((value['audio'] as Array<any>).map(V1EpisodesIdStreamGet200ResponseAudioInnerToJSON)),
    };
}

