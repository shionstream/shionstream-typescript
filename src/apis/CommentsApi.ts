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
    type V1CommentsGet200Response,
    V1CommentsGet200ResponseFromJSON,
    V1CommentsGet200ResponseToJSON,
} from '../models/V1CommentsGet200Response';
import {
    type V1CommentsIdLikePost200Response,
    V1CommentsIdLikePost200ResponseFromJSON,
    V1CommentsIdLikePost200ResponseToJSON,
} from '../models/V1CommentsIdLikePost200Response';
import {
    type V1CommentsIdLikePostRequest,
    V1CommentsIdLikePostRequestFromJSON,
    V1CommentsIdLikePostRequestToJSON,
} from '../models/V1CommentsIdLikePostRequest';
import {
    type V1CommentsIdReportPostRequest,
    V1CommentsIdReportPostRequestFromJSON,
    V1CommentsIdReportPostRequestToJSON,
} from '../models/V1CommentsIdReportPostRequest';
import {
    type V1CommentsPost201Response,
    V1CommentsPost201ResponseFromJSON,
    V1CommentsPost201ResponseToJSON,
} from '../models/V1CommentsPost201Response';
import {
    type V1CommentsPostRequest,
    V1CommentsPostRequestFromJSON,
    V1CommentsPostRequestToJSON,
} from '../models/V1CommentsPostRequest';
import {
    type V1ProtectedSampleGet401Response,
    V1ProtectedSampleGet401ResponseFromJSON,
    V1ProtectedSampleGet401ResponseToJSON,
} from '../models/V1ProtectedSampleGet401Response';

export interface V1CommentsGetRequest {
    /**
     * 
     */
    episodeId: string;
}

export interface V1CommentsIdLikePostOperationRequest {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    v1CommentsIdLikePostRequest?: V1CommentsIdLikePostRequest;
}

export interface V1CommentsIdReportPostOperationRequest {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    v1CommentsIdReportPostRequest?: V1CommentsIdReportPostRequest;
}

export interface V1CommentsPostOperationRequest {
    /**
     * 
     */
    v1CommentsPostRequest?: V1CommentsPostRequest;
}

/**
 * 
 */
export class CommentsApi extends runtime.BaseAPI {

    /**
     * Creates request options for v1CommentsGet without sending the request
     */
    async v1CommentsGetRequestOpts(requestParameters: V1CommentsGetRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['episodeId'] == null) {
            throw new runtime.RequiredError(
                'episodeId',
                'Required parameter "episodeId" was null or undefined when calling v1CommentsGet().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['episodeId'] != null) {
            queryParameters['episodeId'] = requestParameters['episodeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/v1/comments`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieves threaded comments for an episode, ordered by newest first, with like/dislike counts.
     * Get Episode Comments
     */
    async v1CommentsGetRaw(requestParameters: V1CommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1CommentsGet200Response>> {
        const requestOptions = await this.v1CommentsGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CommentsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves threaded comments for an episode, ordered by newest first, with like/dislike counts.
     * Get Episode Comments
     */
    async v1CommentsGet(requestParameters: V1CommentsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1CommentsGet200Response> {
        const response = await this.v1CommentsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1CommentsIdLikePost without sending the request
     */
    async v1CommentsIdLikePostRequestOpts(requestParameters: V1CommentsIdLikePostOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1CommentsIdLikePost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/comments/{id}/like`;
        urlPath = urlPath.replace('{id}', encodeURIComponent(String(requestParameters['id'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1CommentsIdLikePostRequestToJSON(requestParameters['v1CommentsIdLikePostRequest']),
        };
    }

    /**
     * Adds or toggles a like/dislike reaction on a comment. Upserts on [commentId, userId].
     * Like or Dislike Comment
     */
    async v1CommentsIdLikePostRaw(requestParameters: V1CommentsIdLikePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1CommentsIdLikePost200Response>> {
        const requestOptions = await this.v1CommentsIdLikePostRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CommentsIdLikePost200ResponseFromJSON(jsonValue));
    }

    /**
     * Adds or toggles a like/dislike reaction on a comment. Upserts on [commentId, userId].
     * Like or Dislike Comment
     */
    async v1CommentsIdLikePost(requestParameters: V1CommentsIdLikePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1CommentsIdLikePost200Response> {
        const response = await this.v1CommentsIdLikePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1CommentsIdReportPost without sending the request
     */
    async v1CommentsIdReportPostRequestOpts(requestParameters: V1CommentsIdReportPostOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1CommentsIdReportPost().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        let urlPath = `/v1/comments/{id}/report`;
        urlPath = urlPath.replace('{id}', encodeURIComponent(String(requestParameters['id'])));

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1CommentsIdReportPostRequestToJSON(requestParameters['v1CommentsIdReportPostRequest']),
        };
    }

    /**
     * Submits a comment to the moderation queue with a reason.
     * Report Comment
     */
    async v1CommentsIdReportPostRaw(requestParameters: V1CommentsIdReportPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1CommentsIdLikePost200Response>> {
        const requestOptions = await this.v1CommentsIdReportPostRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CommentsIdLikePost200ResponseFromJSON(jsonValue));
    }

    /**
     * Submits a comment to the moderation queue with a reason.
     * Report Comment
     */
    async v1CommentsIdReportPost(requestParameters: V1CommentsIdReportPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1CommentsIdLikePost200Response> {
        const response = await this.v1CommentsIdReportPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1CommentsPost without sending the request
     */
    async v1CommentsPostRequestOpts(requestParameters: V1CommentsPostOperationRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        let urlPath = `/v1/comments`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1CommentsPostRequestToJSON(requestParameters['v1CommentsPostRequest']),
        };
    }

    /**
     * Creates a new comment or reply on an episode. Supports both authenticated users and guests (guest requires name and email).
     * Create Comment
     */
    async v1CommentsPostRaw(requestParameters: V1CommentsPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1CommentsPost201Response>> {
        const requestOptions = await this.v1CommentsPostRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1CommentsPost201ResponseFromJSON(jsonValue));
    }

    /**
     * Creates a new comment or reply on an episode. Supports both authenticated users and guests (guest requires name and email).
     * Create Comment
     */
    async v1CommentsPost(requestParameters: V1CommentsPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1CommentsPost201Response> {
        const response = await this.v1CommentsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
