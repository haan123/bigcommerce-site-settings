<template>
  <div class="c-group-section">
    <div class="c-group-section__head flex">
      <div class="c-group-section__head-item w-1/4 p-4">Name</div>
      <div class="c-group-section__head-item w-2/4 p-4">Value</div>
      <div class="c-group-section__head-item w-1/4 p-4">Default Value</div>
    </div>
    <div class="c-group-section__content">
      <GroupSectionRow v-for="row in rows" :key="row.id" :row="row" />
    </div>
  </div>
</template>

<script>
import GroupSectionRow from '~/components/GroupSectionRow';

export default {
  components: {
    GroupSectionRow
  },

  /**
   * Supported types:
   * number: 1 || 1.0
   * string: 'abc'
   * html: '<p>abc</p>'
   * boolean: true || false
   * set-of-string: ['abc', 'def']
   * set-of-number: [1, 2]
   * enum-of-string: [{
   *  key: 1,
   *  value: 'abc'
   * }, {
   *  key: 2,
   *  value: 'def'
   * }] (predefined { key, value } items)
   * enum-of-number: [{
   *  key: 1,
   *  value: 1
   * }, {
   *  key: 2,
   *  value: 2
   * }] (predefined { key, value } items)
   */
  data: () => ({
    rows: [
      {
        name: 'Low Stock Threshold',
        value: 10,
        type: 'number',
        id: 'lowStockThreshold',
        description: 'Filter lower-quality content from your notifications. This won’t filter out notifications from people you follow or accounts you’ve interacted with recently'
      },
      {
        name: 'Show quickview button on product cards',
        value: true,
        type: 'boolean',
        id: 'showQuickviewButton'
      },
      {
        name: 'Html',
        value: '<p>test</p>',
        type: 'html',
        id: 'html'
      }
    ]
  })
};
</script>
