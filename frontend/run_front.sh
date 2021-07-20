#!/bin/bash

echo "** Installing packages ** "
npm install
echo "** Starting dev server**"
npm run start
#npm run start-react PORT=8080

echo "** Dev server ok  running on localhost:8080 **"