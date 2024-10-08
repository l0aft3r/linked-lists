import LinkedList from "./linkedlist.js";

const list = new LinkedList();
const emptylist = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
list.append("chicken")
list.prepend("lion");

list.removeAt(7);
console.log(list.toString());

//console.log(list.toString());
//console.log(list.find('dog'));
//console.log(list.at(list.find('chicken')));
//
//console.log(emptylist.find('chicken'));
//console.log(emptylist.at(list.find('chicken')));