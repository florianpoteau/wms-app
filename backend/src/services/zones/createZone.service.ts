import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { createZoneRepository } from "../../repositories/zones/createZone.repository";
import { findZoneCodeRepository } from "../../repositories/zones/findZone.repository";
import type { ZoneInput } from "../../validators/zones/zone.validator";

export async function createZoneService(data: ZoneInput) {
  const existingCode = await findZoneCodeRepository(data.code);
  if (existingCode) {
    throw new AppError(ERROR.CODE_ALREADY_EXISTS);
  }

  await createZoneRepository(data);
}
