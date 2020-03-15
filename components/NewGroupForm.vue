<template>
  <div class="c-new-group-form flex py-2 justify-between">
    <Input class-names="py-3 px-4 w-5/6 focus:bg-white bg-gray-300" placeholder="New Group Name" />

    <button class="flex justify-center items-center c-btn-icon c-btn-icon--blue focus:outline-none active" title="Add New Group" @click="addGroup">
      <svg-icon width="24" height="24" name="add-to-list" />
    </button>
  </div>
</template>

<script>
import Input from '~/components/Input';

export default {
  components: {
    Input
  },

  methods: {
    addGroup() {

    }
  }
};
</script>
