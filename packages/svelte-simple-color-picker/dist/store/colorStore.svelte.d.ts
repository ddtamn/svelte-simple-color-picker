export declare class ColorStore {
    h: number;
    s: number;
    v: number;
    a: number;
    constructor(initialHex: string);
    get hex(): string;
    get rgbString(): string;
    get baseColorHex(): string;
    updateFromHex(hex: string): void;
    updateFromHsv(h: number, s: number, v: number, a?: number): void;
}
