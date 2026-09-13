import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { findZoneIdRepository } from "../../repositories/zones/findZone.repository";
import { getZoneByIdRepository } from "../../repositories/zones/getZone.repository";

export async function getZoneByIdService(id: string) {
  const zoneId = await findZoneIdRepository(id);

  if (!zoneId) {
    throw new AppError(ERROR.ZONE_NOT_FOUND);
  }
  return await getZoneByIdRepository(id);
}
