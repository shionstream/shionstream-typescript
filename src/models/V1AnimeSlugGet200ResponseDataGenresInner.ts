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
 * @interface V1AnimeSlugGet200ResponseDataGenresInner
 */
export interface V1AnimeSlugGet200ResponseDataGenresInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    slug: string;
}

/**
 * Check if a given object implements the V1AnimeSlugGet200ResponseDataGenresInner interface.
 */
export function instanceOfV1AnimeSlugGet200ResponseDataGenresInner(value: object): value is V1AnimeSlugGet200ResponseDataGenresInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    return true;
}

export function V1AnimeSlugGet200ResponseDataGenresInnerFromJSON(json: any): V1AnimeSlugGet200ResponseDataGenresInner {
    return V1AnimeSlugGet200ResponseDataGenresInnerFromJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataGenresInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugGet200ResponseDataGenresInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
    };
}

export function V1AnimeSlugGet200ResponseDataGenresInnerToJSON(json: any): V1AnimeSlugGet200ResponseDataGenresInner {
    return V1AnimeSlugGet200ResponseDataGenresInnerToJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataGenresInnerToJSONTyped(value?: V1AnimeSlugGet200ResponseDataGenresInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
    };
}

