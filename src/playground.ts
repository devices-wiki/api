// This is the sample laptop that is used for debugging. Will be removed when a proper database is implemented

import Cpu, {Core} from "./hardware/classes/Cpu";
import Laptop from "./hardware/classes/Laptop";

const sampleCore = new Core(1, 2.40, 4.20, 2, 4)

const coreList = [sampleCore]
function createSampleCpu() {
    return new Cpu(100873151, "Intel Core i5-1135G7", "GenuineIntel", 28, "X64", "Intel Iris XE Graphics", coreList)
}

const sampleLaptop = new Laptop(109254169, "Dell Inspiron 7306 2n1 Silver Edition", "Dell", createSampleCpu())

export default sampleLaptop