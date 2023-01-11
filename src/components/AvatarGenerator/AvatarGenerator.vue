<script lang="ts" setup>
import AvatarPart from "@/components/AvatarGenerator/AvatarPart.vue";
import domtoimage from "dom-to-image";
import { ref } from "vue";

const avatar = ref();
async function generateImage() {
  return await domtoimage.toBlob(avatar.value, {
    width: 440,
    height: 440,
  });
}
async function downloadImage() {
  const tempAnchor = document.createElement("a");
  tempAnchor.href = URL.createObjectURL(await generateImage());
  tempAnchor.download = "avatar.png";

  document.body.appendChild(tempAnchor);
  tempAnchor.click();

  document.body.removeChild(tempAnchor);
}

async function avatarLoaded() {
  await downloadImage();
}
</script>

<template>
  <div ref="avatar" class="avatar">
    <avatar-part :asset-max-number="3" asset-name="background" />
    <avatar-part :asset-max-number="1" asset-name="head" />
    <avatar-part :asset-max-number="6" asset-name="body" />
    <avatar-part :asset-max-number="5" asset-name="eyes" />
    <avatar-part :asset-max-number="6" asset-name="eyebrows" />
    <avatar-part :asset-max-number="7" asset-name="mouth" />
    <avatar-part :asset-max-number="11" asset-name="top" />
    <avatar-part :asset-max-number="4" asset-name="pet" @load="avatarLoaded" />
  </div>
</template>

<style scoped>
.avatar {
  width: 440px;
  height: 440px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
}
</style>
