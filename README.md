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
