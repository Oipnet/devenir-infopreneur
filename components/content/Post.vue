<template>
  <h2 class="text-4xl font-oswald font-bold mb-12 mt-8"><ContentSlot name="title" unwrap="p"></ContentSlot></h2>
  <div class="mb-12">
    <div class="float-right w-[400px] ml-4">
      <ContentSlot name="illustration" unwrap="p"></ContentSlot></div>
    <slot></slot>
  </div>
</template>

<style scoped>
 img {
   border-radius: 25px;
 }
</style>