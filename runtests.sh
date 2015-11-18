#!/usr/bin/env bash
expected=$(cat <<EOS
While linting files with zakuro:eslint for the app (Server):
example/server/example.js:4:9: "str" is defined but never used
EOS
)

actual=$(meteor lint 2>&1 | tail -n 3)
if [[ "$expected" == "$actual"  ]]
then
  echo -e '\e[1;32mPassed\e[m'
else
  echo -e '\e[1;31mFailed\e[m'
  diff -u <(echo $expected) <(echo $actual)
fi
