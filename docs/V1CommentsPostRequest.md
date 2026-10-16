
# V1CommentsPostRequest


## Properties

Name | Type
------------ | -------------
`animeId` | string
`episodeId` | string
`content` | string
`parentId` | string
`isSpoiler` | boolean
`guestName` | string
`guestEmail` | string

## Example

```typescript
import type { V1CommentsPostRequest } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "animeId": null,
  "episodeId": null,
  "content": null,
  "parentId": null,
  "isSpoiler": null,
  "guestName": null,
  "guestEmail": null,
} satisfies V1CommentsPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1CommentsPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


