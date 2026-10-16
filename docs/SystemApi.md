# SystemApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**healthGet**](SystemApi.md#healthget) | **GET** /health | Health Check |



## healthGet

> HealthGet200Response healthGet()

Health Check

Check if the API and Cloudflare D1 database connection are healthy.

### Example

```ts
import {
  Configuration,
  SystemApi,
} from '@shionstream/shionstream-sdk';
import type { HealthGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new SystemApi();

  try {
    const data = await api.healthGet();
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

[**HealthGet200Response**](HealthGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Service is operational |  -  |
| **500** | Service is degraded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

