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
 * @interface V1CommentsPost201Response
 */
export interface V1CommentsPost201Response {
    /**
     * 
     */
    success: V1CommentsPost201ResponseSuccessEnum;
    /**
     * 
     */
    data: V1CommentsGet200ResponseDataInner;
}


/**
 * @export
 */
export const V1CommentsPost201ResponseSuccessEnum = {
    True: true,
} as const;
export type V1CommentsPost201ResponseSuccessEnum = typeof V1CommentsPost201ResponseSuccessEnum[keyof typeof V1CommentsPost201ResponseSuccessEnum];


/**
 * Check if a given object implements the V1CommentsPost201Response interface.
 */
export function instanceOfV1CommentsPost201Response(value: object): value is V1CommentsPost201Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function V1CommentsPost201ResponseFromJSON(json: any): V1CommentsPost201Response {
    return V1CommentsPost201ResponseFromJSONTyped(json, false);
}

export function V1CommentsPost201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CommentsPost201Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'data': V1CommentsGet200ResponseDataInnerFromJSON(json['data']),
    };
}

export function V1CommentsPost201ResponseToJSON(json: any): V1CommentsPost201Response {
    return V1CommentsPost201ResponseToJSONTyped(json, false);
}

export function V1CommentsPost201ResponseToJSONTyped(value?: V1CommentsPost201Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'data': V1CommentsGet200ResponseDataInnerToJSON(value['data']),
    };
}

