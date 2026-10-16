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
 * @interface V1DashboardUsersGet200ResponseUsersInner
 */
export interface V1DashboardUsersGet200ResponseUsersInner {
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
    email: string;
    /**
     * 
     */
    image?: string;
    /**
     * 
     */
    role: string;
    /**
     * 
     */
    emailVerified: boolean;
    /**
     * 
     */
    createdAt: string;
}

/**
 * Check if a given object implements the V1DashboardUsersGet200ResponseUsersInner interface.
 */
export function instanceOfV1DashboardUsersGet200ResponseUsersInner(value: object): value is V1DashboardUsersGet200ResponseUsersInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    if (!('emailVerified' in value) || value['emailVerified'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function V1DashboardUsersGet200ResponseUsersInnerFromJSON(json: any): V1DashboardUsersGet200ResponseUsersInner {
    return V1DashboardUsersGet200ResponseUsersInnerFromJSONTyped(json, false);
}

export function V1DashboardUsersGet200ResponseUsersInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardUsersGet200ResponseUsersInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'email': json['email'],
        'image': json['image'] == null ? undefined : json['image'],
        'role': json['role'],
        'emailVerified': json['emailVerified'],
        'createdAt': json['createdAt'],
    };
}

export function V1DashboardUsersGet200ResponseUsersInnerToJSON(json: any): V1DashboardUsersGet200ResponseUsersInner {
    return V1DashboardUsersGet200ResponseUsersInnerToJSONTyped(json, false);
}

export function V1DashboardUsersGet200ResponseUsersInnerToJSONTyped(value?: V1DashboardUsersGet200ResponseUsersInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'email': value['email'],
        'image': value['image'],
        'role': value['role'],
        'emailVerified': value['emailVerified'],
        'createdAt': value['createdAt'],
    };
}

