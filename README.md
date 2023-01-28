# [Library for Google Apps Script] Webhooks

## Using the Library

There are two ways to import the library to your project:

- Set in your script project dashboard
- Add the configuration into your `appsscript.json`

1. Script Id:

```
1lhpFz-vyfRn7rBdy8xt85rgFqatMhw_5U1ruJm88d3OhJ-HVYPuFW9Ep
```

2. Add the latest version: for example, `1`
3. Use the identifier `Webhooks`

These actions will update your `appsscript.json`.

Or, you can update it directly adding to the `dependencies` object:

```json
"dependencies": {
    "libraries": [
      {
        "userSymbol": "Webhooks",
        "version": "1",
        "libraryId": "1lhpFz-vyfRn7rBdy8xt85rgFqatMhw_5U1ruJm88d3OhJ-HVYPuFW9Ep"
      }
    ]
}
```

> The script runs in the timezone `Etc/GMT`.

## Webhooks

Define a `doPost(e)` function on your script and a routine to what to do with the data when the webhook is triggered. It is also
possible to define a DTO to transform the data to a chosen desired output.

Example:

```javascript
function doPost(e) {
  const dto = (data) => {
    return { a: data.a };
  };
  const data = Webhooks.GetData(e, dto);

  // Webhook routine
  try {
    console.log({ data });
  } catch (err) {
    console.error("Error during Webhook operation!");
    console.error(e);
  }
}
```
