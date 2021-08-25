
chrome.runtime.onConnect.addListener((port) => {
    if (port.name === 'popup_page') {
        port.onMessage.addListener((request) => {
            if (request.type === 'search') {
                var newURL = `https://www.google.com/search?q=${request.msg}`;
                chrome.tabs.create({ url: newURL }, (tab) => {
                    setTimeout(function () {
                        chrome.tabs.remove(tab.id, () => {
                            console.log("Tab Closed");
                        });
                    }, 500000);
                });
            }
        })
        port.onMessage.addListener((request) => {
            if (request.type === 'print') {
                chrome.tabs.query({ active: true, currentWindow: true },
                    function (tabs) {
                        let tab_Id = tabs[0].id;
                        chrome.scripting.executeScript(
                            {
                                target: { tabId: tab_Id },
                                function: function () { return window.print() }
                            },
                            () => {
                                console.log("Printed");
                            });
                    });
            }
        });
    }
    if(port.name === 'content_page')
    {
        port.onMessage.addListener((request) => {
            if (request.action === "notification") {
                chrome.notifications.create("noitifyTest",
                    {
                        iconUrl:
                            "icons8-bell-48.png",
                        type: "basic",
                        title: request.data.title,
                        message: request.data.msg,
                    },
                    () => { 
                        console.log("Notification");
                    }
                );
            }
        });
    }
});
