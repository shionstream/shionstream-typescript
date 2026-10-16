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
import type { V1UserHistoryGet200ResponseDataInner } from './V1UserHistoryGet200ResponseDataInner';
import {
    V1UserHistoryGet200ResponseDataInnerFromJSON,
    V1UserHistoryGet200ResponseDataInnerFromJSONTyped,
    V1UserHistoryGet200ResponseDataInnerToJSON,
    V1UserHistoryGet200ResponseDataInnerToJSONTyped,
} from './V1UserHistoryGet200ResponseDataInner';

/**
 * 
 * @export
 * @interface V1UserHistoryGet200Response
 */
export interface V1UserHistoryGet200Response {
    /**
     * 
     */
    success: V1UserHistoryGet200ResponseSuccessEnum;
    /**
     * 
     */
    data: Array<V1UserHistoryGet200ResponseDataInner>;
}


/**
 * @export
 */
export const V1UserHistoryGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1UserHistoryGet200ResponseSuccessEnum = typeof V1UserHistoryGet200ResponseSuccessEnum[keyof typeof V1UserHistoryGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1UserHistoryGet200Response interface.
 */
export function instanceOfV1UserHistoryGet200Response(value: object): value is V1UserHistoryGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1UserHistoryGet200ResponseFromJSON(json: any): V1UserHistoryGet200Response {
    return V1UserHistoryGet200ResponseFromJSONTyped(json, false);
}

export function V1UserHistoryGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserHistoryGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': ((json['data'] as Array<any>).map(V1UserHistoryGet200ResponseDataInnerFromJSON)),
    };
}

export function V1UserHistoryGet200ResponseToJSON(json: any): V1UserHistoryGet200Response {
    return V1UserHistoryGet200ResponseToJSONTyped(json, false);
}

export function V1UserHistoryGet200ResponseToJSONTyped(value?: V1UserHistoryGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': ((value['data'] as Array<any>).map(V1UserHistoryGet200ResponseDataInnerToJSON)),
    };
}

