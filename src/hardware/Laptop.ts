import CPU from "./CPU.js";
import RAM from "./RAM.js";
import Storage from "./Storage.js";
import Display from "./Display.js";

export default class Laptop {
    public readonly id: number;
    public readonly model: string;
    public readonly brand: string;
    public readonly cpu: CPU;
    public readonly ram: RAM[];
    public readonly storage: Storage[];
    public readonly screen: Display;
    // Dimensions of laptop in centimeters
    public readonly dimensions: {width: number, length: number, height: number};
    // Weight in kilograms
    public readonly weight: number;
    public readonly material: string;
    public readonly launchDate: Date | null;
    // Battery capacity in Wh
    public readonly batteryCapacity: number;
    public readonly microphone: boolean;
    // Null means no camera is present
    public readonly camera: {resolution: number, fps: number} | null;
    public readonly wifi: {"version": string | number, "bands": string[]} | null;
    // Null means no bluetooth support
    public readonly bluetooth: number | null;
    // List all cellular bands if appliicable
    public readonly cellularBands: string[];

    public constructor(id: number, model: string, brand: string, cpu: CPU, ram: RAM[], storage: Storage[], screen: Display, dimensions: {width: number, length: number, height: number}, weight: number, material: string, launchDate: Date | null, batteryCapacity: number, microphone: boolean, camera: {resolution: number, fps: number} | null, wifi: {"version": string | number, "bands": string[]} | null, bluetooth: number | null, cellularBands: string[]) {
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
        this.microphone = microphone;
        this.camera = camera;
        this.wifi = wifi;
        this.bluetooth = bluetooth;
        this.cellularBands = cellularBands;
    }

    public get totalMemory() {
        return this.ram.reduce((total, memory) => total + (memory.capacity * memory.nModules), 0);
    }

    public get memoryFrequency() {
        return Math.min(...this.ram.map(object => object.frequency))
    }
}
