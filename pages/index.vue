<template>
  <div class="container">
    <div class="c">
      <FlagCard />
      <CaptureHistory />
    </div>
    <Leaderboard />
    <Modal v-show="showModal" @close-modal="showModal = false" />
  </div>
</template>

<script>
import FlagCard from "../components/FlagCard.vue";
import CaptureHistory from "../components/CaptureHistory.vue";
import Leaderboard from "../components/Leaderboard.vue";
import Modal from "../components/reusable/Modal.vue";
export default {
  components: { FlagCard, CaptureHistory, Leaderboard, Modal },
  data() {
    return {
      showModal: true,
    };
  },
};
</script>
<style>
.container {
  width: 1400px;
  margin: 19px auto;
}
.c {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
