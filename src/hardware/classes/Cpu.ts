export default class Cpu {
    public readonly id: number;
    public readonly model: string;
    public readonly brand: string;
    public readonly tdp: number;
    public readonly architecture: string;
    public readonly graphics: string | null;
    public readonly cores: Core[];


    constructor(id: number, model: string, brand: string, tdp: number, architecture: string, graphics: string | null, cores: Core[]) {
        this.id = id;
        this.model = model;
        this.brand = brand;
        this.tdp = tdp;
        this.architecture = architecture;
        this.graphics = graphics;
        this.cores = cores;
    }

    public get totalCoreCount() {
        return this.cores.reduce((total, core) => total + core.nCores, 0);
    }

    public get threads() {
        return this.cores.reduce((total, core) => total + (core.threadsPerCore * core.nCores), 0);
    }
}

export class Core {
    public readonly level: number;
    public readonly frequency: number;
    public readonly turboFrequency: number;
    public readonly threadsPerCore: number;
    public readonly nCores: number;
    constructor(level: number, frequency: number, turboFrequency: number, threadsPerCore: number, nCores: number) {
        this.level = level;
        this.frequency = frequency;
        this.threadsPerCore = threadsPerCore;
        this.turboFrequency = turboFrequency;
        this.nCores = nCores;
    }
}