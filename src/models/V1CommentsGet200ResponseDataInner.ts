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
 * @interface V1CommentsGet200ResponseDataInner
 */
export interface V1CommentsGet200ResponseDataInner {
    /**
     * 
     */
    id: string;
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
    userId?: string;
    /**
     * 
     */
    guestName?: string;
    /**
     * 
     */
    parentId?: string;
    /**
     * 
     */
    content: string;
    /**
     * 
     */
    isSpoiler: boolean;
    /**
     * 
     */
    createdAt: string;
    /**
     * 
     */
    updatedAt: string;
    /**
     * 
     */
    likes: number;
    /**
     * 
     */
    dislikes: number;
}

/**
 * Check if a given object implements the V1CommentsGet200ResponseDataInner interface.
 */
export function instanceOfV1CommentsGet200ResponseDataInner(value: object): value is V1CommentsGet200ResponseDataInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('animeId' in value) || value['animeId'] === undefined) return false;
    if (!('episodeId' in value) || value['episodeId'] === undefined) return false;
    if (!('content' in value) || value['content'] === undefined) return false;
    if (!('isSpoiler' in value) || value['isSpoiler'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    if (!('likes' in value) || value['likes'] === undefined) return false;
    if (!('dislikes' in value) || value['dislikes'] === undefined) return false;
    return true;
}

export function V1CommentsGet200ResponseDataInnerFromJSON(json: any): V1CommentsGet200ResponseDataInner {
    return V1CommentsGet200ResponseDataInnerFromJSONTyped(json, false);
}

export function V1CommentsGet200ResponseDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1CommentsGet200ResponseDataInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'animeId': json['animeId'],
        'episodeId': json['episodeId'],
        'userId': json['userId'] == null ? undefined : json['userId'],
        'guestName': json['guestName'] == null ? undefined : json['guestName'],
        'parentId': json['parentId'] == null ? undefined : json['parentId'],
        'content': json['content'],
        'isSpoiler': json['isSpoiler'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
        'likes': json['likes'],
        'dislikes': json['dislikes'],
    };
}

export function V1CommentsGet200ResponseDataInnerToJSON(json: any): V1CommentsGet200ResponseDataInner {
    return V1CommentsGet200ResponseDataInnerToJSONTyped(json, false);
}

export function V1CommentsGet200ResponseDataInnerToJSONTyped(value?: V1CommentsGet200ResponseDataInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'animeId': value['animeId'],
        'episodeId': value['episodeId'],
        'userId': value['userId'],
        'guestName': value['guestName'],
        'parentId': value['parentId'],
        'content': value['content'],
        'isSpoiler': value['isSpoiler'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
        'likes': value['likes'],
        'dislikes': value['dislikes'],
    };
}

