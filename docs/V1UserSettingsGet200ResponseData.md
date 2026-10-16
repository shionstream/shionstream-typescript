
# V1UserSettingsGet200ResponseData


## Properties

Name | Type
------------ | -------------
`player` | [V1UserSettingsGet200ResponseDataPlayer](V1UserSettingsGet200ResponseDataPlayer.md)
`notifications` | [V1UserSettingsGet200ResponseDataNotifications](V1UserSettingsGet200ResponseDataNotifications.md)

## Example

```typescript
import type { V1UserSettingsGet200ResponseData } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "player": null,
  "notifications": null,
} satisfies V1UserSettingsGet200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UserSettingsGet200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


