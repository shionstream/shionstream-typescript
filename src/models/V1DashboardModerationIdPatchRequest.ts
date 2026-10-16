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
 * @interface V1DashboardModerationIdPatchRequest
 */
export interface V1DashboardModerationIdPatchRequest {
    /**
     * 
     */
    status: V1DashboardModerationIdPatchRequestStatusEnum;
    /**
     * 
     */
    action?: V1DashboardModerationIdPatchRequestActionEnum;
}


/**
 * @export
 */
export const V1DashboardModerationIdPatchRequestStatusEnum = {
    Resolved: 'resolved',
    Dismissed: 'dismissed',
} as const;
export type V1DashboardModerationIdPatchRequestStatusEnum = typeof V1DashboardModerationIdPatchRequestStatusEnum[keyof typeof V1DashboardModerationIdPatchRequestStatusEnum];

/**
 * @export
 */
export const V1DashboardModerationIdPatchRequestActionEnum = {
    DeleteComment: 'delete_comment',
    Keep: 'keep',
} as const;
export type V1DashboardModerationIdPatchRequestActionEnum = typeof V1DashboardModerationIdPatchRequestActionEnum[keyof typeof V1DashboardModerationIdPatchRequestActionEnum];


/**
 * Check if a given object implements the V1DashboardModerationIdPatchRequest interface.
 */
export function instanceOfV1DashboardModerationIdPatchRequest(value: object): value is V1DashboardModerationIdPatchRequest {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function V1DashboardModerationIdPatchRequestFromJSON(json: any): V1DashboardModerationIdPatchRequest {
    return V1DashboardModerationIdPatchRequestFromJSONTyped(json, false);
}

export function V1DashboardModerationIdPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardModerationIdPatchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'action': json['action'] == null ? undefined : json['action'],
    };
}

export function V1DashboardModerationIdPatchRequestToJSON(json: any): V1DashboardModerationIdPatchRequest {
    return V1DashboardModerationIdPatchRequestToJSONTyped(json, false);
}

export function V1DashboardModerationIdPatchRequestToJSONTyped(value?: V1DashboardModerationIdPatchRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'action': value['action'],
    };
}

