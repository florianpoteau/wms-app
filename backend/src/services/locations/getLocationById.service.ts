import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { getLocationByIdRepository } from "../../repositories/locations/getLocation.repository";

export async function getLocationByIdService(id: string) {
  const locationId = await getLocationByIdRepository(id);
  if (!locationId) {
    throw new AppError(ERROR.LOCATION_NOT_FOUND);
  }
  return await getLocationByIdRepository(id);
}
