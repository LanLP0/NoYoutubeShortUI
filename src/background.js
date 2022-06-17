browser.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    let videoId = details.url.split("/").pop();
    console.log(videoId);
    let newUrl = "https://www.youtube.com/watch?v=" + videoId;
    browser.tabs.update(details.tabId, {url: newUrl});
}, {url: [{urlContains: "youtube.com/shorts/"}]});

browser.webNavigation.onBeforeNavigate.addListener(function(details) {
    let videoId = details.url.split("/").pop();
    console.log(videoId);
    let newUrl = "https://www.youtube.com/watch?v=" + videoId;
    browser.tabs.update(details.tabId, {url: newUrl});
}, {url: [{urlContains: "youtube.com/shorts/"}]});