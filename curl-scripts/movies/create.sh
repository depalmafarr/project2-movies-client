curl --include --request POST "http://localhost:4741/movies" \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
  --data '{
      "movie": {
        "title": "'"${TITLE}"'",
        "year": "'"${YEAR}"'",
        "rating": "'"${RATING}"'"
      }
  }'
