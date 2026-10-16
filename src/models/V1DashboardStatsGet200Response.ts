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
import type { V1DashboardStatsGet200ResponseStats } from './V1DashboardStatsGet200ResponseStats';
import {
    V1DashboardStatsGet200ResponseStatsFromJSON,
    V1DashboardStatsGet200ResponseStatsFromJSONTyped,
    V1DashboardStatsGet200ResponseStatsToJSON,
    V1DashboardStatsGet200ResponseStatsToJSONTyped,
} from './V1DashboardStatsGet200ResponseStats';

/**
 * 
 * @export
 * @interface V1DashboardStatsGet200Response
 */
export interface V1DashboardStatsGet200Response {
    /**
     * 
     */
    stats: V1DashboardStatsGet200ResponseStats;
}

/**
 * Check if a given object implements the V1DashboardStatsGet200Response interface.
 */
export function instanceOfV1DashboardStatsGet200Response(value: object): value is V1DashboardStatsGet200Response {
    if (!('stats' in value) || value['stats'] === undefined) return false;
    return true;
}

export function V1DashboardStatsGet200ResponseFromJSON(json: any): V1DashboardStatsGet200Response {
    return V1DashboardStatsGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardStatsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardStatsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'stats': V1DashboardStatsGet200ResponseStatsFromJSON(json['stats']),
    };
}

export function V1DashboardStatsGet200ResponseToJSON(json: any): V1DashboardStatsGet200Response {
    return V1DashboardStatsGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardStatsGet200ResponseToJSONTyped(value?: V1DashboardStatsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'stats': V1DashboardStatsGet200ResponseStatsToJSON(value['stats']),
    };
}

