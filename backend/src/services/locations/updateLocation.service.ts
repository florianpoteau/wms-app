import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import {
  findLocationByCodeRepository,
  findLocationByIdRepository,
} from "../../repositories/locations/findLocation.repository";
import { updateLocationRepository } from "../../repositories/locations/updateLocation.repository";
import type { UpdateLocationInput } from "../../validators/locations/location.validator";

export async function updateLocationService(
  id: string,
  data: UpdateLocationInput,
) {
  const locationId = await findLocationByIdRepository(id);
  const locationCode = await findLocationByCodeRepository(data.code);

  if (!locationId) {
    throw new AppError(ERROR.LOCATION_NOT_FOUND);
  }

  if (locationCode && locationCode.id !== id) {
    throw new AppError(ERROR.CODE_ALREADY_EXISTS);
  }

  return await updateLocationRepository(id, data);
}
