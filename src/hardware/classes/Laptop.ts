import Cpu from "./Cpu";

export default class Laptop {
    public readonly id: number;
    public readonly model: string;
    public readonly brand: string;
    public readonly cpu: Cpu;


    constructor(id: number, model: string, brand: string, cpu: Cpu) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.cpu = cpu;

    }
}