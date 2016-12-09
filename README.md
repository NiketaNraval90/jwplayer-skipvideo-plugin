# jwplayer-skipvideo-plugin
This plugin simply provide to skip video while playing video on jwplayer after specified time in seconds

#Requirement Dependecies
Jwplayer library
#Configucation

HTML
----
```html
<div id="myDiv">Video</div>
```
Javascript
----------
```javascript
jwplayer("myDiv").setup({
    file: "your_localvideo_file.mp4",
    provider: "video",    
    plugins: {
        "./skipvideo.js": {
            click: function () { // add custom handler 
                console.log('Hpp');
            },
            time: 1, // in seconds
        }
    }
});
```
