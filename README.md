# get-user-media-input

Include JS

    <script src="to-blob.js"></script>
    <script src="get-user-media-input.js"></script>

Apply `class="get-user-media"` and `data-zoom-root-id="profile-photo"` to each desired file upload field

    <img id="profile-photo" width="64" height="64" src="profile-photo"/>
    <form action="profile-photo">
      <input type="file" name="profile-photo" class="get-user-media" data-zoom-root-id="profile-photo"/>
    </form>

When the user clicks the play button, the `<img>` will be replaced with a live video stream, clicking the video will submit the form with the new picture.

![image](screenshot.png)

# Research

* https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
* https://developer.mozilla.org/en-US/docs/WebRTC/Taking_webcam_photos
* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
* http://stackoverflow.com/questions/4429440/html5-display-video-inside-canvas
* http://stackoverflow.com/questions/12168909/blob-from-dataurl
* https://github.com/eligrey/canvas-toBlob.js/blob/master/canvas-toBlob.js
* http://new-bamboo.co.uk/blog/2012/01/10/ridiculously-simple-ajax-uploads-with-formdata
* https://github.com/rack/rack/blob/master/test/spec_multipart.rb
* https://developer.mozilla.org/en-US/docs/Web/API/Navigator.getUserMedia
