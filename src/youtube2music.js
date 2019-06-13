// Converts given YouTube link to a YouTube Music link
youtubeToYoutubeMusic = function (lnk) {
    let youtubeMusicBase = "https://music.youtube.com/watch?v=";
    let ytmLink = '';

    // Extract video ID & other params
    if (lnk.match(/http(s)?:\/\/youtu\.be/) != null) {
        // http://youtu.be/uhY9Zxv1-oo
        // -> uhY9Zxv1-oo
        // https://youtu.be/hggISFswKcw?t=27
        // -> hggISFswKcw?t=27
        ytmLink = youtubeMusicBase + lnk.match(/youtu.be\/([a-zA-Z0-9\-_?=]+)/)[1];
    } else if (lnk.match(/youtube.com/) != null) {
        // https://www.youtube.com/watch?v=sP-IX4mdnFY#t=1m29s
        // -> sP-IX4mdnFY#t=1m29s
        // https://www.youtube.com/watch?v=9JOu_l1dets&list=PLVL8S3lUHf0TT2SGhaJy5FREpv2rUx2i3
        // -> 9JOu_l1dets&list=PLVL8S3lUHf0TT2SGhaJy5FREpv2rUx2i3
        // https://www.youtube.com/attribution_link?a=ujJ0W91Plr8&u=%2Fwatch%3Fv%3DLTTt-ikVJSk%26feature%3Dshare
        // -> v%3DLTTt-ikVJSk
        ytmLink = youtubeMusicBase + lnk.match(/v(?:=|%3D)([a-zA-Z0-9\-_#?=]+(&list.+)?)/)[1];
        ytmLink = ytmLink.replace("%3D", "=");
    } else {
        alert("Unsupported link: " + lnk); // Inform user
        throw("Unsupported link: " + lnk); // Exit
    }

    // Failed to capture any values from the links. Maybe the pattern changed?
    if (ytmLink === youtubeMusicBase) {
        alert(failMessage(lnk)); // Inform user
        throw(failMessage(lnk)); // Exit
    }

    console.log("Opening YouTube Music link: " + ytmLink);
    return ytmLink;
};

// Message to print when an error occurs
function failMessage(lnk) {
    return "Failed to open link: " + lnk + `\n\nPlease report this failure on the GitHub repo:
        \nhttps://github.com/kapoorlakshya/youtube2music/issues\n\nThank you!`;
}