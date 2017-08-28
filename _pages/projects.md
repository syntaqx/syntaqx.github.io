---
permalink: /projects/
title: Projects
---

<div class="container">

  <div class="card-columns">
    {% for repository in site.github.public_repositories %}
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">
            <a href="{{ repository.repository_url }}" target="_blank">{{ repository.name }}</a>
            {% unless repository.homepage == "" %}
              <a href="{{ repository.homepage }}" target="_blank"><i class="fa fa-external-link"></i></a>
            {% endunless %}
          </h4>
          <p class="card-text">
            <span class="badge badge-secondary">{{ repository.language }}</span>
            <i class="fa fa-eye"></i> {{ repository.watchers_count }}
            <i class="fa fa-star"></i> {{ repository.stargazers_count }}
            <i class="fa fa-code-fork"></i> {{ repository.forks_count }}
          </p>
          <p class="card-text">{{ repository.description }}</p>
          <p class="card-text">
            <small class="text-muted">
              Last updated <time class="timeago" datetime="{{ repository.updated_at | date_to_xmlschema }}" title="{{ repository.updated_at | date: site.date_format }}"></time>
            </small>
          </p>
        </div>
      </div>
    {% endfor %}
  </div>

  {{ site.github.public_repositories }}

  <h2 class="mb-5">Standard Card Decks</h2>

  <div class="card-deck-wrapper">
    <div class="card-deck">
      <div class="card">
        <img class="card-img-top" src="http://placeskull.com/355/170/225378" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="http://placeskull.com/355/170/1695A3" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
      <div class="card">
        <img class="card-img-top" src="http://placeskull.com/355/170/ACF0F2" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>

  <hr class="my-5">

  <h2 class="mb-5">Masonry Columns</h2>

  <div class="card-columns">
    <div class="card">
      <img class="card-img-top" src="http://placeskull.com/355/170/F3FFE2" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Card title that wraps to a new line</h4>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
    <div class="card card-body">
      <blockquote class="card-bodyquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
        </footer>
      </blockquote>
    </div>
    <div class="card">
      <img class="card-img-top" src="http://placeskull.com/355/170/EB7F00" alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
    <div class="card card-body card-inverse card-primary text-xs-center">
      <blockquote class="card-bodyquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
        <footer>
          <small>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
        </footer>
      </blockquote>
    </div>
    <div class="card card-body text-xs-center">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    <div class="card">
      <img class="card-img" src="http://placeskull.com/362/170/3E454C" alt="Card image">
    </div>
    <div class="card card-body text-xs-right">
      <blockquote class="card-bodyquote">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        <footer>
          <small class="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
        </footer>
      </blockquote>
    </div>
    <div class="card card-body">
      <h4 class="card-title">Card title</h4>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  
  <hr class="my-5">

  <section class="row">
    <article class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <h2 class="mb-5">Responsive Masonry Columns</h2>
    </article>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <img src="http://placeskull.com/350/170/2185C5" alt="Card image" class="card-img-top img-fluid" />
      <div class="card card-body">
        <h4 class="card-title">Antony Cano</h4>
        <p class="card-text">Photographer | Filmaker</p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <img src="http://placeskull.com/350/170/7ECEFD" alt="Card image" class="card-img-top img-fluid" />
      <div class="card card-body">
        <h4 class="card-title">Antony Cano</h4>
        <p class="card-text">Photographer | Filmaker</p>
      </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
      <img src="http://placeskull.com/350/170/FFF6E5" alt="Card image" class="card-img-top img-fluid" />
      <div class="card card-body">
        <h4 class="card-title">Antony Cano</h4>
        <p class="card-text">Photographer | Filmaker</p>
      </div>
    </div>

  </section>
</div>
