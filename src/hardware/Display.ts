class Display {
    public readonly id: number;
    public readonly vendor: string;
    public readonly model: string | null;
    // Diagonal screen size in centimeters
    public readonly screenSize: number;
    // Refresh rate in hertz
    public readonly refreshRate: number;
    // Aspect Ratio as a string
    public readonly aspectRatio: string;
    // Resolution (ex. {x: 1920, y: 1080})
    public readonly resolution: {x: number, y: number}
    // Peak brightness in nits
    public readonly peakBrightness: number;
    public readonly panelType: Display.Technology;
    public readonly coatings: string | null;
    public readonly touchscreen: boolean;
    public readonly detatchableKeyboard: boolean;
    // Provide the pen protocol like USI (very useful for choosing a pen for a laptop), null means no pen support
    public readonly penProtocol: string | null;
    public readonly supports360Rotation: boolean;

    public constructor(id: number, vendor: string, model: string | null, screenSize: number, refreshRate: number, aspectRatio: string, resolution: {x: number, y: number}, peakBrightness: number, panelType: Display.Technology, coatings: string | null, touchscreen: boolean, detatchableKeyboard: boolean, penProtocol: string | null, supports360Rotation: boolean) {
        this.id = id;
        this.vendor = vendor;
        this.model = model;
        this.screenSize = screenSize;
        this.refreshRate = refreshRate;
        this.aspectRatio = aspectRatio;
        this.resolution = resolution;
        this.coatings = coatings;
        this.peakBrightness = peakBrightness;
        this.panelType = panelType;
        this.touchscreen = touchscreen;
        this.detatchableKeyboard = detatchableKeyboard;
        this.penProtocol = penProtocol;
        this.supports360Rotation = supports360Rotation;
    }
}

namespace Display {
    export enum Technology {OLED, LCD, IPS, TN, CRT, PLASMA}
}

export default Display;
