<template>
  <div class="c-html">
    <div class="c-html__top flex justify-end pb-1">
      <ButtonRounded v-if="!isEdit" @click="edit">
        <svg-icon width="16" height="16" name="edit" />
      </ButtonRounded>
      <ButtonRounded v-if="isEdit" @click="ok">
        <svg-icon width="18" height="18" name="check" />
      </ButtonRounded>
      <ButtonRounded v-if="isEdit" @click="cancel">
        <svg-icon width="20" height="20" name="cross" />
      </ButtonRounded>
    </div>
    <pre v-show="!isEdit" class="c-html__code font-mono bg-gray-100 px-3 py-2 flex rounded cursor-text border border-transparent hover:border-gray-400 overflow-auto">
      <code v-html="code"></code>
    </pre>
    <textarea ref="ta" :value="body" class="hidden"></textarea>
  </div>
</template>

<script>
import Prism from '~/plugins/prism'
import ButtonRounded from '~/components/ButtonRounded'

const EDITOR_CONFIG = {
  lineNumbers: true,
  tabSize: 2,
  styleActiveLine: true,
  autoCloseBrackets: true,
  viewportMargin: Infinity,
  lineWrapping: true,
  mode : "xml",
  htmlMode: true
};

export default {
  components: {
    ButtonRounded
  },

  props: {
    body: {
      type: String,
      default: ''
    }
  },

  data: () => ({
    code: '',
    isEdit: false
  }),

  created() {
    this.code = Prism.highlight(this.body, Prism.languages.html, 'html');
  },

  methods: {
    edit() {
      this.editor = window.CodeMirror.fromTextArea(this.$refs.ta, EDITOR_CONFIG);

      this.editor.setValue(this.$refs.ta.value);

      this.isEdit = true;
    },

    ok() {

    },

    cancel() {
      this.editor.toTextArea();

      console.log(this.editor)
      this.isEdit = false;
    }
  }
};
</script>
