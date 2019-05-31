// Converts given YouTube link to a YouTube Music link
function youtubeToYoutubeMusic(lnk) {
    let youtubeMusicBase = "https://music.youtube.com/watch?v=";

    // Extract video ID
    if (lnk.match(/youtu.be/) != null) {
        // http://youtu.be/uhY9Zxv1-oo
        // -> uhY9Zxv1-oo
        return youtubeMusicBase + lnk.match(/youtu.be\/([a-zA-Z0-9\-_]+)/)[1];
    } else if (lnk.match(/youtube.com/) != null) {
        // https://www.youtube.com/watch?v=sP-IX4mdnFY#t=1m29s
        // -> sP-IX4mdnFY
        return youtubeMusicBase + lnk.match(/v=([a-zA-Z0-9\-_]+)/)[1];
    } else {
        alert("Unsupported link: " + lnk);
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
    targetUrlPatterns: [
        "https://www.youtube.com/watch?v=*",
        "http://www.youtube.com/watch?v=*",
        "https://youtube.com/watch?v=*",
        "http://youtube.com/watch?v=*",
        "http://youtu.be/*",
        "https://youtu.be/*"
    ],
    onclick: launchYoutubeMusic,
});
