# Repro steps

1. `python -m SimpleHTTPServer 8080`
1. `yarn && yarn run cypress open`
1. In Cypress app, run `test-regression.spec.js`
1. Change `index.html` to eg:

```html
<div style="width:200px; height:200px; background-color: green; font-size:40px">
  oh hi
</div>
```

1. Re-run test

## Expected

A snapshot should be taken with the changes, compared to the first one

## Actual

Only a single snapshot is taken, from the previous content (red box, HELLO THERE text)
