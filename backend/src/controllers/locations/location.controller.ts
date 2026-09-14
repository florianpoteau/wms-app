import type { Request, Response } from "express";
import { getAllLocationService } from "../../services/locations/getAllLocation.service";
import { getLocationByIdService } from "../../services/locations/getLocationById.service";
import { createLocationService } from "../../services/locations/createLocation.service";
import { updateLocationService } from "../../services/locations/updateLocation.service";

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

  static createLocationController = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    await createLocationService(data.body);
    return res.status(201).send();
  };

  static updateLocationController = async (req: Request, res: Response) => {
    const data = res.locals.validated;
    await updateLocationService(data.params.id, data.body);
    return res.status(200).send();
  };
}
