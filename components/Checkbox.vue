<template>
  <div :class="classNames" class="c-checkbox p-3 -m-3 inline-block cursor-pointer transition-colors duration-200 rounded-full" @click="click">
    <div class="c-checkbox__inner rounded w-6 h-6 bg-white text-white flex items-center border-gray-800 border-2">
      <svg-icon class="hidden" height="20" name="check" />
    </div>
    <input :checked="checked" type="checkbox" class="hidden" />
  </div>
</template>

<script>
const CHECKED_CLASS = 'is-checked';

export default {
  props: {
    classNames: {
      type: [String, Array, Object],
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    click() {
      if (this.checked) {
        this.$el.classList.remove(CHECKED_CLASS);
      } else {
        this.$el.classList.add(CHECKED_CLASS);
      }

      this.checked = !this.checked;
    }
  }
};
</script>
