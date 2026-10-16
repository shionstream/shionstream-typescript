
# V1DashboardUsersGet200Response


## Properties

Name | Type
------------ | -------------
`users` | [Array&lt;V1DashboardUsersGet200ResponseUsersInner&gt;](V1DashboardUsersGet200ResponseUsersInner.md)
`total` | number
`page` | number
`limit` | number

## Example

```typescript
import type { V1DashboardUsersGet200Response } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "users": null,
  "total": null,
  "page": null,
  "limit": null,
} satisfies V1DashboardUsersGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1DashboardUsersGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


