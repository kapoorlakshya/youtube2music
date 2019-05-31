function launchYoutubeMusic(info, tab) {
    lnk = info.linkUrl;
    console.log("Opening link: " + lnk);
    ytm_lnk = lnk.replace('www', 'music');
    chrome.tabs.create({
        url: ytm_lnk
    });
};

chrome.contextMenus.create({
    title: "Open in YouTube Music",
    contexts: ["link"],
    onclick: launchYoutubeMusic
});