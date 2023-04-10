import { create, log } from "@regions-of-indonesia/client";

import { createVueQuery } from "../src";

const { useProvinces, useDistricts, useSubdistricts, useVillages } = createVueQuery(
  create({
    baseURL: { dynamic: "http://127.1.0.0:8000", static: "http://127.1.0.0:8001" },
    middlewares: [log()],
  })
);

export { useProvinces, useDistricts, useSubdistricts, useVillages };
