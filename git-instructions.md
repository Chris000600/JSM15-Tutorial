For first time commit:

```
git init
git add -A
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Chris000600/JSM15-Tutorial.git
git push -u origin main
```

For update commits:

```
git add .
git commit -m "commit message"
git push
```

To sync changes:

```
git pull origin main
```

To check if the remote was added correctly:

```
git remote -v
```

View Available Branches:

```
git branch
```

To create and push new branch:

```
git switch -c new-branch-name
git push -u origin new-branch-name
```

To switch branches:

```
git switch branch-name
```

To merge branch to main:

```
git switch main
git pull origin main
git merge branch-name

git add file-with-resolved-conflicts

git commit -m "branch merge"
git push origin main
```
