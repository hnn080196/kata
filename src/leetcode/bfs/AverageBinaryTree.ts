/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}
// 1 - 3 - 7 - 15 ()   => 2^n -1
// 1(2^0) - 2(2^1) - 4(2^2) - 8(2^3) - 16(2^4)
// [3,9,20,null,null,15,7] = level = 0 =>
export default function averageOfLevels(root: TreeNode | null): number[] {
    if (!root) return [];
    const result: number[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length) {
        const levelSize = queue.length;
        let sum = 0;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift() as TreeNode | null;
            if (node) {
                sum += node.val || 0;
                if (node.left) {
                    queue.push(node.left);
                }
                if (node.right) {
                    queue.push(node.right);
                }
            }
        }
        result.push(sum / levelSize);
    }
    return result;
}
