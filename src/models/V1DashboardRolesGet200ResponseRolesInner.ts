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
 * @interface V1DashboardRolesGet200ResponseRolesInner
 */
export interface V1DashboardRolesGet200ResponseRolesInner {
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
    description: string;
    /**
     * 
     */
    memberCount: number;
    /**
     * 
     */
    permissions: Array<string>;
    /**
     * 
     */
    isDefault?: boolean;
}

/**
 * Check if a given object implements the V1DashboardRolesGet200ResponseRolesInner interface.
 */
export function instanceOfV1DashboardRolesGet200ResponseRolesInner(value: object): value is V1DashboardRolesGet200ResponseRolesInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('memberCount' in value) || value['memberCount'] === undefined) return false;
    if (!('permissions' in value) || value['permissions'] === undefined) return false;
    return true;
}

export function V1DashboardRolesGet200ResponseRolesInnerFromJSON(json: any): V1DashboardRolesGet200ResponseRolesInner {
    return V1DashboardRolesGet200ResponseRolesInnerFromJSONTyped(json, false);
}

export function V1DashboardRolesGet200ResponseRolesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardRolesGet200ResponseRolesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'slug': json['slug'],
        'description': json['description'],
        'memberCount': json['memberCount'],
        'permissions': json['permissions'],
        'isDefault': json['isDefault'] == null ? undefined : json['isDefault'],
    };
}

export function V1DashboardRolesGet200ResponseRolesInnerToJSON(json: any): V1DashboardRolesGet200ResponseRolesInner {
    return V1DashboardRolesGet200ResponseRolesInnerToJSONTyped(json, false);
}

export function V1DashboardRolesGet200ResponseRolesInnerToJSONTyped(value?: V1DashboardRolesGet200ResponseRolesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'slug': value['slug'],
        'description': value['description'],
        'memberCount': value['memberCount'],
        'permissions': value['permissions'],
        'isDefault': value['isDefault'],
    };
}

