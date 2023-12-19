export default class RAM {
    public readonly model: string;
    public readonly ecc: boolean;
    // For example, the number of ram sticks/modules installed or soldered
    public readonly nModules: number;
    // The capacity (in MB) and frequency (in Mhz) of each module
    public readonly capacity: number;
    public readonly frequency: number;

    public constructor(model: string, ecc: boolean, nModules: number, capacity: number, frequency: number) {
        this.model = model;
        this.ecc = ecc;
        this.nModules = nModules;
        this.capacity = capacity;
        this.frequency = frequency;
    }
}
