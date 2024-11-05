<script lang="ts" setup>
import { type IconType } from './types'

interface Props{
  type: IconType
}

const props = defineProps<Props>();
const { type } = props
</script>

<template>
<svg v-if="type === 'location'" width="22.000000" height="28.000000" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs/>
	<path id="Path" d="M21 11C21 16.38 11 27 11 27C11 27 1 16.38 1 11C1 5.61 5.61 1 11 1C16.38 1 21 5.61 21 11L21 11Z" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
	<rect id="Path" x="6.000000" y="6.000000" rx="5.000000" width="10.000000" height="10.000000" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
</svg>

<svg v-if="type === 'phone'" width="25.441284" height="25.441597" viewBox="0 0 25.4413 25.4416" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs/>
	<path id="Box" d="M4.85 1.05C5.7 0.88 6.57 1.28 6.99 2.04L9.08 5.81C9.52 6.59 9.38 7.57 8.75 8.2L7.34 9.61C6.69 10.26 6.57 11.27 7.04 12.05C7.83 13.37 8.76 14.56 9.82 15.62C10.87 16.68 12.06 17.6 13.38 18.39C14.17 18.87 15.17 18.74 15.82 18.09L17.23 16.68C17.86 16.05 18.84 15.92 19.62 16.35L23.39 18.44C24.15 18.87 24.55 19.73 24.38 20.58L24.13 21.81C24.01 22.4 23.64 22.9 23.11 23.18C18.16 25.82 12.78 24.24 6.99 18.45C1.19 12.65 -0.39 7.27 2.25 2.32C2.53 1.79 3.03 1.42 3.62 1.3L4.85 1.05Z" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
</svg>

<svg v-if="type === 'mail'" width="26.000000" height="20.000000" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs/>
	<rect id="Box" x="1.000000" y="1.000000" rx="2.000000" width="24.000000" height="18.000000" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
	<path id="Line" d="M5 5L13 11L21 5" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round" stroke-linecap="round"/>
</svg>

<svg v-if="type === 'website'" width="26.000000" height="26.000000" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs/>
	<circle id="Oval" cx="13.000000" cy="13.000000" r="12.000000" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
	<ellipse id="Box" cx="13.000000" cy="13.000000" rx="6.000000" ry="12.000000" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
	<path id="Line" d="M24 18L2 18" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
	<path id="Line" d="M24 8L2 8" stroke="#464646" stroke-opacity="1.000000" stroke-width="2.000000" stroke-linejoin="round"/>
</svg>

</template>
