function Node(element, x, y) {
    this.data = element;
    this.left = null;
    this.right = null;
    this.x = x;
    this.y = y;

    this.setData = function(data) {
        this.data = data;
    }

    this.visit = function(parent) {
        // first recur on left child
        if (this.left != null) {
            this.left.visit(this);
        }
        // draw text
        const inputlength = this.data.toString().length;
        ctx.fillStyle = 'black';
        ctx.font = "25px Arial";
        if (inputlength == 1) {
            ctx.fillText(this.data, this.x-5, this.y+8);           
        }
        else {
            ctx.fillText(this.data, this.x-15, this.y+8);           
        }
        // draw circle
        ctx.beginPath();
        ctx.arc(this.x , this.y, 20, 0, 2 * Math.PI);
        ctx.stroke();
        
        // draw line
        ctx.moveTo(parent.x, parent.y);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();

        // then recur on right child
        if (this.right != null) {
            this.right.visit(this);          
        }
        return;
    }

    this.inorder = function() {
        if (this.left != null)
            this.left.inorder();

        console.log("visit");
        ctx.beginPath();
        ctx.arc(this.x , this.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = 'red';
        ctx.fill();
        sleep(500);

        if (this.right != null)
            this.right.inorder();          
        return;
    }

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }
}