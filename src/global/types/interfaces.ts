import { SSDFormFactor, storageTypes } from "./enums";

export interface ICpu {
  name: string;
  price: number;
  core_count: number;
  core_clock: number;
  boost_clock: number;
  tdp: number;
  graphics: string;
  smt: boolean;
}
export interface IVideoCard {
  name: string;
  price: number;
  chipset: string;
  memory: number;
  core_clock: number;
  boost_clock: number;
  color: string;
  length: number;
}
export interface ICpuCooler {
  name: string;
  price: number;
  rpm: number;
  noise_level: number;
  color: string;
  size?: number; // 360mm, 240mm, 160mm , null
}

export interface IMoBo {
  name: string;
  price: number;
  socket: string;
  form_factor: string;
  max_memory: number;
  memory_slots: number;
  color: string;
}
export interface IMemory {
  name: string;
  price: number;
  speed: [number, number]; // [dram_rank, frequency]
  modules: [number, number]; // [module_count, gb_per_module]
  price_per_gb: number;
  color: string;
  first_word_latency: number;
  cas_latency: number;
}
export interface IStorage {
  name: string;
  capacity: number;
  unit: "GB" | "TB";
  speed: [number, number]; // [read,write]
  format: storageTypes;
  formFactor: SSDFormFactor;
}
