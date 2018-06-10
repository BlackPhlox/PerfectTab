
console.log("New tab script started");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.tree);
  printTree(message.tree);
}

let count = 0;

function printTree(tree){
  count++;
  if(!tree.children){
    count--;
    return;
  }
  for (let i = 0; i < tree.children.length; i++) {
    let string = "";
    string += tree.children[i].title;
    if(tree.children[i].url) string += "\u00A0(" + tree.children[i].url +")"; 

    printP(count,string);
    printTree(tree.children[i]);
    if(!tree.children[i].url) count--;
  }
}

function printP(index,string){
  if(!string){
    return; 
  }
  let p = document.createElement("h"+index);
  let space = "";
  for(let i = 0; i < index; i++){
    space += "\u00A0\u00A0\u00A0\u00A0";
  }
  if(index>0) space += "-\u00A0";
  let text = document.createTextNode(space+string);
  p.appendChild(text);
  document.body.appendChild(p);
}
