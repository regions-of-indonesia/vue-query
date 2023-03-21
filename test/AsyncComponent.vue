<script setup lang="ts">
import { useProvinces, useDistricts, useSubdistricts, useVillages } from "./regions-of-indonesia";

const { data: provinces } = useProvinces();
const { data: districts } = useDistricts("11");
const { data: subdistricts } = useSubdistricts("11.01");
const { data: villages } = useVillages("11.01.01");
</script>

<template>
  <div>
    <div v-for="province in provinces" :key="province.code" :data-testid="`province-${province.code}`">{{ province.name }}</div>
    <div v-for="district in districts" :key="district.code" :data-testid="`district-${district.code}`">{{ district.name }}</div>
    <div v-for="subdistrict in subdistricts" :key="subdistrict.code" :data-testid="`subdistrict-${subdistrict.code}`">
      {{ subdistrict.name }}
    </div>
    <div v-for="village in villages" :key="village.code" :data-testid="`village-${village.code}`">{{ village.name }}</div>
  </div>
</template>
