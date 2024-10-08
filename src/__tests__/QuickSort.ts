import quick_sort from "@code/QuickSort";

test("quick-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    quick_sort(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

/**
 [7,5,8,4,6]
  lo = 0 | hi =4 | [7,5,8,4,[6]] => idx = 0 => [5,7,8,4,6] => idx = 1 =>  [5,4,8,7,6]
 idx =2 => [5,7,6,4,8] > return idx
 */
