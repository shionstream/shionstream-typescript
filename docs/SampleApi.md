# SampleApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1ProtectedSampleGet**](SampleApi.md#v1protectedsampleget) | **GET** /v1/protected/sample | Protected Sample Endpoint |



## v1ProtectedSampleGet

> V1ProtectedSampleGet200Response v1ProtectedSampleGet()

Protected Sample Endpoint

Example endpoint that requires a valid Better Auth session or Bearer token.

### Example

```ts
import {
  Configuration,
  SampleApi,
} from '@shionstream/shionstream-sdk';
import type { V1ProtectedSampleGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new SampleApi(config);

  try {
    const data = await api.v1ProtectedSampleGet();
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

[**V1ProtectedSampleGet200Response**](V1ProtectedSampleGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User is authenticated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

