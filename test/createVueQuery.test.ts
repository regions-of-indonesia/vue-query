import { describe, expect, it } from "vitest";

import { render } from "@testing-library/vue";

import { VueQueryPlugin } from "@tanstack/vue-query";

import { delay, hasOwnProperties, isTypeofObject } from "javascript-yesterday";

import { createVueQuery } from "../src";

import Component from "./Component.vue";

describe("Create Vue Query", () => {
  it("Type check", async () => {
    const query = createVueQuery();

    expect(
      isTypeofObject(query) &&
        hasOwnProperties(
          query,
          "useProvinces",
          "useProvince",
          "useDistricts",
          "useDistrict",
          "useSubdistricts",
          "useSubdistrict",
          "useVillages",
          "useVillage",
          "useSearch",
          "useSearchProvinces",
          "useSearchDistricts",
          "useSearchSubdistricts",
          "useSearchVillages"
        )
    ).toBeTruthy();

    expect(query.useProvinces).toBeTypeOf("function");
    expect(query.useProvince).toBeTypeOf("function");
    expect(query.useDistricts).toBeTypeOf("function");
    expect(query.useDistrict).toBeTypeOf("function");
    expect(query.useSubdistricts).toBeTypeOf("function");
    expect(query.useSubdistrict).toBeTypeOf("function");
    expect(query.useVillages).toBeTypeOf("function");
    expect(query.useVillage).toBeTypeOf("function");
    expect(query.useSearch).toBeTypeOf("function");
    expect(query.useSearchProvinces).toBeTypeOf("function");
    expect(query.useSearchDistricts).toBeTypeOf("function");
    expect(query.useSearchSubdistricts).toBeTypeOf("function");
    expect(query.useSearchVillages).toBeTypeOf("function");
  });

  it("Component", async () => {
    const { getByTestId } = render(Component, { global: { plugins: [VueQueryPlugin] } });

    await delay(1000);

    const code11 = getByTestId("code-11");
    const code12 = getByTestId("code-12");
    const code13 = getByTestId("code-13");

    expect(code11).toBeDefined();
    expect(code12).toBeDefined();
    expect(code13).toBeDefined();
  });
});
