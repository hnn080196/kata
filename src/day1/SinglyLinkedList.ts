declare type ListNode<T> = {
    value: T;
    next?: ListNode<T>;
    prev?: ListNode<T>;
};

declare interface List<T> {
    get length(): number;
    removeAt(index: number): T | undefined;
    remove(item: T): T | undefined;
    get(index: number): T | undefined;
    prepend(item: T): void;
    append(item: T): void;
    insertAt(item: T, idx: number): void;
}
export default class SinglyLinkedList<T> implements List<T> {
    public length: number;
    private head?: ListNode<T>; // root

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    prepend(item: T): void {
        // thêm vào đầu => update new head và head cũ sẽ đẩy ra sau
        const newNode: ListNode<T> = { value: item, next: this.head };
        this.head = newNode;
        this.length++;
    }
    insertAt(item: T, idx: number): void {
        // thêm vào vị trí bất kỳ =>
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        if (idx == 0) {
            this.prepend(item);
            return;
        }
        const newNode: ListNode<T> = { value: item };
        let current = this.head; // root
        // find previous node
        for (let i = 0; i < idx - 1; i++) {
            current = current!.next;
        }
        newNode.next = current!.next;
        current!.next = newNode;
        this.length++;
    }

    append(item: T): void {
        // add node at the end of list
        const newNode: ListNode<T> = { value: item };
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            // find last node
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.length++;
    }
    remove(item: T): T | undefined {
        if (!this.head) {
            return undefined;
        }
        if (this.head.value === item) {
            // delete root => upgrate next node to become root
            const value = this.head.value;
            this.head = this.head.next;
            this.length--;
            return value;
        }
        let current = this.head;
        //find delete node
        while (current.next) {
            if (current.next.value === item) {
                const value = current.next.value;
                current.next = current.next.next;
                this.length--;
                return value;
            }
            current = current.next;
        }
        return undefined;
        // throw new Error("Couldn't find your node");
    }
    get(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            throw new Error("Index out of bounds");
        }
        let current = this.head;
        for (let i = 0; i < idx; i++) {
            current = current!.next;
        }
        return current!.value;
    }
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx > this.length) {
            return undefined;
        }
        if (idx === 0) {
            const value = this.head!.value;
            this.head = this.head?.next;
            this.length--;
            return value;
        }
        let current = this.head;
        //find previous delete node
        for (let i = 0; i < idx - 1; i++) {
            // const element = array[i];
            current = current!.next;
        }
        const value = current?.next?.value; // delete value
        current!.next = current!.next!.next;
        this.length--;
        return value;
    }
}
