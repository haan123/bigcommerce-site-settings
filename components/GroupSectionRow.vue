<template>
  <div class="c-group-section-row flex">
    <div class="c-group-section-col w-1/4 px-4 py-2">
      {{row.name}}
      <Tooltip>
        <small>{{row.id}}</small>
      </Tooltip>
    </div>
    <div class="c-group-section-col w-2/4 px-4 py-2">
      <Input class="border-gray-400 w-full" :value="row.value" />
    </div>
    <div class="c-group-section-col w-1/4 px-4 py-2">{{row.defaultValue}}</div>
  </div>
</template>

<script>
import Input from '~/components/Input';
import Tooltip from '~/components/Tooltip';

export default {
  components: {
    Input,
    Tooltip
  },

  props: {
    row: {
      type: Object,
      required: true
    }
  }
};
</script>
