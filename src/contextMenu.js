// Support Chrome, Firefox, and Edge
window.browser = (function () {
    // noinspection JSUnresolvedVariable,JSUnresolvedVariable
    return window.msBrowser ||
        window.browser ||
        window.chrome;
})();

// Opens YouTube Music link in a new tab
function launchYoutubeMusic(info) {
    // noinspection JSUnresolvedVariable,JSUnresolvedVariable
    browser.tabs.create({
        url: youtubeToYoutubeMusic(info.linkUrl)
    });
}

// Create context menu only for Youtube links
// noinspection JSUnresolvedVariable
browser.contextMenus.create({
    id: "openInYTM",
    title: "Open in YouTube Music",
    contexts: ["link"],
    targetUrlPatterns: [
        "*://youtube.com/*",
        "*://www.youtube.com/*",
        "*://youtu.be/*",
        "*://m.youtube.com/*"
    ],
    onclick: launchYoutubeMusic,
});