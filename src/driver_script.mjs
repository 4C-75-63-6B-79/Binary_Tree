import Tree from "./binary_tree.mjs";

(function() {
    let tree = new Tree([2,4,8,2,4,9,6,8,6,88,4,8,11,4,1,21,4,66,12,17,19,181,23]);

    tree.prettyPrint();
    console.log('Is tree balanced: ' + tree.isBalanced());

    console.log('-------------- Level Order -----------------');
    console.log([...tree.levelOrder().map(ele => ele.data)]);

    console.log('--------------- Pre Order -----------------');
    console.log([...tree.preOrder().map(ele => ele.data)]);

    console.log('-------------- Post Order -----------------');
    console.log([...tree.postOrder().map(ele => ele.data)]);

    console.log('-------------- In Order -----------------');
    console.log([...tree.inOrder().map(ele => ele.data)]);

    console.log('------------------------------------------');
    console.log('adding elements to the tree');
    tree.insert(57);tree.insert(7);tree.insert(557);tree.insert(579);tree.insert(576);
    tree.insert(59);tree.insert(27);tree.insert(357);tree.insert(457);tree.insert(537);
    tree.insert(51);tree.insert(547);tree.insert(57);tree.insert(1057);tree.insert(527);
    tree.insert(75);tree.insert(957);tree.insert(57);tree.insert(5007);tree.insert(517);

    console.log('------------------------------------------');
    tree.prettyPrint();
    console.log('is tree balanced: ' + tree.isBalanced());

    console.log('------------------------------------------');
    console.log('balanced tree');
    tree.rebalance();
    tree.prettyPrint();
    console.log('is tree balanced: ' + tree.isBalanced());

    console.log('-------------- Level Order -----------------');
    console.log([...tree.levelOrder().map(ele => ele.data)]);

    console.log('--------------- Pre Order -----------------');
    console.log([...tree.preOrder().map(ele => ele.data)]);

    console.log('-------------- Post Order -----------------');
    console.log([...tree.postOrder().map(ele => ele.data)]);

    console.log('-------------- In Order -----------------');
    console.log([...tree.inOrder().map(ele => ele.data)]);
})();