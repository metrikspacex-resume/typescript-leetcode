export default class TreeNode {
  left: TreeNode | null;
  right: TreeNode | null;
  val: number;
  constructor(value?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.val = value === undefined ? 0 : value;
  }
}
