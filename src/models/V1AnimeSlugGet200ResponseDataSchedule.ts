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
 * @interface V1AnimeSlugGet200ResponseDataSchedule
 */
export interface V1AnimeSlugGet200ResponseDataSchedule {
    /**
     * 
     */
    releaseDay: string;
    /**
     * 
     */
    releaseTime: string;
    /**
     * 
     */
    episodeNumber?: number;
    /**
     * 
     */
    status: string;
    /**
     * 
     */
    timezone: string;
}

/**
 * Check if a given object implements the V1AnimeSlugGet200ResponseDataSchedule interface.
 */
export function instanceOfV1AnimeSlugGet200ResponseDataSchedule(value: object): value is V1AnimeSlugGet200ResponseDataSchedule {
    if (!('releaseDay' in value) || value['releaseDay'] === undefined) return false;
    if (!('releaseTime' in value) || value['releaseTime'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('timezone' in value) || value['timezone'] === undefined) return false;
    return true;
}

export function V1AnimeSlugGet200ResponseDataScheduleFromJSON(json: any): V1AnimeSlugGet200ResponseDataSchedule {
    return V1AnimeSlugGet200ResponseDataScheduleFromJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugGet200ResponseDataSchedule {
    if (json == null) {
        return json;
    }
    return {
        
        'releaseDay': json['releaseDay'],
        'releaseTime': json['releaseTime'],
        'episodeNumber': json['episodeNumber'] == null ? undefined : json['episodeNumber'],
        'status': json['status'],
        'timezone': json['timezone'],
    };
}

export function V1AnimeSlugGet200ResponseDataScheduleToJSON(json: any): V1AnimeSlugGet200ResponseDataSchedule {
    return V1AnimeSlugGet200ResponseDataScheduleToJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataScheduleToJSONTyped(value?: V1AnimeSlugGet200ResponseDataSchedule | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'releaseDay': value['releaseDay'],
        'releaseTime': value['releaseTime'],
        'episodeNumber': value['episodeNumber'],
        'status': value['status'],
        'timezone': value['timezone'],
    };
}

