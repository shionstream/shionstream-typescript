# CommentsApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1CommentsGet**](CommentsApi.md#v1commentsget) | **GET** /v1/comments | Get Episode Comments |
| [**v1CommentsIdLikePost**](CommentsApi.md#v1commentsidlikepostoperation) | **POST** /v1/comments/{id}/like | Like or Dislike Comment |
| [**v1CommentsIdReportPost**](CommentsApi.md#v1commentsidreportpostoperation) | **POST** /v1/comments/{id}/report | Report Comment |
| [**v1CommentsPost**](CommentsApi.md#v1commentspostoperation) | **POST** /v1/comments | Create Comment |



## v1CommentsGet

> V1CommentsGet200Response v1CommentsGet(episodeId)

Get Episode Comments

Retrieves threaded comments for an episode, ordered by newest first, with like/dislike counts.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@shionstream/shionstream-sdk';
import type { V1CommentsGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new CommentsApi();

  const body = {
    // string
    episodeId: episodeId_example,
  } satisfies V1CommentsGetRequest;

  try {
    const data = await api.v1CommentsGet(body);
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
| **episodeId** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1CommentsGet200Response**](V1CommentsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Comments list |  -  |
| **400** | Missing episodeId |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1CommentsIdLikePost

> V1CommentsIdLikePost200Response v1CommentsIdLikePost(id, v1CommentsIdLikePostRequest)

Like or Dislike Comment

Adds or toggles a like/dislike reaction on a comment. Upserts on [commentId, userId].

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@shionstream/shionstream-sdk';
import type { V1CommentsIdLikePostOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: Bearer
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new CommentsApi(config);

  const body = {
    // string
    id: id_example,
    // V1CommentsIdLikePostRequest (optional)
    v1CommentsIdLikePostRequest: ...,
  } satisfies V1CommentsIdLikePostOperationRequest;

  try {
    const data = await api.v1CommentsIdLikePost(body);
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
| **v1CommentsIdLikePostRequest** | [V1CommentsIdLikePostRequest](V1CommentsIdLikePostRequest.md) |  | [Optional] |

### Return type

[**V1CommentsIdLikePost200Response**](V1CommentsIdLikePost200Response.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Reaction recorded |  -  |
| **401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1CommentsIdReportPost

> V1CommentsIdLikePost200Response v1CommentsIdReportPost(id, v1CommentsIdReportPostRequest)

Report Comment

Submits a comment to the moderation queue with a reason.

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@shionstream/shionstream-sdk';
import type { V1CommentsIdReportPostOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new CommentsApi();

  const body = {
    // string
    id: id_example,
    // V1CommentsIdReportPostRequest (optional)
    v1CommentsIdReportPostRequest: ...,
  } satisfies V1CommentsIdReportPostOperationRequest;

  try {
    const data = await api.v1CommentsIdReportPost(body);
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
| **v1CommentsIdReportPostRequest** | [V1CommentsIdReportPostRequest](V1CommentsIdReportPostRequest.md) |  | [Optional] |

### Return type

[**V1CommentsIdLikePost200Response**](V1CommentsIdLikePost200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Report submitted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1CommentsPost

> V1CommentsPost201Response v1CommentsPost(v1CommentsPostRequest)

Create Comment

Creates a new comment or reply on an episode. Supports both authenticated users and guests (guest requires name and email).

### Example

```ts
import {
  Configuration,
  CommentsApi,
} from '@shionstream/shionstream-sdk';
import type { V1CommentsPostOperationRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new CommentsApi();

  const body = {
    // V1CommentsPostRequest (optional)
    v1CommentsPostRequest: ...,
  } satisfies V1CommentsPostOperationRequest;

  try {
    const data = await api.v1CommentsPost(body);
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
| **v1CommentsPostRequest** | [V1CommentsPostRequest](V1CommentsPostRequest.md) |  | [Optional] |

### Return type

[**V1CommentsPost201Response**](V1CommentsPost201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Comment created |  -  |
| **400** | Validation error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

