import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to convert advertised storage to real storage

export function calculateRealStorage(
  advertisedStorage: number,
  unit: "GB" | "TB"
): number {
  // Constants
  const BYTES_IN_ONE_GB = 1_000_000_000; // 1 GB = 1,000,000,000 bytes (Base 10)
  const BYTES_IN_ONE_GiB = 1_073_741_824; // 1 GiB = 1,073,741,824 bytes (Base 2)
  const BYTES_IN_ONE_TB = 1_000_000_000_000; // 1 TB = 1,000,000,000,000 bytes (Base 10)
  const BYTES_IN_ONE_TiB = 1_099_511_627_776; // 1 TiB = 1,099,511,627,776 bytes (Base 2)

  let totalBytes: number;

  // Convert advertised storage to bytes based on unit
  if (unit === "GB") {
    totalBytes = advertisedStorage * BYTES_IN_ONE_GB;
  } else if (unit === "TB") {
    totalBytes = advertisedStorage * BYTES_IN_ONE_TB;
  } else {
    throw new Error("Invalid unit. Use 'GB' or 'TB'.");
  }

  // Convert bytes to real storage size
  let realStorage: number;
  if (unit === "GB") {
    realStorage = totalBytes / BYTES_IN_ONE_GiB;
  } else {
    realStorage = (totalBytes / BYTES_IN_ONE_TiB) * 1000;
  }

  return Math.floor(realStorage);
}

export function returnObjectWithFreeStorage(
  obj: any,
  storageCapacity: number,
  storageUnit: "GB" | "TB"
): any {
  let totalStorage = calculateRealStorage(storageCapacity, storageUnit);
  // Loop through the object to sum the "StorageReq" values

  // Add the totalStorageReq as "FreeStorage" to the object
  obj["FreeStorage"] = totalStorage;

  return { obj };
}
