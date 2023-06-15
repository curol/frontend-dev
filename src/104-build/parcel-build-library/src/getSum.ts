import type { GetSumProps } from "./types";

export default function getSum({ a, b }: GetSumProps) {
    if(typeof a !== 'number' || typeof b !== 'number') throw new Error('a and b must be numbers');

    return a + b;
}