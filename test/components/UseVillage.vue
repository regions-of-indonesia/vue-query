<template>
  <div data-testid="use-village">
    <span v-if="error" id="error"></span>
    <span v-else-if="isLoading" id="loading"></span>
    <span v-else id="data" :data-code="data!.code" :data-name="data!.name"></span>
  </div>
</template>

<script lang="ts" setup>
import { useVillage } from "../libs";

const { data, error, isLoading } = useVillage("11.01.01.2001");
</script>
