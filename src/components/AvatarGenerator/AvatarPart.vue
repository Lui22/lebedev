<template>
  <img class="avatar-part" :class="assetName" :src="imageSrc" alt="" />
</template>

<script setup lang="ts">
const props = defineProps<{
  assetName: string;
  assetMaxNumber: number;
}>();

import randomAvatarAsset from "@/helpers/randomAvatarAsset";
const imageSrc = randomAvatarAsset(props.assetName, props.assetMaxNumber);
</script>

<style scoped>
.avatar-part {
  position: absolute;
}

.head {
  top: 125px;
}

.top {
  top: 58px;
}

.mouth {
  top: 175px;
}

.glasses {
  top: 194px;
}

.eyes {
  top: 200px;
}

.eyebrows {
  top: 176px;
}

.body {
  top: 297px;
}

.pet {
  bottom: -83px;
  left: -60px;
  transform: rotate(-20deg);
}
</style>
