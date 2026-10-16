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
 * @interface V1UserSettingsPatchRequestProfile
 */
export interface V1UserSettingsPatchRequestProfile {
    /**
     * 
     */
    displayName?: string;
    /**
     * 
     */
    bio?: string;
    /**
     * 
     */
    avatarUrl?: string;
}

/**
 * Check if a given object implements the V1UserSettingsPatchRequestProfile interface.
 */
export function instanceOfV1UserSettingsPatchRequestProfile(value: object): value is V1UserSettingsPatchRequestProfile {
    return true;
}

export function V1UserSettingsPatchRequestProfileFromJSON(json: any): V1UserSettingsPatchRequestProfile {
    return V1UserSettingsPatchRequestProfileFromJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1UserSettingsPatchRequestProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'displayName': json['displayName'] == null ? undefined : json['displayName'],
        'bio': json['bio'] == null ? undefined : json['bio'],
        'avatarUrl': json['avatarUrl'] == null ? undefined : json['avatarUrl'],
    };
}

export function V1UserSettingsPatchRequestProfileToJSON(json: any): V1UserSettingsPatchRequestProfile {
    return V1UserSettingsPatchRequestProfileToJSONTyped(json, false);
}

export function V1UserSettingsPatchRequestProfileToJSONTyped(value?: V1UserSettingsPatchRequestProfile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'displayName': value['displayName'],
        'bio': value['bio'],
        'avatarUrl': value['avatarUrl'],
    };
}

