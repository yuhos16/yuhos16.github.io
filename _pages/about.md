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
    <ul class="bio-links">
      {% if site.author.location %}<li><i class="fa fa-fw fa-map-marker" aria-hidden="true"></i> {{ site.author.location }}</li>{% endif %}
      {% if site.author.cv %}<li><i class="fas fa-fw fa-file-alt" aria-hidden="true"></i> <a href="{{ site.author.cv }}">{{ site.author.cv_label }}</a></li>{% endif %}
      {% if site.author.email %}<li><i class="fas fa-fw fa-envelope" aria-hidden="true"></i> <a href="mailto:{{ site.author.email }}">Email</a></li>{% endif %}
      {% if site.author.linkedin %}<li><i class="fab fa-fw fa-linkedin" aria-hidden="true"></i> <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a></li>{% endif %}
      {% if site.author.dblp %}<li><i class="ai ai-dblp ai-fw" aria-hidden="true"></i> <a href="{{ site.author.dblp }}">DBLP</a></li>{% endif %}
      {% if site.author.github %}<li><i class="fab fa-fw fa-github" aria-hidden="true"></i> <a href="https://github.com/{{ site.author.github }}">Github</a></li>{% endif %}
      {% if site.author.googlescholar %}<li><i class="fas fa-fw fa-graduation-cap" aria-hidden="true"></i> <a href="{{ site.author.googlescholar }}">Google Scholar</a></li>{% endif %}
      {% if site.author.orcid %}<li><i class="ai ai-orcid-square ai-fw" aria-hidden="true"></i> <a href="{{ site.author.orcid }}">ORCID</a></li>{% endif %}
    </ul>
  </aside>
</section>

{% include_relative includes/news.md %}

{% include_relative includes/pub.md %}

{% include_relative includes/honers.md %}

{% include_relative includes/others.md %}
