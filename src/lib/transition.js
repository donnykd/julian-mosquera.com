// @ts-nocheck
import { crossfade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

export const [_, receive] = crossfade({
  duration: 400,
  easing: quintOut,
  fallback(node) {
    return {
      duration: 400,
      easing: quintOut,
      css: (t) => {
        const opacity = t
        const translateX = `translateX(${(1 - t) * 60}px)`   // Menu enters from right

        return `
          opacity: ${opacity};
          transform: ${translateX};
        `;
      }
    };
  }
});