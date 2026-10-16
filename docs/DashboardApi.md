# DashboardApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1DashboardAnimeGet**](DashboardApi.md#v1dashboardanimeget) | **GET** /v1/dashboard/anime | Get Administrative Anime List |
| [**v1DashboardCategoriesGet**](DashboardApi.md#v1dashboardcategoriesget) | **GET** /v1/dashboard/categories | Get Category &amp; Genre Distributions |
| [**v1DashboardEpisodesGet**](DashboardApi.md#v1dashboardepisodesget) | **GET** /v1/dashboard/episodes | Get Administrative Episodes List |
| [**v1DashboardModerationGet**](DashboardApi.md#v1dashboardmoderationget) | **GET** /v1/dashboard/moderation | Get Comment Moderation Reports |
| [**v1DashboardModerationIdPatch**](DashboardApi.md#v1dashboardmoderationidpatchoperation) | **PATCH** /v1/dashboard/moderation/{id} | Resolve or Dismiss Moderation Report |
| [**v1DashboardOverviewGet**](DashboardApi.md#v1dashboardoverviewget) | **GET** /v1/dashboard/overview | Get Dashboard Overview |
| [**v1DashboardRolesGet**](DashboardApi.md#v1dashboardrolesget) | **GET** /v1/dashboard/roles | Get System Roles &amp; Permissions |
| [**v1DashboardSeasonsGet**](DashboardApi.md#v1dashboardseasonsget) | **GET** /v1/dashboard/seasons | Get Seasonal Broadcast Distributions |
| [**v1DashboardStatsGet**](DashboardApi.md#v1dashboardstatsget) | **GET** /v1/dashboard/stats | Get Platform Stats |
| [**v1DashboardUsersGet**](DashboardApi.md#v1dashboardusersget) | **GET** /v1/dashboard/users | Get Users Directory (Admin Only) |



## v1DashboardAnimeGet

> V1DashboardAnimeGet200Response v1DashboardAnimeGet(page, limit, status, search)

Get Administrative Anime List

Returns paginated anime catalog with filters for administration.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardAnimeGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  const body = {
    // string (optional)
    page: page_example,
    // string (optional)
    limit: limit_example,
    // string (optional)
    status: status_example,
    // string (optional)
    search: search_example,
  } satisfies V1DashboardAnimeGetRequest;

  try {
    const data = await api.v1DashboardAnimeGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `string` |  | [Optional] [Defaults to `&#39;1&#39;`] |
| **limit** | `string` |  | [Optional] [Defaults to `&#39;20&#39;`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1DashboardAnimeGet200Response**](V1DashboardAnimeGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated anime list |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardCategoriesGet

> V1DashboardCategoriesGet200Response v1DashboardCategoriesGet()

Get Category &amp; Genre Distributions

Returns format categories and genres with associated anime counts.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardCategoriesGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.v1DashboardCategoriesGet();
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

[**V1DashboardCategoriesGet200Response**](V1DashboardCategoriesGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Category and genre statistics |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardEpisodesGet

> V1DashboardEpisodesGet200Response v1DashboardEpisodesGet(page, limit, animeId)

Get Administrative Episodes List

Returns paginated episodes with upload status for administration.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardEpisodesGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  const body = {
    // string (optional)
    page: page_example,
    // string (optional)
    limit: limit_example,
    // string (optional)
    animeId: animeId_example,
  } satisfies V1DashboardEpisodesGetRequest;

  try {
    const data = await api.v1DashboardEpisodesGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `string` |  | [Optional] [Defaults to `&#39;1&#39;`] |
| **limit** | `string` |  | [Optional] [Defaults to `&#39;20&#39;`] |
| **animeId** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1DashboardEpisodesGet200Response**](V1DashboardEpisodesGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated episodes list |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardModerationGet

> V1DashboardModerationGet200Response v1DashboardModerationGet(status)

Get Comment Moderation Reports

Returns reported comments queue with status filter.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardModerationGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  const body = {
    // 'pending' | 'resolved' | 'dismissed' (optional)
    status: status_example,
  } satisfies V1DashboardModerationGetRequest;

  try {
    const data = await api.v1DashboardModerationGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **status** | `pending`, `resolved`, `dismissed` |  | [Optional] [Defaults to `&#39;pending&#39;`] [Enum: pending, resolved, dismissed] |

### Return type

[**V1DashboardModerationGet200Response**](V1DashboardModerationGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Moderation reports list |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardModerationIdPatch

> V1UserSettingsPatch200Response v1DashboardModerationIdPatch(id, v1DashboardModerationIdPatchRequest)

Resolve or Dismiss Moderation Report

Updates comment report status and optionally deletes the reported comment.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardModerationIdPatchOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  const body = {
    // string
    id: id_example,
    // V1DashboardModerationIdPatchRequest (optional)
    v1DashboardModerationIdPatchRequest: ...,
  } satisfies V1DashboardModerationIdPatchOperationRequest;

  try {
    const data = await api.v1DashboardModerationIdPatch(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **v1DashboardModerationIdPatchRequest** | [V1DashboardModerationIdPatchRequest](V1DashboardModerationIdPatchRequest.md) |  | [Optional] |

### Return type

[**V1UserSettingsPatch200Response**](V1UserSettingsPatch200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report updated |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardOverviewGet

> V1DashboardOverviewGet200Response v1DashboardOverviewGet()

Get Dashboard Overview

Returns traffic telemetry, recent activity logs, and administrative notifications.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardOverviewGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.v1DashboardOverviewGet();
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

[**V1DashboardOverviewGet200Response**](V1DashboardOverviewGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Overview data |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardRolesGet

> V1DashboardRolesGet200Response v1DashboardRolesGet()

Get System Roles &amp; Permissions

Returns role definitions and active user member counts.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardRolesGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.v1DashboardRolesGet();
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

[**V1DashboardRolesGet200Response**](V1DashboardRolesGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Role definitions |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardSeasonsGet

> V1DashboardSeasonsGet200Response v1DashboardSeasonsGet()

Get Seasonal Broadcast Distributions

Returns anime release distribution grouped by season and year.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardSeasonsGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.v1DashboardSeasonsGet();
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

[**V1DashboardSeasonsGet200Response**](V1DashboardSeasonsGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Seasonal distribution |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardStatsGet

> V1DashboardStatsGet200Response v1DashboardStatsGet()

Get Platform Stats

Returns aggregated platform metrics including anime count, episode count, user count, and storage estimates.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardStatsGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  try {
    const data = await api.v1DashboardStatsGet();
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

[**V1DashboardStatsGet200Response**](V1DashboardStatsGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Aggregated stats |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1DashboardUsersGet

> V1DashboardUsersGet200Response v1DashboardUsersGet(page, limit, role, search)

Get Users Directory (Admin Only)

Returns registered users directory with role and status information.

### Example

```ts
import {
  Configuration,
  DashboardApi,
} from '@shionstream/shionstream-sdk';
import type { V1DashboardUsersGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new DashboardApi(config);

  const body = {
    // string (optional)
    page: page_example,
    // string (optional)
    limit: limit_example,
    // string (optional)
    role: role_example,
    // string (optional)
    search: search_example,
  } satisfies V1DashboardUsersGetRequest;

  try {
    const data = await api.v1DashboardUsersGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | `string` |  | [Optional] [Defaults to `&#39;1&#39;`] |
| **limit** | `string` |  | [Optional] [Defaults to `&#39;20&#39;`] |
| **role** | `string` |  | [Optional] [Defaults to `undefined`] |
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1DashboardUsersGet200Response**](V1DashboardUsersGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated user directory |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

