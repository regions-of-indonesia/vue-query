import { RegionsOfIndonesiaClient } from "@regions-of-indonesia/client";

import { createVueQuery } from "../src";

const { useProvinces, useDistricts, useSubdistricts, useVillages } = createVueQuery(
  new RegionsOfIndonesiaClient({ baseURL: { dynamic: "http://127.1.0.0:8000" } })
);

export { useProvinces, useDistricts, useSubdistricts, useVillages };
