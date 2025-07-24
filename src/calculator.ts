export function add(numbers: string): number {
    if (numbers === "") return 0;
    const parts = numbers.split(",");
    return parts.map(Number).reduce((sum, n) => sum + n, 0);
}