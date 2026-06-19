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
  <div class="inline-links">
    <a class="il-item" href="{{ site.author.cv }}" target="_blank" aria-label="{{ site.author.cv_label }}" title="{{ site.author.cv_label }}"><i class="fas fa-fw fa-file-alt" aria-hidden="true"></i></a>
    <a class="il-item il-item-hf" href="https://huggingface.co/yuhos16" target="_blank" aria-label="Hugging Face" title="Hugging Face"><span class="il-icon-hf" aria-hidden="true"></span></a>
    <a class="il-item" href="mailto:{{ site.author.email }}" aria-label="Email" title="Email"><i class="fas fa-fw fa-envelope" aria-hidden="true"></i></a>
    <a class="il-item" href="https://github.com/{{ site.author.github }}" target="_blank" aria-label="GitHub" title="GitHub"><i class="fab fa-fw fa-github" aria-hidden="true"></i></a>
    <a class="il-item" href="{{ site.author.googlescholar }}" target="_blank" aria-label="Google Scholar" title="Google Scholar"><i class="fas fa-fw fa-graduation-cap" aria-hidden="true"></i></a>
    <a class="il-item" href="{{ site.author.orcid }}" target="_blank" aria-label="ORCID" title="ORCID"><i class="ai ai-orcid-square ai-fw" aria-hidden="true"></i></a>
  </div>
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

<p class="contact-line">I'm always open to academic discussions, potential collaborations and interdisciplinary projects. Feel free to reach out at: <strong>yuhaoshen [at] link [dot] cuhk [dot] edu [dot] cn</strong>.</p>

{% include_relative includes/pub.md %}

{% comment %}
{% include_relative includes/news.md %}
{% endcomment %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}
