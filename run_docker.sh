#!/bin/bash
sudo docker build -t myporto .
sudo docker run -d -p 8083:3000 myporto