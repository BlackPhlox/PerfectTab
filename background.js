// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

console.log('background running');

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  let msg = {
    txt: "hello"
  }
  chrome.tabs.sendMessage(tab.id, msg);
  window.open('https://github.itu.dk/pages/mauh/SDBG18_GROUP3/#/', '_blank');
  //window.open('marktramp/build/index.html', '_blank');
}