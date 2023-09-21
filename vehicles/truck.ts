// truck.ts
import { BaseVehicle } from './vehicle';

export class Truck extends BaseVehicle {
    private payloadCapacity: number;

    constructor(brand: string, model: string, age: number, payloadCapacity: number) {
        super(brand, model, age, 6);
        this.payloadCapacity = payloadCapacity;
    }

    getPayloadCapacity(): number {
        return this.payloadCapacity;
    }

    listFeatures(): string {
        return `Brand: ${this.getBrand()}, Model: ${this.getModel()}, Age: ${this.getAge()}, Wheels: ${this.getWheelCount()}, Payload Capacity: ${this.payloadCapacity}, Type: Truck`;
    }
}
