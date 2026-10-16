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
 * @interface V1UserSettingsGet200ResponseDataNotifications
 */
export interface V1UserSettingsGet200ResponseDataNotifications {
    /**
     * 
     */
    newEpisodeAlerts: boolean;
    /**
     * 
     */
    watchlistUpdates: boolean;
    /**
     * 
     */
    marketingEmails: boolean;
    /**
     * 
     */
    publicWatchlist: boolean;
}

/**
 * Check if a given object implements the V1UserSettingsGet200ResponseDataNotifications interface.
 */
export function instanceOfV1UserSettingsGet200ResponseDataNotifications(value: object): value is V1UserSettingsGet200ResponseDataNotifications {
    if (!('newEpisodeAlerts' in value) || value['newEpisodeAlerts'] === undefined) return false;
    if (!('watchlistUpdates' in value) || value['watchlistUpdates'] === undefined) return false;
    if (!('marketingEmails' in value) || value['marketingEmails'] === undefined) return false;
    if (!('publicWatchlist' in value) || value['publicWatchlist'] === undefined) return false;
    return true;
}

export function V1UserSettingsGet200ResponseDataNotificationsFromJSON(json: any): V1UserSettingsGet200ResponseDataNotifications {
    return V1UserSettingsGet200ResponseDataNotificationsFromJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseDataNotificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsGet200ResponseDataNotifications {
    if (json == null) {
        return json;
    }
    return {
        
        'newEpisodeAlerts': json['newEpisodeAlerts'],
        'watchlistUpdates': json['watchlistUpdates'],
        'marketingEmails': json['marketingEmails'],
        'publicWatchlist': json['publicWatchlist'],
    };
}

export function V1UserSettingsGet200ResponseDataNotificationsToJSON(json: any): V1UserSettingsGet200ResponseDataNotifications {
    return V1UserSettingsGet200ResponseDataNotificationsToJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseDataNotificationsToJSONTyped(value?: V1UserSettingsGet200ResponseDataNotifications | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'newEpisodeAlerts': value['newEpisodeAlerts'],
        'watchlistUpdates': value['watchlistUpdates'],
        'marketingEmails': value['marketingEmails'],
        'publicWatchlist': value['publicWatchlist'],
    };
}

