#!/bin/bash
sudo docker build -t myPorto .
sudo docker run -d -p 8083:3000 myPorto