chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // if (changeInfo.status == "complete") {
  chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
    // console.log("Foreground Script injected");
  });
  // }
});
