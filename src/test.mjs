import Tree from './binary_tree.mjs';

function Test() {
    let tree = new Tree();
    tree.root = tree.buildTree([1,4,5,7,8], 0, 4);
    prettyPrint(tree.root);

    tree.insert(6);
    prettyPrint(tree.root);
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

Test();