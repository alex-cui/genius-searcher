function searchSong(info,tab) {
    chrome.tabs.create({  
      url: "http://www.genius.com/search?q=" + info.selectionText
    });
}

chrome.contextMenus.create({
    title: 'Search Genius for "%s"', 
    contexts:["selection"], 
    onclick: searchSong
});
