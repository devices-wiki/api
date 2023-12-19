class CPU {
    public readonly id: number;
    public readonly model: string;
    public readonly vendor: CPU.Vendor;
    public readonly tdp: number;
    public readonly architecture: string;
    public readonly graphics: string | null;
    public readonly cores: CPU.Core[];
    // CPU Cache in kilobytes
    public readonly cache: {l1: number, l2: number, l3: number | null};
    public readonly releaseDate: Date | null


    public constructor(id: number, model: string, vendor: CPU.Vendor, tdp: number, architecture: string, graphics: string | null, cores: CPU.Core[], releaseDate: Date | null, cache: {l1: number, l2: number, l3: number | null}) {
        this.id = id;
        this.model = model;
        this.vendor = vendor;
        this.tdp = tdp;
        this.architecture = architecture;
        this.graphics = graphics;
        this.cores = cores;
        this.releaseDate = releaseDate
        this.cache = cache
    }

    public get totalCoreCount() {
        return this.cores.reduce((total, core) => total + core.nCores, 0);
    }

    public get threads() {
        return this.cores.reduce((total, core) => total + (core.threadsPerCore * core.nCores), 0);
    }
}

namespace CPU {
    export class Core {
        public readonly level: number;
        public readonly frequency: number;
        public readonly boostFrequency: number;
        public readonly threadsPerCore: number;
        public readonly nCores: number;
        
        public constructor(level: number, frequency: number, boostFrequency: number, threadsPerCore: number, nCores: number) {
            this.level = level;
            this.frequency = frequency;
            this.threadsPerCore = threadsPerCore;
            this.boostFrequency = boostFrequency;
            this.nCores = nCores;
        }
    }

    export enum Vendor {Intel, AMD, Qualcomm, Apple, Exynos, Tensor, Mediatek}
}

export default CPU;
