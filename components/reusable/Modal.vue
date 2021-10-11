<template>
  <div class="modal-overlay">
    <div class="modal">
      <p class="modal__title">You’re registered</p>
      <p class="modal__info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div class="modal__icon">
        <img src="@/assets/icons/success.svg" alt="" />
      </div>
      <div class="modal__bubble">
        <img src="@/assets/icons/bubbles.svg" alt="" />
      </div>
      <div class="close" @click="$emit('close-modal')">
        <img class="close-img" src="@/assets/icons/cross.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #19191980;
}

.modal {
  position: relative;
  background-color: #3c3c3c;
  height: 162px;
  width: 522px;
  padding: 47px 73px 48px 130px;
  border-radius: 14px;
  margin-top: 20%;
}
.modal__title {
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  margin-bottom: 10px;
}
.modal__info {
  color: #fff;
  font-weight: 400;
  font-size: 14px;
  width: 244px;
}
.modal__icon {
  position: absolute;
  top: -45px;
  left: 20px;
}
.modal__bubble {
  position: absolute;
  top: 45px;
  left: 0;
}
.modal__bubble img{
  border-radius: 14px;
}
.close {
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
}
</style>