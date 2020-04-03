#!/bin/bash

curl "http://localhost:4741/movies" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
