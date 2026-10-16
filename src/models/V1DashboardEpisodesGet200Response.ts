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
 * @interface V1DashboardEpisodesGet200Response
 */
export interface V1DashboardEpisodesGet200Response {
    /**
     * 
     */
    episodes: Array<any>;
    /**
     * 
     */
    total: number;
    /**
     * 
     */
    page: number;
    /**
     * 
     */
    limit: number;
}

/**
 * Check if a given object implements the V1DashboardEpisodesGet200Response interface.
 */
export function instanceOfV1DashboardEpisodesGet200Response(value: object): value is V1DashboardEpisodesGet200Response {
    if (!('episodes' in value) || value['episodes'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    return true;
}

export function V1DashboardEpisodesGet200ResponseFromJSON(json: any): V1DashboardEpisodesGet200Response {
    return V1DashboardEpisodesGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardEpisodesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardEpisodesGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'episodes': json['episodes'],
        'total': json['total'],
        'page': json['page'],
        'limit': json['limit'],
    };
}

export function V1DashboardEpisodesGet200ResponseToJSON(json: any): V1DashboardEpisodesGet200Response {
    return V1DashboardEpisodesGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardEpisodesGet200ResponseToJSONTyped(value?: V1DashboardEpisodesGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'episodes': value['episodes'],
        'total': value['total'],
        'page': value['page'],
        'limit': value['limit'],
    };
}

