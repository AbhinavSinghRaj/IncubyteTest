export function add(numbers: string): number {
    if (numbers === "") return 0;
  
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
      const parts = numbers.split("\n");
      const delimMatch = parts[0].match(/\/\/(.)/);
      if (delimMatch) {
        delimiter = new RegExp(delimMatch[1]);
        numbers = parts[1];
      }
    }
  
    const nums = numbers.split(delimiter).map(Number);
    return nums.reduce((sum, n) => sum + n, 0);
  }
  