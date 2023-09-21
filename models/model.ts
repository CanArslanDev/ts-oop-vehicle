// model.ts
import { Vehicle } from '../vehicles/vehicleInterface';

export class Model {
    private vehicles: Vehicle[] = [];

    addVehicle(vehicle: Vehicle) {
        this.vehicles.push(vehicle);
    }

    listVehicles(): Vehicle[] {
        return this.vehicles.map((vehicle) => vehicle);
    }

    getVehicleByBrand(brand: string): Vehicle | undefined {
        return this.vehicles.find((vehicle) => vehicle.getBrand().toLowerCase() === brand.toLowerCase());
    }

    filterVehiclesByAge(ageRange: [number, number]): Vehicle[] {
        return this.vehicles.filter((vehicle) => {
            const age = vehicle.getAge();
            return age >= ageRange[0] && age <= ageRange[1];
        });
    }
}
