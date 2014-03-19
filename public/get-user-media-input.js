// Jon Bardin Copyright 2014 GPL
(function () {
  document.addEventListener("DOMContentLoaded", function() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
    if (navigator.getUserMedia) {
      var getUserMediaInputs = document.getElementsByClassName("get-user-media");
      for (var i=0; i<getUserMediaInputs.length; i++) {
        var getUserMediaInput = getUserMediaInputs[i];
        var zoomRoot = document.getElementById(getUserMediaInput.getAttribute("data-zoom-root-id"));
        if (zoomRoot) {
          var canvas = document.createElement("canvas");
          var getUserMediaButton = document.createElement("button");
          getUserMediaButton.innerHTML = "►"; //&#x1f4f7;
          getUserMediaButton.onclick = function(ev) {
            ev.preventDefault();
            getUserMediaInput.disabled = getUserMediaButton.disabled = "disabled";
            navigator.getUserMedia({video: true},
              function(localMediaStream) {
                var container = document.createElement("div");
                var video = document.createElement('video');
                container.appendChild(video);
                video.src = window.URL.createObjectURL(localMediaStream);
                video.onloadedmetadata = function(meta) {
                  container.style.cursor = "pointer";
                  container.style.position = "absolute";
                  container.style.width = zoomRoot.offsetWidth + "px";
                  container.style.height = zoomRoot.offsetHeight + "px";
                  container.style.overflow = "hidden";
                  zoomRoot.parentElement.insertBefore(container, zoomRoot);
                  video.style.height = "100%";
                  video.style.marginLeft = -((video.offsetWidth / 2) - (zoomRoot.offsetWidth / 2)) + "px";
                  video.play();
                  video.onclick = function(ev) {
                    canvas.width = zoomRoot.offsetWidth;
                    canvas.height = zoomRoot.offsetHeight;
                    canvas.getContext('2d').drawImage(video, parseInt(video.style.marginLeft), 0, video.offsetWidth, video.offsetHeight);
                    var data = canvas.toDataURL('image/png');
                    canvas.toBlob(function(blob) {
                      var post = new XMLHttpRequest();
                      post.open("POST", getUserMediaInput.form.action, true);
                      post.onload = function (ev) {
                        window.location.reload();
                      };
                      var formData = new FormData(getUserMediaInput.form);
                      formData.append(getUserMediaInput.name, blob)
                      post.send(formData);
                    });
                  };
                };
              },
              function(error) {
                window.location.hash = error.name + error.message;
              }
            );
          };
          getUserMediaInput.parentElement.insertBefore(getUserMediaButton, getUserMediaInput);
        }
      }
    }
  });
})();
