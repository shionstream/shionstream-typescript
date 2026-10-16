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
 * @interface V1DashboardOverviewGet200ResponseRecentActivitiesInner
 */
export interface V1DashboardOverviewGet200ResponseRecentActivitiesInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    user: string;
    /**
     * 
     */
    action: string;
    /**
     * 
     */
    target: string;
    /**
     * 
     */
    time: string;
    /**
     * 
     */
    type: V1DashboardOverviewGet200ResponseRecentActivitiesInnerTypeEnum;
}


/**
 * @export
 */
export const V1DashboardOverviewGet200ResponseRecentActivitiesInnerTypeEnum = {
    Upload: 'upload',
    Delete: 'delete',
    Edit: 'edit',
    User: 'user',
    Stream: 'stream',
} as const;
export type V1DashboardOverviewGet200ResponseRecentActivitiesInnerTypeEnum = typeof V1DashboardOverviewGet200ResponseRecentActivitiesInnerTypeEnum[keyof typeof V1DashboardOverviewGet200ResponseRecentActivitiesInnerTypeEnum];


/**
 * Check if a given object implements the V1DashboardOverviewGet200ResponseRecentActivitiesInner interface.
 */
export function instanceOfV1DashboardOverviewGet200ResponseRecentActivitiesInner(value: object): value is V1DashboardOverviewGet200ResponseRecentActivitiesInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function V1DashboardOverviewGet200ResponseRecentActivitiesInnerFromJSON(json: any): V1DashboardOverviewGet200ResponseRecentActivitiesInner {
    return V1DashboardOverviewGet200ResponseRecentActivitiesInnerFromJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseRecentActivitiesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardOverviewGet200ResponseRecentActivitiesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'user': json['user'],
        'action': json['action'],
        'target': json['target'],
        'time': json['time'],
        'type': json['type'],
    };
}

export function V1DashboardOverviewGet200ResponseRecentActivitiesInnerToJSON(json: any): V1DashboardOverviewGet200ResponseRecentActivitiesInner {
    return V1DashboardOverviewGet200ResponseRecentActivitiesInnerToJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseRecentActivitiesInnerToJSONTyped(value?: V1DashboardOverviewGet200ResponseRecentActivitiesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'user': value['user'],
        'action': value['action'],
        'target': value['target'],
        'time': value['time'],
        'type': value['type'],
    };
}

