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
 * @interface V1DashboardModerationGet200ResponseReportsInnerAuthor
 */
export interface V1DashboardModerationGet200ResponseReportsInnerAuthor {
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
    username: string;
    /**
     * 
     */
    avatar: string;
}

/**
 * Check if a given object implements the V1DashboardModerationGet200ResponseReportsInnerAuthor interface.
 */
export function instanceOfV1DashboardModerationGet200ResponseReportsInnerAuthor(value: object): value is V1DashboardModerationGet200ResponseReportsInnerAuthor {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('avatar' in value) || value['avatar'] === undefined) return false;
    return true;
}

export function V1DashboardModerationGet200ResponseReportsInnerAuthorFromJSON(json: any): V1DashboardModerationGet200ResponseReportsInnerAuthor {
    return V1DashboardModerationGet200ResponseReportsInnerAuthorFromJSONTyped(json, false);
}

export function V1DashboardModerationGet200ResponseReportsInnerAuthorFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardModerationGet200ResponseReportsInnerAuthor {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'username': json['username'],
        'avatar': json['avatar'],
    };
}

export function V1DashboardModerationGet200ResponseReportsInnerAuthorToJSON(json: any): V1DashboardModerationGet200ResponseReportsInnerAuthor {
    return V1DashboardModerationGet200ResponseReportsInnerAuthorToJSONTyped(json, false);
}

export function V1DashboardModerationGet200ResponseReportsInnerAuthorToJSONTyped(value?: V1DashboardModerationGet200ResponseReportsInnerAuthor | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'username': value['username'],
        'avatar': value['avatar'],
    };
}

