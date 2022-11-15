
function getCurrentTab() {

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs  => {
    console.log(tabs)
    let url = tabs[0].url;
    console.log(url)
  })
}

getCurrentTab();

 