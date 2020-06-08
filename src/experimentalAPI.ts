import Axios, { AxiosPromise } from "axios";
import { RouteResponse } from "./generated/graphhopper-api/model/route-response";
import * as papa from "papaparse";

/**
 * Route with new features such as custom weighting.
 * This endpoint isn't in the OpenAPI spec yet as it's subject to change,
 * and thus not in our generated client.
 */
export function getCustomRoute(data: any, basePath: string) {
  return Axios.request<any, AxiosPromise<RouteResponse>>({
    url: basePath + "/route-custom",
    data,
    method: "POST",
  });
  //
}

// TODO: if the binary endpoint in https://github.com/graphhopper/isochrone-experiments/
// is significantly faster, consider updating and supporting that

/**
 * Get SPT info to be used as basis for Isochrone visualization.
 * This endpoint isn't in the OpenAPI spec yet, and thus not in our generated client
 */
export async function getSPT(params: any, basePath: string) {
  const data = await Axios.request<any, AxiosPromise<any>>({
    url: basePath + "/spt",
    params,
    method: "GET",
  });
  if (data.status == 200) {
    const parseResult = papa.parse(data.data, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
    });
    if (parseResult.errors.length) {
      throw new Error("error during parsing of csv");
    }
    data.data = parseResult.data as any;
  }
  return data;
}

export type GraphHopperInfo = {
  bbox: [number, number, number, number];
  profiles: Array<{
    profile_name: string;
    vehicle: string;
  }>;
  supported_vehicles: string[];
  version: string;
  elevation: boolean;
  encoded_values: { [encoded_value: string]: string[] };
  import_date: string;
  data_date: string;
  prepare_ch_date: string;
  prepare_date: string;
};
/**
 * Get info about the GraphHopper instance
 * This endpoint isn't in the OpenAPI spec yet, and thus not in our generated client
 */
export async function getInfo(params: any, basePath: string) {
  return Axios.request<GraphHopperInfo>({
    url: basePath + "/info",
    method: "GET",
    params,
  });
}
