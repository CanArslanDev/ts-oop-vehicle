// bicycle.ts
import { BaseVehicle } from './vehicle';

export class Bicycle extends BaseVehicle {
    constructor(brand: string, model: string, age: number) {
        super(brand, model, age, 2);
    }

    listFeatures(): string {
        return `Brand: ${this.getBrand()}, Model: ${this.getModel()}, Age: ${this.getAge()}, Wheels: ${this.getWheelCount()}, Type: Bicycle`;
    }
}
