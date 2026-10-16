
# V1UserWatchlistGet200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`animeId` | string
`status` | string
`isFavorite` | boolean
`currentEpisode` | number
`userRating` | number
`createdAt` | string
`updatedAt` | string

## Example

```typescript
import type { V1UserWatchlistGet200ResponseDataInner } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "animeId": null,
  "status": null,
  "isFavorite": null,
  "currentEpisode": null,
  "userRating": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies V1UserWatchlistGet200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UserWatchlistGet200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


