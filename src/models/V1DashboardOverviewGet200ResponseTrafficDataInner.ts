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
 * @interface V1DashboardOverviewGet200ResponseTrafficDataInner
 */
export interface V1DashboardOverviewGet200ResponseTrafficDataInner {
    /**
     * 
     */
    time: string;
    /**
     * 
     */
    activeStreams: number;
    /**
     * 
     */
    bandwidthGbps: number;
}

/**
 * Check if a given object implements the V1DashboardOverviewGet200ResponseTrafficDataInner interface.
 */
export function instanceOfV1DashboardOverviewGet200ResponseTrafficDataInner(value: object): value is V1DashboardOverviewGet200ResponseTrafficDataInner {
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('activeStreams' in value) || value['activeStreams'] === undefined) return false;
    if (!('bandwidthGbps' in value) || value['bandwidthGbps'] === undefined) return false;
    return true;
}

export function V1DashboardOverviewGet200ResponseTrafficDataInnerFromJSON(json: any): V1DashboardOverviewGet200ResponseTrafficDataInner {
    return V1DashboardOverviewGet200ResponseTrafficDataInnerFromJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseTrafficDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardOverviewGet200ResponseTrafficDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'time': json['time'],
        'activeStreams': json['activeStreams'],
        'bandwidthGbps': json['bandwidthGbps'],
    };
}

export function V1DashboardOverviewGet200ResponseTrafficDataInnerToJSON(json: any): V1DashboardOverviewGet200ResponseTrafficDataInner {
    return V1DashboardOverviewGet200ResponseTrafficDataInnerToJSONTyped(json, false);
}

export function V1DashboardOverviewGet200ResponseTrafficDataInnerToJSONTyped(value?: V1DashboardOverviewGet200ResponseTrafficDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'time': value['time'],
        'activeStreams': value['activeStreams'],
        'bandwidthGbps': value['bandwidthGbps'],
    };
}

