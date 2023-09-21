// controller.ts
import { Model } from '../models/model';
import { VehicleFactory } from '../vehicles/vehicleFactory';
import { Vehicle } from '../vehicles/vehicleInterface';

export class Controller {
    private model: Model;

    constructor(model: Model) {
        this.model = model;
    }

    createVehicle(type: string, brand: string, model: string, age: number, ...params: any[]): Vehicle {
        const vehicle = VehicleFactory.createVehicle(type, brand, model, age, ...params);
        this.model.addVehicle(vehicle);
        return vehicle;
    }

    listVehicles(): string[] {
        return this.model.listVehicles();
    }

    getVehicleDetailsByBrand(brand: string): string | undefined {
        const vehicle = this.model.getVehicleByBrand(brand);
        if (vehicle) {
            return vehicle.listFeatures();
        } else {
            return 'Vehicle not found.';
        }
    }

    filterVehiclesByAge(ageRange: [number, number]): string[] {
        const filteredVehicles = this.model.filterVehiclesByAge(ageRange);
        return filteredVehicles.map((vehicle) => vehicle.listFeatures());
    }
}
