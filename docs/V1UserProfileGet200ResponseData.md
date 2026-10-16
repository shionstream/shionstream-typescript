
# V1UserProfileGet200ResponseData


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`email` | string
`image` | string
`role` | string
`activity` | [V1UserProfileGet200ResponseDataActivity](V1UserProfileGet200ResponseDataActivity.md)

## Example

```typescript
import type { V1UserProfileGet200ResponseData } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "email": null,
  "image": null,
  "role": null,
  "activity": null,
} satisfies V1UserProfileGet200ResponseData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1UserProfileGet200ResponseData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


