import tree from './case.js'

// console.log(tree);

function preOrderTraverse(tree){
    if(tree){
        console.log(tree.value);
        preOrderTraverse(tree.left);
        preOrderTraverse(tree.right);
    }
}

function inOrderTraverse(tree){
    if(tree){
        preOrderTraverse(tree.left);
        console.log(tree.value);
        preOrderTraverse(tree.right);
    }
}

function postOrderTraverse(tree){
    if(tree){
        preOrderTraverse(tree.left);
        preOrderTraverse(tree.right);
        console.log(tree.value);
    }
}

console.log('----pre----');
preOrderTraverse(tree);
console.log('----in----');
inOrderTraverse(tree);
console.log('----post----');
postOrderTraverse(tree);