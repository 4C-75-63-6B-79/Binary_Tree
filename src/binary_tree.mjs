import Node from './node.mjs';

export default function Tree(arr) {
    this.root = this.buildTree(arr.sort((a,b) => a-b).filter((ele, i, arr) => arr.indexOf(ele) === i));
}

Tree.prototype.buildTree = function(arr, start=0, end=arr.length-1) {
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

Tree.prototype.delete = function(value) {
    let node = this.root;
    let parentNode;
    while(node) {
        parentNode = node;
        if(node.data < value) {
            node = node.right;
        } else if(node.data > value) {
            node = node.left;
        } 
        if(node.data === value) {
            if(node.left === null &&  node.right === null) {
                if(parentNode.data > value) {
                    parentNode.left = null;
                } else if(parentNode.data < value) {
                    parentNode.right = null;
                }
                return true;
            } else if(node.right !== null) {
                let node1 = node.right;
                let parentNode1;
                while(node1.left) {
                    parentNode1 = node1;
                    node1 = node1.left;
                }
                let data = node1.data;
                this.delete(node1.data);
                node.data = data;
                return true;                
            } else {
                if(parentNode.data > value) {
                    parentNode.left = node.left;
                } else if(parentNode.data < value) {
                    parentNode.right = node.left;
                }
                return true;
            }
        }
    }
}

Tree.prototype.find = function(value) {
    let node = this.root;
    while(node) {
        if(node.data < value) {
            node = node.right;
        } else if(node.data > value) {
            node = node.left;
        } else {
            return node;
        }
    }
    return null;
}

Tree.prototype.levelOrder = function(callbackFn) {
    const stack = [this.root];
    const result = [];
    while(stack.length > 0) {
        let node = stack.shift();
        node.left ? stack.push(node.left) : 0;
        node.right ? stack.push(node.right) : 0;
        callbackFn ? callbackFn(node) : result.push(node.data);
    }
    if(result.length > 0) {
        return result;
    }
}

Tree.prototype.levelOrderRecursion = function(callbackFn, stack=[this.root], result =[]) {
    if(stack.length <= 0 || this.root === null) {
        return;
    } else {
        let node = stack.shift();
        node.left ? stack.push(node.left) : 0;
        node.right ? stack.push(node.right) : 0;
        callbackFn ? callbackFn(node) : result.push(node.data);
        this.levelOrderRecursion(callbackFn, stack, result);
    }
    return result.length > 0 ? result : undefined;
}

Tree.prototype.inOrder = function(callBackFn, node = this.root, result=[]) {
    if(node === null) {
        return;
    } 
    this.inOrder(callBackFn, node.left, result);    
    callBackFn ? callBackFn(node) : result.push(node);
    this.inOrder(callBackFn, node.right, result);
    
    if(result.length > 0) {
        return result;
    }
}

Tree.prototype.preOrder = function(callBackFn, node = this.root, result=[]) {
    if(node === null) {
        return;
    } 

    callBackFn ? callBackFn(node) : result.push(node);
    this.preOrder(callBackFn, node.left, result);    
    this.preOrder(callBackFn, node.right, result);
    
    if(result.length > 0) {
        return result;
    }
}

Tree.prototype.postOrder = function(callBackFn, node = this.root, result=[]) {
    if(node === null) {
        return;
    } 

    this.postOrder(callBackFn, node.left, result);    
    this.postOrder(callBackFn, node.right, result);
    callBackFn ? callBackFn(node) : result.push(node);
    
    if(result.length > 0) {
        return result;
    }
}

Tree.prototype.height = function(node = this.root) {
    if(node === null) {
        return 0;
    }
    let leftHeight = this.height(node.left);
    let rightHeight = this.height(node.right); 
    return leftHeight < rightHeight ? rightHeight+1 : leftHeight+1;
}

Tree.prototype.depth = function(node) {
    if(node.data === this.root.data) {
        return 0;
    }
    let depth = 0;
    let tempNode = this.root;
    while(tempNode.data !== node.data) {
        if(tempNode.data < node.data) {
            tempNode = tempNode.right;
        } else if(tempNode.data > node.data) {
            tempNode = tempNode.left;
        }
        depth += 1;
    }
    return depth;
}

Tree.prototype.isBalanced = function() {
    const stack = [this.root];
    while(stack.length > 0) {
        let node = stack.shift();
        if(Math.abs(this.height(node.left) - this.height(node.right)) > 1) {
            return false;
        }
        node.left ? stack.push(node.left) : 0;
        node.right ? stack.push(node.right) : 0;
    }
    return true;
}

Tree.prototype.rebalance = function() {
    const arr = this.inOrder().map(ele => ele.data);
    this.root = this.buildTree(arr.sort((a,b) => a-b).filter((ele, i, arr) => arr.indexOf(ele) === i));
}

Tree.prototype.prettyPrint = function(node=this.root, prefix = '', isLeft = true) {
    if (node.right !== null) {
      this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}