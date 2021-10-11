<template>
  <div class="card">
    <p class="card__text">The round lasts 100 seconds.</p>
    <img class="card__img" src="@/assets/icons/flag.svg" alt="" />
    <div class="card__fee">Participation fee <span>10$</span></div>
    <CustomButton :type="'participate'" :message="'Participate'" />
  </div>
</template>

<script>
import CustomButton from "../components/reusable/CustomButton.vue";
export default {
  name: "flag",
  components: { CustomButton },
};
</script>

<style scoped>
.card {
  width: 447px;
  background: #3c3c3c;
  border-radius: 14px;
  padding: 30px;
  text-align: center;
  color: #fff;
  margin: 0 30px 0 0;
}
.card__text {
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 40px;
}
.card__img {
  margin: 0 auto 40px;
}
.card__fee {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 18px;
  padding: 25px 20px;
  background: #585858;
  border: 1px solid #585858;
  border-radius: 14px;
  margin-bottom: 40px;
}
span {
  font-weight: 600;
  font-size: 18px;
}
</style>