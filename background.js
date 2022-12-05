let active_tab_id = 0;

// chrome.tabs.onActivated.addListener((tab) => {
//   chrome.tabs.get(tab.tabId, (current_tab_info) => {
//     active_tab_id = tab.tabId;

//     // if (/^https:\/\/www\.leetcode/.test(current_tab_info.url)) {
//     chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
//       console.log("i injected")
//     );
//     // }
//   });
// });

// let succeed = false;
// chrome.tabs.onUpdated.addListener((tabId, tab) => {
//   if (tab.url && tab.url.includes("leetcode.com/problems/")) {
//     // const queryParameters = tab.url.split("?")[1];
//     // const urlParameters = new URLSearchParams(queryParameters);
//     if (!succeed) {
//       console.log("succeed");
//       chrome.tabs.executeScript(null, { file: "./foreground.js" }, () =>
//         console.log("i injected")
//       );
//       succeed = true;
//     }
//     // chrome.tabs.sendMessage(tabId, {
//     //   type: "NEW",
//     //   videoId: urlParameters.get("v"),
//     // });
//   }
// });

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // if (changeInfo.status == "complete") {
  chrome.tabs.executeScript(null, { file: "./foreground.js" }, () => {
    // console.log("Foreground Script injected");
  });
  // }
});
