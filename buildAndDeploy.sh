# delete content of github/test1/website
# move to content of dist file to github/test1/website
# and git commit and push

nvm use 23
npm run build
rm -rf ../test1/website/*
cp -r dist/* ../test1/website/
cd ../test1/website/
git add .
git commit -m "Update website"
git push


