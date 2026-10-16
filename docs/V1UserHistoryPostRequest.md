
# V1UserHistoryPostRequest


## Properties

Name | Type
------------ | -------------
`animeId` | string
`episodeId` | string
`episodeNumber` | number
`progressPercent` | number
`durationSeconds` | number
`progressSeconds` | number

## Example

```typescript
import type { V1UserHistoryPostRequest } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "animeId": null,
  "episodeId": null,
  "episodeNumber": null,
  "progressPercent": null,
  "durationSeconds": null,
  "progressSeconds": null,
} satisfies V1UserHistoryPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UserHistoryPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


