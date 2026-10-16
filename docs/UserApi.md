# UserApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1UserHistoryDelete**](UserApi.md#v1userhistorydelete) | **DELETE** /v1/user/history | Clear All History |
| [**v1UserHistoryGet**](UserApi.md#v1userhistoryget) | **GET** /v1/user/history | Get Watch History |
| [**v1UserHistoryIdDelete**](UserApi.md#v1userhistoryiddelete) | **DELETE** /v1/user/history/{id} | Delete History Item |
| [**v1UserHistoryPost**](UserApi.md#v1userhistorypostoperation) | **POST** /v1/user/history | Record Playback Progress |
| [**v1UserProfileGet**](UserApi.md#v1userprofileget) | **GET** /v1/user/profile | Get User Profile |
| [**v1UserSettingsGet**](UserApi.md#v1usersettingsget) | **GET** /v1/user/settings | Get User Settings |
| [**v1UserSettingsPatch**](UserApi.md#v1usersettingspatchoperation) | **PATCH** /v1/user/settings | Update User Settings |
| [**v1UserWatchlistAnimeIdDelete**](UserApi.md#v1userwatchlistanimeiddelete) | **DELETE** /v1/user/watchlist/{animeId} | Remove from Watchlist |
| [**v1UserWatchlistAnimeIdPatch**](UserApi.md#v1userwatchlistanimeidpatchoperation) | **PATCH** /v1/user/watchlist/{animeId} | Update Watchlist Entry |
| [**v1UserWatchlistGet**](UserApi.md#v1userwatchlistget) | **GET** /v1/user/watchlist | Get User Watchlist |
| [**v1UserWatchlistPost**](UserApi.md#v1userwatchlistpostoperation) | **POST** /v1/user/watchlist | Add to Watchlist |



## v1UserHistoryDelete

> V1UserSettingsPatch200Response v1UserHistoryDelete()

Clear All History

Clears the authenticated user\&#39;s entire watch history.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserHistoryDeleteRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.v1UserHistoryDelete();
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

[**V1UserSettingsPatch200Response**](V1UserSettingsPatch200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | History cleared |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserHistoryGet

> V1UserHistoryGet200Response v1UserHistoryGet(limit)

Get Watch History

Retrieves the authenticated user\&#39;s watch history sorted by most recent.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserHistoryGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string (optional)
    limit: limit_example,
  } satisfies V1UserHistoryGetRequest;

  try {
    const data = await api.v1UserHistoryGet(body);
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
| **limit** | `string` |  | [Optional] [Defaults to `&#39;50&#39;`] |

### Return type

[**V1UserHistoryGet200Response**](V1UserHistoryGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Watch history |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserHistoryIdDelete

> V1UserSettingsPatch200Response v1UserHistoryIdDelete(id)

Delete History Item

Deletes a single watch history record.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserHistoryIdDeleteRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies V1UserHistoryIdDeleteRequest;

  try {
    const data = await api.v1UserHistoryIdDelete(body);
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

### Return type

[**V1UserSettingsPatch200Response**](V1UserSettingsPatch200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Deleted |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserHistoryPost

> V1UserSettingsPatch200Response v1UserHistoryPost(v1UserHistoryPostRequest)

Record Playback Progress

Records or updates playback progress for an episode (heartbeat). Upserts on [userId, episodeId].

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserHistoryPostOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // V1UserHistoryPostRequest (optional)
    v1UserHistoryPostRequest: ...,
  } satisfies V1UserHistoryPostOperationRequest;

  try {
    const data = await api.v1UserHistoryPost(body);
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
| **v1UserHistoryPostRequest** | [V1UserHistoryPostRequest](V1UserHistoryPostRequest.md) |  | [Optional] |

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
| **200** | Progress recorded |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserProfileGet

> V1UserProfileGet200Response v1UserProfileGet()

Get User Profile

Retrieves the authenticated user\&#39;s profile with activity summary (watchlist count and recent history count).

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserProfileGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.v1UserProfileGet();
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

[**V1UserProfileGet200Response**](V1UserProfileGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User profile |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserSettingsGet

> V1UserSettingsGet200Response v1UserSettingsGet()

Get User Settings

Retrieves player preferences and notification settings for the authenticated user.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserSettingsGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  try {
    const data = await api.v1UserSettingsGet();
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

[**V1UserSettingsGet200Response**](V1UserSettingsGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | User settings |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserSettingsPatch

> V1UserSettingsPatch200Response v1UserSettingsPatch(v1UserSettingsPatchRequest)

Update User Settings

Updates player preferences and notification settings.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserSettingsPatchOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // V1UserSettingsPatchRequest (optional)
    v1UserSettingsPatchRequest: ...,
  } satisfies V1UserSettingsPatchOperationRequest;

  try {
    const data = await api.v1UserSettingsPatch(body);
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
| **v1UserSettingsPatchRequest** | [V1UserSettingsPatchRequest](V1UserSettingsPatchRequest.md) |  | [Optional] |

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
| **200** | Settings updated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserWatchlistAnimeIdDelete

> V1UserSettingsPatch200Response v1UserWatchlistAnimeIdDelete(animeId)

Remove from Watchlist

Removes an anime from the user\&#39;s watchlist.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserWatchlistAnimeIdDeleteRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string
    animeId: animeId_example,
  } satisfies V1UserWatchlistAnimeIdDeleteRequest;

  try {
    const data = await api.v1UserWatchlistAnimeIdDelete(body);
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
| **animeId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1UserSettingsPatch200Response**](V1UserSettingsPatch200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Removed |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserWatchlistAnimeIdPatch

> V1UserSettingsPatch200Response v1UserWatchlistAnimeIdPatch(animeId, v1UserWatchlistAnimeIdPatchRequest)

Update Watchlist Entry

Updates status or favorite flag for a specific anime in the user\&#39;s watchlist.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserWatchlistAnimeIdPatchOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string
    animeId: animeId_example,
    // V1UserWatchlistAnimeIdPatchRequest (optional)
    v1UserWatchlistAnimeIdPatchRequest: ...,
  } satisfies V1UserWatchlistAnimeIdPatchOperationRequest;

  try {
    const data = await api.v1UserWatchlistAnimeIdPatch(body);
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
| **animeId** | `string` |  | [Defaults to `undefined`] |
| **v1UserWatchlistAnimeIdPatchRequest** | [V1UserWatchlistAnimeIdPatchRequest](V1UserWatchlistAnimeIdPatchRequest.md) |  | [Optional] |

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
| **200** | Watchlist updated |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserWatchlistGet

> V1UserWatchlistGet200Response v1UserWatchlistGet(status)

Get User Watchlist

Retrieves the authenticated user\&#39;s anime watchlist with optional status filter.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserWatchlistGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // string (optional)
    status: status_example,
  } satisfies V1UserWatchlistGetRequest;

  try {
    const data = await api.v1UserWatchlistGet(body);
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
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**V1UserWatchlistGet200Response**](V1UserWatchlistGet200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Watchlist items |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1UserWatchlistPost

> V1UserSettingsPatch200Response v1UserWatchlistPost(v1UserWatchlistPostRequest)

Add to Watchlist

Adds an anime to the user\&#39;s watchlist. Upserts if the anime already exists in the watchlist.

### Example

```ts
import {
  Configuration,
  UserApi,
} from '@shionstream/shionstream-sdk';
import type { V1UserWatchlistPostOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new UserApi(config);

  const body = {
    // V1UserWatchlistPostRequest (optional)
    v1UserWatchlistPostRequest: ...,
  } satisfies V1UserWatchlistPostOperationRequest;

  try {
    const data = await api.v1UserWatchlistPost(body);
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
| **v1UserWatchlistPostRequest** | [V1UserWatchlistPostRequest](V1UserWatchlistPostRequest.md) |  | [Optional] |

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
| **200** | Added to watchlist |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

