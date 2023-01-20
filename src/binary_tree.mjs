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

Tree.prototype.insert = function(value) {
    let node = this.root;
    let parentNode;
    while(node) {
        parentNode = node;
        if(node.data < value) {
            node = node.right;
        } else if(node.data > value) {
            node = node.left;
        } else {
            break;
        }
    }
    if(node === null) {
        if(parentNode.data < value) {
            parentNode.right = new Node(value);
        } else if(parentNode.data > value) {
            parentNode.left = new Node(value);
        }
    }
}