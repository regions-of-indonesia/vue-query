<template>
  <div data-testid="use-province">
    <span v-if="error" id="error"></span>
    <span v-else-if="isLoading" id="loading"></span>
    <span v-else id="data" :data-code="data!.code" :data-name="data!.name"></span>
  </div>
</template>

<script lang="ts" setup>
import { useProvince } from "../libs";

const { data, error, isLoading } = useProvince("11");
</script>
