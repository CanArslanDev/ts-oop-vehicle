// car.ts
import { BaseVehicle } from './vehicle';

export class Car extends BaseVehicle {
    private transmission: string;
    private seatCount: number;

    constructor(brand: string, model: string, age: number, transmission: string, seatCount: number) {
        super(brand, model, age, 4);
        this.transmission = transmission;
        this.seatCount = seatCount;
    }

    getTransmission(): string {
        return this.transmission;
    }

    getSeatCount(): number {
        return this.seatCount;
    }

    listFeatures(): string {
        return `Brand: ${this.getBrand()}, Model: ${this.getModel()}, Age: ${this.getAge()}, Wheels: ${this.getWheelCount()}, Transmission: ${this.transmission}, Seats: ${this.seatCount}, Type: Car`;
    }
}
