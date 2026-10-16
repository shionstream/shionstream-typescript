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
 * @interface HealthGet200Response
 */
export interface HealthGet200Response {
    /**
     * 
     */
    status: HealthGet200ResponseStatusEnum;
    /**
     * 
     */
    timestamp: string;
    /**
     * 
     */
    database: string;
}


/**
 * @export
 */
export const HealthGet200ResponseStatusEnum = {
    Ok: 'ok',
    Degraded: 'degraded',
} as const;
export type HealthGet200ResponseStatusEnum = typeof HealthGet200ResponseStatusEnum[keyof typeof HealthGet200ResponseStatusEnum];


/**
 * Check if a given object implements the HealthGet200Response interface.
 */
export function instanceOfHealthGet200Response(value: object): value is HealthGet200Response {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('database' in value) || value['database'] === undefined) return false;
    return true;
}

export function HealthGet200ResponseFromJSON(json: any): HealthGet200Response {
    return HealthGet200ResponseFromJSONTyped(json, false);
}

export function HealthGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'timestamp': json['timestamp'],
        'database': json['database'],
    };
}

export function HealthGet200ResponseToJSON(json: any): HealthGet200Response {
    return HealthGet200ResponseToJSONTyped(json, false);
}

export function HealthGet200ResponseToJSONTyped(value?: HealthGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'timestamp': value['timestamp'],
        'database': value['database'],
    };
}

