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
 * @interface V1EpisodesIdStreamGet200ResponseSubtitlesInner
 */
export interface V1EpisodesIdStreamGet200ResponseSubtitlesInner {
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
    fileUrl: string;
    /**
     * 
     */
    format: string;
    /**
     * 
     */
    isDefault: boolean;
}

/**
 * Check if a given object implements the V1EpisodesIdStreamGet200ResponseSubtitlesInner interface.
 */
export function instanceOfV1EpisodesIdStreamGet200ResponseSubtitlesInner(value: object): value is V1EpisodesIdStreamGet200ResponseSubtitlesInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('languageCode' in value) || value['languageCode'] === undefined) return false;
    if (!('fileUrl' in value) || value['fileUrl'] === undefined) return false;
    if (!('format' in value) || value['format'] === undefined) return false;
    if (!('isDefault' in value) || value['isDefault'] === undefined) return false;
    return true;
}

export function V1EpisodesIdStreamGet200ResponseSubtitlesInnerFromJSON(json: any): V1EpisodesIdStreamGet200ResponseSubtitlesInner {
    return V1EpisodesIdStreamGet200ResponseSubtitlesInnerFromJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseSubtitlesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1EpisodesIdStreamGet200ResponseSubtitlesInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': json['label'],
        'languageCode': json['languageCode'],
        'fileUrl': json['fileUrl'],
        'format': json['format'],
        'isDefault': json['isDefault'],
    };
}

export function V1EpisodesIdStreamGet200ResponseSubtitlesInnerToJSON(json: any): V1EpisodesIdStreamGet200ResponseSubtitlesInner {
    return V1EpisodesIdStreamGet200ResponseSubtitlesInnerToJSONTyped(json, false);
}

export function V1EpisodesIdStreamGet200ResponseSubtitlesInnerToJSONTyped(value?: V1EpisodesIdStreamGet200ResponseSubtitlesInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'label': value['label'],
        'languageCode': value['languageCode'],
        'fileUrl': value['fileUrl'],
        'format': value['format'],
        'isDefault': value['isDefault'],
    };
}

