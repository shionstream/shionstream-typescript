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
 * @interface V1DashboardOverviewGet200ResponseNotificationsInner
 */
export interface V1DashboardOverviewGet200ResponseNotificationsInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    title: string;
    /**
     * 
     */
    description: string;
    /**
     * 
     */
    time: string;
    /**
     * 
     */
    type: V1DashboardOverviewGet200ResponseNotificationsInnerTypeEnum;
}


/**
 * @export
 */
export const V1DashboardOverviewGet200ResponseNotificationsInnerTypeEnum = {
    Success: 'success',
    Alert: 'alert',
    Info: 'info',
} as const;
export type V1DashboardOverviewGet200ResponseNotificationsInnerTypeEnum = typeof V1DashboardOverviewGet200ResponseNotificationsInnerTypeEnum[keyof typeof V1DashboardOverviewGet200ResponseNotificationsInnerTypeEnum];


/**
 * Check if a given object implements the V1DashboardOverviewGet200ResponseNotificationsInner interface.
 */
export function instanceOfV1DashboardOverviewGet200ResponseNotificationsInner(value: object): value is V1DashboardOverviewGet200ResponseNotificationsInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('title' in value) || value['title'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1DashboardOverviewGet200ResponseNotificationsInnerFromJSON(json: any): V1DashboardOverviewGet200ResponseNotificationsInner {
    return V1DashboardOverviewGet200ResponseNotificationsInnerFromJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseNotificationsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardOverviewGet200ResponseNotificationsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'title': json['title'],
        'description': json['description'],
        'time': json['time'],
        'type': json['type'],
    };
}

export function V1DashboardOverviewGet200ResponseNotificationsInnerToJSON(json: any): V1DashboardOverviewGet200ResponseNotificationsInner {
    return V1DashboardOverviewGet200ResponseNotificationsInnerToJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseNotificationsInnerToJSONTyped(value?: V1DashboardOverviewGet200ResponseNotificationsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'title': value['title'],
        'description': value['description'],
        'time': value['time'],
        'type': value['type'],
    };
}

