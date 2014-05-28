#!/bin/bash

# install node.js dependencies
npm install

# create a new profile of settings for this project
cortex profile add hybrid
# use it
cortex profile use hybrid

# set server_mode to `false`, so that you could develop without `cortex server`
cortex config set server_mode false
cortex install
cortex build

# open index.html in your browser
open ./neurons/cortex-hybrid-sample/0.1.0/template/index.html