// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "Hello"
  }

  chrome.bookmarks.getTree((tree) => {
    console.log(tree[0]);
    msg.tree = tree[0];
    chrome.tabs.sendMessage(tab.id,msg)
  });

  /*var newURL = "https://blackphlox.github.io/PerfectTab";
  let newTab =chrome.tabs.create({ url: newURL });
  */
}



//Get favicon
//https://www.google.com/s2/favicons?domain=google.dk