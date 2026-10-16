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

import * as runtime from '../runtime';
import {
    type V1AnimeGet200Response,
    V1AnimeGet200ResponseFromJSON,
    V1AnimeGet200ResponseToJSON,
} from '../models/V1AnimeGet200Response';
import {
    type V1AnimeSlugGet200Response,
    V1AnimeSlugGet200ResponseFromJSON,
    V1AnimeSlugGet200ResponseToJSON,
} from '../models/V1AnimeSlugGet200Response';
import {
    type V1ProtectedSampleGet401Response,
    V1ProtectedSampleGet401ResponseFromJSON,
    V1ProtectedSampleGet401ResponseToJSON,
} from '../models/V1ProtectedSampleGet401Response';

export interface V1AnimeGetRequest {
    /**
     * 
     */
    page?: string;
    /**
     * 
     */
    limit?: string;
    /**
     * 
     */
    search?: string;
    /**
     * 
     */
    type?: string;
    /**
     * 
     */
    status?: string;
    /**
     * 
     */
    genre?: string;
    /**
     * 
     */
    season?: string;
    /**
     * 
     */
    year?: string;
    /**
     * 
     */
    sort?: V1AnimeGetSortEnum;
}

export interface V1AnimeSlugGetRequest {
    /**
     * 
     */
    slug: string;
}

/**
 * 
 */
export class AnimeApi extends runtime.BaseAPI {

    /**
     * Creates request options for v1AnimeGet without sending the request
     */
    async v1AnimeGetRequestOpts(requestParameters: V1AnimeGetRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['type'] != null) {
            queryParameters['type'] = requestParameters['type'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        if (requestParameters['genre'] != null) {
            queryParameters['genre'] = requestParameters['genre'];
        }

        if (requestParameters['season'] != null) {
            queryParameters['season'] = requestParameters['season'];
        }

        if (requestParameters['year'] != null) {
            queryParameters['year'] = requestParameters['year'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/v1/anime`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieve paginated list of anime with filters for type, status, season, year, genre, and search.
     * List Anime Catalog
     */
    async v1AnimeGetRaw(requestParameters: V1AnimeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1AnimeGet200Response>> {
        const requestOptions = await this.v1AnimeGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AnimeGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve paginated list of anime with filters for type, status, season, year, genre, and search.
     * List Anime Catalog
     */
    async v1AnimeGet(requestParameters: V1AnimeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1AnimeGet200Response> {
        const response = await this.v1AnimeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1AnimeSlugGet without sending the request
     */
    async v1AnimeSlugGetRequestOpts(requestParameters: V1AnimeSlugGetRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling v1AnimeSlugGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/v1/anime/{slug}`;
        urlPath = urlPath.replace('{slug}', encodeURIComponent(String(requestParameters['slug'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieve comprehensive anime metadata including associated genres, studios, schedule, and trending stats.
     * Get Anime Details by Slug
     */
    async v1AnimeSlugGetRaw(requestParameters: V1AnimeSlugGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1AnimeSlugGet200Response>> {
        const requestOptions = await this.v1AnimeSlugGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AnimeSlugGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve comprehensive anime metadata including associated genres, studios, schedule, and trending stats.
     * Get Anime Details by Slug
     */
    async v1AnimeSlugGet(requestParameters: V1AnimeSlugGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1AnimeSlugGet200Response> {
        const response = await this.v1AnimeSlugGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const V1AnimeGetSortEnum = {
    Latest: 'latest',
    Popular: 'popular',
    Score: 'score',
} as const;
export type V1AnimeGetSortEnum = typeof V1AnimeGetSortEnum[keyof typeof V1AnimeGetSortEnum];
