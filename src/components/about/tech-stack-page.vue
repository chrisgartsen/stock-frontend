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
  
        <bulma-accordion :dropdown="false" :icon="'plus-minus'">
          <bulma-accordion-item>
            <h4 class="has-text-weight-semibold" slot="title">Why Bulma?</h4>
            <p slot="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos illo expedita asperiores rem iure aliquid dolore, pariatur dignissimos, minima inventore? Minima voluptatum nulla, error omnis laboriosam voluptatibus rem aperiam.</p>
          </bulma-accordion-item>
          <bulma-accordion-item>
            <h4 class="has-text-weight-semibold" slot="title">Another question</h4>
            <p slot="content">To make it look interesting</p>
          </bulma-accordion-item>
        </bulma-accordion>

      </div>
    </div>

  </article>
</template>

<script>
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

export default {
  name: 'about-page',
  components: {
    BulmaAccordion,
    BulmaAccordionItem
  }
}
</script>
