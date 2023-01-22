# Binary Tree

### This is assignment on binary tree in the The Odin porject
File named test.mjs was used to test the various functions. File named driver_script.mjs demostates few functions.

## Function in Binary Tree
- `buildTree` takes a sorted array as a parameter and then builds the tree
- `insert` takes a value as a parameter and then inserts the node at appropriate place with data as value
- `delete` takes a value as a parameter and then delete the node with data equal to value and return true if value deleted else false if value  not present in tree
- `find` takes value as a parameter and returns the node with data equal to parameter or null is no node with data equal to parameter present
- `leverOrder` takes callback function as a parameter and then does level order traversal of tree and provides the node to callback function as parameter. If no parameter function provided then an array of nodes is returned in level order
- `levelOrderRecusrsion` same as levelOrder just uses a recursive approach
- `inOrder` takes callback function as parameter and does in order traversal of the tree provide the nodes as parameter to callback function. If no callback function provided returns array of nodes
- `preOrder` takes callback function as parameter and does pre order traversal of the tree provide the nodes as parameter to callback function. If no callback function provided returns array of nodes
- `postOrder` takes callback function as parameter and does post order traversal of the tree provide the nodes as parameter to callback function. If no callback function provided returns array of nodes
- `height` returns height of the tree
- `depth` takes node as a parameter and returns its depth in the tree
- `isBalanced` returns true if tree is balanced else false
- `rebalance` rebalances the tree
- `prettyPrint` print the tree data to actually see the tree