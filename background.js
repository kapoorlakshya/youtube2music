// Converts given YouTube link to a YouTube Music link
function youtubeToYoutubeMusic(lnk) {
    let youtubeMusicBase = "https://music.youtube.com/watch?v="
    if (lnk.match(/youtu.be/) != null) {
        // http://youtu.be/uhY9Zxv1-oo
        return youtubeMusicBase + lnk.match(/youtu.be\/(.+)/)[1];
    } else {
        // https://www.youtube.com/watch?v=sP-IX4mdnFY#t=1m29s
        return youtubeMusicBase + lnk.match(/v=([a-zA-Z0-9\-]+)/)[1];
    }
}

// Opens YouTube Music link in a new tab
function launchYoutubeMusic(info, tab) {
    chrome.tabs.create({
        url: youtubeToYoutubeMusic(info.linkUrl)
    });
}

// Create context menu only for Youtube links
chrome.contextMenus.create({
    id: "openInYTM",
    title: "Open in YouTube Music",
    contexts: ["link"],
    onclick: launchYoutubeMusic,
});
