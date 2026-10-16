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
    type V1DashboardAnimeGet200Response,
    V1DashboardAnimeGet200ResponseFromJSON,
    V1DashboardAnimeGet200ResponseToJSON,
} from '../models/V1DashboardAnimeGet200Response';
import {
    type V1DashboardCategoriesGet200Response,
    V1DashboardCategoriesGet200ResponseFromJSON,
    V1DashboardCategoriesGet200ResponseToJSON,
} from '../models/V1DashboardCategoriesGet200Response';
import {
    type V1DashboardEpisodesGet200Response,
    V1DashboardEpisodesGet200ResponseFromJSON,
    V1DashboardEpisodesGet200ResponseToJSON,
} from '../models/V1DashboardEpisodesGet200Response';
import {
    type V1DashboardModerationGet200Response,
    V1DashboardModerationGet200ResponseFromJSON,
    V1DashboardModerationGet200ResponseToJSON,
} from '../models/V1DashboardModerationGet200Response';
import {
    type V1DashboardModerationIdPatchRequest,
    V1DashboardModerationIdPatchRequestFromJSON,
    V1DashboardModerationIdPatchRequestToJSON,
} from '../models/V1DashboardModerationIdPatchRequest';
import {
    type V1DashboardOverviewGet200Response,
    V1DashboardOverviewGet200ResponseFromJSON,
    V1DashboardOverviewGet200ResponseToJSON,
} from '../models/V1DashboardOverviewGet200Response';
import {
    type V1DashboardRolesGet200Response,
    V1DashboardRolesGet200ResponseFromJSON,
    V1DashboardRolesGet200ResponseToJSON,
} from '../models/V1DashboardRolesGet200Response';
import {
    type V1DashboardSeasonsGet200Response,
    V1DashboardSeasonsGet200ResponseFromJSON,
    V1DashboardSeasonsGet200ResponseToJSON,
} from '../models/V1DashboardSeasonsGet200Response';
import {
    type V1DashboardStatsGet200Response,
    V1DashboardStatsGet200ResponseFromJSON,
    V1DashboardStatsGet200ResponseToJSON,
} from '../models/V1DashboardStatsGet200Response';
import {
    type V1DashboardUsersGet200Response,
    V1DashboardUsersGet200ResponseFromJSON,
    V1DashboardUsersGet200ResponseToJSON,
} from '../models/V1DashboardUsersGet200Response';
import {
    type V1ProtectedSampleGet401Response,
    V1ProtectedSampleGet401ResponseFromJSON,
    V1ProtectedSampleGet401ResponseToJSON,
} from '../models/V1ProtectedSampleGet401Response';
import {
    type V1UserSettingsPatch200Response,
    V1UserSettingsPatch200ResponseFromJSON,
    V1UserSettingsPatch200ResponseToJSON,
} from '../models/V1UserSettingsPatch200Response';

export interface V1DashboardAnimeGetRequest {
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
    status?: string;
    /**
     * 
     */
    search?: string;
}

export interface V1DashboardEpisodesGetRequest {
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
    animeId?: string;
}

export interface V1DashboardModerationGetRequest {
    /**
     * 
     */
    status?: V1DashboardModerationGetStatusEnum;
}

export interface V1DashboardModerationIdPatchOperationRequest {
    /**
     * 
     */
    id: string;
    /**
     * 
     */
    v1DashboardModerationIdPatchRequest?: V1DashboardModerationIdPatchRequest;
}

export interface V1DashboardUsersGetRequest {
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
    role?: string;
    /**
     * 
     */
    search?: string;
}

/**
 * 
 */
export class DashboardApi extends runtime.BaseAPI {

