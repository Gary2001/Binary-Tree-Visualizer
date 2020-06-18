function BinaryTree() {

    this.root = null;
    this.size = 0;

    this.add = function(element) {
        this.size++;
        // add to an empty tree, initialize root node
        if (this.root == null) {
            this.root = new Node(element, canvas.width / 2, 64);
            return;
        }
        // level order traversal of binary tree:
        let queue = [];
        queue.push(this.root);
        while (queue.length != 0) { // while queue is not empty
            curr = queue.shift();
            // if there's a left child add the current node's left child to queue
            if (curr.left != null)
                queue.push(curr.left);
            // there no left child so adds a new node to left
            else {
                curr.left = new Node(element, curr.x, curr.y);
                curr.left.x = curr.left.x - (300 / (this.getHeight() + 1 ));
                curr.left.y = curr.left.y + 32 * (this.getHeight() + 1 );
                return;
            }
            // if there's a right child add the current node's right child to queue
            if (curr.right != null)
                queue.push(curr.right);
            // there no right child so adds a new node to right
            else {
                curr.right = new Node(element, curr.x, curr.y);
                curr.right.x = curr.right.x + (300 / (this.getHeight() + 1) );
                curr.right.y = curr.right.y + 32 * (this.getHeight() + 1);
                return;
            }
        }
    }

    this.getHeight = function() {
        if (this.size == 0)
            return 0;
        return Math.floor(Math.log2(this.size));
    }

    this.clear = function() {
        this.root = null;
        this.size = 0;
    }

}

