<template>
  <article>

    <div class="columns">
      <div class="column is-10 is-offset-2">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li><router-link :to="{name: 'home'}">Home</router-link></li>
            <li class="is-active"><a href="#" aria-current="page">Tech stack</a></li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="columns">
      <div class="column is-3 is-offset-3">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Front end</p>
          </header>
          <div class="card-content">
            <ul class="list">
              <li>Vue (v 2.5.2), including packages</li>
              <ul class="list-indented">
                <li>Vue-router</li>
                <li>Vuelidate</li>
                <li>Vuex</li>
                <li>Axios</li>
                <li>Moment</li>
              </ul>  
              <li>CSS Framework</li>
              <ul class="list-indented">
                <li>Bulma (v 0.6.2)</li>
                <li>Font awesome (v 4.7)</li>
              </ul>
              <li>Package manager</li>
              <ul class="list-indented">
                <li>Node/Npm</li>
                <li>Yarn</li>
                <li>Webpack with Vue-Cli</li>
              </ul>
            </ul>
          </div>
        </div>
      </div>  
      <div class="column is-3">
        <div class="card">
          <header class="card-header">
            <p class="card-header-title">Back end</p>
          </header>
          <div class="card-content">
            <ul class="list">
              <li>Ruby on Rails (v5.1)</li>
              <li>PostgreSQL</li>
            </ul>
          </div>
        </div>
      </div>  
    </div>

    <div class="columns">
      <div class="column is-offset-3">
        <h3 class="has-text-weight-semibold">Frequently asked questions</h3>
        <p>(cumbersome attempt to sneek in an accordion element)</p>
      </div>
    </div>

    <div class="columns">
      <div class="column is-6 is-offset-3">
  
        <section class="accordions">
          <article class="accordion is-active">
            <div class="accordion-header toggle">
              <p>Why Bulma and not Bootstrap?</p>
              <button class="toggle" aria-label="toggle"></button>
            </div>
            <div class="accordion-body">
              <div class="accordion-content">
                Two reasons. Bootstrap v4 has been in beta for a very long time. 
                And unlike Bootstrap, Bulma is 100% guaranteed Javascript free. This makes using Bulma with Vue much easier.
              </div>
            </div>
          </article>

          <article class="accordion">
            <div class="accordion-header toggle">
              <p>Another question</p>
              <button class="toggle" aria-label="toggle"></button>
            </div>
            <div class="accordion-body">
              <div class="accordion-content">
                A second question - to make sure that the accordion is working.
              </div>
            </div>
          </article>

        </section>

      </div>
    </div>

  </article>
</template>

<script>
import accordion from 'bulma-accordion/dist/bulma-accordion.min.js';

export default {
  name: 'about-page'
}
</script>
