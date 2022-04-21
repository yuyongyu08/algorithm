import tree from './case.js'

function preOrderTraverse(tree){
    let stack = [];
    stack.push(tree)
    while(stack.length){
        const item = stack.pop()

        console.log(item.value);
        item.right && stack.push(item.right)
        item.left && stack.push(item.left)
    }
}

function inOrderTraverse(tree){
    
}


// 先序：root -> left -> right, 后序： left -> right -> root
function postOrderTraverse(tree){
    let queue = [];
    queue.unshift(tree);

    while(queue.length){
        let item = queue.pop();



    }
}

console.log('----pre----');
preOrderTraverse(tree);
console.log('----in----');
inOrderTraverse(tree);
console.log('----post----');
postOrderTraverse(tree);
