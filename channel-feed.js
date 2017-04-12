(function () {
    var redirected;
    Array.prototype.slice.call(document.getElementsByTagName('link')).forEach(function (element) {
        if (element.getAttribute('type') === 'application/rss+xml') {
            location.href = element.getAttribute('href');
            redirected = true;
        }
    });
    if (redirected) {
        console.log('Found direct feed link');
        return;
    }

    Array.prototype.slice.call(document.getElementsByTagName('meta')).forEach(function (element) {
        if (element.getAttribute('itemprop') === 'channelId') {
            location.href = 'https://www.youtube.com/feeds/videos.xml?channel_id=' + element.getAttribute('content');
            redirected = true;
        }
    });
    if (redirected) {
        console.log('Found channel ID');
        return;
    }

    console.log('Could not find a channel RSS feed from ' + location.href);
})();
