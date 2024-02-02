<script setup lang="ts">
defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  }
})

const hovered = ref(false)
</script>

<template>
  <div :class="[`highlight-${language}`]" class="prose-code" @mouseenter="hovered = true" @mouseleave="hovered = false">
    <span v-if="filename" class="filename">
      {{ filename }}
    </span>

    <slot />
  </div>
</template>

<style scoped>
.prose-code {
  --prose-code-block-font-size: .9em;
  --prose-code-block-margin: theme("spacing.4") 0;
  --prose-code-block-border-radius: theme("borderRadius.sm");
  --prose-code-block-border-width: 1px;
  --prose-code-block-border-style: solid;
  --prose-code-block-border-color: theme("colors.gray.900");
  --prose-code-block-color: inherit;
  --prose-code-block-background-color: theme("colors.gray.900");
  --prose-code-block-backdrop-filter: contrast(1);
  --typography-color-primary-500: theme("colors.neutral.500");
  --typography-font-mono: theme("fontFamily.mono");
  --typography-font-code: theme("fontFamily.mono");
  --typography-radii-lg: theme("borderRadius.xl");
  --typography-font-size-xs: theme("fontSize.xs");
  --typography-lead-normal: theme("lineHeight.normal");
  --prose-code-block-pre-padding: theme("spacing.4");
  --typography-lead-relaxed: theme("lineHeight.relaxed");
  --prose-code-line-numbers: 1em;

  position: relative;
  width: 100%;
  font-size: var(--prose-code-block-font-size);
  margin: var(--prose-code-block-margin);
  border-radius: var(--prose-code-block-border-radius);
  border-width: var(--prose-code-block-border-width);
  border-style: var(--prose-code-block-border-style);
  border-color: var(--prose-code-block-border-color);
  color: var(--prose-code-block-color);
  background-color: var(--prose-code-block-background-color);
  backdrop-filter: var(--prose-code-block-backdrop-filter);

  &.highlight-zsh,
  &.highlight-sh,
  &.highlight-bash,
  &.highlight-shell,
  &.highlight-shellscript {
    :deep(code) {
      .line {
        padding-inline-start: 1rem;
      }

      .line>:first-child::before {
        content: '>';
        position: absolute;
        top: 0;
        inset-inline-start: -0.1rem;
        display: block;
        user-select: none;
        font-weight: 700;
        color: var(--typography-color-primary-500);
        font-family: var(--typography-font-mono);
      }
    }
  }

  :deep(pre) {
    display: flex;
    flex: 1;
    overflow-x: auto;
    margin: 0;
    padding: var(--prose-code-block-pre-padding);
    line-height: var(--typography-lead-relaxed);
  }

  :deep(code) {
    padding-inline-end: 30px;
    width: 100%;
    display: flex;
    flex-direction: column;

    &:has(.highlight):hover .line {
      filter: none;
    }

    &:has(.highlight) .line {
      transition: filter 200ms ease-in-out;
      filter: blur(.05em);

      &.highlight {
        filter: none;
      }
    }
  }

  :deep(.line) {
    display: inline-table;
    min-height: 1rem;
    position: relative;
    margin-inline-start: calc(.5em + var(--prose-code-line-numbers));

    &::before {
      content: attr(line);
      position: absolute;
      left: calc(-1 * var(--prose-code-line-numbers) - 0.5em);
      opacity: 0.5;
    }

    &:nth-last-child(n+10),
    &:nth-last-child(n+10)~.line {
      --prose-code-line-numbers: 2em;
    }

    &:nth-last-child(n+100),
    &:nth-last-child(n+100)~.line {
      --prose-code-line-numbers: 3em;
    }

    &:nth-last-child(n+1000),
    &:nth-last-child(n+1000)~.line {
      --prose-code-line-numbers: 4em;
    }

    &.highlight {
      background-color: var(--prose-code-block-border-color);

      &::before {
        opacity: 1;
      }
    }
  }

  .filename {
    position: absolute;
    top: 0;
    translate: 0 -50%;
    inset-inline-end: 0;
    padding: 0.5rem 0.75rem;
    font-family: var(--typography-font-code);
    color: var(--prose-code-block-color);
    border-radius: var(--typography-radii-lg);
    font-size: var(--typography-font-size-xs);
    line-height: var(--typography-lead-normal);
    backdrop-filter: blur(4px);
  }
}
</style>