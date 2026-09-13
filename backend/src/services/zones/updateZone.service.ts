import AppError from "../../error/AppError.middleware";
import { ERROR } from "../../error/errorMessages";
import { findZoneCodeRepository } from "../../repositories/zones/findZone.repository";
import { updateZoneRepository } from "../../repositories/zones/updateZone.repository";
import type { UpdateZoneInput } from "../../validators/zones/zone.validator";

export async function updateZoneService(id: string, data: UpdateZoneInput) {
  const existingCode = await findZoneCodeRepository(data.code);

  if (existingCode && existingCode.id !== id) {
    throw new AppError(ERROR.CODE_ALREADY_EXISTS);
  }

  return await updateZoneRepository(id, data);
}
