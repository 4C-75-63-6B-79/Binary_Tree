import Tree from './binary_tree.mjs';

function Test() {
    let tree = new Tree([1,4,5,5,7,8,11,13]);
    tree.prettyPrint();
    console.log(tree.isBalanced());

    tree.insert(2);
    tree.prettyPrint();
    console.log(tree.height());

    tree.insert(3);
    tree.prettyPrint();
    console.log(tree.height());

    tree.delete(4);
    tree.prettyPrint();

    console.log(tree.find(5).data);

    console.log('---------------------------------------');
    console.log([...tree.levelOrder().map(ele => ele.data)]);
    console.log('---------------------------------------');
    console.log([tree.levelOrderRecursion().map(ele => ele.data)]);

    tree.inOrder().forEach(ele => console.log(ele.data));
    console.log('---------------------------------------');
    tree.preOrder().forEach(ele => console.log(ele.data));
    console.log('---------------------------------------');
    tree.postOrder().forEach(ele => console.log(ele.data));
    console.log('---------------------------------------');

    console.log(tree.height());

    console.log('depth of node with value 5 is ' + tree.depth(tree.find(5)));

    console.log(tree.isBalanced());

    tree.prettyPrint();
    console.log('rebalance tree');
    tree.rebalance();
    tree.prettyPrint();
}

// const prettyPrint = (node, prefix = '', isLeft = true) => {
//     if (node.right !== null) {
//       prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
//     }
//     console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
//     if (node.left !== null) {
//       prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
//     }
// }

Test();