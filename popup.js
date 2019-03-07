const work = document.querySelector('#workBtn');
const pause = document.querySelector('#pauseBtn')
const workingText = document.querySelector('#working');
const pausedText = document.querySelector('#paused');

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.msg) {
      //  To do something
      console.log("image reach")
    }
  }
);

work.addEventListener('click', function () {
  workingText.style.display = "block"
  pausedText.style.display = "none"
  chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    let currentUrl = tabs[0].url;
    chrome.runtime.sendMessage({ pageURL: currentUrl, tabId: tabs[0].id }, function (response) {
      console.log(response.pageURL);
    });
  });
});

pause.addEventListener('click', function() {
  workingText.style.display = "none"
  pausedText.style.display = "block"

  chrome.runtime.sendMessage({pageURL: null, tabId: null}, function (response) {
    console.log(response);
  })
})