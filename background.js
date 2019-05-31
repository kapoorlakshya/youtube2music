function launchYoutubeMusic(info, tab) {
    chrome.tabs.create({
        url: info.linkUrl.replace('www', 'music')
    });
}

chrome.contextMenus.create({
    id: "openInYTM",
    title: "Open in YouTube Music",
    contexts: ["link"],
    onclick: launchYoutubeMusic
});