    /**
     * Creates request options for v1DashboardAnimeGet without sending the request
     */
    async v1DashboardAnimeGetRequestOpts(requestParameters: V1DashboardAnimeGetRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/anime`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns paginated anime catalog with filters for administration.
     * Get Administrative Anime List
     */
    async v1DashboardAnimeGetRaw(requestParameters: V1DashboardAnimeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardAnimeGet200Response>> {
        const requestOptions = await this.v1DashboardAnimeGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardAnimeGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns paginated anime catalog with filters for administration.
     * Get Administrative Anime List
     */
    async v1DashboardAnimeGet(requestParameters: V1DashboardAnimeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardAnimeGet200Response> {
        const response = await this.v1DashboardAnimeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardCategoriesGet without sending the request
     */
    async v1DashboardCategoriesGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/categories`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns format categories and genres with associated anime counts.
     * Get Category & Genre Distributions
     */
    async v1DashboardCategoriesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardCategoriesGet200Response>> {
        const requestOptions = await this.v1DashboardCategoriesGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardCategoriesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns format categories and genres with associated anime counts.
     * Get Category & Genre Distributions
     */
    async v1DashboardCategoriesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardCategoriesGet200Response> {
        const response = await this.v1DashboardCategoriesGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardEpisodesGet without sending the request
     */
    async v1DashboardEpisodesGetRequestOpts(requestParameters: V1DashboardEpisodesGetRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['animeId'] != null) {
            queryParameters['animeId'] = requestParameters['animeId'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/episodes`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns paginated episodes with upload status for administration.
     * Get Administrative Episodes List
     */
    async v1DashboardEpisodesGetRaw(requestParameters: V1DashboardEpisodesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardEpisodesGet200Response>> {
        const requestOptions = await this.v1DashboardEpisodesGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardEpisodesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns paginated episodes with upload status for administration.
     * Get Administrative Episodes List
     */
    async v1DashboardEpisodesGet(requestParameters: V1DashboardEpisodesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardEpisodesGet200Response> {
        const response = await this.v1DashboardEpisodesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardModerationGet without sending the request
     */
    async v1DashboardModerationGetRequestOpts(requestParameters: V1DashboardModerationGetRequest): Promise<runtime.RequestOpts> {
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

        let urlPath = `/v1/dashboard/moderation`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns reported comments queue with status filter.
     * Get Comment Moderation Reports
     */
    async v1DashboardModerationGetRaw(requestParameters: V1DashboardModerationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardModerationGet200Response>> {
        const requestOptions = await this.v1DashboardModerationGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardModerationGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns reported comments queue with status filter.
     * Get Comment Moderation Reports
     */
    async v1DashboardModerationGet(requestParameters: V1DashboardModerationGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardModerationGet200Response> {
        const response = await this.v1DashboardModerationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardModerationIdPatch without sending the request
     */
    async v1DashboardModerationIdPatchRequestOpts(requestParameters: V1DashboardModerationIdPatchOperationRequest): Promise<runtime.RequestOpts> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling v1DashboardModerationIdPatch().'
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

        let urlPath = `/v1/dashboard/moderation/{id}`;
        urlPath = urlPath.replace('{id}', encodeURIComponent(String(requestParameters['id'])));

        return {
            path: urlPath,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: V1DashboardModerationIdPatchRequestToJSON(requestParameters['v1DashboardModerationIdPatchRequest']),
        };
    }

    /**
     * Updates comment report status and optionally deletes the reported comment.
     * Resolve or Dismiss Moderation Report
     */
    async v1DashboardModerationIdPatchRaw(requestParameters: V1DashboardModerationIdPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UserSettingsPatch200Response>> {
        const requestOptions = await this.v1DashboardModerationIdPatchRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UserSettingsPatch200ResponseFromJSON(jsonValue));
    }

    /**
     * Updates comment report status and optionally deletes the reported comment.
     * Resolve or Dismiss Moderation Report
     */
    async v1DashboardModerationIdPatch(requestParameters: V1DashboardModerationIdPatchOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UserSettingsPatch200Response> {
        const response = await this.v1DashboardModerationIdPatchRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardOverviewGet without sending the request
     */
    async v1DashboardOverviewGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/overview`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns traffic telemetry, recent activity logs, and administrative notifications.
     * Get Dashboard Overview
     */
    async v1DashboardOverviewGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardOverviewGet200Response>> {
        const requestOptions = await this.v1DashboardOverviewGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardOverviewGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns traffic telemetry, recent activity logs, and administrative notifications.
     * Get Dashboard Overview
     */
    async v1DashboardOverviewGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardOverviewGet200Response> {
        const response = await this.v1DashboardOverviewGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardRolesGet without sending the request
     */
    async v1DashboardRolesGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/roles`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns role definitions and active user member counts.
     * Get System Roles & Permissions
     */
    async v1DashboardRolesGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardRolesGet200Response>> {
        const requestOptions = await this.v1DashboardRolesGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardRolesGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns role definitions and active user member counts.
     * Get System Roles & Permissions
     */
    async v1DashboardRolesGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardRolesGet200Response> {
        const response = await this.v1DashboardRolesGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardSeasonsGet without sending the request
     */
    async v1DashboardSeasonsGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/seasons`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns anime release distribution grouped by season and year.
     * Get Seasonal Broadcast Distributions
     */
    async v1DashboardSeasonsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardSeasonsGet200Response>> {
        const requestOptions = await this.v1DashboardSeasonsGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardSeasonsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns anime release distribution grouped by season and year.
     * Get Seasonal Broadcast Distributions
     */
    async v1DashboardSeasonsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardSeasonsGet200Response> {
        const response = await this.v1DashboardSeasonsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardStatsGet without sending the request
     */
    async v1DashboardStatsGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/stats`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns aggregated platform metrics including anime count, episode count, user count, and storage estimates.
     * Get Platform Stats
     */
    async v1DashboardStatsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardStatsGet200Response>> {
        const requestOptions = await this.v1DashboardStatsGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardStatsGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns aggregated platform metrics including anime count, episode count, user count, and storage estimates.
     * Get Platform Stats
     */
    async v1DashboardStatsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardStatsGet200Response> {
        const response = await this.v1DashboardStatsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1DashboardUsersGet without sending the request
     */
    async v1DashboardUsersGetRequestOpts(requestParameters: V1DashboardUsersGetRequest): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        if (requestParameters['page'] != null) {
            queryParameters['page'] = requestParameters['page'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['role'] != null) {
            queryParameters['role'] = requestParameters['role'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/dashboard/users`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Returns registered users directory with role and status information.
     * Get Users Directory (Admin Only)
     */
    async v1DashboardUsersGetRaw(requestParameters: V1DashboardUsersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1DashboardUsersGet200Response>> {
        const requestOptions = await this.v1DashboardUsersGetRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1DashboardUsersGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Returns registered users directory with role and status information.
     * Get Users Directory (Admin Only)
     */
    async v1DashboardUsersGet(requestParameters: V1DashboardUsersGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1DashboardUsersGet200Response> {
        const response = await this.v1DashboardUsersGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const V1DashboardModerationGetStatusEnum = {
    Pending: 'pending',
    Resolved: 'resolved',
    Dismissed: 'dismissed',
} as const;
export type V1DashboardModerationGetStatusEnum = typeof V1DashboardModerationGetStatusEnum[keyof typeof V1DashboardModerationGetStatusEnum];
