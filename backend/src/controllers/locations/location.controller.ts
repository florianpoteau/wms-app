import type { Request, Response } from "express";
import { getAllLocationService } from "../../services/locations/getAllLocation.service";

export default class LocationController {
  static getAllLocationController = async (req: Request, res: Response) => {
    const locations = await getAllLocationService();
    return res.status(200).json(locations);
  };
}
