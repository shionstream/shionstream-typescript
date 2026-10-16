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
 * @interface V1UserSettingsPatchRequestNotifications
 */
export interface V1UserSettingsPatchRequestNotifications {
    /**
     * 
     */
    newEpisodeAlerts?: boolean;
    /**
     * 
     */
    watchlistUpdates?: boolean;
    /**
     * 
     */
    marketingEmails?: boolean;
    /**
     * 
     */
    publicWatchlist?: boolean;
}

/**
 * Check if a given object implements the V1UserSettingsPatchRequestNotifications interface.
 */
export function instanceOfV1UserSettingsPatchRequestNotifications(value: object): value is V1UserSettingsPatchRequestNotifications {
    return true;
}

export function V1UserSettingsPatchRequestNotificationsFromJSON(json: any): V1UserSettingsPatchRequestNotifications {
    return V1UserSettingsPatchRequestNotificationsFromJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestNotificationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsPatchRequestNotifications {
    if (json == null) {
        return json;
    }
    return {
        
        'newEpisodeAlerts': json['newEpisodeAlerts'] == null ? undefined : json['newEpisodeAlerts'],
        'watchlistUpdates': json['watchlistUpdates'] == null ? undefined : json['watchlistUpdates'],
        'marketingEmails': json['marketingEmails'] == null ? undefined : json['marketingEmails'],
        'publicWatchlist': json['publicWatchlist'] == null ? undefined : json['publicWatchlist'],
    };
}

export function V1UserSettingsPatchRequestNotificationsToJSON(json: any): V1UserSettingsPatchRequestNotifications {
    return V1UserSettingsPatchRequestNotificationsToJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestNotificationsToJSONTyped(value?: V1UserSettingsPatchRequestNotifications | null, ignoreDiscriminator: boolean = false): any {
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

