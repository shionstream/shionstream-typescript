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
import type { V1DashboardUsersGet200ResponseUsersInner } from './V1DashboardUsersGet200ResponseUsersInner';
import {
    V1DashboardUsersGet200ResponseUsersInnerFromJSON,
    V1DashboardUsersGet200ResponseUsersInnerFromJSONTyped,
    V1DashboardUsersGet200ResponseUsersInnerToJSON,
    V1DashboardUsersGet200ResponseUsersInnerToJSONTyped,
} from './V1DashboardUsersGet200ResponseUsersInner';

/**
 * 
 * @export
 * @interface V1DashboardUsersGet200Response
 */
export interface V1DashboardUsersGet200Response {
    /**
     * 
     */
    users: Array<V1DashboardUsersGet200ResponseUsersInner>;
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
 * Check if a given object implements the V1DashboardUsersGet200Response interface.
 */
export function instanceOfV1DashboardUsersGet200Response(value: object): value is V1DashboardUsersGet200Response {
    if (!('users' in value) || value['users'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('page' in value) || value['page'] === undefined) return false;
    if (!('limit' in value) || value['limit'] === undefined) return false;
    return true;
}

export function V1DashboardUsersGet200ResponseFromJSON(json: any): V1DashboardUsersGet200Response {
    return V1DashboardUsersGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardUsersGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardUsersGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'users': ((json['users'] as Array<any>).map(V1DashboardUsersGet200ResponseUsersInnerFromJSON)),
        'total': json['total'],
        'page': json['page'],
        'limit': json['limit'],
    };
}

export function V1DashboardUsersGet200ResponseToJSON(json: any): V1DashboardUsersGet200Response {
    return V1DashboardUsersGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardUsersGet200ResponseToJSONTyped(value?: V1DashboardUsersGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'users': ((value['users'] as Array<any>).map(V1DashboardUsersGet200ResponseUsersInnerToJSON)),
        'total': value['total'],
        'page': value['page'],
        'limit': value['limit'],
    };
}

