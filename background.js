
// Handle requests for passwords
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'file_jira') {
        chrome.tabs.create({
            url: chrome.extension.getURL('dialog.html'),
            active: false
        }, function(tab) {
            // After the tab has been created, open a window to inject the tab
            chrome.windows.create({
                tabId: tab.id,
                focused: true
            }, function(win) {
              // console.log("title: " + request.title);
              // console.log("descr: " + request.descr);
              // console.log("author: " + request.author);
              // console.log("time: " + request.reporttime);

              chrome.tabs.sendMessage(tab.id, {action: "populate_jira_fields",
                title: request.title,
                descr: request.descr,
                author: request.author,
                reporttime: request.reporttime});
            });
        });
    }
});
