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
 * @interface V1UserSettingsGet200ResponseDataPlayer
 */
export interface V1UserSettingsGet200ResponseDataPlayer {
    /**
     * 
     */
    defaultQuality: string;
    /**
     * 
     */
    defaultSubtitle: string;
    /**
     * 
     */
    autoPlayNext: boolean;
    /**
     * 
     */
    autoSkipIntro: boolean;
    /**
     * 
     */
    preferredAudio: string;
}

/**
 * Check if a given object implements the V1UserSettingsGet200ResponseDataPlayer interface.
 */
export function instanceOfV1UserSettingsGet200ResponseDataPlayer(value: object): value is V1UserSettingsGet200ResponseDataPlayer {
    if (!('defaultQuality' in value) || value['defaultQuality'] === undefined) return false;
    if (!('defaultSubtitle' in value) || value['defaultSubtitle'] === undefined) return false;
    if (!('autoPlayNext' in value) || value['autoPlayNext'] === undefined) return false;
    if (!('autoSkipIntro' in value) || value['autoSkipIntro'] === undefined) return false;
    if (!('preferredAudio' in value) || value['preferredAudio'] === undefined) return false;
    return true;
}

export function V1UserSettingsGet200ResponseDataPlayerFromJSON(json: any): V1UserSettingsGet200ResponseDataPlayer {
    return V1UserSettingsGet200ResponseDataPlayerFromJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseDataPlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsGet200ResponseDataPlayer {
    if (json == null) {
        return json;
    }
    return {
        
        'defaultQuality': json['defaultQuality'],
        'defaultSubtitle': json['defaultSubtitle'],
        'autoPlayNext': json['autoPlayNext'],
        'autoSkipIntro': json['autoSkipIntro'],
        'preferredAudio': json['preferredAudio'],
    };
}

export function V1UserSettingsGet200ResponseDataPlayerToJSON(json: any): V1UserSettingsGet200ResponseDataPlayer {
    return V1UserSettingsGet200ResponseDataPlayerToJSONTyped(json, false);
}

export function V1UserSettingsGet200ResponseDataPlayerToJSONTyped(value?: V1UserSettingsGet200ResponseDataPlayer | null, ignoreDiscriminator: boolean = false): any {
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

