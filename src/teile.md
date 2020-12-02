---
title: "Artikel"
layout: "layouts/post-feed.html"
pagination:
  data: collections
  size: 1
  alias: category
  filter: ["all", "nav", "posts", "recipes", "anzeige", "people", "categories"]
permalink: "/artikel/{{ category | slug }}/"
---
