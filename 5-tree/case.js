class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');

a.left = b
a.right = c

b.left = d;
b.right = e;

c.left = f;
c.right = g;

export default a;