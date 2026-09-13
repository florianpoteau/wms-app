import type { Response, Request } from "express";
import { getAllZoneService } from "../../services/zones/getAllZone.service";
import { getZoneByIdService } from "../../services/zones/getZoneById.service";

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
}
