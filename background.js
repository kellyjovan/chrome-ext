chrome.runtime.onInstalled.addListener(function () {
  let url;
  let tabId;
  let currentTab;
  let interval;

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({})],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  //listens for message
  chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      //if message received is hello, send response back to popup
      url = request.pageURL;
      tabId = request.tabId;
      if (typeof request.pageURL === "string")
        sendResponse({ pageURL: request.pageURL });

      if (!url) clearInterval(interval)
    });

  //turns on every time you switch tabs
  chrome.tabs.onActivated.addListener(function () {
    chrome.tabs.query({ 'active': true }, function (tabs) {
      currentTab = tabs[0];
      console.log("check current url", currentTab.url)
      console.log("check good url", url)
      if (url && !interval && currentTab.url !== url) {
        var counter = 5;
        interval = setInterval(function () {
          counter--
          console.log(counter)
          if (counter === 0) {
            console.log("DO YOUR WORK FOR THE LOVE OF GOD")
            clearInterval(interval)
            interval = null;
            // url = null;
            //send image 
            // chrome.runtime.sendMessage({
            //     msg: "Knock knock", 
            //     data: {
            //         subject: "Loading",
            //         content: "Just completed!"
            //     }
            // });

            // var port = chrome.runtime.connect({ name: "knockknock" });
            // port.postMessage({ joke: "Knock knock" });
            // var port = chrome.runtime.connect({name: "knockknock"});
            // port.postMessage({joke: "Hellow"});
            // chrome.runtime.sendMessage({msg: 'hellow'}, function (res) {
            //   console.log('getting response')
            //   console.log(res);
            // });
            // console.log('this is current tab')
            // console.log(currentTab);
            // chrome.tabs.sendMessage(currentTab.id, {msg:"hellow"}, function (e) {
            //   console.log('in background');
            //   console.log(e)
            // })
            // port.onMessage.addListener(function (msg) {
            //     console.log("background message", msg)
            //     if (msg.question == "Who's there?")
            //         port.postMessage({ answer: "Madame" });
            //     else if (msg.question == "Madame who?")
            //         port.postMessage({ answer: "Madame... Bovary" });
            // });

            chrome.tabs.update(tabId, { active: true })
          }
        }, 1000)
      } else if (currentTab.url === url) {
        console.log('stopping')
        clearInterval(interval)
        interval = null
      }

    });

  })

  // chrome.runtime.onMessage.addListener(function(port) {
  //   console.assert(port.name == "knockknock");
  //   port.onMessage.addListener(function(msg) {
  //     console.log(msg)
  //     if (msg.joke == "Knock knock")
  //       port.postMessage({question: "Who's there?"});
  //     else if (msg.answer == "Madame")
  //       port.postMessage({question: "Madame who?"});
  //     else if (msg.answer == "Madame... Bovary")
  //       port.postMessage({question: "I don't get it."});
  //   });
  // });
});

