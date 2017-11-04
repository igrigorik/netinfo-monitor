chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension: " + request);

    chrome.browserAction.setBadgeText({text: request.ect});
    chrome.browserAction.setBadgeBackgroundColor({color: "#F00"});

    sendResponse();
  }
);
