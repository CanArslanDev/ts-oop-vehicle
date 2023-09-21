// motorcycle.ts
import { BaseVehicle } from './vehicle';

export class Motorcycle extends BaseVehicle {
    private gearType: string;

    constructor(brand: string, model: string, age: number, gearType: string) {
        super(brand, model, age, 2);
        this.gearType = gearType;
    }

    getGearType(): string {
        return this.gearType;
    }

    listFeatures(): string {
        return `Brand: ${this.getBrand()}, Model: ${this.getModel()}, Age: ${this.getAge()}, Wheels: ${this.getWheelCount()}, Gear Type: ${this.gearType}, Type: Motorcycle`;
    }
}
