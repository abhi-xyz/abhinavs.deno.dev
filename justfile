lint:
  deno lint
  deno fmt

deploy:
  deno lint
  deno fmt
  git add -A
  git commit -m "redesign"
  git push
