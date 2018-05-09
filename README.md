# YouTube channel web feed bookmarklet

Use this on a YouTube page to **go to the RSS feed of the channel you’re currently on.** Works on video pages and the channel page itself.

```javascript
javascript:(function () {
    var newLocation = function () {
        var url;
        Array.prototype.slice.call(document.getElementsByTagName('link')).forEach(function (element) {
            if (element.getAttribute('type') === 'application/rss+xml') {
                console.log('Found direct feed link');
                url = element.getAttribute('href');
            }
        });
        if (!url) {
            Array.prototype.slice.call(document.getElementsByTagName('meta')).forEach(function (element) {
                if (element.getAttribute('itemprop') === 'channelId') {
                    console.log('Found channel ID');
                    url = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + element.getAttribute('content');
                }
            });
        }
        return url;
    }();
    if (newLocation === undefined) {
        console.log('Could not find a channel RSS feed from ' + location.href);
    } else {
        location.href = newLocation;
    }
})();
```

## Use

1. Create a new bookmark.
1. Paste the full code above (from `javascript:` through the final `;`) into the "Location" field.
1. Save the bookmark.

## License

[AGPLv3+](LICENSE)
