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
 * @interface V1CommentsPostRequest
 */
export interface V1CommentsPostRequest {
    /**
     * 
     */
    animeId: string;
    /**
     * 
     */
    episodeId: string;
    /**
     * 
     */
    content: string;
    /**
     * 
     */
    parentId?: string;
    /**
     * 
     */
    isSpoiler?: boolean;
    /**
     * 
     */
    guestName?: string;
    /**
     * 
     */
    guestEmail?: string;
}

/**
 * Check if a given object implements the V1CommentsPostRequest interface.
 */
export function instanceOfV1CommentsPostRequest(value: object): value is V1CommentsPostRequest {
    if (!('animeId' in value) || value['animeId'] === undefined) return false;
    if (!('episodeId' in value) || value['episodeId'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    return true;
}

export function V1CommentsPostRequestFromJSON(json: any): V1CommentsPostRequest {
    return V1CommentsPostRequestFromJSONTyped(json, false);
}

export function V1CommentsPostRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CommentsPostRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'animeId': json['animeId'],
        'episodeId': json['episodeId'],
        'content': json['content'],
        'parentId': json['parentId'] == null ? undefined : json['parentId'],
        'isSpoiler': json['isSpoiler'] == null ? undefined : json['isSpoiler'],
        'guestName': json['guestName'] == null ? undefined : json['guestName'],
        'guestEmail': json['guestEmail'] == null ? undefined : json['guestEmail'],
    };
}

export function V1CommentsPostRequestToJSON(json: any): V1CommentsPostRequest {
    return V1CommentsPostRequestToJSONTyped(json, false);
}

export function V1CommentsPostRequestToJSONTyped(value?: V1CommentsPostRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'animeId': value['animeId'],
        'episodeId': value['episodeId'],
        'content': value['content'],
        'parentId': value['parentId'],
        'isSpoiler': value['isSpoiler'],
        'guestName': value['guestName'],
        'guestEmail': value['guestEmail'],
    };
}

