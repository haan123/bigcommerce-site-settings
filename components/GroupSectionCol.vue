<template functional>
  <div :class="[
      data.class,
      data.staticClass
    ]" class="c-group-section-col px-4 py-2">
    <slot />
  </div>
</template>
