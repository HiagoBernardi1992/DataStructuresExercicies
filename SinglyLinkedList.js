class Node{
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }        
        this.length++;
        retur this;
    }

    tranverse(){
        var current = this.head;
        while(current) {
            console.log(current);
            current = current.next;
        }
    }

    pop() {
        if(this.length == 0) return undefined;        
        var current = this.head;
        var previous = this.head;
        while(current){            
            previous = current;
            current = current.next;
        }
        this.tail = previous;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }

    shift(){
        if(!this.head) return undefined;
        var currenthead = this.head;
        this.head = current.next               
        length--;
        if(this.length ===0){
            this.tail = 0;
        }
        return currenthead;
    }

    unShift(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;  
            this.head = newNode;        
        }
        this.length++;
        return this;
    }

    get(index){
        if(index < 0 || index >= this.length) return null;
        let counter = 0;
        var current = this.head;
        while(counter !== index) {
            current = current.next;
            current++;
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode = val;
            return true;
        } 
        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return this.push(val);
        if(index === 0) return this.unShift(val);
        var previous = this.get(index - 1);
        var newNode = new Node(val);
        var temp = previous.next;
        previous.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index, val){
        if(index < 0 || index >= this.length) return undefined;
        if(index ===0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previous.next = removed.next;
        this.length--;
        return removed;        
    }

    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(let i =0; i < this.length;i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}