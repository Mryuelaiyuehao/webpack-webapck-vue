<template>
  <div :class="`${baseName}`">
    <slot name="title">
      <div v-if="title" :class="`${baseName}-title`">
        {{ title }}
      </div>
    </slot>
    <slot />
  </div>
</template>
<script>
import { PREFIX_NAME } from "@/assets/js/enums";
export default {
  name: `${PREFIX_NAME.toUpperCase()}CellGroup`,
  props: {
    title: {
      type: String,
      default: () => "",
    },
  },
  data() {
    return {
      baseName: `${PREFIX_NAME}-cell-group`,
    };
  },
};
</script>
<style lang="scss" scoped>
$base-name: #{$prefix-name}-cell-group;

.#{$base-name} {
  margin-bottom: $space5;
  overflow: hidden;
  background: $c-body-base;
  border-radius: $radius-card;
  .#{$base-name}-title {
    padding: $space4 $space5 0;
    font-size: $fs-h5;
    font-weight: bold;
    color: $c-text-primary;
  }
}
</style>
