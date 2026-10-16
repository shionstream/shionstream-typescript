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
 * @interface V1DashboardSeasonsGet200ResponseSeasonsInner
 */
export interface V1DashboardSeasonsGet200ResponseSeasonsInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    year: number;
    /**
     * 
     */
    quarter: string;
    /**
     * 
     */
    name: string;
    /**
     * 
     */
    totalAnime: number;
    /**
     * 
     */
    isCurrent: boolean;
    /**
     * 
     */
    isActive: boolean;
}

/**
 * Check if a given object implements the V1DashboardSeasonsGet200ResponseSeasonsInner interface.
 */
export function instanceOfV1DashboardSeasonsGet200ResponseSeasonsInner(value: object): value is V1DashboardSeasonsGet200ResponseSeasonsInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('year' in value) || value['year'] === undefined) return false;
    if (!('quarter' in value) || value['quarter'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('totalAnime' in value) || value['totalAnime'] === undefined) return false;
    if (!('isCurrent' in value) || value['isCurrent'] === undefined) return false;
    if (!('isActive' in value) || value['isActive'] === undefined) return false;
    return true;
}

export function V1DashboardSeasonsGet200ResponseSeasonsInnerFromJSON(json: any): V1DashboardSeasonsGet200ResponseSeasonsInner {
    return V1DashboardSeasonsGet200ResponseSeasonsInnerFromJSONTyped(json, false);
}

export function V1DashboardSeasonsGet200ResponseSeasonsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardSeasonsGet200ResponseSeasonsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'year': json['year'],
        'quarter': json['quarter'],
        'name': json['name'],
        'totalAnime': json['totalAnime'],
        'isCurrent': json['isCurrent'],
        'isActive': json['isActive'],
    };
}

export function V1DashboardSeasonsGet200ResponseSeasonsInnerToJSON(json: any): V1DashboardSeasonsGet200ResponseSeasonsInner {
    return V1DashboardSeasonsGet200ResponseSeasonsInnerToJSONTyped(json, false);
}

export function V1DashboardSeasonsGet200ResponseSeasonsInnerToJSONTyped(value?: V1DashboardSeasonsGet200ResponseSeasonsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'year': value['year'],
        'quarter': value['quarter'],
        'name': value['name'],
        'totalAnime': value['totalAnime'],
        'isCurrent': value['isCurrent'],
        'isActive': value['isActive'],
    };
}

