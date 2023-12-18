class RAM {
    public readonly model: string;
    public readonly ecc: boolean;
    public readonly channels: number
    public readonly memoryList: RAM.Memory[]

    public constructor(model: string, ecc: boolean, channels: number, memory: RAM.Memory[]) {
        this.model = model;
        this.ecc = ecc;
        this.channels = channels;
        this.memoryList = memory;
    }

    public get totalMemory() {
        return this.memoryList.reduce((total, memory) => total + (memory.capacity * memory.nModules), 0);
    }

    public get frequency() {
        return Math.min(...this.memoryList.map(object => object.frequency))
    }
}

namespace RAM {
    // Different computers might have different memory configurations (eg an 8 GB and 4 GB stick), so we need a seperate memory class
    export class Memory {
        // For example, the number of ram sticks/modules installed or soldered
        public readonly nModules: number;
        // The capacity (in MB) and frequency (in Mhz) of each module
        public readonly capacity: number;
        public readonly frequency: number;

        public constructor(nModules: number, capacity: number, frequency: number) {
            this.nModules = nModules;
            this.capacity = capacity;
            this.frequency = frequency;
        }
    }
}

export default RAM;
