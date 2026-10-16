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
import type { V1CommentsGet200ResponseDataInner } from './V1CommentsGet200ResponseDataInner';
import {
    V1CommentsGet200ResponseDataInnerFromJSON,
    V1CommentsGet200ResponseDataInnerFromJSONTyped,
    V1CommentsGet200ResponseDataInnerToJSON,
    V1CommentsGet200ResponseDataInnerToJSONTyped,
} from './V1CommentsGet200ResponseDataInner';

/**
 * 
 * @export
 * @interface V1CommentsGet200Response
 */
export interface V1CommentsGet200Response {
    /**
     * 
     */
    success: V1CommentsGet200ResponseSuccessEnum;
    /**
     * 
     */
    data: Array<V1CommentsGet200ResponseDataInner>;
}


/**
 * @export
 */
export const V1CommentsGet200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1CommentsGet200ResponseSuccessEnum = typeof V1CommentsGet200ResponseSuccessEnum[keyof typeof V1CommentsGet200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1CommentsGet200Response interface.
 */
export function instanceOfV1CommentsGet200Response(value: object): value is V1CommentsGet200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1CommentsGet200ResponseFromJSON(json: any): V1CommentsGet200Response {
    return V1CommentsGet200ResponseFromJSONTyped(json, false);
}

export function V1CommentsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CommentsGet200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': ((json['data'] as Array<any>).map(V1CommentsGet200ResponseDataInnerFromJSON)),
    };
}

export function V1CommentsGet200ResponseToJSON(json: any): V1CommentsGet200Response {
    return V1CommentsGet200ResponseToJSONTyped(json, false);
}

export function V1CommentsGet200ResponseToJSONTyped(value?: V1CommentsGet200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': ((value['data'] as Array<any>).map(V1CommentsGet200ResponseDataInnerToJSON)),
    };
}

