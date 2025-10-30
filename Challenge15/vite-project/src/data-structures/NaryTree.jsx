
class TreeNode {
    constructor(title, link = null, component = null) {
    this.title = title;
    this.link = link;
    this.component = component;
    this.children = [];
    }

    addChild(node) {
    this.children.push(node);
    }

    hasChildren() {
    return this.children.length > 0;
    }
}

class NaryTree {
    constructor() {
    this.root = null;
    }

    setRoot(node) {
    this.root = node;
    }

    preorder(node = this.root, level = 0) {
    if (node === null) return;

    console.log('  '.repeat(level) + '- ' + node.title);
    
    for (let child of node.children) {
        this.preorder(child, level + 1);
    }
    }

    findByLink(link, node = this.root) {
    if (node === null) return null;
    
    if (node.link === link) {
            return node;
    }

    for (let child of node.children) {
        const found = this.findByLink(link, child);
        if (found) return found;
    }

    return null;
    }

    toArray(node = this.root) {
    if (node === null) return [];

    return {
        title: node.title,
        link: node.link,
        component: node.component,
        children: node.children.map(child => this.toArray(child))
    };
    }
}

export { TreeNode, NaryTree };