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
 * @interface V1CommentsIdReportPostRequest
 */
export interface V1CommentsIdReportPostRequest {
    /**
     * 
     */
    reason: string;
}

/**
 * Check if a given object implements the V1CommentsIdReportPostRequest interface.
 */
export function instanceOfV1CommentsIdReportPostRequest(value: object): value is V1CommentsIdReportPostRequest {
    if (!('reason' in value) || value['reason'] === undefined) return false;
    return true;
}

export function V1CommentsIdReportPostRequestFromJSON(json: any): V1CommentsIdReportPostRequest {
    return V1CommentsIdReportPostRequestFromJSONTyped(json, false);
}

export function V1CommentsIdReportPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CommentsIdReportPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'reason': json['reason'],
    };
}

export function V1CommentsIdReportPostRequestToJSON(json: any): V1CommentsIdReportPostRequest {
    return V1CommentsIdReportPostRequestToJSONTyped(json, false);
}

export function V1CommentsIdReportPostRequestToJSONTyped(value?: V1CommentsIdReportPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'reason': value['reason'],
    };
}

