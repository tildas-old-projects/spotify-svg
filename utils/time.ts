// https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
// didnt feel like using another npm package lol
function humanizeMs(millis: number) {
    const date = new Date(millis)
    return date.getUTCMinutes() + ":" + date.getUTCSeconds()
}

export default humanizeMs;