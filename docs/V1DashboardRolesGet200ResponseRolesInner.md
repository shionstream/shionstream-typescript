
# V1DashboardRolesGet200ResponseRolesInner


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`slug` | string
`description` | string
`memberCount` | number
`permissions` | Array&lt;string&gt;
`isDefault` | boolean

## Example

```typescript
import type { V1DashboardRolesGet200ResponseRolesInner } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "slug": null,
  "description": null,
  "memberCount": null,
  "permissions": null,
  "isDefault": null,
} satisfies V1DashboardRolesGet200ResponseRolesInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1DashboardRolesGet200ResponseRolesInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


