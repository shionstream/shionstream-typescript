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
 * @interface V1AnimeGet200ResponseDataInner
 */
export interface V1AnimeGet200ResponseDataInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    slug: string;
    /**
     * 
     */
    titleRomaji: string;
    /**
     * 
     */
    titleEnglish?: string;
    /**
     * 
     */
    titleJapanese?: string;
    /**
     * 
     */
    synopsis?: string;
    /**
     * 
     */
    coverImage?: string;
    /**
     * 
     */
    bannerImage?: string;
    /**
     * 
     */
    type: string;
    /**
     * 
     */
    status: string;
    /**
     * 
     */
    seasonName?: string;
    /**
     * 
     */
    seasonYear?: number;
    /**
     * 
     */
    episodesCount: number;
    /**
     * 
     */
    durationPerEp?: string;
    /**
     * 
     */
    rating?: number;
    /**
     * 
     */
    isFeatured: boolean;
    /**
     * 
     */
    isTrending: boolean;
    /**
     * 
     */
    subOrDub: string;
}

/**
 * Check if a given object implements the V1AnimeGet200ResponseDataInner interface.
 */
export function instanceOfV1AnimeGet200ResponseDataInner(value: object): value is V1AnimeGet200ResponseDataInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('titleRomaji' in value) || value['titleRomaji'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('episodesCount' in value) || value['episodesCount'] === undefined) return false;
    if (!('isFeatured' in value) || value['isFeatured'] === undefined) return false;
    if (!('isTrending' in value) || value['isTrending'] === undefined) return false;
    if (!('subOrDub' in value) || value['subOrDub'] === undefined) return false;
    return true;
}

export function V1AnimeGet200ResponseDataInnerFromJSON(json: any): V1AnimeGet200ResponseDataInner {
    return V1AnimeGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function V1AnimeGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeGet200ResponseDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'slug': json['slug'],
        'titleRomaji': json['titleRomaji'],
        'titleEnglish': json['titleEnglish'] == null ? undefined : json['titleEnglish'],
        'titleJapanese': json['titleJapanese'] == null ? undefined : json['titleJapanese'],
        'synopsis': json['synopsis'] == null ? undefined : json['synopsis'],
        'coverImage': json['coverImage'] == null ? undefined : json['coverImage'],
        'bannerImage': json['bannerImage'] == null ? undefined : json['bannerImage'],
        'type': json['type'],
        'status': json['status'],
        'seasonName': json['seasonName'] == null ? undefined : json['seasonName'],
        'seasonYear': json['seasonYear'] == null ? undefined : json['seasonYear'],
        'episodesCount': json['episodesCount'],
        'durationPerEp': json['durationPerEp'] == null ? undefined : json['durationPerEp'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        'isFeatured': json['isFeatured'],
        'isTrending': json['isTrending'],
        'subOrDub': json['subOrDub'],
    };
}

export function V1AnimeGet200ResponseDataInnerToJSON(json: any): V1AnimeGet200ResponseDataInner {
    return V1AnimeGet200ResponseDataInnerToJSONTyped(json, false);
}

export function V1AnimeGet200ResponseDataInnerToJSONTyped(value?: V1AnimeGet200ResponseDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'slug': value['slug'],
        'titleRomaji': value['titleRomaji'],
        'titleEnglish': value['titleEnglish'],
        'titleJapanese': value['titleJapanese'],
        'synopsis': value['synopsis'],
        'coverImage': value['coverImage'],
        'bannerImage': value['bannerImage'],
        'type': value['type'],
        'status': value['status'],
        'seasonName': value['seasonName'],
        'seasonYear': value['seasonYear'],
        'episodesCount': value['episodesCount'],
        'durationPerEp': value['durationPerEp'],
        'rating': value['rating'],
        'isFeatured': value['isFeatured'],
        'isTrending': value['isTrending'],
        'subOrDub': value['subOrDub'],
    };
}

