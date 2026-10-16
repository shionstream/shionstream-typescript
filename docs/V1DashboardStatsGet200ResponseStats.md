
# V1DashboardStatsGet200ResponseStats


## Properties

Name | Type
------------ | -------------
`totalAnime` | number
`totalEpisodes` | number
`totalUsers` | number
`pendingReports` | number
`activeStreams` | number
`bandwidthUsageGb` | number
`cpuLoadPercent` | number
`storageUsedGb` | number
`monthlyGrowthPercent` | number

## Example

```typescript
import type { V1DashboardStatsGet200ResponseStats } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "totalAnime": null,
  "totalEpisodes": null,
  "totalUsers": null,
  "pendingReports": null,
  "activeStreams": null,
  "bandwidthUsageGb": null,
  "cpuLoadPercent": null,
  "storageUsedGb": null,
  "monthlyGrowthPercent": null,
} satisfies V1DashboardStatsGet200ResponseStats

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1DashboardStatsGet200ResponseStats
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


