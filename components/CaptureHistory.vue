<template>
  <div class="capture">
    <p class="capture__head">Capture history</p>
    <div class="capture__list">
      <p
        class="capture__item"
        v-for="item in list"
        :key="item.index"
        :style="{ color: item.color }"
      >
        {{ item.address }} <span>captured the flag</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Capture",
  data() {
    return {
      list: [
        { address: "0x000999", color: "green" },
        { address: "0x000998", color: "red" },
        { address: "0x000997", color: "yellow" },
        { address: "0x000948", color: "blue" },
        { address: "0x000999", color: "green" },
        { address: "0x000998", color: "red" },
        { address: "0x000997", color: "yellow" },
        { address: "0x000948", color: "blue" },
        { address: "0x000999", color: "green" },
        { address: "0x000998", color: "red" },
        { address: "0x000997", color: "yellow" },
        { address: "0x000948", color: "blue" },
        { address: "0x000999", color: "green" },
        { address: "0x000998", color: "red" },
      ],
    };
  },
};
</script>

<style>
.capture {
  position: relative;
  background: #3c3c3c;
  border-radius: 14px;
  padding: 30px;
  max-height: 556px;
  overflow: hidden;
}
.capture__head {
  color: #fff;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 35px;
}
.capture__list :nth-child(2) {
  opacity: 0.8;
}
.capture__list :nth-child(3) {
  opacity: 0.7;
}
.capture__list :nth-child(4) {
  opacity: 0.65;
}
.capture__list :nth-child(5) {
  opacity: 0.6;
}
.capture__list :nth-child(6) {
  opacity: 0.55;
}
.capture__list :nth-child(7) {
  opacity: 0.5;
}
.capture__list :nth-child(8) {
  opacity: 0.45;
}
.capture__list :nth-child(9) {
  opacity: 0.4;
}
.capture__list :nth-child(10) {
  opacity: 0.35;
}
.capture__list :nth-child(11) {
  opacity: 0.3;
}
.capture__list :nth-child(12) {
  opacity: 0.2;
}
.capture__list :nth-child(13) {
  opacity: 0.1;
}
.capture__list :nth-child(14) {
  opacity: 0.05;
}
.capture__item {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
}
span {
  font-weight: 600;
  font-size: 16;
  color: #fff;
}
</style>