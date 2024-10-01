
// Hash function to generate a consistent hash value from a string
function hashStringToInt(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

// Function to convert a number into a valid RGB color code
function intToRGB(i: number): string {
    const r = (i >> 16) & 0xFF;
    const g = (i >> 8) & 0xFF;
    const b = i & 0xFF;
    return `rgb(${r}, ${g}, ${b})`;
}

// Main function to generate a unique color from a string
export function stringToColor(str: string): string {
    const hash = hashStringToInt(str) + 6969 ; // hehe 69, nice!
    const color = intToRGB(hash);
    return color;
}
