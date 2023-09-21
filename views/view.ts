// view.ts
import readline from 'readline';
import { Controller } from '../controllers/controller';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export class View {
    private controller: Controller;

    constructor(controller: Controller) {
        this.controller = controller;
    }

    start() {
        console.log('Welcome to the Vehicle App!');
        this.showMenu();
    }

    showMenu() {
        console.log('Select an option:');
        console.log('1. Create a new vehicle');
        console.log('2. List all vehicles');
        console.log('3. Get vehicle details by brand');
        console.log('4. Filter vehicles by age');
        console.log('5. Exit');

        rl.question('Enter your choice: ', (choice) => {
            switch (choice) {
                case '1':
                    this.createVehicle();
                    break;
                case '2':
                    this.listVehicles();
                    break;
                case '3':
                    this.getVehicleDetails();
                    break;
                case '4':
                    this.filterVehiclesByAge();
                    break;
                case '5':
                    rl.close();
                    break;
                default:
                    console.log('Invalid choice. Try again.');
                    this.showMenu();
                    break;
            }
        });
    }

    createVehicle() {
        rl.question('Enter vehicle type (bicycle, car, truck, motorcycle): ', (type) => {
            rl.question('Enter brand: ', (brand) => {
                rl.question('Enter model: ', (model) => {
                    rl.question('Enter age: ', (age) => {
                        const vehicle = this.controller.createVehicle(type, brand, model, parseInt(age));
                        console.log(`Created a new ${type} with brand ${brand} and model ${model}.`);
                        this.showMenu();
                    });
                });
            });
        });
    }

    listVehicles() {
        const vehicles = this.controller.listVehicles();
        if (vehicles.length === 0) {
            console.log('No vehicles available.');
        } else {
            console.log('List of vehicles:');
            vehicles.forEach((vehicle) => console.log(vehicle));
        }
        this.showMenu();
    }

    getVehicleDetails() {
        rl.question('Enter brand of the vehicle: ', (brand) => {
            const details = this.controller.getVehicleDetailsByBrand(brand);
            console.log(details);
            this.showMenu();
        });
    }

    filterVehiclesByAge() {
        rl.question('Enter minimum age: ', (minAge) => {
            rl.question('Enter maximum age: ', (maxAge) => {
                const ageRange: [number, number] = [parseInt(minAge), parseInt(maxAge)];
                const vehicles = this.controller.filterVehiclesByAge(ageRange);
                if (vehicles.length === 0) {
                    console.log('No vehicles in the specified age range.');
                } else {
                    console.log(`Vehicles in the age range ${minAge}-${maxAge}:`);
                    vehicles.forEach((vehicle) => console.log(vehicle));
                }
                this.showMenu();
            });
        });
    }

}
