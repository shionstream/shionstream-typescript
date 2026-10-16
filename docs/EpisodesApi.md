# EpisodesApi

All URIs are relative to *https://api.gox.my.id*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v1AnimeSlugEpisodesGet**](EpisodesApi.md#v1animeslugepisodesget) | **GET** /v1/anime/{slug}/episodes | List Episodes by Anime Slug |
| [**v1EpisodesIdStreamGet**](EpisodesApi.md#v1episodesidstreamget) | **GET** /v1/episodes/{id}/stream | Get Episode Stream Sources |



## v1AnimeSlugEpisodesGet

> V1AnimeSlugEpisodesGet200Response v1AnimeSlugEpisodesGet(slug, page, limit, sort)

List Episodes by Anime Slug

Retrieve an ordered list of published episodes for a specific anime.

### Example

```ts
import {
  Configuration,
  EpisodesApi,
} from '@shionstream/shionstream-sdk';
import type { V1AnimeSlugEpisodesGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new EpisodesApi();

  const body = {
    // string
    slug: slug_example,
    // string (optional)
    page: page_example,
    // string (optional)
    limit: limit_example,
    // 'asc' | 'desc' (optional)
    sort: sort_example,
  } satisfies V1AnimeSlugEpisodesGetRequest;

  try {
    const data = await api.v1AnimeSlugEpisodesGet(body);
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
| **page** | `string` |  | [Optional] [Defaults to `&#39;1&#39;`] |
| **limit** | `string` |  | [Optional] [Defaults to `&#39;50&#39;`] |
| **sort** | `asc`, `desc` |  | [Optional] [Defaults to `&#39;asc&#39;`] [Enum: asc, desc] |

### Return type

[**V1AnimeSlugEpisodesGet200Response**](V1AnimeSlugEpisodesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of anime episodes |  -  |
| **404** | Anime not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v1EpisodesIdStreamGet

> V1EpisodesIdStreamGet200Response v1EpisodesIdStreamGet(id)

Get Episode Stream Sources

Retrieve video playback manifests, multi-resolution URLs, subtitles, and audio tracks for an episode.

### Example

```ts
import {
  Configuration,
  EpisodesApi,
} from '@shionstream/shionstream-sdk';
import type { V1EpisodesIdStreamGetRequest } from '@shionstream/shionstream-sdk';

async function example() {
  console.log("🚀 Testing @shionstream/shionstream-sdk SDK...");
  const api = new EpisodesApi();

  const body = {
    // string
    id: id_example,
  } satisfies V1EpisodesIdStreamGetRequest;

  try {
    const data = await api.v1EpisodesIdStreamGet(body);
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

[**V1EpisodesIdStreamGet200Response**](V1EpisodesIdStreamGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Stream sources and media tracks |  -  |
| **404** | Episode not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

