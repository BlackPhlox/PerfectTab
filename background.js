// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
	txt: chrome.bookmarks.getTree()
  };
  chrome.tabs.sendMessage(tab.id, msg);
  window.open('https://blackphlox.github.io/PerfectTab', '_blank');
}