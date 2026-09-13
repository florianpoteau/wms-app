import { getAllZoneRepository } from "../../repositories/zones/getZone.repository";

export async function getAllZoneService() {
  const zones = await getAllZoneRepository();

  return {
    zones,
  };
}
