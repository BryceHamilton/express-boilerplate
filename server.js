const express = require('express');

const PORT = 4000;

express()
  .use(express.urlencoded({ extended: false }))
  .use(express.json())

  .listen(PORT, () => {
    console.info(`🌍 Listening on port ${PORT}`);
  });
