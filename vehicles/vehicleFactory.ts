// vehicleFactory.ts
import { Vehicle } from './vehicleInterface';
import { Bicycle } from './bicycle';
import { Car } from './car';
import { Truck } from './truck';
import { Motorcycle } from './motorcycle';

export class VehicleFactory {
    static createVehicle(type: string, brand: string, model: string, age: number, ...params: any[]): Vehicle {
        switch (type.toLowerCase()) {
            case 'bicycle':
                return new Bicycle(brand, model, age);
            case 'car':
                const [transmission, seatCount] = params;
                return new Car(brand, model, age, transmission, seatCount);
            case 'truck':
                const [payloadCapacity] = params;
                return new Truck(brand, model, age, payloadCapacity);
            case 'motorcycle':
                const [gearType] = params;
                return new Motorcycle(brand, model, age, gearType);
            default:
                throw new Error('Invalid vehicle type.');
        }
    }
}
