const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.canvas.height = window.innerHeight;
ctx.canvas.width = window.innerWidth; 
let data = document.getElementById('data').value;
const tree = new BinaryTree();

function addNode() {
    const data = document.getElementById('data').value;
    if (data != "") { // text field is not empty
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        tree.add(data);
        tree.root.visit(tree);   
    }
}

function clearTree() {
    ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
    tree.clear();
}

function traverseInorder() {
    if (tree.size > 0) {
        ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
        tree.root.inorder(tree);        
    }
}

window.addEventListener("keydown", function(e) {
    if (e.keyCode === 13) { // ENTER keyCode
      e.preventDefault();
      document.getElementById("Add-btn").click();     
    }
    if (e.keyCode == 46) {
        e.preventDefault();
        document.getElementById("Delete-btn").click();
    }
})





