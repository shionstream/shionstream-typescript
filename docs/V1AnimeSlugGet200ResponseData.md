
# V1AnimeSlugGet200ResponseData


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`titleRomaji` | string
`titleEnglish` | string
`titleJapanese` | string
`synopsis` | string
`coverImage` | string
`bannerImage` | string
`type` | string
`status` | string
`seasonName` | string
`seasonYear` | number
`episodesCount` | number
`durationPerEp` | string
`rating` | number
`isFeatured` | boolean
`isTrending` | boolean
`subOrDub` | string
`genres` | [Array&lt;V1AnimeSlugGet200ResponseDataGenresInner&gt;](V1AnimeSlugGet200ResponseDataGenresInner.md)
`studios` | [Array&lt;V1AnimeSlugGet200ResponseDataGenresInner&gt;](V1AnimeSlugGet200ResponseDataGenresInner.md)
`schedule` | [V1AnimeSlugGet200ResponseDataSchedule](V1AnimeSlugGet200ResponseDataSchedule.md)
`trendingStats` | [V1AnimeSlugGet200ResponseDataTrendingStats](V1AnimeSlugGet200ResponseDataTrendingStats.md)

## Example

```typescript
import type { V1AnimeSlugGet200ResponseData } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "titleRomaji": null,
  "titleEnglish": null,
  "titleJapanese": null,
  "synopsis": null,
  "coverImage": null,
  "bannerImage": null,
  "type": null,
  "status": null,
  "seasonName": null,
  "seasonYear": null,
  "episodesCount": null,
  "durationPerEp": null,
  "rating": null,
  "isFeatured": null,
  "isTrending": null,
  "subOrDub": null,
  "genres": null,
  "studios": null,
  "schedule": null,
  "trendingStats": null,
} satisfies V1AnimeSlugGet200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1AnimeSlugGet200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


