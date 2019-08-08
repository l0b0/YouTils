# YouTube channel/user web feed bookmarklet

[This project has moved to GitLab](https://gitlab.com/victor-engmark/YouTube-channel-web-feed-bookmarklet) - any updates will be pushed there.

Use this on a YouTube page to **go to the RSS feed of the channel/user you’re currently on.** Currently works for user, channel and video pages. 

```javascript
javascript:(function () {
    var channelId = function () {
        if (
            window.hasOwnProperty('ytInitialPlayerResponse') &&
            window['ytInitialPlayerResponse'] !== null &&
            window['ytInitialPlayerResponse'].hasOwnProperty('videoDetails') &&
            window['ytInitialPlayerResponse']['videoDetails'].hasOwnProperty('channelId')
        ) {
            console.log('Found channel in ytInitialPlayerResponse');
            return window['ytInitialPlayerResponse']['videoDetails']['channelId'];
        }

        var id;
        Array.prototype.slice.call(document.getElementsByTagName('link')).forEach(function (element) {
            if (element.getAttribute('rel') === 'canonical') {
                console.log('Found channel link');
                id = element.getAttribute('href').substr(32);
            }
        });
        return id;
    }();
    if (channelId === undefined) {
        console.log('Could not find a channel ID feed at ' + location.href);
    } else {
        location.href = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + channelId;
    }
})();
```

## Use

1. Create a new bookmark.
1. Paste the full code above (from `javascript:` through the final `;`) into the "Location" field.
1. Save the bookmark.

## License

[AGPLv3+](LICENSE)
