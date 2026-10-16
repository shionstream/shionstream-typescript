
# HealthGet500Response


## Properties

Name | Type
------------ | -------------
`status` | string
`timestamp` | string
`database` | string
`error` | string

## Example

```typescript
import type { HealthGet500Response } from '@shionstream/shionstream-sdk'

// TODO: Update the object below with actual values
const example = {
  "status": null,
  "timestamp": null,
  "database": null,
  "error": null,
} satisfies HealthGet500Response

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HealthGet500Response
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


