import type { Request, Response } from "express";
import { getAllLocationService } from "../../services/locations/getAllLocation.service";
import { getLocationByIdService } from "../../services/locations/getLocationById.service";
import { createLocationService } from "../../services/locations/createLocation.service";

export default class LocationController {
  static getAllLocationController = async (req: Request, res: Response) => {
    const locations = await getAllLocationService();
    return res.status(200).json(locations);
  };

  static getLocationByIdController = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    const location = await getLocationByIdService(data.params.id);
    return res.status(200).json(location);
  };

  static createLocationRepository = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    await createLocationService(data.body);
    return res.status(201).send();
  };
}
