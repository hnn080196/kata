export default class RingBuffer<T> {
    private buffer: (T | undefined)[];
    private head: number = 0;
    private tail: number = 0;
    private size: number = 0;

    constructor(private capacity: number) {
        this.buffer = new Array(capacity);
    }

    push(item: T): void {
        if (this.size === this.capacity) {
            this.resize();
        }

        this.buffer[this.tail] = item;
        this.tail = (this.tail + 1) % this.capacity;
        this.size++;
    }

    pop(): T | undefined {
        if (this.size === 0) {
            return undefined;
        }

        const item = this.buffer[this.head];
        this.buffer[this.head] = undefined;
        this.head = (this.head + 1) % this.capacity;
        this.size--;

        return item;
    }

    private resize(): void {
        const newCapacity = this.capacity * 2;
        const newBuffer: (T | undefined)[] = new Array(newCapacity);

        for (let i = 0; i < this.size; i++) {
            newBuffer[i] = this.buffer[(this.head + i) % this.capacity];
        }

        this.buffer = newBuffer;
        this.capacity = newCapacity;
        this.head = 0;
        this.tail = this.size;
    }
    get(index: number): T | undefined {
        if (index < 0 || index >= this.size) {
            return undefined;
        }
        return this.buffer[(this.head + index) % this.capacity];
    }
    getSize(): number {
        return this.size;
    }

    getCapacity(): number {
        return this.capacity;
    }

    toString(): string {
        if (this.size === 0) {
            return "[]";
        }

        const result: string[] = [];
        for (let i = 0; i < this.size; i++) {
            result.push(String(this.buffer[(this.head + i) % this.capacity]));
        }

        return "[" + result.join(", ") + "]";
    }
}

// Example usage
// const rb = new RingBuffer<number>(5);

// for (let i = 1; i <= 7; i++) {
//     rb.push(i);
//     console.log(
//         `After pushing ${i}: ${rb.toString()} (Size: ${rb.getSize()}, Capacity: ${rb.getCapacity()})`,
//     );
// }

// for (let i = 0; i < 3; i++) {
//     const item = rb.pop();
//     console.log(
//         `Popped ${item}: ${rb.toString()} (Size: ${rb.getSize()}, Capacity: ${rb.getCapacity()})`,
//     );
// }

// for (let i = 8; i <= 10; i++) {
//     rb.push(i);
//     console.log(
//         `After pushing ${i}: ${rb.toString()} (Size: ${rb.getSize()}, Capacity: ${rb.getCapacity()})`,
//     );
// }
