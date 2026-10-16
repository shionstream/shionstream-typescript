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
 * @interface HealthGet500Response
 */
export interface HealthGet500Response {
    /**
     * 
     */
    status: HealthGet500ResponseStatusEnum;
    /**
     * 
     */
    timestamp: string;
    /**
     * 
     */
    database: string;
    /**
     * 
     */
    error?: string;
}


/**
 * @export
 */
export const HealthGet500ResponseStatusEnum = {
    Ok: 'ok',
    Degraded: 'degraded',
} as const;
export type HealthGet500ResponseStatusEnum = typeof HealthGet500ResponseStatusEnum[keyof typeof HealthGet500ResponseStatusEnum];


/**
 * Check if a given object implements the HealthGet500Response interface.
 */
export function instanceOfHealthGet500Response(value: object): value is HealthGet500Response {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    if (!('database' in value) || value['database'] === undefined) return false;
    return true;
}

export function HealthGet500ResponseFromJSON(json: any): HealthGet500Response {
    return HealthGet500ResponseFromJSONTyped(json, false);
}

export function HealthGet500ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HealthGet500Response {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'timestamp': json['timestamp'],
        'database': json['database'],
        'error': json['error'] == null ? undefined : json['error'],
    };
}

export function HealthGet500ResponseToJSON(json: any): HealthGet500Response {
    return HealthGet500ResponseToJSONTyped(json, false);
}

export function HealthGet500ResponseToJSONTyped(value?: HealthGet500Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'timestamp': value['timestamp'],
        'database': value['database'],
        'error': value['error'],
    };
}

