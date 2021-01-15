const express = require("express");
const router = express.Router();
const ytdl = require("ytdl-core");

router.get("/downloadVideo", (req, res) => {
  try {
    var URL = req.query.URL;
    res.header("Content-Disposition", 'attachment; filename="video.mp4"');
    ytdl(URL, {
      format: "mp4",
    }).pipe(res);
  } catch (e) {
    throw e;
  }
});

router.get("/downloadMP3", (req, res) => {
    try {
      var URL = req.query.URL;
      res.header("Content-Disposition", 'attachment; filename="audio.mp3"');
      ytdl(URL, {
        filter: 'audioonly'
      }).pipe(res);
    } catch (e) {
      throw e;
    }
  });

module.exports = router;
