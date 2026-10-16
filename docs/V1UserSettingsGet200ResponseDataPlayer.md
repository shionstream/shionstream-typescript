
# V1UserSettingsGet200ResponseDataPlayer


## Properties

Name | Type
------------ | -------------
`defaultQuality` | string
`defaultSubtitle` | string
`autoPlayNext` | boolean
`autoSkipIntro` | boolean
`preferredAudio` | string

## Example

```typescript
import type { V1UserSettingsGet200ResponseDataPlayer } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "defaultQuality": null,
  "defaultSubtitle": null,
  "autoPlayNext": null,
  "autoSkipIntro": null,
  "preferredAudio": null,
} satisfies V1UserSettingsGet200ResponseDataPlayer

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UserSettingsGet200ResponseDataPlayer
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


