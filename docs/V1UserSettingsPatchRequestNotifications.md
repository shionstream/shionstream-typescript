
# V1UserSettingsPatchRequestNotifications


## Properties

Name | Type
------------ | -------------
`newEpisodeAlerts` | boolean
`watchlistUpdates` | boolean
`marketingEmails` | boolean
`publicWatchlist` | boolean

## Example

```typescript
import type { V1UserSettingsPatchRequestNotifications } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "newEpisodeAlerts": null,
  "watchlistUpdates": null,
  "marketingEmails": null,
  "publicWatchlist": null,
} satisfies V1UserSettingsPatchRequestNotifications

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UserSettingsPatchRequestNotifications
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


