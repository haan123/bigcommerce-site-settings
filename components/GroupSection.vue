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

  data: () => ({
    rows: [
      {
        name: 'Low Stock Threshold',
        value: 10,
        type: 'number',
        id: 'lowStockThreshold'
      }
    ]
  })
};
</script>
