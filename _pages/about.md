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
<div class="name-row">
  <h1><span class="accent-bar"></span>Yuhao Shen 沈宇昊</h1>
</div>
<section class="bio-wrap">
  <div class="bio-main" markdown="1">
    {% capture bio_md %}{% include_relative includes/intro.md %}{% endcapture %}
    {{ bio_md | markdownify }}
  </div>
  <aside class="bio-fixed">
    <div class="bio-photo"><img src="{{ site.author.avatar }}" alt="{{ site.author.name }}"></div>
  </aside>
</section>

<p class="contact-line">I'm always open to academic discussions, potential collaborations and interdisciplinary projects. Feel free to reach out at: <strong>yuhaoshen [at] link.cuhk.edu.cn</strong>.</p>

{% include_relative includes/pub.md %}

{% comment %}
{% include_relative includes/news.md %}
{% endcomment %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}
