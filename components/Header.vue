<template>
  <div class="container">
    <div class="header">
      <img class="icon" src="@/assets/icons/logo.svg" alt="" />
      <div class="header__buttons">
        <CustomButton :type="'register'" :message="'Register'" />
        <button @click="connect()">
          <CustomButton :type="'balance'" :message="'Balance'" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/reusable/CustomButton.vue";
import { connectWallet, getTokens, connectNode } from "../metamask";
export default {
  name: "Header",
  components: { CustomButton },
  data() {
    return {
      tokenArray: [],
    };
  },
  async beforeMount() {
    await connectNode();
  },
  methods: {
    async connect() {
      await connectWallet();
      this.tokenArray = await getTokens();
      console.log(this.tokenArray);
    },
  },
};
</script>

<style>
.container {
  width: 1400px;
  margin: 19px auto;
}
.header {
  display: flex;
  justify-content: space-between;
}
.header__buttons {
  display: flex;
}
</style>