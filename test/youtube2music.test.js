'use strict';

require('../src/youtube2music');
let chai = require('chai');
let assert = chai.assert;

describe('youtube2music', function () {
    describe('#youtubeToYoutubeMusic()', function () {
        it("should convert a youtube.com URL to a music.youtube.com URL", function () {
            let lnk = "https://youtu.be/xoFlHMG6Wfo";
            let expectedLink = "https://music.youtube.com/watch?v=xoFlHMG6Wfo";
            assert.equal(youtubeToYoutubeMusic(lnk), expectedLink);
        });

        it("should include timestamp param", function () {
            let lnk = "https://www.youtube.com/watch?v=sP-IX4mdnFY#t=1m29s";
            let expectedLink = "https://music.youtube.com/watch?v=sP-IX4mdnFY#t=1m29s";
            assert.equal(youtubeToYoutubeMusic(lnk), expectedLink);
        });

        it("should include playlist param", function () {
            let lnk = "https://www.youtube.com/watch?v=9JOu_l1dets&list=PLVL8S3lUHf0TT2SGhaJy5FREpv2rUx2i3";
            let expectedLink = "https://music.youtube.com/watch?v=9JOu_l1dets&list=PLVL8S3lUHf0TT2SGhaJy5FREpv2rUx2i3";
            assert.equal(youtubeToYoutubeMusic(lnk), expectedLink);
        });

        it("should replace %3D with =", function () {
            let lnk = "https://www.youtube.com/watch%3Fv%3DLTTt-ikVJSk";
            let expectedLink = "https://music.youtube.com/watch?v=LTTt-ikVJSk";
            assert.equal(youtubeToYoutubeMusic(lnk), expectedLink);
        });

        it("should convert a youtu.be URL to a music.youtube.com URL", function () {
            let lnk = "https://youtu.be/xoFlHMG6Wfo";
            let expectedLink = "https://music.youtube.com/watch?v=xoFlHMG6Wfo";
            assert.equal(youtubeToYoutubeMusic(lnk), expectedLink);
        });

        it("should include timestamp param in youtu.be link", function () {
            let lnk = "https://youtu.be/hggISFswKcw?t=27";
            let expectedLink = "https://music.youtube.com/watch?v=hggISFswKcw?t=27";
            assert.equal(youtubeToYoutubeMusic(lnk), expectedLink);
        });
    });
});