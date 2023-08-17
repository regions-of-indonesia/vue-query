<template>
  <div data-testid="use-provinces">
    <span v-if="error" id="error"></span>
    <span v-else-if="isLoading" id="loading"></span>
    <ul v-else id="data">
      <li v-for="item in data" :data-code="item!.code" :data-name="item!.name"></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useProvinces } from "../libs";

const { data, error, isLoading } = useProvinces();
</script>
