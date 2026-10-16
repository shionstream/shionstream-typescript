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
import type { V1DashboardModerationGet200ResponseReportsInner } from './V1DashboardModerationGet200ResponseReportsInner';
import {
    V1DashboardModerationGet200ResponseReportsInnerFromJSON,
    V1DashboardModerationGet200ResponseReportsInnerFromJSONTyped,
    V1DashboardModerationGet200ResponseReportsInnerToJSON,
    V1DashboardModerationGet200ResponseReportsInnerToJSONTyped,
} from './V1DashboardModerationGet200ResponseReportsInner';

/**
 * 
 * @export
 * @interface V1DashboardModerationGet200Response
 */
export interface V1DashboardModerationGet200Response {
    /**
     * 
     */
    reports: Array<V1DashboardModerationGet200ResponseReportsInner>;
}

/**
 * Check if a given object implements the V1DashboardModerationGet200Response interface.
 */
export function instanceOfV1DashboardModerationGet200Response(value: object): value is V1DashboardModerationGet200Response {
    if (!('reports' in value) || value['reports'] === undefined) return false;
    return true;
}

export function V1DashboardModerationGet200ResponseFromJSON(json: any): V1DashboardModerationGet200Response {
    return V1DashboardModerationGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardModerationGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardModerationGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'reports': ((json['reports'] as Array<any>).map(V1DashboardModerationGet200ResponseReportsInnerFromJSON)),
    };
}

export function V1DashboardModerationGet200ResponseToJSON(json: any): V1DashboardModerationGet200Response {
    return V1DashboardModerationGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardModerationGet200ResponseToJSONTyped(value?: V1DashboardModerationGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reports': ((value['reports'] as Array<any>).map(V1DashboardModerationGet200ResponseReportsInnerToJSON)),
    };
}

