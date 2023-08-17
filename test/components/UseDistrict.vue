<template>
  <div data-testid="use-district">
    <span v-if="error" id="error"></span>
    <span v-else-if="isLoading" id="loading"></span>
    <span v-else id="data" :data-code="data!.code" :data-name="data!.name"></span>
  </div>
</template>

<script lang="ts" setup>
import { useDistrict } from "../libs";

const { data, error, isLoading } = useDistrict("11.01");
</script>
