# UploadApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1UploadHlsPost**](UploadApi.md#v1uploadhlspost) | **POST** /v1/upload/hls | Upload HLS Package to Cloudflare R2 |
| [**v1UploadImagePost**](UploadApi.md#v1uploadimagepost) | **POST** /v1/upload/image | Upload Image to Cloudflare R2 |



## v1UploadHlsPost

> V1UploadHlsPost200Response v1UploadHlsPost()

Upload HLS Package to Cloudflare R2

Ingests multi-resolution HLS package (master playlist, variants, and .ts segment chunks) directly into Cloudflare R2 object storage.

### Example

```ts
import {
  Configuration,
  UploadApi,
} from '@shionstream/shionstream-sdk';
import type { V1UploadHlsPostRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UploadApi(config);

  try {
    const data = await api.v1UploadHlsPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1UploadHlsPost200Response**](V1UploadHlsPost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | HLS package successfully uploaded |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal upload failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UploadImagePost

> V1UploadImagePost200Response v1UploadImagePost()

Upload Image to Cloudflare R2

Uploads posters, banners, or avatars directly to Cloudflare R2.

### Example

```ts
import {
  Configuration,
  UploadApi,
} from '@shionstream/shionstream-sdk';
import type { V1UploadImagePostRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UploadApi(config);

  try {
    const data = await api.v1UploadImagePost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1UploadImagePost200Response**](V1UploadImagePost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Image successfully uploaded |  -  |
| **400** | Bad request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **500** | Internal upload failure |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

