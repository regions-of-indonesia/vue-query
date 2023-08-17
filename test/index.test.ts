import { describe, expect, it } from "vitest";

import { render } from "@testing-library/vue";

import { VueQueryPlugin } from "@tanstack/vue-query";

import { isRegionCode, isRegionName } from "@regions-of-indonesia/utils";

import UseProvinces from "./components/UseProvinces.vue";
import UseProvince from "./components/UseProvince.vue";
import UseDistricts from "./components/UseDistricts.vue";
import UseDistrict from "./components/UseDistrict.vue";
import UseSubdistricts from "./components/UseSubdistricts.vue";
import UseSubdistrict from "./components/UseSubdistrict.vue";
import UseVillages from "./components/UseVillages.vue";
import UseVillage from "./components/UseVillage.vue";
import UseRegion from "./components/UseRegion.vue";
import UseSearch from "./components/UseSearch.vue";
import UseSearchProvinces from "./components/UseSearchProvinces.vue";
import UseSearchDistricts from "./components/UseSearchDistricts.vue";
import UseSearchSubdistricts from "./components/UseSearchSubdistricts.vue";
import UseSearchVillages from "./components/UseSearchVillages.vue";

const fetching = () => new Promise<void>((resolve) => setTimeout(resolve, 200));

const getDataElement = async (element: HTMLElement) => {
  expect(element).toBeDefined();
  expect(element.querySelector("#loading")).toBeDefined();
  await fetching();
  expect(element.querySelector("#error")).toBeNull();
  const data = element.querySelector("#data");
  expect(data).toBeDefined();
  return data!;
};

const expectRegionElement = (element: Element) => {
  expect(isRegionCode(element.getAttribute("data-code"))).toEqual(true);
  expect(isRegionName(element.getAttribute("data-name"))).toEqual(true);
};

const expectRegionsElement = (element: Element) => {
  [...element.children].forEach(expectRegionElement);
};

const renderQueryOptions = { global: { plugins: [VueQueryPlugin] } };

const itRegionElement = (id: string, element: any) => {
  it(id, async () => expectRegionElement(await getDataElement(render(element, renderQueryOptions).getByTestId(id))));
};

const itRegionsElement = (id: string, element: any) => {
  it(id, async () => expectRegionsElement(await getDataElement(render(element, renderQueryOptions).getByTestId(id))));
};

describe("Data", () => {
  itRegionsElement("use-provinces", UseProvinces);
  itRegionElement("use-province", UseProvince);
  itRegionsElement("use-districts", UseDistricts);
  itRegionElement("use-district", UseDistrict);
  itRegionsElement("use-subdistricts", UseSubdistricts);
  itRegionElement("use-subdistrict", UseSubdistrict);
  itRegionsElement("use-villages", UseVillages);
  itRegionElement("use-village", UseVillage);
  itRegionElement("use-region", UseRegion);
  itRegionsElement("use-search", UseSearch);
  itRegionsElement("use-search-provinces", UseSearchProvinces);
  itRegionsElement("use-search-districts", UseSearchDistricts);
  itRegionsElement("use-search-subdistricts", UseSearchSubdistricts);
  itRegionsElement("use-search-villages", UseSearchVillages);
});
