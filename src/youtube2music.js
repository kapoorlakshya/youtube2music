// Converts given YouTube link to a YouTube Music link
youtubeToYoutubeMusic = function (lnk) {
    let youtubeMusicBase = "https://music.youtube.com/";
    let ytmLink = '';

    // Extract video ID & other params
    if (lnk.match(/http(s)?:\/\/youtu\.be/) != null) {
        ytmLink = youtubeMusicBase + parseShortUrl(lnk);
    } else if (lnk.match(/youtube.com/) != null) {
        ytmLink = youtubeMusicBase + parseLongUrl(lnk);
    } else { // Edge case - Somehow a non-youtube URL makes it.
        alert("Unsupported link: " + lnk); // Inform user
        throw("Unsupported link: " + lnk); // Exit
    }

    // Failed to capture any values from the links. Maybe the pattern changed?
    if (ytmLink === '' || ytmLink === youtubeMusicBase) {
        alert(failMessage(lnk)); // Inform user
        throw(failMessage(lnk)); // Exit
    }

    ytmLink = decodeURIComponent((ytmLink));
    console.log("Opening YouTube Music link: " + ytmLink);
    return ytmLink;
};

// Returns video ID and other params from the given short URL (youtu.be).
//
// http://youtu.be/uhY9Zxv1-oo
// -> uhY9Zxv1-oo
// https://youtu.be/hggISFswKcw?t=27
// -> hggISFswKcw?t=27
function parseShortUrl(lnk) {
    return "watch?v=" + lnk.match(/youtu.be\/([a-zA-Z0-9\-_?=]+)/)[1];
}

// Returns video ID and other params from the given long URL (youtube.com).
//
// https://www.youtube.com/watch?v=sP-IX4mdnFY#t=1m29s
// -> sP-IX4mdnFY#t=1m29s
// https://www.youtube.com/watch?v=9JOu_l1dets&list=PLVL8S3lUHf0TT2SGhaJy5FREpv2rUx2i3
// -> 9JOu_l1dets&list=PLVL8S3lUHf0TT2SGhaJy5FREpv2rUx2i3
// https://www.youtube.com/attribution_link?a=ujJ0W91Plr8&u=%2Fwatch%3Fv%3DLTTt-ikVJSk%26feature%3Dshare
// -> v%3DLTTt-ikVJSk
// https://www.youtube.com/playlist?list=PLRXXMF3iEkmMD0u5hxqVUpUllN4lgGTHf
// -> playlist?list=PLRXXMF3iEkmMD0u5hxqVUpUllN4lgGTHf
function parseLongUrl(lnk) {
    return lnk.match(/(?:watch(:?.+)v|playlist)(?:=|%3D|\?)([a-zA-Z0-9\-_#?=]+(&list.+)?)/)[0];
}

// Message to print when an error occurs
function failMessage(lnk) {
    return "Failed to open link: " + lnk + `\n\nPlease report this failure on the GitHub repo:
        \nhttps://github.com/kapoorlakshya/youtube2music/issues\n\nThank you!`;
}