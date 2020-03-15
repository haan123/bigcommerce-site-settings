<template>
  <div class="c-group-section-row flex">
    <GroupSectionCol class="w-1/4">
      <div class="has-tooltip relative">
        {{row.name}}
        <Tooltip>
          {{row.type}}<br>
          {{row.id}}
        </Tooltip>
      </div>
    </GroupSectionCol>
    <GroupSectionCol class="w-2/4">
      <Checkbox v-if="rowType === 'checkbox'" :checked="row.value" />
      <Html v-else-if="rowType === 'html'" :body="row.value" />
      <Input v-else class="border-gray-400 w-full" :value="row.value" :type="rowType" />

      <div v-if="row.description" class="text-sm pt-2 text-gray-600">{{row.description}}</div>
    </GroupSectionCol>
    <GroupSectionCol class="w-1/4">{{row.defaultValue}}</GroupSectionCol>
  </div>
</template>

<script>
import GroupSectionCol from '~/components/GroupSectionCol';
import Tooltip from '~/components/Tooltip';
import Input from '~/components/Input';
import Checkbox from '~/components/Checkbox';
import Html from '~/components/Html';

const MAP_TYPES = {
  'boolean': 'checkbox'
};

export default {
  components: {
    GroupSectionCol,
    Input,
    Checkbox,
    Html,
    Tooltip
  },

  props: {
    row: {
      type: Object,
      required: true
    }
  },

  computed: {
    rowType() {
      const type = MAP_TYPES[this.row.type];

      return type || this.row.type;
    }
  }
};
</script>
