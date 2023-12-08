export default class Storage {
    public readonly id: number;
    public readonly model: string;
    public readonly vendor: string;
    public readonly type: "eMMC" | "HDD" | "SSD" | "NVMe";
    public readonly capacity: number;

    constructor(id: number, model: string, vendor: string, type: "eMMC" | "HDD" | "SSD" | "NVMe", capacity: number) {
        this.id = id;
        this.model = model;
        this.vendor = vendor;
        this.type = type;
        this.capacity = capacity;
    }
}