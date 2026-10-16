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
    type V1ProtectedSampleGet401Response,
    V1ProtectedSampleGet401ResponseFromJSON,
    V1ProtectedSampleGet401ResponseToJSON,
} from '../models/V1ProtectedSampleGet401Response';
import {
    type V1UserHistoryGet200Response,
    V1UserHistoryGet200ResponseFromJSON,
    V1UserHistoryGet200ResponseToJSON,
} from '../models/V1UserHistoryGet200Response';
import {
    type V1UserHistoryPostRequest,
    V1UserHistoryPostRequestFromJSON,
    V1UserHistoryPostRequestToJSON,
} from '../models/V1UserHistoryPostRequest';
import {
    type V1UserProfileGet200Response,
    V1UserProfileGet200ResponseFromJSON,
    V1UserProfileGet200ResponseToJSON,
} from '../models/V1UserProfileGet200Response';
import {
    type V1UserSettingsGet200Response,
    V1UserSettingsGet200ResponseFromJSON,
    V1UserSettingsGet200ResponseToJSON,
} from '../models/V1UserSettingsGet200Response';
import {
    type V1UserSettingsPatch200Response,
    V1UserSettingsPatch200ResponseFromJSON,
    V1UserSettingsPatch200ResponseToJSON,
} from '../models/V1UserSettingsPatch200Response';
import {
    type V1UserSettingsPatchRequest,
    V1UserSettingsPatchRequestFromJSON,
    V1UserSettingsPatchRequestToJSON,
} from '../models/V1UserSettingsPatchRequest';
import {
    type V1UserWatchlistAnimeIdPatchRequest,
    V1UserWatchlistAnimeIdPatchRequestFromJSON,
    V1UserWatchlistAnimeIdPatchRequestToJSON,
} from '../models/V1UserWatchlistAnimeIdPatchRequest';
import {
    type V1UserWatchlistGet200Response,
    V1UserWatchlistGet200ResponseFromJSON,
    V1UserWatchlistGet200ResponseToJSON,
} from '../models/V1UserWatchlistGet200Response';
import {
    type V1UserWatchlistPostRequest,
    V1UserWatchlistPostRequestFromJSON,
    V1UserWatchlistPostRequestToJSON,
} from '../models/V1UserWatchlistPostRequest';

export interface V1UserHistoryGetRequest {
    /**
     * 
     */
    limit?: string;
}

export interface V1UserHistoryIdDeleteRequest {
    /**
     * 
     */
    id: string;
}

export interface V1UserHistoryPostOperationRequest {
    /**
     * 
     */
    v1UserHistoryPostRequest?: V1UserHistoryPostRequest;
}

export interface V1UserSettingsPatchOperationRequest {
    /**
     * 
     */
    v1UserSettingsPatchRequest?: V1UserSettingsPatchRequest;
}

export interface V1UserWatchlistAnimeIdDeleteRequest {
    /**
     * 
     */
    animeId: string;
}

export interface V1UserWatchlistAnimeIdPatchOperationRequest {
    /**
     * 
     */
    animeId: string;
    /**
     * 
     */
    v1UserWatchlistAnimeIdPatchRequest?: V1UserWatchlistAnimeIdPatchRequest;
}

export interface V1UserWatchlistGetRequest {
    /**
     * 
     */
    status?: string;
}

