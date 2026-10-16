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
 * @interface V1CommentsIdLikePostRequest
 */
export interface V1CommentsIdLikePostRequest {
    /**
     * 
     */
    isDislike?: boolean;
}

/**
 * Check if a given object implements the V1CommentsIdLikePostRequest interface.
 */
export function instanceOfV1CommentsIdLikePostRequest(value: object): value is V1CommentsIdLikePostRequest {
    return true;
}

export function V1CommentsIdLikePostRequestFromJSON(json: any): V1CommentsIdLikePostRequest {
    return V1CommentsIdLikePostRequestFromJSONTyped(json, false);
}

export function V1CommentsIdLikePostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CommentsIdLikePostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'isDislike': json['isDislike'] == null ? undefined : json['isDislike'],
    };
}

export function V1CommentsIdLikePostRequestToJSON(json: any): V1CommentsIdLikePostRequest {
    return V1CommentsIdLikePostRequestToJSONTyped(json, false);
}

export function V1CommentsIdLikePostRequestToJSONTyped(value?: V1CommentsIdLikePostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'isDislike': value['isDislike'],
    };
}

