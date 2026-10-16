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
 * @interface V1UserProfileGet200ResponseDataActivity
 */
export interface V1UserProfileGet200ResponseDataActivity {
    /**
     * 
     */
    watchlistCount: number;
    /**
     * 
     */
    historyCount: number;
}

/**
 * Check if a given object implements the V1UserProfileGet200ResponseDataActivity interface.
 */
export function instanceOfV1UserProfileGet200ResponseDataActivity(value: object): value is V1UserProfileGet200ResponseDataActivity {
    if (!('watchlistCount' in value) || value['watchlistCount'] === undefined) return false;
    if (!('historyCount' in value) || value['historyCount'] === undefined) return false;
    return true;
}

export function V1UserProfileGet200ResponseDataActivityFromJSON(json: any): V1UserProfileGet200ResponseDataActivity {
    return V1UserProfileGet200ResponseDataActivityFromJSONTyped(json, false);
}

export function V1UserProfileGet200ResponseDataActivityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserProfileGet200ResponseDataActivity {
    if (json == null) {
        return json;
    }
    return {
        
        'watchlistCount': json['watchlistCount'],
        'historyCount': json['historyCount'],
    };
}

export function V1UserProfileGet200ResponseDataActivityToJSON(json: any): V1UserProfileGet200ResponseDataActivity {
    return V1UserProfileGet200ResponseDataActivityToJSONTyped(json, false);
}

export function V1UserProfileGet200ResponseDataActivityToJSONTyped(value?: V1UserProfileGet200ResponseDataActivity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'watchlistCount': value['watchlistCount'],
        'historyCount': value['historyCount'],
    };
}

