import random from "@/helpers/random";

export default function (assetName: string, assetsMaxNumber: number) {
  return new URL(
    `../assets/avatar/${assetName}/${random(assetsMaxNumber)}.svg`,
    import.meta.url
  ).href;
}
