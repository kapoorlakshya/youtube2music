### 0.5.0 (2019-07-26)

* Display context menu option for currently open video URL (issue [#7](https://github.com/kapoorlakshya/youtube2music/issues/7)).

### 0.4.0 (2019-07-11)

* Fix bug where the extension icon was displayed in grayscale instead of color (issue #6).
* Code quality improvements.

**Note:** This should have been a patch release (`0.3.1`) because no 
new features were added.

### 0.3.0 (2019-06-13)

* Add support for `youtube.com/playlist` links (issue [#5](https://github.com/kapoorlakshya/youtube2music/issues/5)).

### 0.2.0 (2019-06-06)

* Add support for Firefox and Edge.
* Add support for timestamp (`t=27`) and playlist (`list=`) values in the URL.
* Failing to extract required information from the link in focus results
in an alert informing the user about the failure. The error points a link
to the GitHub repo where the issue can be reported.

### 0.1.0 (2019-06-04)

* Released Chrome extension with support for `youtube.com` and `youtu.be` links.