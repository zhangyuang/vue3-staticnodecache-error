```bash
$ yarn && yarn dev
```
root component will remove element in beforeUnmount will generate side effect
click `tohello` to open hello component and return back to root component, `foo` element will never be rerender because root component is static and be cached