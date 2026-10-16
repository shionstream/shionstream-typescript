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
 * @interface V1DashboardCategoriesGet200ResponseGenresInner
 */
export interface V1DashboardCategoriesGet200ResponseGenresInner {
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
    /**
     * 
     */
    animeCount: number;
    /**
     * 
     */
    isActive: boolean;
}

/**
 * Check if a given object implements the V1DashboardCategoriesGet200ResponseGenresInner interface.
 */
export function instanceOfV1DashboardCategoriesGet200ResponseGenresInner(value: object): value is V1DashboardCategoriesGet200ResponseGenresInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('animeCount' in value) || value['animeCount'] === undefined) return false;
    if (!('isActive' in value) || value['isActive'] === undefined) return false;
    return true;
}

export function V1DashboardCategoriesGet200ResponseGenresInnerFromJSON(json: any): V1DashboardCategoriesGet200ResponseGenresInner {
    return V1DashboardCategoriesGet200ResponseGenresInnerFromJSONTyped(json, false);
}

export function V1DashboardCategoriesGet200ResponseGenresInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardCategoriesGet200ResponseGenresInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
        'animeCount': json['animeCount'],
        'isActive': json['isActive'],
    };
}

export function V1DashboardCategoriesGet200ResponseGenresInnerToJSON(json: any): V1DashboardCategoriesGet200ResponseGenresInner {
    return V1DashboardCategoriesGet200ResponseGenresInnerToJSONTyped(json, false);
}

export function V1DashboardCategoriesGet200ResponseGenresInnerToJSONTyped(value?: V1DashboardCategoriesGet200ResponseGenresInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
        'animeCount': value['animeCount'],
        'isActive': value['isActive'],
    };
}

