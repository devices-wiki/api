// This is the sample laptop that is used for debugging. Will be removed when a proper database is implemented
// Dell Inspiron 7306 2n1 Silver Blueprint

import CPU from "./hardware/classes/CPU";
import Laptop from "./hardware/classes/Laptop";
import RAM from "./hardware/classes/RAM";
import Storage from "./hardware/classes/Storage";
import Display from "./hardware/classes/Display";


// Creation of Model CPU
const sampleCore = new CPU.Core(1, 2.40, 4.20, 2, 4)

const coreList = [sampleCore]
function createSampleCpu() {
    return new CPU(
        100873151,
        "Intel Core i5-1135G7",
        "GenuineIntel",
        28,
        "X64",
        "Intel Iris XE Graphics",
        coreList,
        null,
        {l1: 320, l2: 5000, l3: 8000}
    )
}

// Memory
const memory = new RAM.Memory(2, 4096, 4267)

const sampleRam = new RAM(
    "LPDDR4",
    false,
    2,
    [memory]
)

// Display
const screen = new Display(100873154, "Dell", "Dell 13\" P125G002", 337.82, 60, "16:9", {x: 1920, y: 1080}, 300, "IPS", "Anti-Reflective", true, false, null, true)

// Storage
const drive1 = new Storage(100873152, "Intel® Optane™ Memory H10", "Intel", "NVMe", 32767)
const drive2 = new Storage(100873153, "Intel® Optane™ 512GB Solid State Storage", "Intel", "NVMe", 524288)

// (In)completed model laptop
const sampleLaptop = new Laptop(
    109254169,
    "Dell Inspiron 7306 2n1 Silver Edition",
    "Dell",
    createSampleCpu(),
    sampleRam,
    [drive1, drive2],
    screen,
    {x: 305.20, y: 197.80, z: 16.51},
    1.3,
    "aluminium",
    null,
    53,
    true,
    {resolution: 720, fps: 60},
    {version: "6e", dualBand: true},
    5,
    null
)

export default sampleLaptop