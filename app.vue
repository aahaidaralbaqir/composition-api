<template>
  <div>
    <button @click="increment">{{ count }}</button>
    <button @click="a++">{{ a }}</button>
    <button @click="b++">{{ b }}</button>
    <hr>
    <div v-for="(msg, index) in history" :key="index">
      {{ msg }}
    </div>
  </div>
</template>

<script>
import useNumber from "./composition/number";
export default {
  setup() {
    const {
      increment,
      history,
      a,
      b,
      count
    } = useNumber();

    return {
      increment,
      history,
      a,
      b,
      count
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>