export interface V1UserWatchlistPostOperationRequest {
    /**
     * 
     */
    v1UserWatchlistPostRequest?: V1UserWatchlistPostRequest;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * Creates request options for v1UserHistoryDelete without sending the request
     */
    async v1UserHistoryDeleteRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/user/history`;

        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Clears the authenticated user\'s entire watch history.
     * Clear All History
     */
    async v1UserHistoryDeleteRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1UserHistoryDeleteRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Clears the authenticated user\'s entire watch history.
     * Clear All History
     */
    async v1UserHistoryDelete(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1UserHistoryDeleteRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserHistoryGet without sending the request
     */
    async v1UserHistoryGetRequestOpts(requestParameters: V1UserHistoryGetRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/user/history`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieves the authenticated user\'s watch history sorted by most recent.
     * Get Watch History
     */
    async v1UserHistoryGetRaw(requestParameters: V1UserHistoryGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserHistoryGet200Response>> {
        const requestOptions = await this.v1UserHistoryGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserHistoryGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the authenticated user\'s watch history sorted by most recent.
     * Get Watch History
     */
    async v1UserHistoryGet(requestParameters: V1UserHistoryGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserHistoryGet200Response> {
        const response = await this.v1UserHistoryGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserHistoryIdDelete without sending the request
     */
    async v1UserHistoryIdDeleteRequestOpts(requestParameters: V1UserHistoryIdDeleteRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1UserHistoryIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/user/history/{id}`;
        urlPath = urlPath.replace('{id}', encodeURIComponent(String(requestParameters['id'])));

        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Deletes a single watch history record.
     * Delete History Item
     */
    async v1UserHistoryIdDeleteRaw(requestParameters: V1UserHistoryIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1UserHistoryIdDeleteRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Deletes a single watch history record.
     * Delete History Item
     */
    async v1UserHistoryIdDelete(requestParameters: V1UserHistoryIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1UserHistoryIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserHistoryPost without sending the request
     */
    async v1UserHistoryPostRequestOpts(requestParameters: V1UserHistoryPostOperationRequest): Promise<runtime.RequestOpts> {
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

        let urlPath = `/v1/user/history`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserHistoryPostRequestToJSON(requestParameters['v1UserHistoryPostRequest']),
        };
    }

    /**
     * Records or updates playback progress for an episode (heartbeat). Upserts on [userId, episodeId].
     * Record Playback Progress
     */
    async v1UserHistoryPostRaw(requestParameters: V1UserHistoryPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1UserHistoryPostRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Records or updates playback progress for an episode (heartbeat). Upserts on [userId, episodeId].
     * Record Playback Progress
     */
    async v1UserHistoryPost(requestParameters: V1UserHistoryPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1UserHistoryPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserProfileGet without sending the request
     */
    async v1UserProfileGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/user/profile`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieves the authenticated user\'s profile with activity summary (watchlist count and recent history count).
     * Get User Profile
     */
    async v1UserProfileGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserProfileGet200Response>> {
        const requestOptions = await this.v1UserProfileGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserProfileGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the authenticated user\'s profile with activity summary (watchlist count and recent history count).
     * Get User Profile
     */
    async v1UserProfileGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserProfileGet200Response> {
        const response = await this.v1UserProfileGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserSettingsGet without sending the request
     */
    async v1UserSettingsGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/user/settings`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieves player preferences and notification settings for the authenticated user.
     * Get User Settings
     */
    async v1UserSettingsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsGet200Response>> {
        const requestOptions = await this.v1UserSettingsGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves player preferences and notification settings for the authenticated user.
     * Get User Settings
     */
    async v1UserSettingsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsGet200Response> {
        const response = await this.v1UserSettingsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserSettingsPatch without sending the request
     */
    async v1UserSettingsPatchRequestOpts(requestParameters: V1UserSettingsPatchOperationRequest): Promise<runtime.RequestOpts> {
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

        let urlPath = `/v1/user/settings`;

        return {
            path: urlPath,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserSettingsPatchRequestToJSON(requestParameters['v1UserSettingsPatchRequest']),
        };
    }

    /**
     * Updates player preferences and notification settings.
     * Update User Settings
     */
    async v1UserSettingsPatchRaw(requestParameters: V1UserSettingsPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1UserSettingsPatchRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Updates player preferences and notification settings.
     * Update User Settings
     */
    async v1UserSettingsPatch(requestParameters: V1UserSettingsPatchOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1UserSettingsPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserWatchlistAnimeIdDelete without sending the request
     */
    async v1UserWatchlistAnimeIdDeleteRequestOpts(requestParameters: V1UserWatchlistAnimeIdDeleteRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['animeId'] == null) {
            throw new runtime.RequiredError(
                'animeId',
                'Required parameter "animeId" was null or undefined when calling v1UserWatchlistAnimeIdDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/user/watchlist/{animeId}`;
        urlPath = urlPath.replace('{animeId}', encodeURIComponent(String(requestParameters['animeId'])));

        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Removes an anime from the user\'s watchlist.
     * Remove from Watchlist
     */
    async v1UserWatchlistAnimeIdDeleteRaw(requestParameters: V1UserWatchlistAnimeIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1UserWatchlistAnimeIdDeleteRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Removes an anime from the user\'s watchlist.
     * Remove from Watchlist
     */
    async v1UserWatchlistAnimeIdDelete(requestParameters: V1UserWatchlistAnimeIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1UserWatchlistAnimeIdDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserWatchlistAnimeIdPatch without sending the request
     */
    async v1UserWatchlistAnimeIdPatchRequestOpts(requestParameters: V1UserWatchlistAnimeIdPatchOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['animeId'] == null) {
            throw new runtime.RequiredError(
                'animeId',
                'Required parameter "animeId" was null or undefined when calling v1UserWatchlistAnimeIdPatch().'
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

        let urlPath = `/v1/user/watchlist/{animeId}`;
        urlPath = urlPath.replace('{animeId}', encodeURIComponent(String(requestParameters['animeId'])));

        return {
            path: urlPath,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserWatchlistAnimeIdPatchRequestToJSON(requestParameters['v1UserWatchlistAnimeIdPatchRequest']),
        };
    }

    /**
     * Updates status or favorite flag for a specific anime in the user\'s watchlist.
     * Update Watchlist Entry
     */
    async v1UserWatchlistAnimeIdPatchRaw(requestParameters: V1UserWatchlistAnimeIdPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1UserWatchlistAnimeIdPatchRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Updates status or favorite flag for a specific anime in the user\'s watchlist.
     * Update Watchlist Entry
     */
    async v1UserWatchlistAnimeIdPatch(requestParameters: V1UserWatchlistAnimeIdPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1UserWatchlistAnimeIdPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserWatchlistGet without sending the request
     */
    async v1UserWatchlistGetRequestOpts(requestParameters: V1UserWatchlistGetRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/user/watchlist`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Retrieves the authenticated user\'s anime watchlist with optional status filter.
     * Get User Watchlist
     */
    async v1UserWatchlistGetRaw(requestParameters: V1UserWatchlistGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserWatchlistGet200Response>> {
        const requestOptions = await this.v1UserWatchlistGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserWatchlistGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Retrieves the authenticated user\'s anime watchlist with optional status filter.
     * Get User Watchlist
     */
    async v1UserWatchlistGet(requestParameters: V1UserWatchlistGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserWatchlistGet200Response> {
        const response = await this.v1UserWatchlistGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UserWatchlistPost without sending the request
     */
    async v1UserWatchlistPostRequestOpts(requestParameters: V1UserWatchlistPostOperationRequest): Promise<runtime.RequestOpts> {
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

        let urlPath = `/v1/user/watchlist`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: V1UserWatchlistPostRequestToJSON(requestParameters['v1UserWatchlistPostRequest']),
        };
    }

    /**
     * Adds an anime to the user\'s watchlist. Upserts if the anime already exists in the watchlist.
     * Add to Watchlist
     */
    async v1UserWatchlistPostRaw(requestParameters: V1UserWatchlistPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1UserWatchlistPostRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Adds an anime to the user\'s watchlist. Upserts if the anime already exists in the watchlist.
     * Add to Watchlist
     */
    async v1UserWatchlistPost(requestParameters: V1UserWatchlistPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1UserWatchlistPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
