
console.log("A new Perfect Tab script started");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.tree);
  printTree(message.tree);
  bookmarks = message.tree;
}

let bookmarks = undefined;
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

    printP(count,string,tree.children[i].url);
    printTree(tree.children[i]);
    if(!tree.children[i].url) count--;
  }
}

let firstChild = false;
function printP(index,string,url){
  if(!string){
    return; 
  }
  let div = document.createElement("div");
  //div.style.display = "inline-block";
  //div.style.float = "left";
  let favIcon = document.createElement("img");
  let p = document.createElement("h"+index);
    p.style.margin = 0;
    p.style.display = "inline";
    
  let space = "";
  for(let i = 0; i < index; i++){
    space += "\u00A0\u00A0\u00A0\u00A0";
  }
  if(index>0) space += "-\u00A0";
  let text = document.createTextNode(space+string);
  p.appendChild(text);
    p.style.color = "white";
    
  //Defined
  if(url)favIcon.src = 'chrome://favicon/' + url;
  //else favIcon.src = "folderIcon"; To be implemented
  
  if(url){
    let imgButton = document.createElement("button");
    imgButton.style.paddingUp = 2;
    imgButton.style.padding = 1;
    imgButton.appendChild(favIcon);
    imgButton.addEventListener(
                                'click', 
                                function(){chrome.tabs.create(
                                    { url: url }
                                );
    });
    div.appendChild(imgButton);  
      div.style.display = "inline-grid";
  } else {
     p.style.display = "block";
     document.body.appendChild(p); 
     firstChild = true;
  }

  //if(has no favicon) div.appendChild(p);
  document.body.appendChild(div);
}
