import type { Response, Request } from "express";
import { getAllZoneService } from "../../services/zones/getAllZone.service";

export class ZoneController {
  static getAllZoneController = async (req: Request, res: Response) => {
    console.log(req);

    const zones = await getAllZoneService();
    return res.status(200).json(zones);
  };
}
