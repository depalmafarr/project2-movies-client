curl --include --request PATCH "http://localhost:4741/movies/${ID}" \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
  --data '{
      "movie": {
        "title": "'"${TITLE}"'",
        "year": "'"${YEAR}"'",
        "rating": "'"${RATING}"'",
        "movie_ID": "'"${ID}"'"
      }
  }'
