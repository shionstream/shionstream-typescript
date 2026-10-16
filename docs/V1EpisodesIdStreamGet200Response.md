
# V1EpisodesIdStreamGet200Response


## Properties

Name | Type
------------ | -------------
`success` | boolean
`episode` | [V1EpisodesIdStreamGet200ResponseEpisode](V1EpisodesIdStreamGet200ResponseEpisode.md)
`sources` | [Array&lt;V1EpisodesIdStreamGet200ResponseSourcesInner&gt;](V1EpisodesIdStreamGet200ResponseSourcesInner.md)
`subtitles` | [Array&lt;V1EpisodesIdStreamGet200ResponseSubtitlesInner&gt;](V1EpisodesIdStreamGet200ResponseSubtitlesInner.md)
`audio` | [Array&lt;V1EpisodesIdStreamGet200ResponseAudioInner&gt;](V1EpisodesIdStreamGet200ResponseAudioInner.md)

## Example

```typescript
import type { V1EpisodesIdStreamGet200Response } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "success": null,
  "episode": null,
  "sources": null,
  "subtitles": null,
  "audio": null,
} satisfies V1EpisodesIdStreamGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1EpisodesIdStreamGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


