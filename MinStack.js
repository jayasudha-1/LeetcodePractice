/*var MinStack = function() {
    this.stack=[];
    this.minStack=[];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length===0 || val<=this.minStack[this.minStack.length-1])
   {
        this.minStack.push(val);
    }   
};

MinStack.prototype.pop = function() {
    //this.minStack[minStack.length-1].pop();
     const poppedValue = this.stack.pop();
    // If the popped value is equal to the current min, pop it from the minStack as well
    if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
    
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};
*/

class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop() {
        const poppedValue = this.stack.pop();
        if (poppedValue === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // return -3
minStack.pop();
console.log(minStack.top());    // return 0
console.log(minStack.getMin()); // return -2
