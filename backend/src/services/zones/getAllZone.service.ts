import { getAllZoneRepository } from "../../repositories/zones/getZone.repository";
import type { PaginationInput } from "../../validators/commons/getAllPaginationQuery.validator";

export async function getAllZoneService() {
  const zones = await getAllZoneRepository();

  return {
    zones,
  };
}
