
# V1UserSettingsPatchRequest


## Properties

Name | Type
------------ | -------------
`profile` | [V1UserSettingsPatchRequestProfile](V1UserSettingsPatchRequestProfile.md)
`player` | [V1UserSettingsPatchRequestPlayer](V1UserSettingsPatchRequestPlayer.md)
`notifications` | [V1UserSettingsPatchRequestNotifications](V1UserSettingsPatchRequestNotifications.md)

## Example

```typescript
import type { V1UserSettingsPatchRequest } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "profile": null,
  "player": null,
  "notifications": null,
} satisfies V1UserSettingsPatchRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UserSettingsPatchRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


