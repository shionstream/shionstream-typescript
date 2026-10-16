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
 * @interface V1AnimeSlugEpisodesGet200ResponseAnime
 */
export interface V1AnimeSlugEpisodesGet200ResponseAnime {
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
}

/**
 * Check if a given object implements the V1AnimeSlugEpisodesGet200ResponseAnime interface.
 */
export function instanceOfV1AnimeSlugEpisodesGet200ResponseAnime(value: object): value is V1AnimeSlugEpisodesGet200ResponseAnime {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('titleRomaji' in value) || value['titleRomaji'] === undefined) return false;
    return true;
}

export function V1AnimeSlugEpisodesGet200ResponseAnimeFromJSON(json: any): V1AnimeSlugEpisodesGet200ResponseAnime {
    return V1AnimeSlugEpisodesGet200ResponseAnimeFromJSONTyped(json, false);
}

export function V1AnimeSlugEpisodesGet200ResponseAnimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugEpisodesGet200ResponseAnime {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'slug': json['slug'],
        'titleRomaji': json['titleRomaji'],
    };
}

export function V1AnimeSlugEpisodesGet200ResponseAnimeToJSON(json: any): V1AnimeSlugEpisodesGet200ResponseAnime {
    return V1AnimeSlugEpisodesGet200ResponseAnimeToJSONTyped(json, false);
}

export function V1AnimeSlugEpisodesGet200ResponseAnimeToJSONTyped(value?: V1AnimeSlugEpisodesGet200ResponseAnime | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'slug': value['slug'],
        'titleRomaji': value['titleRomaji'],
    };
}

