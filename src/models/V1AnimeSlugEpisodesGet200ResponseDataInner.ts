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
 * @interface V1AnimeSlugEpisodesGet200ResponseDataInner
 */
export interface V1AnimeSlugEpisodesGet200ResponseDataInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    number: number;
    /**
     * 
     */
    title: string;
    /**
     * 
     */
    durationSeconds: number;
    /**
     * 
     */
    thumbnail?: string;
    /**
     * 
     */
    airDate?: string;
    /**
     * 
     */
    status: string;
    /**
     * 
     */
    viewsCount: number;
    /**
     * 
     */
    isVip: boolean;
    /**
     * 
     */
    createdAt: string;
}

/**
 * Check if a given object implements the V1AnimeSlugEpisodesGet200ResponseDataInner interface.
 */
export function instanceOfV1AnimeSlugEpisodesGet200ResponseDataInner(value: object): value is V1AnimeSlugEpisodesGet200ResponseDataInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('number' in value) || value['number'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('durationSeconds' in value) || value['durationSeconds'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('viewsCount' in value) || value['viewsCount'] === undefined) return false;
    if (!('isVip' in value) || value['isVip'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function V1AnimeSlugEpisodesGet200ResponseDataInnerFromJSON(json: any): V1AnimeSlugEpisodesGet200ResponseDataInner {
    return V1AnimeSlugEpisodesGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function V1AnimeSlugEpisodesGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugEpisodesGet200ResponseDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'number': json['number'],
        'title': json['title'],
        'durationSeconds': json['durationSeconds'],
        'thumbnail': json['thumbnail'] == null ? undefined : json['thumbnail'],
        'airDate': json['airDate'] == null ? undefined : json['airDate'],
        'status': json['status'],
        'viewsCount': json['viewsCount'],
        'isVip': json['isVip'],
        'createdAt': json['createdAt'],
    };
}

export function V1AnimeSlugEpisodesGet200ResponseDataInnerToJSON(json: any): V1AnimeSlugEpisodesGet200ResponseDataInner {
    return V1AnimeSlugEpisodesGet200ResponseDataInnerToJSONTyped(json, false);
}

export function V1AnimeSlugEpisodesGet200ResponseDataInnerToJSONTyped(value?: V1AnimeSlugEpisodesGet200ResponseDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'number': value['number'],
        'title': value['title'],
        'durationSeconds': value['durationSeconds'],
        'thumbnail': value['thumbnail'],
        'airDate': value['airDate'],
        'status': value['status'],
        'viewsCount': value['viewsCount'],
        'isVip': value['isVip'],
        'createdAt': value['createdAt'],
    };
}

