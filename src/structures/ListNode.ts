export default class ListNode {
  next: ListNode | null;
  val: number;
  constructor(value?: number, next?: ListNode | null) {
    this.next = next === undefined ? null : next;
    this.val = value === undefined ? 0 : value;
  }
}
