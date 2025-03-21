<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <svg class="icon" v-if="name === 'play'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path class="icon-path" d="M8 5v14l11-7z" fill="currentColor" />
  </svg>

  <svg class="icon" v-else-if="name === 'stop'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path class="icon-path" fill="currentColor"
      d="M8 16h8V8H8zm4 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" />
  </svg>

  <svg class="icon" v-else-if="name === 'horizontal'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path class="icon-path" d="M2,12 L22,12" stroke="currentColor" stroke-width="2" fill="currentColor" />
    <path class="icon-path" d="M7,7 L2,12 L7,17" stroke="currentColor" stroke-width="2" fill="currentColor" />
    <path class="icon-path" d="M17,7 L22,12 L17,17" stroke="currentColor" stroke-width="2" fill="currentColor" />
  </svg>

  <svg class="icon" v-else-if="name === 'vertical'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path class="icon-path" d="M12,2 L12,22" stroke="currentColor" stroke-width="2" />
    <path class="icon-path" d="M7,7 L12,2 L17,7" stroke="currentColor" stroke-width="2" fill="none" />
    <path class="icon-path" d="M7,17 L12,22 L17,17" stroke="currentColor" stroke-width="2" fill="none" />
  </svg>

  <svg v-else-if="name === 'external-link'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="20" height="20" rx="10" fill="white" />
    <g fill="currentColor">
      <path d="M14,4 L20,4 L20,10" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
      <path d="M20,4 L12,12" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
      <path
        d="M10,6 L6,6 C4.89543,6 4,6.89543 4,8 L4,18 C4,19.1046 4.89543,20 6,20 L16,20 C17.1046,20 18,19.1046 18,18 L18,14"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none" />
    </g>
  </svg>
</template>
