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
 * @interface V1DashboardCategoriesGet200ResponseCategoriesInner
 */
export interface V1DashboardCategoriesGet200ResponseCategoriesInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    code: string;
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
    description: string;
    /**
     * 
     */
    isActive: boolean;
    /**
     * 
     */
    updatedAt: string;
}

/**
 * Check if a given object implements the V1DashboardCategoriesGet200ResponseCategoriesInner interface.
 */
export function instanceOfV1DashboardCategoriesGet200ResponseCategoriesInner(value: object): value is V1DashboardCategoriesGet200ResponseCategoriesInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('animeCount' in value) || value['animeCount'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('isActive' in value) || value['isActive'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function V1DashboardCategoriesGet200ResponseCategoriesInnerFromJSON(json: any): V1DashboardCategoriesGet200ResponseCategoriesInner {
    return V1DashboardCategoriesGet200ResponseCategoriesInnerFromJSONTyped(json, false);
}

export function V1DashboardCategoriesGet200ResponseCategoriesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardCategoriesGet200ResponseCategoriesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'code': json['code'],
        'name': json['name'],
        'slug': json['slug'],
        'animeCount': json['animeCount'],
        'description': json['description'],
        'isActive': json['isActive'],
        'updatedAt': json['updatedAt'],
    };
}

export function V1DashboardCategoriesGet200ResponseCategoriesInnerToJSON(json: any): V1DashboardCategoriesGet200ResponseCategoriesInner {
    return V1DashboardCategoriesGet200ResponseCategoriesInnerToJSONTyped(json, false);
}

export function V1DashboardCategoriesGet200ResponseCategoriesInnerToJSONTyped(value?: V1DashboardCategoriesGet200ResponseCategoriesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'code': value['code'],
        'name': value['name'],
        'slug': value['slug'],
        'animeCount': value['animeCount'],
        'description': value['description'],
        'isActive': value['isActive'],
        'updatedAt': value['updatedAt'],
    };
}

