---
title: "Artikels"
layout: "layouts/post-feed.html"
pagination:
    data: collections
    size: 1
    alias: category
    filter:
        ["all", "nav", "posts", "rezepte", "anzeige", "people", "categories"]
permalink: "/artikel/{{ category | slug }}/"
intro:
    image: "/images/bg/{{ category | slug }}.jpeg/"
---
