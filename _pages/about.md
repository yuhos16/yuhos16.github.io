---
permalink: /
title: ""
excerpt: ""
author_profile: false
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>
<h1>About Me</h1>
<section class="bio-wrap">
  <div class="bio-main" markdown="1">
    <h2 class="bio-title"><span class="accent-bar"></span>{{ site.author.name }}</h2>
    <div class="bio-inline">{% include author-profile.html %}</div>
    {% capture bio_md %}{% include_relative includes/intro.md %}{% endcapture %}
    {{ bio_md | markdownify }}
  </div>
</section>

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}
