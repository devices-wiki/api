import CPU from "./CPU";
import RAM from "./RAM";
import Storage from "./Storage";
import Display from "./Display";

export default class Laptop {
    public readonly id: number;
    public readonly model: string;
    public readonly brand: string;
    public readonly cpu: CPU;
    public readonly ram: RAM;
    public readonly storage: Storage[];
    public readonly screen: Display;
    // Dimensions of laptop in centimeters
    public readonly dimensions: {x: number, y: number, z: number};
    // Weight in kilograms
    public readonly weight: number;
    public readonly material: string;
    public readonly launchDate: Date | null;
    // Battery capacity in Wh
    public readonly batteryCapacity: number;
    public readonly microphonePresent: boolean;
    // Null means no camera is present
    public readonly camera: {resolution: number, fps: number} | null;
    public readonly WiFiConnectivity: {"version": string | number, "dualBand": boolean} | null;
    // Null means no bluetooth support
    public readonly bluetoothVersion: number | null;
    // List all cellular bands if appliicable
    public readonly cellularBands: string[] | null;

    constructor(id: number, model: string, brand: string, cpu: CPU, ram: RAM, storage: Storage[], screen: Display, dimensions: {x: number, y: number, z: number}, weight: number, material: string, launchDate: Date | null, batteryCapacity: number, microphonePresent: boolean, camera: {resolution: number, fps: number} | null, WiFiConnectivity: {"version": string | number, "dualBand": boolean} | null, bluetoothVersion: number | null, cellularBands: string[] | null) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.cpu = cpu;
        this.ram = ram;
        this.storage = storage;
        this.screen = screen;
        this.dimensions = dimensions;
        this.weight = weight;
        this.material = material;
        this.launchDate = launchDate;
        this.batteryCapacity = batteryCapacity;
        this.microphonePresent = microphonePresent;
        this.camera = camera;
        this.WiFiConnectivity = WiFiConnectivity;
        this.bluetoothVersion = bluetoothVersion;
        this.cellularBands = cellularBands;
    }
}