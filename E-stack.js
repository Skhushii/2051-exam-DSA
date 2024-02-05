class stack {
    constructor() {
        this.items = [];
        this.size = 5;
    }
    print() {
        if (this.items.length === 0) {
            console.log("stack underflow");
        }
        else {
            console.log(this.items);
        }
    }
    push(element) {
        if (this.items.length == this.size) {
            console.log("stack is overflow");
        }
        else {
            this.items[this.items.length] = element;
        }
    }
    pop() {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            this.items.length = this.items.length - 1;
        }
    }
    peek(index) {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            var j = 0;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i] !== index){
                    this.items[j++] = this.items[i];
                }
            }
            this.items.length = j;
        }
    }
}
const data = new stack();


// push 
data.push(10)
data.push(20)
data.push(30)
data.push(40)
data.push(50)
data.push(60)
data.push(70)
// pop 
data.pop()
// peek 
data.peek(50)
// print
data.print()
