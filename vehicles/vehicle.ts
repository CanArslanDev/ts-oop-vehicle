// vehicle.ts
import { Vehicle } from './vehicleInterface';

export abstract class BaseVehicle implements Vehicle {
    private brand: string;
    private model: string;
    private age: number;
    private wheelCount: number;

    constructor(brand: string, model: string, age: number, wheelCount: number) {
        this.brand = brand;
        this.model = model;
        this.age = age;
        this.wheelCount = wheelCount;
    }

    getBrand(): string {
        return this.brand;
    }

    getModel(): string {
        return this.model;
    }

    getAge(): number {
        return this.age;
    }

    getWheelCount(): number {
        return this.wheelCount;
    }

    abstract listFeatures(): string;
}
