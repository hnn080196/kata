//FIFO vao truoc ra truoc , Queue is just a specific implementation of a linked list
type Node<T> = {
    value: T;
    next?: Node<T>;
};
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item } as Node<T>;
        //add the last
        this.length++;
        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }

        this.tail.next = newNode;
        this.tail = newNode;
    }
    deque(): T | undefined {
        //push the first
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const value = this.head.value;
        if (this.length == 0) {
            this.head = this.tail = undefined;
            return value;
        }

        this.head = this.head.next;

        return value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
