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
    type HealthGet200Response,
    HealthGet200ResponseFromJSON,
    HealthGet200ResponseToJSON,
} from '../models/HealthGet200Response';
import {
    type HealthGet500Response,
    HealthGet500ResponseFromJSON,
    HealthGet500ResponseToJSON,
} from '../models/HealthGet500Response';

/**
 * 
 */
export class SystemApi extends runtime.BaseAPI {

    /**
     * Creates request options for healthGet without sending the request
     */
    async healthGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};


        let urlPath = `/health`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Check if the API and Cloudflare D1 database connection are healthy.
     * Health Check
     */
    async healthGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthGet200Response>> {
        const requestOptions = await this.healthGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => HealthGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Check if the API and Cloudflare D1 database connection are healthy.
     * Health Check
     */
    async healthGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthGet200Response> {
        const response = await this.healthGetRaw(initOverrides);
        return await response.value();
    }

}
