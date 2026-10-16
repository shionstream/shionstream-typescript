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
 * @interface V1DashboardStatsGet200ResponseStats
 */
export interface V1DashboardStatsGet200ResponseStats {
    /**
     * 
     */
    totalAnime: number;
    /**
     * 
     */
    totalEpisodes: number;
    /**
     * 
     */
    totalUsers: number;
    /**
     * 
     */
    pendingReports: number;
    /**
     * 
     */
    activeStreams: number;
    /**
     * 
     */
    bandwidthUsageGb: number;
    /**
     * 
     */
    cpuLoadPercent: number;
    /**
     * 
     */
    storageUsedGb: number;
    /**
     * 
     */
    monthlyGrowthPercent: number;
}

/**
 * Check if a given object implements the V1DashboardStatsGet200ResponseStats interface.
 */
export function instanceOfV1DashboardStatsGet200ResponseStats(value: object): value is V1DashboardStatsGet200ResponseStats {
    if (!('totalAnime' in value) || value['totalAnime'] === undefined) return false;
    if (!('totalEpisodes' in value) || value['totalEpisodes'] === undefined) return false;
    if (!('totalUsers' in value) || value['totalUsers'] === undefined) return false;
    if (!('pendingReports' in value) || value['pendingReports'] === undefined) return false;
    if (!('activeStreams' in value) || value['activeStreams'] === undefined) return false;
    if (!('bandwidthUsageGb' in value) || value['bandwidthUsageGb'] === undefined) return false;
    if (!('cpuLoadPercent' in value) || value['cpuLoadPercent'] === undefined) return false;
    if (!('storageUsedGb' in value) || value['storageUsedGb'] === undefined) return false;
    if (!('monthlyGrowthPercent' in value) || value['monthlyGrowthPercent'] === undefined) return false;
    return true;
}

export function V1DashboardStatsGet200ResponseStatsFromJSON(json: any): V1DashboardStatsGet200ResponseStats {
    return V1DashboardStatsGet200ResponseStatsFromJSONTyped(json, false);
}

export function V1DashboardStatsGet200ResponseStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V1DashboardStatsGet200ResponseStats {
    if (json == null) {
        return json;
    }
    return {
        
        'totalAnime': json['totalAnime'],
        'totalEpisodes': json['totalEpisodes'],
        'totalUsers': json['totalUsers'],
        'pendingReports': json['pendingReports'],
        'activeStreams': json['activeStreams'],
        'bandwidthUsageGb': json['bandwidthUsageGb'],
        'cpuLoadPercent': json['cpuLoadPercent'],
        'storageUsedGb': json['storageUsedGb'],
        'monthlyGrowthPercent': json['monthlyGrowthPercent'],
    };
}

export function V1DashboardStatsGet200ResponseStatsToJSON(json: any): V1DashboardStatsGet200ResponseStats {
    return V1DashboardStatsGet200ResponseStatsToJSONTyped(json, false);
}

export function V1DashboardStatsGet200ResponseStatsToJSONTyped(value?: V1DashboardStatsGet200ResponseStats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totalAnime': value['totalAnime'],
        'totalEpisodes': value['totalEpisodes'],
        'totalUsers': value['totalUsers'],
        'pendingReports': value['pendingReports'],
        'activeStreams': value['activeStreams'],
        'bandwidthUsageGb': value['bandwidthUsageGb'],
        'cpuLoadPercent': value['cpuLoadPercent'],
        'storageUsedGb': value['storageUsedGb'],
        'monthlyGrowthPercent': value['monthlyGrowthPercent'],
    };
}

