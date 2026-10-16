
# V1AnimeSlugEpisodesGet200Response


## Properties

Name | Type
------------ | -------------
`success` | boolean
`anime` | [V1AnimeSlugEpisodesGet200ResponseAnime](V1AnimeSlugEpisodesGet200ResponseAnime.md)
`data` | [Array&lt;V1AnimeSlugEpisodesGet200ResponseDataInner&gt;](V1AnimeSlugEpisodesGet200ResponseDataInner.md)
`pagination` | [V1AnimeGet200ResponsePagination](V1AnimeGet200ResponsePagination.md)

## Example

```typescript
import type { V1AnimeSlugEpisodesGet200Response } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "anime": null,
  "data": null,
  "pagination": null,
} satisfies V1AnimeSlugEpisodesGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1AnimeSlugEpisodesGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


