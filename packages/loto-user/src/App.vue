<template>
  <h2>{{ userName }}</h2>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { generate } from 'random-words';

const userName = ref(generate());
</script>