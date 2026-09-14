import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { createLocationRepository } from "../../repositories/locations/createLocation.repository";
import { findLocationByCodeRepository } from "../../repositories/locations/findLocation.repository";
import type { LocationInput } from "../../validators/locations/location.validator";

export async function createLocationService(data: LocationInput) {
  const locationCode = await findLocationByCodeRepository(data.code);

  if (locationCode) {
    throw new AppError(ERROR.CODE_ALREADY_EXISTS);
  }

  const locations = await createLocationRepository(data);
  return {
    locations,
  };
}
