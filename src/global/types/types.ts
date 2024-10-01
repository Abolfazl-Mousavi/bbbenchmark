import { ICpu,IMoBo,IVideoCard,IStorage,IMemory,ICpuCooler } from "./interfaces"

export type currentSetup = {
    mobo: IMoBo
    cpu: ICpu,
    videoCard: [IVideoCard],
    memory: [IMemory],
    storage: [IStorage],
    cpuCooler: ICpuCooler,

}
export type stats = {
    cardHeader: string,
    cardContent:string,
    buttonName?:string,
    buttonUrl?:string
}