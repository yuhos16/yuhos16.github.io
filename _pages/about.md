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
<h1><span class="accent-bar"></span>Yuhao Shen</h1>
<section class="bio-wrap">
  <div class="bio-main" markdown="1">
    {% capture bio_md %}{% include_relative includes/intro.md %}{% endcapture %}
    {{ bio_md | markdownify }}
  </div>
  <aside class="bio-fixed">
    <div class="bio-photo"><img src="{{ site.author.avatar }}" alt="{{ site.author.name }}"></div>
    <div class="bio-motto">⬆️ Big Fan of Eason Chan</div>
  </aside>
</section>

<p class="contact-line">I'm always open to academic discussions, potential collaborations and interdisciplinary projects. Feel free to reach out at: <strong>yuhaoshen [at] link [dot] cuhk [dot] edu [dot] cn</strong>.</p>

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}
