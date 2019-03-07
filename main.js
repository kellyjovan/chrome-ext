// chrome.runtime.onConnect.addListener(function(port) {
//     console.log('ahhhhhh')
//     console.assert(port.name == "knockknock");
//     port.onMessage.addListener(function(msg) {
//         console.log("message on popup", msg)
//       if (msg.joke == "Knock knock")
//         port.postMessage({question: "Who's there?"});
//       else if (msg.answer == "Madame")
//         port.postMessage({question: "Madame who?"});
//       else if (msg.answer == "Madame... Bovary")
//         port.postMessage({question: "I don't get it."});
//     });
//   });

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(request, sender, sendResponse)
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });

// var port = chrome.runtime.connect({name: "knockknock"});
// port.postMessage({joke: "Knock knock"});
// chrome.runtime.onMessage.addListener(function(msg) {
//   console.log(msg);
  // if (msg.question == "Who's there?")
  //   port.postMessage({answer: "Madame"});
  // else if (msg.question == "Madame who?")
  //   port.postMessage({answer: "Madame... Bovary"});
// });

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   console.log('here in content script')
  // console.log(request, sender, sendResponse)
  //if message received is hello, send response back to popup
  // url = request.pageURL;
  // tabId = request.tabId;
  // if (typeof request.pageURL === "string")
  //   sendResponse({ pageURL: request.pageURL });
// });

// chrome.runtime.sendMessage({text: "hey"}, function(response) {
//   console.log("Response: ", response);
// });

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(request, sender, sendResponse)
    // console.log(sender.tab ?
    //             "from a content script:" + sender.tab.url :
    //             "from the extension");
    // if (request.greeting == "hello")
  //     sendResponse({farewell: "goodbye"});
  // });

  


  console.log("connectioned in mainjs")