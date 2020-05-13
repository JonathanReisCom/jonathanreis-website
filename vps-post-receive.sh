#!/bin/bash

## Test local before deploy
## $ yarn run local

## Deploy to Server
## $ git push prod

## File for CI/CD:
## $ nano /home/jonathanreis/repo_jonathanreis.com/hooks/post-receive

## #!/bin/bash
## GIT_WORK_TREE=/home/jonathanreis/public_html/ git checkout -f
## cd /home/jonathanreis/public_html/
## npm run prod