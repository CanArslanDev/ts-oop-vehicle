// vehicleInterface.ts
export interface Vehicle {
    getBrand(): string;
    getModel(): string;
    getAge(): number;
    getWheelCount(): number;
    listFeatures(): string;
}
