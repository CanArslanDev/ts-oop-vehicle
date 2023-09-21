// app.ts

import { Model } from './models/model';
import { Controller } from './controllers/controller';
import { View } from './views/view';

// Örnek araçlar oluşturmak için bir başlangıç fonksiyonu
function createSampleVehicles(model: Model) {
    const controller = new Controller(model);

    // Örnek bisikletler
    controller.createVehicle('bicycle', 'Brand1', 'Model1', 1);
    controller.createVehicle('bicycle', 'Brand2', 'Model2', 2);

    // Örnek araçlar
    controller.createVehicle('car', 'Brand3', 'Model3', 3, 'Automatic', 5);
    controller.createVehicle('car', 'Brand4', 'Model4', 4, 'Manual', 4);

    // Örnek tırlar
    controller.createVehicle('truck', 'Brand5', 'Model5', 5, 5000);
    controller.createVehicle('truck', 'Brand6', 'Model6', 6, 8000);

    // Örnek motorsikletler
    controller.createVehicle('motorcycle', 'Brand7', 'Model7', 1, 'Manual');
    controller.createVehicle('motorcycle', 'Brand8', 'Model8', 2, 'Automatic');
}

const model = new Model();
createSampleVehicles(model);

const controller = new Controller(model);
const view = new View(controller);

view.start();
