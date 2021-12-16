<template>
  <h1>{{tStr}}</h1>
</template>

<script>
export default {
  name: 'vTitle',
  props: {
    tStr: String
  }
}
</script>

<style>
h1{
  font-size: 4rem;
  color: red;
}
</style>