<script setup lang="ts">
import { useProvinces } from "./regions-of-indonesia";

const { data } = useProvinces();
</script>

<template>
  <div>
    <div v-for="item in data" :key="item.code" :data-testid="`code-${item.code}`">{{ item.name }}</div>
  </div>
</template>
