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
 * @interface V1AnimeSlugGet200ResponseDataTrendingStats
 */
export interface V1AnimeSlugGet200ResponseDataTrendingStats {
    /**
     * 
     */
    rank: number;
    /**
     * 
     */
    trendScore: number;
    /**
     * 
     */
    totalViews: number;
}

/**
 * Check if a given object implements the V1AnimeSlugGet200ResponseDataTrendingStats interface.
 */
export function instanceOfV1AnimeSlugGet200ResponseDataTrendingStats(value: object): value is V1AnimeSlugGet200ResponseDataTrendingStats {
    if (!('rank' in value) || value['rank'] === undefined) return false;
    if (!('trendScore' in value) || value['trendScore'] === undefined) return false;
    if (!('totalViews' in value) || value['totalViews'] === undefined) return false;
    return true;
}

export function V1AnimeSlugGet200ResponseDataTrendingStatsFromJSON(json: any): V1AnimeSlugGet200ResponseDataTrendingStats {
    return V1AnimeSlugGet200ResponseDataTrendingStatsFromJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataTrendingStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugGet200ResponseDataTrendingStats {
    if (json == null) {
        return json;
    }
    return {
        
        'rank': json['rank'],
        'trendScore': json['trendScore'],
        'totalViews': json['totalViews'],
    };
}

export function V1AnimeSlugGet200ResponseDataTrendingStatsToJSON(json: any): V1AnimeSlugGet200ResponseDataTrendingStats {
    return V1AnimeSlugGet200ResponseDataTrendingStatsToJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataTrendingStatsToJSONTyped(value?: V1AnimeSlugGet200ResponseDataTrendingStats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'rank': value['rank'],
        'trendScore': value['trendScore'],
        'totalViews': value['totalViews'],
    };
}

