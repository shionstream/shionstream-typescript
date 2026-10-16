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
import type { V1UserSettingsGet200ResponseDataPlayer } from './V1UserSettingsGet200ResponseDataPlayer';
import {
    V1UserSettingsGet200ResponseDataPlayerFromJSON,
    V1UserSettingsGet200ResponseDataPlayerFromJSONTyped,
    V1UserSettingsGet200ResponseDataPlayerToJSON,
    V1UserSettingsGet200ResponseDataPlayerToJSONTyped,
} from './V1UserSettingsGet200ResponseDataPlayer';
import type { V1UserSettingsGet200ResponseDataNotifications } from './V1UserSettingsGet200ResponseDataNotifications';
import {
    V1UserSettingsGet200ResponseDataNotificationsFromJSON,
    V1UserSettingsGet200ResponseDataNotificationsFromJSONTyped,
    V1UserSettingsGet200ResponseDataNotificationsToJSON,
    V1UserSettingsGet200ResponseDataNotificationsToJSONTyped,
} from './V1UserSettingsGet200ResponseDataNotifications';

/**
 * 
 * @export
 * @interface V1UserSettingsGet200ResponseData
 */
export interface V1UserSettingsGet200ResponseData {
    /**
     * 
     */
    player: V1UserSettingsGet200ResponseDataPlayer;
    /**
     * 
     */
    notifications: V1UserSettingsGet200ResponseDataNotifications;
}

/**
 * Check if a given object implements the V1UserSettingsGet200ResponseData interface.
 */
export function instanceOfV1UserSettingsGet200ResponseData(value: object): value is V1UserSettingsGet200ResponseData {
    if (!('player' in value) || value['player'] === undefined) return false;
    if (!('notifications' in value) || value['notifications'] === undefined) return false;
    return true;
}

export function V1UserSettingsGet200ResponseDataFromJSON(json: any): V1UserSettingsGet200ResponseData {
    return V1UserSettingsGet200ResponseDataFromJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsGet200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'player': V1UserSettingsGet200ResponseDataPlayerFromJSON(json['player']),
        'notifications': V1UserSettingsGet200ResponseDataNotificationsFromJSON(json['notifications']),
    };
}

export function V1UserSettingsGet200ResponseDataToJSON(json: any): V1UserSettingsGet200ResponseData {
    return V1UserSettingsGet200ResponseDataToJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseDataToJSONTyped(value?: V1UserSettingsGet200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'player': V1UserSettingsGet200ResponseDataPlayerToJSON(value['player']),
        'notifications': V1UserSettingsGet200ResponseDataNotificationsToJSON(value['notifications']),
    };
}

