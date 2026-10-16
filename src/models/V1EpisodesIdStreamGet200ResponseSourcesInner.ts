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
 * @interface V1EpisodesIdStreamGet200ResponseSourcesInner
 */
export interface V1EpisodesIdStreamGet200ResponseSourcesInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    serverName?: string;
    /**
     * 
     */
    streamUrl: string;
    /**
     * 
     */
    format: string;
    /**
     * 
     */
    quality: string;
    /**
     * 
     */
    url1080p?: string;
    /**
     * 
     */
    url720p?: string;
    /**
     * 
     */
    url480p?: string;
    /**
     * 
     */
    url360p?: string;
    /**
     * 
     */
    isPrimary: boolean;
}

/**
 * Check if a given object implements the V1EpisodesIdStreamGet200ResponseSourcesInner interface.
 */
export function instanceOfV1EpisodesIdStreamGet200ResponseSourcesInner(value: object): value is V1EpisodesIdStreamGet200ResponseSourcesInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('streamUrl' in value) || value['streamUrl'] === undefined) return false;
    if (!('format' in value) || value['format'] === undefined) return false;
    if (!('quality' in value) || value['quality'] === undefined) return false;
    if (!('isPrimary' in value) || value['isPrimary'] === undefined) return false;
    return true;
}

export function V1EpisodesIdStreamGet200ResponseSourcesInnerFromJSON(json: any): V1EpisodesIdStreamGet200ResponseSourcesInner {
    return V1EpisodesIdStreamGet200ResponseSourcesInnerFromJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseSourcesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EpisodesIdStreamGet200ResponseSourcesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'serverName': json['serverName'] == null ? undefined : json['serverName'],
        'streamUrl': json['streamUrl'],
        'format': json['format'],
        'quality': json['quality'],
        'url1080p': json['url1080p'] == null ? undefined : json['url1080p'],
        'url720p': json['url720p'] == null ? undefined : json['url720p'],
        'url480p': json['url480p'] == null ? undefined : json['url480p'],
        'url360p': json['url360p'] == null ? undefined : json['url360p'],
        'isPrimary': json['isPrimary'],
    };
}

export function V1EpisodesIdStreamGet200ResponseSourcesInnerToJSON(json: any): V1EpisodesIdStreamGet200ResponseSourcesInner {
    return V1EpisodesIdStreamGet200ResponseSourcesInnerToJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseSourcesInnerToJSONTyped(value?: V1EpisodesIdStreamGet200ResponseSourcesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'serverName': value['serverName'],
        'streamUrl': value['streamUrl'],
        'format': value['format'],
        'quality': value['quality'],
        'url1080p': value['url1080p'],
        'url720p': value['url720p'],
        'url480p': value['url480p'],
        'url360p': value['url360p'],
        'isPrimary': value['isPrimary'],
    };
}

