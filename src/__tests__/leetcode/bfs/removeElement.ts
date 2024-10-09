function removeElement(nums: number[], val: number): number {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}
const numsFake = [1, 1, 2];
// function removeDuplicates(nums: number[]): number {

// }

function removeDuplicates(nums: number[]): number {
    let k = 0;
    let duplicate = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[k]) {
            nums[k] = nums[i - 1];
            nums[k + 1] = nums[i - 1];
            k++;
        }
    }
}
