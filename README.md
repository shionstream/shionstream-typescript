# @shionstream/shionstream-sdk@1.0.0

A TypeScript SDK client for the api.gox.my.id API.

## Usage

First, install the SDK from npm.

```bash
npm install @shionstream/shionstream-sdk --save
```

Next, try it out.


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


## Documentation

### API Endpoints

All URIs are relative to *https://api.gox.my.id*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AnimeApi* | [**v1AnimeGet**](docs/AnimeApi.md#v1animeget) | **GET** /v1/anime | List Anime Catalog
*AnimeApi* | [**v1AnimeSlugGet**](docs/AnimeApi.md#v1animeslugget) | **GET** /v1/anime/{slug} | Get Anime Details by Slug
*CommentsApi* | [**v1CommentsGet**](docs/CommentsApi.md#v1commentsget) | **GET** /v1/comments | Get Episode Comments
*CommentsApi* | [**v1CommentsIdLikePost**](docs/CommentsApi.md#v1commentsidlikepostoperation) | **POST** /v1/comments/{id}/like | Like or Dislike Comment
*CommentsApi* | [**v1CommentsIdReportPost**](docs/CommentsApi.md#v1commentsidreportpostoperation) | **POST** /v1/comments/{id}/report | Report Comment
*CommentsApi* | [**v1CommentsPost**](docs/CommentsApi.md#v1commentspostoperation) | **POST** /v1/comments | Create Comment
*DashboardApi* | [**v1DashboardAnimeGet**](docs/DashboardApi.md#v1dashboardanimeget) | **GET** /v1/dashboard/anime | Get Administrative Anime List
*DashboardApi* | [**v1DashboardCategoriesGet**](docs/DashboardApi.md#v1dashboardcategoriesget) | **GET** /v1/dashboard/categories | Get Category &amp; Genre Distributions
*DashboardApi* | [**v1DashboardEpisodesGet**](docs/DashboardApi.md#v1dashboardepisodesget) | **GET** /v1/dashboard/episodes | Get Administrative Episodes List
*DashboardApi* | [**v1DashboardModerationGet**](docs/DashboardApi.md#v1dashboardmoderationget) | **GET** /v1/dashboard/moderation | Get Comment Moderation Reports
*DashboardApi* | [**v1DashboardModerationIdPatch**](docs/DashboardApi.md#v1dashboardmoderationidpatchoperation) | **PATCH** /v1/dashboard/moderation/{id} | Resolve or Dismiss Moderation Report
*DashboardApi* | [**v1DashboardOverviewGet**](docs/DashboardApi.md#v1dashboardoverviewget) | **GET** /v1/dashboard/overview | Get Dashboard Overview
*DashboardApi* | [**v1DashboardRolesGet**](docs/DashboardApi.md#v1dashboardrolesget) | **GET** /v1/dashboard/roles | Get System Roles &amp; Permissions
*DashboardApi* | [**v1DashboardSeasonsGet**](docs/DashboardApi.md#v1dashboardseasonsget) | **GET** /v1/dashboard/seasons | Get Seasonal Broadcast Distributions
*DashboardApi* | [**v1DashboardStatsGet**](docs/DashboardApi.md#v1dashboardstatsget) | **GET** /v1/dashboard/stats | Get Platform Stats
*DashboardApi* | [**v1DashboardUsersGet**](docs/DashboardApi.md#v1dashboardusersget) | **GET** /v1/dashboard/users | Get Users Directory (Admin Only)
*EpisodesApi* | [**v1AnimeSlugEpisodesGet**](docs/EpisodesApi.md#v1animeslugepisodesget) | **GET** /v1/anime/{slug}/episodes | List Episodes by Anime Slug
*EpisodesApi* | [**v1EpisodesIdStreamGet**](docs/EpisodesApi.md#v1episodesidstreamget) | **GET** /v1/episodes/{id}/stream | Get Episode Stream Sources
*SampleApi* | [**v1ProtectedSampleGet**](docs/SampleApi.md#v1protectedsampleget) | **GET** /v1/protected/sample | Protected Sample Endpoint
*SystemApi* | [**healthGet**](docs/SystemApi.md#healthget) | **GET** /health | Health Check
*UploadApi* | [**v1UploadHlsPost**](docs/UploadApi.md#v1uploadhlspost) | **POST** /v1/upload/hls | Upload HLS Package to Cloudflare R2
*UploadApi* | [**v1UploadImagePost**](docs/UploadApi.md#v1uploadimagepost) | **POST** /v1/upload/image | Upload Image to Cloudflare R2
*UserApi* | [**v1UserHistoryDelete**](docs/UserApi.md#v1userhistorydelete) | **DELETE** /v1/user/history | Clear All History
*UserApi* | [**v1UserHistoryGet**](docs/UserApi.md#v1userhistoryget) | **GET** /v1/user/history | Get Watch History
*UserApi* | [**v1UserHistoryIdDelete**](docs/UserApi.md#v1userhistoryiddelete) | **DELETE** /v1/user/history/{id} | Delete History Item
*UserApi* | [**v1UserHistoryPost**](docs/UserApi.md#v1userhistorypostoperation) | **POST** /v1/user/history | Record Playback Progress
*UserApi* | [**v1UserProfileGet**](docs/UserApi.md#v1userprofileget) | **GET** /v1/user/profile | Get User Profile
*UserApi* | [**v1UserSettingsGet**](docs/UserApi.md#v1usersettingsget) | **GET** /v1/user/settings | Get User Settings
*UserApi* | [**v1UserSettingsPatch**](docs/UserApi.md#v1usersettingspatchoperation) | **PATCH** /v1/user/settings | Update User Settings
*UserApi* | [**v1UserWatchlistAnimeIdDelete**](docs/UserApi.md#v1userwatchlistanimeiddelete) | **DELETE** /v1/user/watchlist/{animeId} | Remove from Watchlist
*UserApi* | [**v1UserWatchlistAnimeIdPatch**](docs/UserApi.md#v1userwatchlistanimeidpatchoperation) | **PATCH** /v1/user/watchlist/{animeId} | Update Watchlist Entry
*UserApi* | [**v1UserWatchlistGet**](docs/UserApi.md#v1userwatchlistget) | **GET** /v1/user/watchlist | Get User Watchlist
*UserApi* | [**v1UserWatchlistPost**](docs/UserApi.md#v1userwatchlistpostoperation) | **POST** /v1/user/watchlist | Add to Watchlist


### Models

- [HealthGet200Response](docs/HealthGet200Response.md)
- [HealthGet500Response](docs/HealthGet500Response.md)
- [V1AnimeGet200Response](docs/V1AnimeGet200Response.md)
- [V1AnimeGet200ResponseDataInner](docs/V1AnimeGet200ResponseDataInner.md)
- [V1AnimeGet200ResponsePagination](docs/V1AnimeGet200ResponsePagination.md)
- [V1AnimeSlugEpisodesGet200Response](docs/V1AnimeSlugEpisodesGet200Response.md)
- [V1AnimeSlugEpisodesGet200ResponseAnime](docs/V1AnimeSlugEpisodesGet200ResponseAnime.md)
- [V1AnimeSlugEpisodesGet200ResponseDataInner](docs/V1AnimeSlugEpisodesGet200ResponseDataInner.md)
- [V1AnimeSlugGet200Response](docs/V1AnimeSlugGet200Response.md)
- [V1AnimeSlugGet200ResponseData](docs/V1AnimeSlugGet200ResponseData.md)
- [V1AnimeSlugGet200ResponseDataGenresInner](docs/V1AnimeSlugGet200ResponseDataGenresInner.md)
- [V1AnimeSlugGet200ResponseDataSchedule](docs/V1AnimeSlugGet200ResponseDataSchedule.md)
- [V1AnimeSlugGet200ResponseDataTrendingStats](docs/V1AnimeSlugGet200ResponseDataTrendingStats.md)
- [V1CommentsGet200Response](docs/V1CommentsGet200Response.md)
- [V1CommentsGet200ResponseDataInner](docs/V1CommentsGet200ResponseDataInner.md)
- [V1CommentsIdLikePost200Response](docs/V1CommentsIdLikePost200Response.md)
- [V1CommentsIdLikePostRequest](docs/V1CommentsIdLikePostRequest.md)
- [V1CommentsIdReportPostRequest](docs/V1CommentsIdReportPostRequest.md)
- [V1CommentsPost201Response](docs/V1CommentsPost201Response.md)
- [V1CommentsPostRequest](docs/V1CommentsPostRequest.md)
- [V1DashboardAnimeGet200Response](docs/V1DashboardAnimeGet200Response.md)
- [V1DashboardCategoriesGet200Response](docs/V1DashboardCategoriesGet200Response.md)
- [V1DashboardCategoriesGet200ResponseCategoriesInner](docs/V1DashboardCategoriesGet200ResponseCategoriesInner.md)
- [V1DashboardCategoriesGet200ResponseGenresInner](docs/V1DashboardCategoriesGet200ResponseGenresInner.md)
- [V1DashboardEpisodesGet200Response](docs/V1DashboardEpisodesGet200Response.md)
- [V1DashboardModerationGet200Response](docs/V1DashboardModerationGet200Response.md)
- [V1DashboardModerationGet200ResponseReportsInner](docs/V1DashboardModerationGet200ResponseReportsInner.md)
- [V1DashboardModerationGet200ResponseReportsInnerAuthor](docs/V1DashboardModerationGet200ResponseReportsInnerAuthor.md)
- [V1DashboardModerationGet200ResponseReportsInnerReporter](docs/V1DashboardModerationGet200ResponseReportsInnerReporter.md)
- [V1DashboardModerationIdPatchRequest](docs/V1DashboardModerationIdPatchRequest.md)
- [V1DashboardOverviewGet200Response](docs/V1DashboardOverviewGet200Response.md)
- [V1DashboardOverviewGet200ResponseNotificationsInner](docs/V1DashboardOverviewGet200ResponseNotificationsInner.md)
- [V1DashboardOverviewGet200ResponseRecentActivitiesInner](docs/V1DashboardOverviewGet200ResponseRecentActivitiesInner.md)
- [V1DashboardOverviewGet200ResponseTrafficDataInner](docs/V1DashboardOverviewGet200ResponseTrafficDataInner.md)
- [V1DashboardRolesGet200Response](docs/V1DashboardRolesGet200Response.md)
- [V1DashboardRolesGet200ResponseRolesInner](docs/V1DashboardRolesGet200ResponseRolesInner.md)
- [V1DashboardSeasonsGet200Response](docs/V1DashboardSeasonsGet200Response.md)
- [V1DashboardSeasonsGet200ResponseSeasonsInner](docs/V1DashboardSeasonsGet200ResponseSeasonsInner.md)
- [V1DashboardStatsGet200Response](docs/V1DashboardStatsGet200Response.md)
- [V1DashboardStatsGet200ResponseStats](docs/V1DashboardStatsGet200ResponseStats.md)
- [V1DashboardUsersGet200Response](docs/V1DashboardUsersGet200Response.md)
- [V1DashboardUsersGet200ResponseUsersInner](docs/V1DashboardUsersGet200ResponseUsersInner.md)
- [V1EpisodesIdStreamGet200Response](docs/V1EpisodesIdStreamGet200Response.md)
- [V1EpisodesIdStreamGet200ResponseAudioInner](docs/V1EpisodesIdStreamGet200ResponseAudioInner.md)
- [V1EpisodesIdStreamGet200ResponseEpisode](docs/V1EpisodesIdStreamGet200ResponseEpisode.md)
- [V1EpisodesIdStreamGet200ResponseSourcesInner](docs/V1EpisodesIdStreamGet200ResponseSourcesInner.md)
- [V1EpisodesIdStreamGet200ResponseSubtitlesInner](docs/V1EpisodesIdStreamGet200ResponseSubtitlesInner.md)
- [V1ProtectedSampleGet200Response](docs/V1ProtectedSampleGet200Response.md)
- [V1ProtectedSampleGet200ResponseUser](docs/V1ProtectedSampleGet200ResponseUser.md)
- [V1ProtectedSampleGet401Response](docs/V1ProtectedSampleGet401Response.md)
- [V1UploadHlsPost200Response](docs/V1UploadHlsPost200Response.md)
- [V1UploadHlsPost200ResponseData](docs/V1UploadHlsPost200ResponseData.md)
- [V1UploadImagePost200Response](docs/V1UploadImagePost200Response.md)
- [V1UploadImagePost200ResponseData](docs/V1UploadImagePost200ResponseData.md)
- [V1UserHistoryGet200Response](docs/V1UserHistoryGet200Response.md)
- [V1UserHistoryGet200ResponseDataInner](docs/V1UserHistoryGet200ResponseDataInner.md)
- [V1UserHistoryPostRequest](docs/V1UserHistoryPostRequest.md)
- [V1UserProfileGet200Response](docs/V1UserProfileGet200Response.md)
- [V1UserProfileGet200ResponseData](docs/V1UserProfileGet200ResponseData.md)
- [V1UserProfileGet200ResponseDataActivity](docs/V1UserProfileGet200ResponseDataActivity.md)
- [V1UserSettingsGet200Response](docs/V1UserSettingsGet200Response.md)
- [V1UserSettingsGet200ResponseData](docs/V1UserSettingsGet200ResponseData.md)
- [V1UserSettingsGet200ResponseDataNotifications](docs/V1UserSettingsGet200ResponseDataNotifications.md)
- [V1UserSettingsGet200ResponseDataPlayer](docs/V1UserSettingsGet200ResponseDataPlayer.md)
- [V1UserSettingsPatch200Response](docs/V1UserSettingsPatch200Response.md)
- [V1UserSettingsPatchRequest](docs/V1UserSettingsPatchRequest.md)
- [V1UserSettingsPatchRequestNotifications](docs/V1UserSettingsPatchRequestNotifications.md)
- [V1UserSettingsPatchRequestPlayer](docs/V1UserSettingsPatchRequestPlayer.md)
- [V1UserSettingsPatchRequestProfile](docs/V1UserSettingsPatchRequestProfile.md)
- [V1UserWatchlistAnimeIdPatchRequest](docs/V1UserWatchlistAnimeIdPatchRequest.md)
- [V1UserWatchlistGet200Response](docs/V1UserWatchlistGet200Response.md)
- [V1UserWatchlistGet200ResponseDataInner](docs/V1UserWatchlistGet200ResponseDataInner.md)
- [V1UserWatchlistPostRequest](docs/V1UserWatchlistPostRequest.md)

### Authorization


Authentication schemes defined for the API:
<a id="Bearer"></a>
#### Bearer


- **Type**: HTTP Bearer Token authentication (JWT / API-Key)

## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated for ShionStream API using the OpenAPI specification.


- API version: `1.0.0`
- Package version: `1.0.0`
- Generator version: `7.26.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system

For more information, please visit [https://gox.my.id](https://gox.my.id)

## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0.html)
