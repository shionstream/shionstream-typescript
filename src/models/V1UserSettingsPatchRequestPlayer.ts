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
 * @interface V1UserSettingsPatchRequestPlayer
 */
export interface V1UserSettingsPatchRequestPlayer {
    /**
     * 
     */
    defaultQuality?: string;
    /**
     * 
     */
    defaultSubtitle?: string;
    /**
     * 
     */
    autoPlayNext?: boolean;
    /**
     * 
     */
    autoSkipIntro?: boolean;
    /**
     * 
     */
    preferredAudio?: string;
}

/**
 * Check if a given object implements the V1UserSettingsPatchRequestPlayer interface.
 */
export function instanceOfV1UserSettingsPatchRequestPlayer(value: object): value is V1UserSettingsPatchRequestPlayer {
    return true;
}

export function V1UserSettingsPatchRequestPlayerFromJSON(json: any): V1UserSettingsPatchRequestPlayer {
    return V1UserSettingsPatchRequestPlayerFromJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestPlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsPatchRequestPlayer {
    if (json == null) {
        return json;
    }
    return {
        
        'defaultQuality': json['defaultQuality'] == null ? undefined : json['defaultQuality'],
        'defaultSubtitle': json['defaultSubtitle'] == null ? undefined : json['defaultSubtitle'],
        'autoPlayNext': json['autoPlayNext'] == null ? undefined : json['autoPlayNext'],
        'autoSkipIntro': json['autoSkipIntro'] == null ? undefined : json['autoSkipIntro'],
        'preferredAudio': json['preferredAudio'] == null ? undefined : json['preferredAudio'],
    };
}

export function V1UserSettingsPatchRequestPlayerToJSON(json: any): V1UserSettingsPatchRequestPlayer {
    return V1UserSettingsPatchRequestPlayerToJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestPlayerToJSONTyped(value?: V1UserSettingsPatchRequestPlayer | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'defaultQuality': value['defaultQuality'],
        'defaultSubtitle': value['defaultSubtitle'],
        'autoPlayNext': value['autoPlayNext'],
        'autoSkipIntro': value['autoSkipIntro'],
        'preferredAudio': value['preferredAudio'],
    };
}

