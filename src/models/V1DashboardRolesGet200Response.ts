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
import type { V1DashboardRolesGet200ResponseRolesInner } from './V1DashboardRolesGet200ResponseRolesInner';
import {
    V1DashboardRolesGet200ResponseRolesInnerFromJSON,
    V1DashboardRolesGet200ResponseRolesInnerFromJSONTyped,
    V1DashboardRolesGet200ResponseRolesInnerToJSON,
    V1DashboardRolesGet200ResponseRolesInnerToJSONTyped,
} from './V1DashboardRolesGet200ResponseRolesInner';

/**
 * 
 * @export
 * @interface V1DashboardRolesGet200Response
 */
export interface V1DashboardRolesGet200Response {
    /**
     * 
     */
    roles: Array<V1DashboardRolesGet200ResponseRolesInner>;
}

/**
 * Check if a given object implements the V1DashboardRolesGet200Response interface.
 */
export function instanceOfV1DashboardRolesGet200Response(value: object): value is V1DashboardRolesGet200Response {
    if (!('roles' in value) || value['roles'] === undefined) return false;
    return true;
}

export function V1DashboardRolesGet200ResponseFromJSON(json: any): V1DashboardRolesGet200Response {
    return V1DashboardRolesGet200ResponseFromJSONTyped(json, false);
}

export function V1DashboardRolesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardRolesGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'roles': ((json['roles'] as Array<any>).map(V1DashboardRolesGet200ResponseRolesInnerFromJSON)),
    };
}

export function V1DashboardRolesGet200ResponseToJSON(json: any): V1DashboardRolesGet200Response {
    return V1DashboardRolesGet200ResponseToJSONTyped(json, false);
}

export function V1DashboardRolesGet200ResponseToJSONTyped(value?: V1DashboardRolesGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'roles': ((value['roles'] as Array<any>).map(V1DashboardRolesGet200ResponseRolesInnerToJSON)),
    };
}

