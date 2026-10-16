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
import type { V1AnimeSlugGet200ResponseDataGenresInner } from './V1AnimeSlugGet200ResponseDataGenresInner';
import {
    V1AnimeSlugGet200ResponseDataGenresInnerFromJSON,
    V1AnimeSlugGet200ResponseDataGenresInnerFromJSONTyped,
    V1AnimeSlugGet200ResponseDataGenresInnerToJSON,
    V1AnimeSlugGet200ResponseDataGenresInnerToJSONTyped,
} from './V1AnimeSlugGet200ResponseDataGenresInner';
import type { V1AnimeSlugGet200ResponseDataTrendingStats } from './V1AnimeSlugGet200ResponseDataTrendingStats';
import {
    V1AnimeSlugGet200ResponseDataTrendingStatsFromJSON,
    V1AnimeSlugGet200ResponseDataTrendingStatsFromJSONTyped,
    V1AnimeSlugGet200ResponseDataTrendingStatsToJSON,
    V1AnimeSlugGet200ResponseDataTrendingStatsToJSONTyped,
} from './V1AnimeSlugGet200ResponseDataTrendingStats';
import type { V1AnimeSlugGet200ResponseDataSchedule } from './V1AnimeSlugGet200ResponseDataSchedule';
import {
    V1AnimeSlugGet200ResponseDataScheduleFromJSON,
    V1AnimeSlugGet200ResponseDataScheduleFromJSONTyped,
    V1AnimeSlugGet200ResponseDataScheduleToJSON,
    V1AnimeSlugGet200ResponseDataScheduleToJSONTyped,
} from './V1AnimeSlugGet200ResponseDataSchedule';

/**
 * 
 * @export
 * @interface V1AnimeSlugGet200ResponseData
 */
export interface V1AnimeSlugGet200ResponseData {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    slug: string;
    /**
     * 
     */
    titleRomaji: string;
    /**
     * 
     */
    titleEnglish?: string;
    /**
     * 
     */
    titleJapanese?: string;
    /**
     * 
     */
    synopsis?: string;
    /**
     * 
     */
    coverImage?: string;
    /**
     * 
     */
    bannerImage?: string;
    /**
     * 
     */
    type: string;
    /**
     * 
     */
    status: string;
    /**
     * 
     */
    seasonName?: string;
    /**
     * 
     */
    seasonYear?: number;
    /**
     * 
     */
    episodesCount: number;
    /**
     * 
     */
    durationPerEp?: string;
    /**
     * 
     */
    rating?: number;
    /**
     * 
     */
    isFeatured: boolean;
    /**
     * 
     */
    isTrending: boolean;
    /**
     * 
     */
    subOrDub: string;
    /**
     * 
     */
    genres: Array<V1AnimeSlugGet200ResponseDataGenresInner>;
    /**
     * 
     */
    studios: Array<V1AnimeSlugGet200ResponseDataGenresInner>;
    /**
     * 
     */
    schedule?: V1AnimeSlugGet200ResponseDataSchedule;
    /**
     * 
     */
    trendingStats?: V1AnimeSlugGet200ResponseDataTrendingStats;
}

/**
 * Check if a given object implements the V1AnimeSlugGet200ResponseData interface.
 */
export function instanceOfV1AnimeSlugGet200ResponseData(value: object): value is V1AnimeSlugGet200ResponseData {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('slug' in value) || value['slug'] === undefined) return false;
    if (!('titleRomaji' in value) || value['titleRomaji'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('episodesCount' in value) || value['episodesCount'] === undefined) return false;
    if (!('isFeatured' in value) || value['isFeatured'] === undefined) return false;
    if (!('isTrending' in value) || value['isTrending'] === undefined) return false;
    if (!('subOrDub' in value) || value['subOrDub'] === undefined) return false;
    if (!('genres' in value) || value['genres'] === undefined) return false;
    if (!('studios' in value) || value['studios'] === undefined) return false;
    return true;
}

export function V1AnimeSlugGet200ResponseDataFromJSON(json: any): V1AnimeSlugGet200ResponseData {
    return V1AnimeSlugGet200ResponseDataFromJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1AnimeSlugGet200ResponseData {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'slug': json['slug'],
        'titleRomaji': json['titleRomaji'],
        'titleEnglish': json['titleEnglish'] == null ? undefined : json['titleEnglish'],
        'titleJapanese': json['titleJapanese'] == null ? undefined : json['titleJapanese'],
        'synopsis': json['synopsis'] == null ? undefined : json['synopsis'],
        'coverImage': json['coverImage'] == null ? undefined : json['coverImage'],
        'bannerImage': json['bannerImage'] == null ? undefined : json['bannerImage'],
        'type': json['type'],
        'status': json['status'],
        'seasonName': json['seasonName'] == null ? undefined : json['seasonName'],
        'seasonYear': json['seasonYear'] == null ? undefined : json['seasonYear'],
        'episodesCount': json['episodesCount'],
        'durationPerEp': json['durationPerEp'] == null ? undefined : json['durationPerEp'],
        'rating': json['rating'] == null ? undefined : json['rating'],
        'isFeatured': json['isFeatured'],
        'isTrending': json['isTrending'],
        'subOrDub': json['subOrDub'],
        'genres': ((json['genres'] as Array<any>).map(V1AnimeSlugGet200ResponseDataGenresInnerFromJSON)),
        'studios': ((json['studios'] as Array<any>).map(V1AnimeSlugGet200ResponseDataGenresInnerFromJSON)),
        'schedule': json['schedule'] == null ? undefined : V1AnimeSlugGet200ResponseDataScheduleFromJSON(json['schedule']),
        'trendingStats': json['trendingStats'] == null ? undefined : V1AnimeSlugGet200ResponseDataTrendingStatsFromJSON(json['trendingStats']),
    };
}

export function V1AnimeSlugGet200ResponseDataToJSON(json: any): V1AnimeSlugGet200ResponseData {
    return V1AnimeSlugGet200ResponseDataToJSONTyped(json, false);
}

export function V1AnimeSlugGet200ResponseDataToJSONTyped(value?: V1AnimeSlugGet200ResponseData | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'slug': value['slug'],
        'titleRomaji': value['titleRomaji'],
        'titleEnglish': value['titleEnglish'],
        'titleJapanese': value['titleJapanese'],
        'synopsis': value['synopsis'],
        'coverImage': value['coverImage'],
        'bannerImage': value['bannerImage'],
        'type': value['type'],
        'status': value['status'],
        'seasonName': value['seasonName'],
        'seasonYear': value['seasonYear'],
        'episodesCount': value['episodesCount'],
        'durationPerEp': value['durationPerEp'],
        'rating': value['rating'],
        'isFeatured': value['isFeatured'],
        'isTrending': value['isTrending'],
        'subOrDub': value['subOrDub'],
        'genres': ((value['genres'] as Array<any>).map(V1AnimeSlugGet200ResponseDataGenresInnerToJSON)),
        'studios': ((value['studios'] as Array<any>).map(V1AnimeSlugGet200ResponseDataGenresInnerToJSON)),
        'schedule': V1AnimeSlugGet200ResponseDataScheduleToJSON(value['schedule']),
        'trendingStats': V1AnimeSlugGet200ResponseDataTrendingStatsToJSON(value['trendingStats']),
    };
}

