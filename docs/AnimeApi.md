# AnimeApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AnimeGet**](AnimeApi.md#v1animeget) | **GET** /v1/anime | List Anime Catalog |
| [**v1AnimeSlugGet**](AnimeApi.md#v1animeslugget) | **GET** /v1/anime/{slug} | Get Anime Details by Slug |



## v1AnimeGet

> V1AnimeGet200Response v1AnimeGet(page, limit, search, type, status, genre, season, year, sort)

List Anime Catalog

Retrieve paginated list of anime with filters for type, status, season, year, genre, and search.

### Example

```ts
import {
  Configuration,
  AnimeApi,
} from '@shionstream/shionstream-sdk';
import type { V1AnimeGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new AnimeApi();

  const body = {
    // string (optional)
    page: page_example,
    // string (optional)
    limit: limit_example,
    // string (optional)
    search: search_example,
    // string (optional)
    type: type_example,
    // string (optional)
    status: status_example,
    // string (optional)
    genre: genre_example,
    // string (optional)
    season: season_example,
    // string (optional)
    year: year_example,
    // 'latest' | 'popular' | 'score' (optional)
    sort: sort_example,
  } satisfies V1AnimeGetRequest;

  try {
    const data = await api.v1AnimeGet(body);
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
| **search** | `string` |  | [Optional] [Defaults to `undefined`] |
| **type** | `string` |  | [Optional] [Defaults to `undefined`] |
| **status** | `string` |  | [Optional] [Defaults to `undefined`] |
| **genre** | `string` |  | [Optional] [Defaults to `undefined`] |
| **season** | `string` |  | [Optional] [Defaults to `undefined`] |
| **year** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sort** | `latest`, `popular`, `score` |  | [Optional] [Defaults to `&#39;latest&#39;`] [Enum: latest, popular, score] |

### Return type

[**V1AnimeGet200Response**](V1AnimeGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated anime list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1AnimeSlugGet

> V1AnimeSlugGet200Response v1AnimeSlugGet(slug)

Get Anime Details by Slug

Retrieve comprehensive anime metadata including associated genres, studios, schedule, and trending stats.

### Example

```ts
import {
  Configuration,
  AnimeApi,
} from '@shionstream/shionstream-sdk';
import type { V1AnimeSlugGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new AnimeApi();

  const body = {
    // string
    slug: slug_example,
  } satisfies V1AnimeSlugGetRequest;

  try {
    const data = await api.v1AnimeSlugGet(body);
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
| **slug** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V1AnimeSlugGet200Response**](V1AnimeSlugGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Anime detailed metadata |  -  |
| **404** | Anime not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

