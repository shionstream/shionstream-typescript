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
    type V1ProtectedSampleGet200Response,
    V1ProtectedSampleGet200ResponseFromJSON,
    V1ProtectedSampleGet200ResponseToJSON,
} from '../models/V1ProtectedSampleGet200Response';
import {
    type V1ProtectedSampleGet401Response,
    V1ProtectedSampleGet401ResponseFromJSON,
    V1ProtectedSampleGet401ResponseToJSON,
} from '../models/V1ProtectedSampleGet401Response';

/**
 * 
 */
export class SampleApi extends runtime.BaseAPI {

    /**
     * Creates request options for v1ProtectedSampleGet without sending the request
     */
    async v1ProtectedSampleGetRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/protected/sample`;

        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Example endpoint that requires a valid Better Auth session or Bearer token.
     * Protected Sample Endpoint
     */
    async v1ProtectedSampleGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1ProtectedSampleGet200Response>> {
        const requestOptions = await this.v1ProtectedSampleGetRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1ProtectedSampleGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Example endpoint that requires a valid Better Auth session or Bearer token.
     * Protected Sample Endpoint
     */
    async v1ProtectedSampleGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1ProtectedSampleGet200Response> {
        const response = await this.v1ProtectedSampleGetRaw(initOverrides);
        return await response.value();
    }

}
