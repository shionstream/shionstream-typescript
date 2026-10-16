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
import type { V1DashboardModerationGet200ResponseReportsInnerReporter } from './V1DashboardModerationGet200ResponseReportsInnerReporter';
import {
    V1DashboardModerationGet200ResponseReportsInnerReporterFromJSON,
    V1DashboardModerationGet200ResponseReportsInnerReporterFromJSONTyped,
    V1DashboardModerationGet200ResponseReportsInnerReporterToJSON,
    V1DashboardModerationGet200ResponseReportsInnerReporterToJSONTyped,
} from './V1DashboardModerationGet200ResponseReportsInnerReporter';
import type { V1DashboardModerationGet200ResponseReportsInnerAuthor } from './V1DashboardModerationGet200ResponseReportsInnerAuthor';
import {
    V1DashboardModerationGet200ResponseReportsInnerAuthorFromJSON,
    V1DashboardModerationGet200ResponseReportsInnerAuthorFromJSONTyped,
    V1DashboardModerationGet200ResponseReportsInnerAuthorToJSON,
    V1DashboardModerationGet200ResponseReportsInnerAuthorToJSONTyped,
} from './V1DashboardModerationGet200ResponseReportsInnerAuthor';

/**
 * 
 * @export
 * @interface V1DashboardModerationGet200ResponseReportsInner
 */
export interface V1DashboardModerationGet200ResponseReportsInner {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    commentId: string;
    /**
     * 
     */
    commentText: string;
    /**
     * 
     */
    animeTitle: string;
    /**
     * 
     */
    episodeNumber: number;
    /**
     * 
     */
    author: V1DashboardModerationGet200ResponseReportsInnerAuthor;
    /**
     * 
     */
    reporter: V1DashboardModerationGet200ResponseReportsInnerReporter;
    /**
     * 
     */
    reason: string;
    /**
     * 
     */
    status: string;
    /**
     * 
     */
    reportedAt: string;
    /**
     * 
     */
    flaggedBySystem: boolean;
}

/**
 * Check if a given object implements the V1DashboardModerationGet200ResponseReportsInner interface.
 */
export function instanceOfV1DashboardModerationGet200ResponseReportsInner(value: object): value is V1DashboardModerationGet200ResponseReportsInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('commentId' in value) || value['commentId'] === undefined) return false;
    if (!('commentText' in value) || value['commentText'] === undefined) return false;
    if (!('animeTitle' in value) || value['animeTitle'] === undefined) return false;
    if (!('episodeNumber' in value) || value['episodeNumber'] === undefined) return false;
    if (!('author' in value) || value['author'] === undefined) return false;
    if (!('reporter' in value) || value['reporter'] === undefined) return false;
    if (!('reason' in value) || value['reason'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('reportedAt' in value) || value['reportedAt'] === undefined) return false;
    if (!('flaggedBySystem' in value) || value['flaggedBySystem'] === undefined) return false;
    return true;
}

export function V1DashboardModerationGet200ResponseReportsInnerFromJSON(json: any): V1DashboardModerationGet200ResponseReportsInner {
    return V1DashboardModerationGet200ResponseReportsInnerFromJSONTyped(json, false);
}

export function V1DashboardModerationGet200ResponseReportsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardModerationGet200ResponseReportsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'commentId': json['commentId'],
        'commentText': json['commentText'],
        'animeTitle': json['animeTitle'],
        'episodeNumber': json['episodeNumber'],
        'author': V1DashboardModerationGet200ResponseReportsInnerAuthorFromJSON(json['author']),
        'reporter': V1DashboardModerationGet200ResponseReportsInnerReporterFromJSON(json['reporter']),
        'reason': json['reason'],
        'status': json['status'],
        'reportedAt': json['reportedAt'],
        'flaggedBySystem': json['flaggedBySystem'],
    };
}

export function V1DashboardModerationGet200ResponseReportsInnerToJSON(json: any): V1DashboardModerationGet200ResponseReportsInner {
    return V1DashboardModerationGet200ResponseReportsInnerToJSONTyped(json, false);
}

export function V1DashboardModerationGet200ResponseReportsInnerToJSONTyped(value?: V1DashboardModerationGet200ResponseReportsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'commentId': value['commentId'],
        'commentText': value['commentText'],
        'animeTitle': value['animeTitle'],
        'episodeNumber': value['episodeNumber'],
        'author': V1DashboardModerationGet200ResponseReportsInnerAuthorToJSON(value['author']),
        'reporter': V1DashboardModerationGet200ResponseReportsInnerReporterToJSON(value['reporter']),
        'reason': value['reason'],
        'status': value['status'],
        'reportedAt': value['reportedAt'],
        'flaggedBySystem': value['flaggedBySystem'],
    };
}

