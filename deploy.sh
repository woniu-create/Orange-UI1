rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M main &&
git remote add origin git@github.com:woniu-create/orange-ui.git &&
git push -f -u origin main
cd -
echo https://woniu-create.github.io/orange-ui/index.html