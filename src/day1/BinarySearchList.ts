export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;
    let midpoint = 0;
    let current_value = 0;

    while (low < high) {
        midpoint = Math.floor((high-low)/2 + low)
        current_value = haystack[midpoint]
        if (current_value == needle) {
            return true;
        } else if (current_value > needle) {
            high = midpoint
        } else {
            low = midpoint+1
        }
    }

    return false;
}