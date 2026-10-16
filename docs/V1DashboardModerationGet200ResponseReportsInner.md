
# V1DashboardModerationGet200ResponseReportsInner


## Properties

Name | Type
------------ | -------------
`id` | string
`commentId` | string
`commentText` | string
`animeTitle` | string
`episodeNumber` | number
`author` | [V1DashboardModerationGet200ResponseReportsInnerAuthor](V1DashboardModerationGet200ResponseReportsInnerAuthor.md)
`reporter` | [V1DashboardModerationGet200ResponseReportsInnerReporter](V1DashboardModerationGet200ResponseReportsInnerReporter.md)
`reason` | string
`status` | string
`reportedAt` | string
`flaggedBySystem` | boolean

## Example

```typescript
import type { V1DashboardModerationGet200ResponseReportsInner } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "commentId": null,
  "commentText": null,
  "animeTitle": null,
  "episodeNumber": null,
  "author": null,
  "reporter": null,
  "reason": null,
  "status": null,
  "reportedAt": null,
  "flaggedBySystem": null,
} satisfies V1DashboardModerationGet200ResponseReportsInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1DashboardModerationGet200ResponseReportsInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


