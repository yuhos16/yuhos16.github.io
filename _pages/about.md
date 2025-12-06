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
<section class="bio-wrap">
  <div class="bio-main">
    {% include_relative includes/intro.md %}
  </div>
  <aside class="bio-side">
    {% include author-profile.html %}
  </aside>
</section>

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}
