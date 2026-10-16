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
import type { V1DashboardSeasonsGet200ResponseSeasonsInner } from './V1DashboardSeasonsGet200ResponseSeasonsInner';
import {
    V1DashboardSeasonsGet200ResponseSeasonsInnerFromJSON,
    V1DashboardSeasonsGet200ResponseSeasonsInnerFromJSONTyped,
    V1DashboardSeasonsGet200ResponseSeasonsInnerToJSON,
    V1DashboardSeasonsGet200ResponseSeasonsInnerToJSONTyped,
} from './V1DashboardSeasonsGet200ResponseSeasonsInner';

/**
 * 
 * @export
 * @interface V1DashboardSeasonsGet200Response
 */
export interface V1DashboardSeasonsGet200Response {
    /**
     * 
     */
    seasons: Array<V1DashboardSeasonsGet200ResponseSeasonsInner>;
}

/**
 * Check if a given object implements the V1DashboardSeasonsGet200Response interface.
 */
export function instanceOfV1DashboardSeasonsGet200Response(value: object): value is V1DashboardSeasonsGet200Response {
    if (!('seasons' in value) || value['seasons'] === undefined) return false;
    return true;
}

export function V1DashboardSeasonsGet200ResponseFromJSON(json: any): V1DashboardSeasonsGet200Response {
    return V1DashboardSeasonsGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardSeasonsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardSeasonsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'seasons': ((json['seasons'] as Array<any>).map(V1DashboardSeasonsGet200ResponseSeasonsInnerFromJSON)),
    };
}

export function V1DashboardSeasonsGet200ResponseToJSON(json: any): V1DashboardSeasonsGet200Response {
    return V1DashboardSeasonsGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardSeasonsGet200ResponseToJSONTyped(value?: V1DashboardSeasonsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'seasons': ((value['seasons'] as Array<any>).map(V1DashboardSeasonsGet200ResponseSeasonsInnerToJSON)),
    };
}

