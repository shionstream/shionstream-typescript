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
 * @interface V1EpisodesIdStreamGet200ResponseAudioInner
 */
export interface V1EpisodesIdStreamGet200ResponseAudioInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    label: string;
    /**
     * 
     */
    languageCode: string;
    /**
     * 
     */
    audioUrl: string;
    /**
     * 
     */
    type: string;
    /**
     * 
     */
    isDefault: boolean;
}

/**
 * Check if a given object implements the V1EpisodesIdStreamGet200ResponseAudioInner interface.
 */
export function instanceOfV1EpisodesIdStreamGet200ResponseAudioInner(value: object): value is V1EpisodesIdStreamGet200ResponseAudioInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('languageCode' in value) || value['languageCode'] === undefined) return false;
    if (!('audioUrl' in value) || value['audioUrl'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('isDefault' in value) || value['isDefault'] === undefined) return false;
    return true;
}

export function V1EpisodesIdStreamGet200ResponseAudioInnerFromJSON(json: any): V1EpisodesIdStreamGet200ResponseAudioInner {
    return V1EpisodesIdStreamGet200ResponseAudioInnerFromJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseAudioInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EpisodesIdStreamGet200ResponseAudioInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': json['label'],
        'languageCode': json['languageCode'],
        'audioUrl': json['audioUrl'],
        'type': json['type'],
        'isDefault': json['isDefault'],
    };
}

export function V1EpisodesIdStreamGet200ResponseAudioInnerToJSON(json: any): V1EpisodesIdStreamGet200ResponseAudioInner {
    return V1EpisodesIdStreamGet200ResponseAudioInnerToJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseAudioInnerToJSONTyped(value?: V1EpisodesIdStreamGet200ResponseAudioInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'label': value['label'],
        'languageCode': value['languageCode'],
        'audioUrl': value['audioUrl'],
        'type': value['type'],
        'isDefault': value['isDefault'],
    };
}

