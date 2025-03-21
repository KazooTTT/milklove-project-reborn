<script lang="ts" setup>
import { Handle, Position, useNode, useVueFlow } from '@vue-flow/core';
import { computed } from 'vue';
import Icon from './Icon.vue';

const { node } = useNode();
const { getNodes } = useVueFlow();
const label = computed(() => node.data?.label || '');
const link = computed(() => node.data?.link || '');

// Determine the current layout direction based on the node's sourcePosition
const isHorizontal = computed(() => {
  const nodes = getNodes.value;
  if (nodes.length === 0) return true; // Default to horizontal

  // Check the first node's sourcePosition to determine layout direction
  const firstNode = nodes[0];
  return firstNode.sourcePosition === Position.Right;
});

// Dynamically set positions based on layout direction
const targetPosition = computed(() => isHorizontal.value ? Position.Left : Position.Top);
const sourcePosition = computed(() => isHorizontal.value ? Position.Right : Position.Bottom);

const handleClick = () => {
  if (link.value) {
    window.open(link.value, '_blank');
  }
};
</script>

<template>
  <div class="custom-node">
    <Handle type="target" :position="targetPosition" />
    <div class="label-container" @click="handleClick">
      <div class="label">{{ label }}</div>
      <Icon v-if="link" name="external-link" class="external-link-icon" />
    </div>
    <Handle type="source" :position="sourcePosition" />
  </div>
</template>

<style>
.custom-node {
  min-width: 100px;
  gap: 4px;
  padding: 8px;
  background: white;
  border: 1px solid black;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.custom-node:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.label-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.external-link-icon {
  width: 16px;
  height: 16px;
  margin-left: 8px;
}

.increment {
  border-radius: 4px;
  background: #42b983;
  font-size: 10px;
  color: #fff;
  cursor: pointer;
  border: none;
}

.increment:hover {
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.counter {
  margin-top: 8px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 4px;
}

.count {
  font-size: 6px;
  color: #ff0072;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
}

.label {
  font-size: 12px;
}

/* Style for the highest vote node */
.highest-vote {
  background: linear-gradient(to left, #ffc0cb, #90ee90) !important;
  color: black !important;
}
</style>
