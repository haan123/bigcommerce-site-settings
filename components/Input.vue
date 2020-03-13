<template>
  <input :type="type" :class="classNames" class="border rounded-full focus:outline-none focus:border-blue-500 leading-none placeholder-gray-600" />
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text'
    },
    classNames: {
      type: [String, Array, Object],
      default: 'px-3 py-2'
    }
  }
};
</script>
