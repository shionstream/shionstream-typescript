
# V1DashboardCategoriesGet200Response


## Properties

Name | Type
------------ | -------------
`categories` | [Array&lt;V1DashboardCategoriesGet200ResponseCategoriesInner&gt;](V1DashboardCategoriesGet200ResponseCategoriesInner.md)
`genres` | [Array&lt;V1DashboardCategoriesGet200ResponseGenresInner&gt;](V1DashboardCategoriesGet200ResponseGenresInner.md)

## Example

```typescript
import type { V1DashboardCategoriesGet200Response } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "categories": null,
  "genres": null,
} satisfies V1DashboardCategoriesGet200Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1DashboardCategoriesGet200Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


