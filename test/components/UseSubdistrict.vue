<template>
  <div data-testid="use-subdistrict">
    <span v-if="error" id="error"></span>
    <span v-else-if="isLoading" id="loading"></span>
    <span v-else id="data" :data-code="data!.code" :data-name="data!.name"></span>
  </div>
</template>

<script lang="ts" setup>
import { useSubdistrict } from "../libs";

const { data, error, isLoading } = useSubdistrict("11.01.01");
</script>
