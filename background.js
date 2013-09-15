chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {
        code: "location.href = 'https://cms.apache.org/redirect?uri=' + escape(location.href)"
    });
});