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
import type { V1UserSettingsPatchRequestNotifications } from './V1UserSettingsPatchRequestNotifications';
import {
    V1UserSettingsPatchRequestNotificationsFromJSON,
    V1UserSettingsPatchRequestNotificationsFromJSONTyped,
    V1UserSettingsPatchRequestNotificationsToJSON,
    V1UserSettingsPatchRequestNotificationsToJSONTyped,
} from './V1UserSettingsPatchRequestNotifications';
import type { V1UserSettingsPatchRequestProfile } from './V1UserSettingsPatchRequestProfile';
import {
    V1UserSettingsPatchRequestProfileFromJSON,
    V1UserSettingsPatchRequestProfileFromJSONTyped,
    V1UserSettingsPatchRequestProfileToJSON,
    V1UserSettingsPatchRequestProfileToJSONTyped,
} from './V1UserSettingsPatchRequestProfile';
import type { V1UserSettingsPatchRequestPlayer } from './V1UserSettingsPatchRequestPlayer';
import {
    V1UserSettingsPatchRequestPlayerFromJSON,
    V1UserSettingsPatchRequestPlayerFromJSONTyped,
    V1UserSettingsPatchRequestPlayerToJSON,
    V1UserSettingsPatchRequestPlayerToJSONTyped,
} from './V1UserSettingsPatchRequestPlayer';

/**
 * 
 * @export
 * @interface V1UserSettingsPatchRequest
 */
export interface V1UserSettingsPatchRequest {
    /**
     * 
     */
    profile?: V1UserSettingsPatchRequestProfile;
    /**
     * 
     */
    player?: V1UserSettingsPatchRequestPlayer;
    /**
     * 
     */
    notifications?: V1UserSettingsPatchRequestNotifications;
}

/**
 * Check if a given object implements the V1UserSettingsPatchRequest interface.
 */
export function instanceOfV1UserSettingsPatchRequest(value: object): value is V1UserSettingsPatchRequest {
    return true;
}

export function V1UserSettingsPatchRequestFromJSON(json: any): V1UserSettingsPatchRequest {
    return V1UserSettingsPatchRequestFromJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsPatchRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'profile': json['profile'] == null ? undefined : V1UserSettingsPatchRequestProfileFromJSON(json['profile']),
        'player': json['player'] == null ? undefined : V1UserSettingsPatchRequestPlayerFromJSON(json['player']),
        'notifications': json['notifications'] == null ? undefined : V1UserSettingsPatchRequestNotificationsFromJSON(json['notifications']),
    };
}

export function V1UserSettingsPatchRequestToJSON(json: any): V1UserSettingsPatchRequest {
    return V1UserSettingsPatchRequestToJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestToJSONTyped(value?: V1UserSettingsPatchRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'profile': V1UserSettingsPatchRequestProfileToJSON(value['profile']),
        'player': V1UserSettingsPatchRequestPlayerToJSON(value['player']),
        'notifications': V1UserSettingsPatchRequestNotificationsToJSON(value['notifications']),
    };
}

