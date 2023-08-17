<template>
  <div data-testid="use-search-provinces">
    <span v-if="error" id="error"></span>
    <span v-else-if="isLoading" id="loading"></span>
    <ul v-else id="data">
      <li v-for="item in data" :data-code="item!.code" :data-name="item!.name"></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useSearchProvinces } from "../libs";

const { data, error, isLoading } = useSearchProvinces("a");
</script>
