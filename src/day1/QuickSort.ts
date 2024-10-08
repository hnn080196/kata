function qs(arr: number[], lo: number, hi: number): void {
    if (lo >= hi) {
        return;
    }
    const pivotIdx = partition(arr, lo, hi);
    qs(arr, lo, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}
function partition(arr: number[], lo: number, hi: number): number {
    // tìm điểm giữa
    const pivot = arr[hi];
    let idx = lo - 1;
    for (let i = lo; i < hi; i++) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }
    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

// write qs function
// partition

/**
 *
 * 1. select pivot  (0 + length) /2
 * 2. move pivot to the end
 * 3. low 0 - high (length -1 )
 */
