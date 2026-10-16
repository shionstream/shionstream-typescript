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
import type { V1UserWatchlistGet200ResponseDataInner } from './V1UserWatchlistGet200ResponseDataInner';
import {
    V1UserWatchlistGet200ResponseDataInnerFromJSON,
    V1UserWatchlistGet200ResponseDataInnerFromJSONTyped,
    V1UserWatchlistGet200ResponseDataInnerToJSON,
    V1UserWatchlistGet200ResponseDataInnerToJSONTyped,
} from './V1UserWatchlistGet200ResponseDataInner';

/**
 * 
 * @export
 * @interface V1UserWatchlistGet200Response
 */
export interface V1UserWatchlistGet200Response {
    /**
     * 
     */
    success: V1UserWatchlistGet200ResponseSuccessEnum;
    /**
     * 
     */
    data: Array<V1UserWatchlistGet200ResponseDataInner>;
}


/**
 * @export
 */
export const V1UserWatchlistGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1UserWatchlistGet200ResponseSuccessEnum = typeof V1UserWatchlistGet200ResponseSuccessEnum[keyof typeof V1UserWatchlistGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1UserWatchlistGet200Response interface.
 */
export function instanceOfV1UserWatchlistGet200Response(value: object): value is V1UserWatchlistGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1UserWatchlistGet200ResponseFromJSON(json: any): V1UserWatchlistGet200Response {
    return V1UserWatchlistGet200ResponseFromJSONTyped(json, false);
}

export function V1UserWatchlistGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserWatchlistGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': ((json['data'] as Array<any>).map(V1UserWatchlistGet200ResponseDataInnerFromJSON)),
    };
}

export function V1UserWatchlistGet200ResponseToJSON(json: any): V1UserWatchlistGet200Response {
    return V1UserWatchlistGet200ResponseToJSONTyped(json, false);
}

export function V1UserWatchlistGet200ResponseToJSONTyped(value?: V1UserWatchlistGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': ((value['data'] as Array<any>).map(V1UserWatchlistGet200ResponseDataInnerToJSON)),
    };
}

