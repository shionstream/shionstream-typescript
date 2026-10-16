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
import type { V1DashboardCategoriesGet200ResponseCategoriesInner } from './V1DashboardCategoriesGet200ResponseCategoriesInner';
import {
    V1DashboardCategoriesGet200ResponseCategoriesInnerFromJSON,
    V1DashboardCategoriesGet200ResponseCategoriesInnerFromJSONTyped,
    V1DashboardCategoriesGet200ResponseCategoriesInnerToJSON,
    V1DashboardCategoriesGet200ResponseCategoriesInnerToJSONTyped,
} from './V1DashboardCategoriesGet200ResponseCategoriesInner';
import type { V1DashboardCategoriesGet200ResponseGenresInner } from './V1DashboardCategoriesGet200ResponseGenresInner';
import {
    V1DashboardCategoriesGet200ResponseGenresInnerFromJSON,
    V1DashboardCategoriesGet200ResponseGenresInnerFromJSONTyped,
    V1DashboardCategoriesGet200ResponseGenresInnerToJSON,
    V1DashboardCategoriesGet200ResponseGenresInnerToJSONTyped,
} from './V1DashboardCategoriesGet200ResponseGenresInner';

/**
 * 
 * @export
 * @interface V1DashboardCategoriesGet200Response
 */
export interface V1DashboardCategoriesGet200Response {
    /**
     * 
     */
    categories: Array<V1DashboardCategoriesGet200ResponseCategoriesInner>;
    /**
     * 
     */
    genres: Array<V1DashboardCategoriesGet200ResponseGenresInner>;
}

/**
 * Check if a given object implements the V1DashboardCategoriesGet200Response interface.
 */
export function instanceOfV1DashboardCategoriesGet200Response(value: object): value is V1DashboardCategoriesGet200Response {
    if (!('categories' in value) || value['categories'] === undefined) return false;
    if (!('genres' in value) || value['genres'] === undefined) return false;
    return true;
}

export function V1DashboardCategoriesGet200ResponseFromJSON(json: any): V1DashboardCategoriesGet200Response {
    return V1DashboardCategoriesGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardCategoriesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardCategoriesGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'categories': ((json['categories'] as Array<any>).map(V1DashboardCategoriesGet200ResponseCategoriesInnerFromJSON)),
        'genres': ((json['genres'] as Array<any>).map(V1DashboardCategoriesGet200ResponseGenresInnerFromJSON)),
    };
}

export function V1DashboardCategoriesGet200ResponseToJSON(json: any): V1DashboardCategoriesGet200Response {
    return V1DashboardCategoriesGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardCategoriesGet200ResponseToJSONTyped(value?: V1DashboardCategoriesGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'categories': ((value['categories'] as Array<any>).map(V1DashboardCategoriesGet200ResponseCategoriesInnerToJSON)),
        'genres': ((value['genres'] as Array<any>).map(V1DashboardCategoriesGet200ResponseGenresInnerToJSON)),
    };
}

