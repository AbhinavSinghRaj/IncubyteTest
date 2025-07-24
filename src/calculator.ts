export function add(numbers: string): number {

    
    if (numbers === "") return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const [_, delim, rest] = numbers.match(/\/\/(.)\n(.*)/)!;
        delimiter = new RegExp(delim);
        numbers = rest;
    }

   
    const nums = numbers.split(delimiter).map(Number).filter(n => n <= 1000);
    
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, n) => sum + n, 0);
}