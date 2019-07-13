// Support Chrome, Firefox, and Edge
window.browser = (function () {
    // noinspection JSUnresolvedVariable,JSUnresolvedVariable
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

// Opens YouTube Music link in a new tab
function launchYoutubeMusic(info) {
    let srcLink = '';

    // Issue 7 - Allow opening currently open video.
    if (info.pageUrl.match(/youtube.com\/watch\?v=/) != null) {
        srcLink = info.pageUrl; // Current URL
    } else {
        srcLink = info.linkUrl; // Link you right click on
    }

    // noinspection JSUnresolvedVariable,JSUnresolvedVariable
    browser.tabs.create({
        url: youtubeToYoutubeMusic(srcLink)
    });
}

// Create context menu only for Youtube links
// noinspection JSUnresolvedVariable
browser.contextMenus.create({
    id: "openInYTM",
    title: "Open in YouTube Music",
    contexts: ["page", "link"],
    documentUrlPatterns: [
        "*://youtube.com/*",
        "*://www.youtube.com/*"
    ],
    targetUrlPatterns: [
        "*://youtube.com/*",
        "*://www.youtube.com/*",
        "*://youtu.be/*",
        "*://m.youtube.com/*"
    ],
    onclick: launchYoutubeMusic,
});