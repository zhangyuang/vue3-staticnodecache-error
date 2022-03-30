```bash
$ yarn && yarn dev
```
root component will remove element in beforeUnmount will generate side effect
click `tohello` to open hello component and return back to root component, `foo` element will never be rerender because root component is static and be cached


```ts

<template>
  <div>
    <div class="parent">
      <div class="foo" style="font-size:12px">
        will never be rerender after unmount when children list too large
      </div>
      <div class="video-mask">
        <ul>
          <li>列表1</li>
          <li>列表2</li>
          <li>列表3</li>
          <li>列表4</li>
          <li>列表5</li>
          <li>列表6</li>
          <li>列表7</li>
          <li>列表8</li>
          <li>列表9</li>
          <li>列表10</li>
          <li>列表11</li>
          <li>列表12</li>
          <li>列表13</li>
          <li>列表14</li>
          <li>列表15</li>
          <li>列表16</li>
        </ul>
      </div>
    </div>
    <div @click="foo">
      toHello
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const foo = () => {
  router.push('/hello')
}
onMounted(() => {
  console.log('mounted')
})
onBeforeUnmount(() => {
  const box = document.querySelector('.foo')
  box?.remove()
})
</script>

```