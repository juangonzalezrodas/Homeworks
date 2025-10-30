// Nodo del árbol binario
class TreeNode {
    constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

// Árbol binario de búsqueda (BST)
class BinaryTree {
    constructor() {
    this.root = null;
    }

  // Insertar valor en el árbol
    insert(value) {
    const newNode = new TreeNode(value);
    
    if (this.root === null) {
        this.root = newNode;
        console.log(`Insertado raíz: ${value}`);
        return;
    }

    this._insertNode(this.root, newNode);
    console.log(`Insertado: ${value}`);
    }

    _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      // Insertar a la izquierda
        if (node.left === null) {
        node.left = newNode;
        } else {
        this._insertNode(node.left, newNode);
        }
    } else {
      // Insertar a la derecha
        if (node.right === null) {
        node.right = newNode;
        } else {
        this._insertNode(node.right, newNode);
        }
    }
    }

  // Verificar si un valor existe en el árbol
    search(value) {
    return this._searchNode(this.root, value);
    }

    _searchNode(node, value) {
    if (node === null) {
        return false;
    }

    if (value === node.value) {
        return true;
    }

    if (value < node.value) {
        return this._searchNode(node.left, value);
    } else {
        return this._searchNode(node.right, value);
    }
    }

  // INORDER: Izquierda - Raíz - Derecha
    inorder() {
    const result = [];
    this._inorderTraversal(this.root, result);
    console.log('Inorder:', result.join(' -> '));
    return result;
    }

    _inorderTraversal(node, result) {
    if (node !== null) {
        this._inorderTraversal(node.left, result);
        result.push(node.value);
        this._inorderTraversal(node.right, result);
    }
    }

  // PREORDER: Raíz - Izquierda - Derecha
    preorder() {
    const result = [];
    this._preorderTraversal(this.root, result);
    console.log('Preorder:', result.join(' -> '));
    return result;
    }

    _preorderTraversal(node, result) {
    if (node !== null) {
        result.push(node.value);
        this._preorderTraversal(node.left, result);
        this._preorderTraversal(node.right, result);
    }
    }

  // POSTORDER: Izquierda - Derecha - Raíz
    postorder() {
    const result = [];
    this._postorderTraversal(this.root, result);
    console.log('Postorder:', result.join(' -> '));
    return result;
    }

    _postorderTraversal(node, result) {
    if (node !== null) {
        this._postorderTraversal(node.left, result);
        this._postorderTraversal(node.right, result);
        result.push(node.value);
    }
    }

  // Convertir a formato para react-d3-tree
    toD3Format() {
    if (this.root === null) {
        return null;
    }
    return this._convertNode(this.root);
    }

    _convertNode(node) {
    if (node === null) {
        return null;
    }

    const d3Node = {
        name: node.value.toString(),
        attributes: {
        value: node.value
        },
        children: []
    };

    if (node.left !== null) {
        d3Node.children.push(this._convertNode(node.left));
    }

    if (node.right !== null) {
        d3Node.children.push(this._convertNode(node.right));
    }

    return d3Node;
    }

  // Obtener altura del árbol
    getHeight() {
    return this._getNodeHeight(this.root);
    }

    _getNodeHeight(node) {
    if (node === null) {
        return 0;
    }
    const leftHeight = this._getNodeHeight(node.left);
    const rightHeight = this._getNodeHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
    }

  // Contar nodos
    countNodes() {
    return this._countNodes(this.root);
    }

    _countNodes(node) {
    if (node === null) {
        return 0;
    }
    return 1 + this._countNodes(node.left) + this._countNodes(node.right);
    }
}

export { TreeNode, BinaryTree };
