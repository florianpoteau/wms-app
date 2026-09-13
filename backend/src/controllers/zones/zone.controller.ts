import type { Response, Request } from "express";
import { getAllZoneService } from "../../services/zones/getAllZone.service";
import { getZoneByIdService } from "../../services/zones/getZoneById.service";
import { createZoneService } from "../../services/zones/createZone.service";
import { updateZoneService } from "../../services/zones/updateZone.service";

export class ZoneController {
  static getAllZoneController = async (req: Request, res: Response) => {
    const zones = await getAllZoneService();
    return res.status(200).json(zones);
  };

  static getZoneByIdController = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    const zone = await getZoneByIdService(data.params.id);
    return res.status(200).json(zone);
  };

  static createZoneController = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    await createZoneService(data.body);
    return res.status(201).send();
  };

  static updateZoneController = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    await updateZoneService(data.params.id, data.body);
    return res.status(200).send();
  };
}
