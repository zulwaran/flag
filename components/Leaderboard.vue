<template>
  <div class="leaderboard">
    <p class="leaderboard__head">Leaderboard</p>
    <div class="leaderboard__pagination-top">
      <p>Round:</p>
      <img src="@/assets/icons/leftarrow.svg" alt="" />
      <CustomButton :type="'pagination'" :message="this.currentPage" />
      <img src="@/assets/icons/rightarrow.svg" alt="" />
    </div>
    <div class="leaderboard__list">
      <div class="leaderboard__item" v-for="item in leader" :key="item.index">
        <div>
          <div class="leaderboard__item-title">
            <p>#</p>
            <p>Address</p>
            <p>Time</p>
            <p>Reward</p>
          </div>
          <div class="leaderboard__item-info">
            <p>{{ item.id }}</p>
            <p>{{ item.address }}</p>
            <p>{{ item.time }}</p>
            <p>{{ item.reward }}</p>
          </div>
        </div>
        <CustomButton :type="'claim'" :message="'Claim'" />
      </div>
    </div>
    <div class="leaderboard__pagination-bottom">
      <img src="@/assets/icons/leftarrow.svg" alt="" />
      <CustomButton :type="'pagination'" :message="this.currentPage" />
      <p>...</p>
      <CustomButton :type="'maxPages'" :message="this.maxPages" />
      <img src="@/assets/icons/rightarrow.svg" alt="" />
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/reusable/CustomButton.vue";
export default {
  name: "leaderboard",
  components: { CustomButton },
  data() {
    return {
      currentPage: 1,
      maxPages: 3,
      leader: [
        { address: "0x000999", time: "10 sec", reward: "10 $", id: "1" },
        { address: "0x000989", time: "8 sec", reward: "8 $", id: "2" },
        { address: "0x000998", time: "6 sec", reward: "6 $", id: "3" },
        { address: "0x000699", time: "3 sec", reward: "3 $", id: "4" },
      ],
    };
  },
};
</script>

<style>
.leaderboard {
  background: #3c3c3c;
  border-radius: 14px;
  padding: 30px 30px 35px;
}
.leaderboard__head {
  color: #fff;
  font-weight: 600;
  font-size: 22px;
  margin-bottom: 35px;
}
.leaderboard__pagination-top {
  display: flex;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  align-items: center;
  margin-bottom: 35px;
}
.leaderboard__pagination-bottom {
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
  align-items: center;
}
.leaderboard__pagination-top p {
  margin-right: 25px;
}
.leaderboard__list {
  margin-bottom: 15px;
}
.leaderboard__item {
  display: flex;
  margin-bottom: 20px;
  padding: 20px 25px;
  border-radius: 14px;
  background: #585858;
}
.leaderboard__item-title {
  display: flex;
  color: #ababab;
  font-weight: 400;
  font-size: 14px;
}
.leaderboard__item-title p:first-child {
  width: 45px;
}
.leaderboard__item-title p {
  width: 286px;
  margin-right: 25px;
}
.leaderboard__item-info {
  display: flex;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
}
.leaderboard__item-info p:first-child {
  width: 45px;
}
.leaderboard__item-info p {
  width: 286px;
  margin-right: 25px;
}
</style>