--- 
layout: base-layout.njk
title: Ash's Blog
pagination:
  data: collections.post
  size: 10
  reverse: true
  alias: posts
--- 

# Blog

{% for post in posts %}
  <article>
    <h1>
      <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    </h1>
    {{ post.date }}
  </article>
{% endfor %}