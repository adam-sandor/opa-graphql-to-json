package rules

default main = false

main {
  query := resp.body
  print(sprintf("q=%v",[query]))

  query.hero.name
}

resp = http.send({
  "url": "http://localhost:3000",
  "method": "POST",
  "body": input.request.body,
  "force_json_decode": true,
  "headers": {
    "Content-Type":"text/plain"
  }
})