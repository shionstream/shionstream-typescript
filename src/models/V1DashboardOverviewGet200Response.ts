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
import type { V1DashboardOverviewGet200ResponseRecentActivitiesInner } from './V1DashboardOverviewGet200ResponseRecentActivitiesInner';
import {
    V1DashboardOverviewGet200ResponseRecentActivitiesInnerFromJSON,
    V1DashboardOverviewGet200ResponseRecentActivitiesInnerFromJSONTyped,
    V1DashboardOverviewGet200ResponseRecentActivitiesInnerToJSON,
    V1DashboardOverviewGet200ResponseRecentActivitiesInnerToJSONTyped,
} from './V1DashboardOverviewGet200ResponseRecentActivitiesInner';
import type { V1DashboardOverviewGet200ResponseTrafficDataInner } from './V1DashboardOverviewGet200ResponseTrafficDataInner';
import {
    V1DashboardOverviewGet200ResponseTrafficDataInnerFromJSON,
    V1DashboardOverviewGet200ResponseTrafficDataInnerFromJSONTyped,
    V1DashboardOverviewGet200ResponseTrafficDataInnerToJSON,
    V1DashboardOverviewGet200ResponseTrafficDataInnerToJSONTyped,
} from './V1DashboardOverviewGet200ResponseTrafficDataInner';
import type { V1DashboardOverviewGet200ResponseNotificationsInner } from './V1DashboardOverviewGet200ResponseNotificationsInner';
import {
    V1DashboardOverviewGet200ResponseNotificationsInnerFromJSON,
    V1DashboardOverviewGet200ResponseNotificationsInnerFromJSONTyped,
    V1DashboardOverviewGet200ResponseNotificationsInnerToJSON,
    V1DashboardOverviewGet200ResponseNotificationsInnerToJSONTyped,
} from './V1DashboardOverviewGet200ResponseNotificationsInner';

/**
 * 
 * @export
 * @interface V1DashboardOverviewGet200Response
 */
export interface V1DashboardOverviewGet200Response {
    /**
     * 
     */
    trafficData: Array<V1DashboardOverviewGet200ResponseTrafficDataInner>;
    /**
     * 
     */
    recentActivities: Array<V1DashboardOverviewGet200ResponseRecentActivitiesInner>;
    /**
     * 
     */
    notifications: Array<V1DashboardOverviewGet200ResponseNotificationsInner>;
}

/**
 * Check if a given object implements the V1DashboardOverviewGet200Response interface.
 */
export function instanceOfV1DashboardOverviewGet200Response(value: object): value is V1DashboardOverviewGet200Response {
    if (!('trafficData' in value) || value['trafficData'] === undefined) return false;
    if (!('recentActivities' in value) || value['recentActivities'] === undefined) return false;
    if (!('notifications' in value) || value['notifications'] === undefined) return false;
    return true;
}

export function V1DashboardOverviewGet200ResponseFromJSON(json: any): V1DashboardOverviewGet200Response {
    return V1DashboardOverviewGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardOverviewGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'trafficData': ((json['trafficData'] as Array<any>).map(V1DashboardOverviewGet200ResponseTrafficDataInnerFromJSON)),
        'recentActivities': ((json['recentActivities'] as Array<any>).map(V1DashboardOverviewGet200ResponseRecentActivitiesInnerFromJSON)),
        'notifications': ((json['notifications'] as Array<any>).map(V1DashboardOverviewGet200ResponseNotificationsInnerFromJSON)),
    };
}

export function V1DashboardOverviewGet200ResponseToJSON(json: any): V1DashboardOverviewGet200Response {
    return V1DashboardOverviewGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseToJSONTyped(value?: V1DashboardOverviewGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'trafficData': ((value['trafficData'] as Array<any>).map(V1DashboardOverviewGet200ResponseTrafficDataInnerToJSON)),
        'recentActivities': ((value['recentActivities'] as Array<any>).map(V1DashboardOverviewGet200ResponseRecentActivitiesInnerToJSON)),
        'notifications': ((value['notifications'] as Array<any>).map(V1DashboardOverviewGet200ResponseNotificationsInnerToJSON)),
    };
}

