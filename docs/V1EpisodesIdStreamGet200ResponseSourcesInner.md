
# V1EpisodesIdStreamGet200ResponseSourcesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`serverName` | string
`streamUrl` | string
`format` | string
`quality` | string
`url1080p` | string
`url720p` | string
`url480p` | string
`url360p` | string
`isPrimary` | boolean

## Example

```typescript
import type { V1EpisodesIdStreamGet200ResponseSourcesInner } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "serverName": null,
  "streamUrl": null,
  "format": null,
  "quality": null,
  "url1080p": null,
  "url720p": null,
  "url480p": null,
  "url360p": null,
  "isPrimary": null,
} satisfies V1EpisodesIdStreamGet200ResponseSourcesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1EpisodesIdStreamGet200ResponseSourcesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


