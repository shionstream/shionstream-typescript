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
    type V1AnimeSlugEpisodesGet200Response,
    V1AnimeSlugEpisodesGet200ResponseFromJSON,
    V1AnimeSlugEpisodesGet200ResponseToJSON,
} from '../models/V1AnimeSlugEpisodesGet200Response';
import {
    type V1EpisodesIdStreamGet200Response,
    V1EpisodesIdStreamGet200ResponseFromJSON,
    V1EpisodesIdStreamGet200ResponseToJSON,
} from '../models/V1EpisodesIdStreamGet200Response';
import {
    type V1ProtectedSampleGet401Response,
    V1ProtectedSampleGet401ResponseFromJSON,
    V1ProtectedSampleGet401ResponseToJSON,
} from '../models/V1ProtectedSampleGet401Response';

export interface V1AnimeSlugEpisodesGetRequest {
    /**
     * 
     */
    slug: string;
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
    sort?: V1AnimeSlugEpisodesGetSortEnum;
}

export interface V1EpisodesIdStreamGetRequest {
    /**
     * 
     */
    id: string;
}

/**
 * 
 */
export class EpisodesApi extends runtime.BaseAPI {

    /**
     * Creates request options for v1AnimeSlugEpisodesGet without sending the request
     */
    async v1AnimeSlugEpisodesGetRequestOpts(requestParameters: V1AnimeSlugEpisodesGetRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError(
                'slug',
                'Required parameter "slug" was null or undefined when calling v1AnimeSlugEpisodesGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['sort'] != null) {
            queryParameters['sort'] = requestParameters['sort'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/v1/anime/{slug}/episodes`;
        urlPath = urlPath.replace('{slug}', encodeURIComponent(String(requestParameters['slug'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieve an ordered list of published episodes for a specific anime.
     * List Episodes by Anime Slug
     */
    async v1AnimeSlugEpisodesGetRaw(requestParameters: V1AnimeSlugEpisodesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1AnimeSlugEpisodesGet200Response>> {
        const requestOptions = await this.v1AnimeSlugEpisodesGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1AnimeSlugEpisodesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve an ordered list of published episodes for a specific anime.
     * List Episodes by Anime Slug
     */
    async v1AnimeSlugEpisodesGet(requestParameters: V1AnimeSlugEpisodesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1AnimeSlugEpisodesGet200Response> {
        const response = await this.v1AnimeSlugEpisodesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1EpisodesIdStreamGet without sending the request
     */
    async v1EpisodesIdStreamGetRequestOpts(requestParameters: V1EpisodesIdStreamGetRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1EpisodesIdStreamGet().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/v1/episodes/{id}/stream`;
        urlPath = urlPath.replace('{id}', encodeURIComponent(String(requestParameters['id'])));

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieve video playback manifests, multi-resolution URLs, subtitles, and audio tracks for an episode.
     * Get Episode Stream Sources
     */
    async v1EpisodesIdStreamGetRaw(requestParameters: V1EpisodesIdStreamGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1EpisodesIdStreamGet200Response>> {
        const requestOptions = await this.v1EpisodesIdStreamGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1EpisodesIdStreamGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieve video playback manifests, multi-resolution URLs, subtitles, and audio tracks for an episode.
     * Get Episode Stream Sources
     */
    async v1EpisodesIdStreamGet(requestParameters: V1EpisodesIdStreamGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1EpisodesIdStreamGet200Response> {
        const response = await this.v1EpisodesIdStreamGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const V1AnimeSlugEpisodesGetSortEnum = {
    Asc: 'asc',
    Desc: 'desc',
} as const;
export type V1AnimeSlugEpisodesGetSortEnum = typeof V1AnimeSlugEpisodesGetSortEnum[keyof typeof V1AnimeSlugEpisodesGetSortEnum];
