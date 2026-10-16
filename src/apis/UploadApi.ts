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
    type V1UploadHlsPost200Response,
    V1UploadHlsPost200ResponseFromJSON,
    V1UploadHlsPost200ResponseToJSON,
} from '../models/V1UploadHlsPost200Response';
import {
    type V1UploadImagePost200Response,
    V1UploadImagePost200ResponseFromJSON,
    V1UploadImagePost200ResponseToJSON,
} from '../models/V1UploadImagePost200Response';

/**
 * 
 */
export class UploadApi extends runtime.BaseAPI {

    /**
     * Creates request options for v1UploadHlsPost without sending the request
     */
    async v1UploadHlsPostRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/upload/hls`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Ingests multi-resolution HLS package (master playlist, variants, and .ts segment chunks) directly into Cloudflare R2 object storage.
     * Upload HLS Package to Cloudflare R2
     */
    async v1UploadHlsPostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UploadHlsPost200Response>> {
        const requestOptions = await this.v1UploadHlsPostRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UploadHlsPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Ingests multi-resolution HLS package (master playlist, variants, and .ts segment chunks) directly into Cloudflare R2 object storage.
     * Upload HLS Package to Cloudflare R2
     */
    async v1UploadHlsPost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UploadHlsPost200Response> {
        const response = await this.v1UploadHlsPostRaw(initOverrides);
        return await response.value();
    }

    /**
     * Creates request options for v1UploadImagePost without sending the request
     */
    async v1UploadImagePostRequestOpts(): Promise<runtime.RequestOpts> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }

        let urlPath = `/v1/upload/image`;

        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        };
    }

    /**
     * Uploads posters, banners, or avatars directly to Cloudflare R2.
     * Upload Image to Cloudflare R2
     */
    async v1UploadImagePostRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V1UploadImagePost200Response>> {
        const requestOptions = await this.v1UploadImagePostRequestOpts();
        const response = await this.request(requestOptions, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V1UploadImagePost200ResponseFromJSON(jsonValue));
    }

    /**
     * Uploads posters, banners, or avatars directly to Cloudflare R2.
     * Upload Image to Cloudflare R2
     */
    async v1UploadImagePost(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V1UploadImagePost200Response> {
        const response = await this.v1UploadImagePostRaw(initOverrides);
        return await response.value();
    }

}
