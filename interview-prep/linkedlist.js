class Node{
  constructor(val){
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;

  }

  insertVal(val){
let newNode = new Node(val);
if(this.head === null){
  this.head = newNode;
}else{
  let current = this.head;
  while(current.next){
    current = current.next;
  }
  current.next = newNode;
}

  }
  insertBefore(value, newVal){
    let newNode = new Node(newVal);
    let current = this.head;
    let prev = null;
    if(current.val === value){
      newNode.next = current;
      current = newNode;
      return;
    }


    while(current){
      if(current.val === value){
        prev.next = newNode;
        newNode.next = current;
        return;
      }
       prev = current;
      current = current.next;
    }
  }
  insertAfter(value, newVal){
    let newNode = new Node(newVal);
    let current = this.head;

    while(current){
      if(current.val === value){
        let reserve = newNode.next;
        current.next = newNode;
         newNode.next = reserve;
        return;
      }
      current = current.next;

    }
  }
  kthFromEnd(k){
    let current = this.head;
    let array = [];
if(k < 1 || k > array.length){
   'Invalid input';
}

    while(current){
       array.push(current.val);
       current = current.next;

    }
return array[array.length - 1 - k];
  }

  toString(){

    let str = '';
    let current = this.head;
    while(current){
       str += '{' + current.val + '}' + '->'; 
       current = current.next;
    }
    str += 'NULL';
    return str;
    
  }
}
let newLinked = new LinkedList();
newLinked.insertVal(2);
newLinked.insertVal(3);
newLinked.insertVal(4);
newLinked.insertVal(5);
newLinked.insertVal(6);

console.log(newLinked.toString());

console.log('k value',newLinked.kthFromEnd(0));
console.log('val',newLinked);
module.exports = {LinkedList};