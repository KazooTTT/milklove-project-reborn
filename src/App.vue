<script setup>
import { Background } from '@vue-flow/background'
import { Panel, VueFlow, useVueFlow } from '@vue-flow/core'
import { markRaw, nextTick, ref } from 'vue'
import CustomNode from './CustomNode.vue'
import Icon from './Icon.vue'

import { initialEdges, initialNodes } from './initial-elements.js'
import { useLayout } from './useLayout.js'

const nodes = ref(initialNodes)

const edges = ref(initialEdges)
const { layout } = useLayout()
const { fitView } = useVueFlow()

// Use markRaw to prevent Vue from making the component reactive
const nodeTypes = {
  CustomNode: markRaw(CustomNode)
}

async function layoutGraph(direction) {
  nodes.value = layout(nodes.value, edges.value, direction)

  nextTick(() => {
    fitView()
  })
}
</script>

<template>
  <div class="layout-flow">
    <VueFlow v-model:nodes="nodes" v-model:edges="edges" :default-edge-options="{ type: 'animation', animated: true }"
      @nodes-initialized="layoutGraph('TB')" :node-types="nodeTypes" :nodesDraggable="false" :nodesConnectable="false">
      <Background />

      <Panel class="process-panel" position="top-right">
        <div class="layout-panel">
          <button title="set vertical layout" @click="layoutGraph('TB')">
            <Icon name="vertical" />
          </button>
          <button title="set horizontal layout" @click="layoutGraph('LR')">
            <Icon name="horizontal" />
          </button>
        </div>

      </Panel>
    </VueFlow>

    <div class="weibo-footer">
      <a href="https://weibo.com/7906190340/5141239977217903" target="_blank">《重生计划》微博原链接</a>
    </div>
  </div>
</template>

<style>
.layout-flow {
  background-color: #1a192b;
  height: 100%;
  width: 100%;
}

.process-panel,
.layout-panel {
  display: flex;
  gap: 10px;
}

.process-panel {
  background-color: #2d3748;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
}

.process-panel button {
  border: none;
  cursor: pointer;
  background-color: #4a5568;
  border-radius: 8px;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.process-panel button {
  font-size: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox-panel {
  display: flex;
  align-items: center;
  gap: 10px;
}

.process-panel button:hover,
.layout-panel button:hover {
  background-color: #2563eb;
  transition: background-color 0.2s;
}

.process-panel label {
  color: white;
  font-size: 12px;
}

.stop-btn svg {
  display: none;
}

.stop-btn:hover svg {
  display: block;
}

.stop-btn:hover .spinner {
  display: none;
}

.spinner {
  border: 3px solid #f3f3f3;
  border-top: 3px solid #2563eb;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 1s linear infinite;
}

.weibo-footer {
  position: fixed;
  bottom: 10px;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 10px;
  z-index: 10;
}

.weibo-footer a {
  color: #9ca3af;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
}

.weibo-footer a:hover {
  color: #2563eb;
  text-decoration: underline;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
