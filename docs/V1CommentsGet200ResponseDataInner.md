
# V1CommentsGet200ResponseDataInner


## Properties

Name | Type
------------ | -------------
`id` | string
`animeId` | string
`episodeId` | string
`userId` | string
`guestName` | string
`parentId` | string
`content` | string
`isSpoiler` | boolean
`createdAt` | string
`updatedAt` | string
`likes` | number
`dislikes` | number

## Example

```typescript
import type { V1CommentsGet200ResponseDataInner } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "animeId": null,
  "episodeId": null,
  "userId": null,
  "guestName": null,
  "parentId": null,
  "content": null,
  "isSpoiler": null,
  "createdAt": null,
  "updatedAt": null,
  "likes": null,
  "dislikes": null,
} satisfies V1CommentsGet200ResponseDataInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1CommentsGet200ResponseDataInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


