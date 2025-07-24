export function add(numbers: string): number {
    if (numbers === "") return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith("//")) {
        const delimiterEndIndex = numbers.indexOf('\n');
        const delimiterSection = numbers.substring(2, delimiterEndIndex);
        numbers = numbers.substring(delimiterEndIndex + 1);

        const delimiterMatches = [...delimiterSection.matchAll(/\[(.*?)\]/g)];

        if (delimiterMatches.length > 0) {
            const delimiters = delimiterMatches.map(m => escapeRegExp(m[1]));
            delimiter = new RegExp(delimiters.join("|"));
        } else {
            delimiter = new RegExp(escapeRegExp(delimiterSection));
        }
    }

    const nums = numbers
        .split(delimiter)
        .map(Number)
        .filter(n => n <= 1000);

    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negatives not allowed: ${negatives.join(", ")}`);
    }

    return nums.reduce((sum, n) => sum + n, 0);
}

function escapeRegExp(str: string): string {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
