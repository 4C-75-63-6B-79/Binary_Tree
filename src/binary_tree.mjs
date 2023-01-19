import Node from './node.mjs';

export default function Tree() {
    this.root = null;
}

Tree.prototype.buildTree = function(arr, start, end) {
    if(start>end) {
        return null;
    } else {
        let mid = Math.floor((start + end) / 2);
        let node = new Node(arr[mid]);
        node.left = this.buildTree(arr, start, mid-1);
        node.right = this.buildTree(arr, mid+1, end);
        return node;
    }
}   

function Test() {
    let tree = new Tree();
    tree.root = tree.buildTree([1,4,5,7,8], 0, 4);
    console.log(tree);
}

Test();