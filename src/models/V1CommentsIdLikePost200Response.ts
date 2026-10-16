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
 * @interface V1CommentsIdLikePost200Response
 */
export interface V1CommentsIdLikePost200Response {
    /**
     * 
     */
    success: V1CommentsIdLikePost200ResponseSuccessEnum;
    /**
     * 
     */
    message: string;
}


/**
 * @export
 */
export const V1CommentsIdLikePost200ResponseSuccessEnum = {
    True: true,
} as const;
export type V1CommentsIdLikePost200ResponseSuccessEnum = typeof V1CommentsIdLikePost200ResponseSuccessEnum[keyof typeof V1CommentsIdLikePost200ResponseSuccessEnum];


/**
 * Check if a given object implements the V1CommentsIdLikePost200Response interface.
 */
export function instanceOfV1CommentsIdLikePost200Response(value: object): value is V1CommentsIdLikePost200Response {
    if (!('success' in value) || value['success'] === undefined) return false;
    
    if (value['success'] !== true) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function V1CommentsIdLikePost200ResponseFromJSON(json: any): V1CommentsIdLikePost200Response {
    return V1CommentsIdLikePost200ResponseFromJSONTyped(json, false);
}

export function V1CommentsIdLikePost200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CommentsIdLikePost200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'success': json['success'],
        'message': json['message'],
    };
}

export function V1CommentsIdLikePost200ResponseToJSON(json: any): V1CommentsIdLikePost200Response {
    return V1CommentsIdLikePost200ResponseToJSONTyped(json, false);
}

export function V1CommentsIdLikePost200ResponseToJSONTyped(value?: V1CommentsIdLikePost200Response | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'success': value['success'],
        'message': value['message'],
    };
}

