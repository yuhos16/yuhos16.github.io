---
permalink: /
title: ""
excerpt: ""
redirect_from: 
  - /about/
  - /about.html
---

<span class='anchor' id='about-me'></span>
<div class="name-row">
  <h1><span class="accent-bar"></span>Yuhao Shen <span class="name-zh">沈宇昊</span></h1>
</div>
<section class="bio-wrap">
  <aside class="bio-fixed">
    <div class="bio-photo"><img src="{{ site.author.avatar }}" alt="{{ site.author.name }}" width="1050" height="1225" fetchpriority="high"></div>
  </aside>
  <div class="bio-main" markdown="1">
    {% capture bio_md %}{% include_relative includes/intro.md %}{% endcapture %}
    {{ bio_md | markdownify }}
  </div>
</section>

<p class="contact-line">I'm always open to academic discussions, potential collaborations and interdisciplinary projects. Feel free to reach out at: <strong>yuhaoshen [at] link.cuhk.edu.cn</strong>.</p>

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/background.md %}

{% include_relative includes/full-publications.md %}
