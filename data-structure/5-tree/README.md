## 树

遍历：

1. 广度优先遍历（breadth first traversal）
2. 深度优先遍历（depth first traversal）
   - 先序遍历（pre order traverse）
   - 中序遍历（in order traverse）
   - 后序遍历（post order traverse）

```
 root -> left -> right // 先序遍历
 left -> root -> right // 中序遍历
 left -> right -> root // 后序遍历
```

如何记忆先序、中序、后序？

* 此处的序是指根节点的序，根节点被先遍历到就是先序，在中间被遍历到就是中序，最后遍历到就是后序。
* 确定了根节点的顺序之后，那子节点的遍历顺序呢？始终遵循`先左后右`


实现：
1、广度优先：





