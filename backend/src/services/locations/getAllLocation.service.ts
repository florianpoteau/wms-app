import { getAllLocationRepository } from "../../repositories/locations/getLocation.repository";

export async function getAllLocationService() {
  const locations = await getAllLocationRepository();
  return {
    locations,
  };
}
