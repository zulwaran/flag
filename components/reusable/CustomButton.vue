<template>
  <div
    v-if="type == 'register'"
    :class="[styles.button, styles.registerButton]"
  >
    {{ message }}
  </div>
  <div v-else-if="type == 'balance'" class="balanceButton">
    {{ message }} <span>100$</span>
  </div>
  <div
    v-else-if="type == 'participate'"
    :class="[styles.button, styles.participateButton]"
  >
    {{ message }}
  </div>
  <div
    v-else-if="type == 'pagination'"
    :class="[styles.button, styles.pagination]"
  >
    {{ message }}
  </div>
  <div v-else-if="type == 'maxPages'" :class="[styles.maxPages]">
    {{ message }}
  </div>
  <div v-else-if="type == 'claim'" :class="[styles.button, styles.claim]">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "CustomButton",
  props: ["type", "message", "options", "action"],
  data() {
    return {
      styles: {
        button: "button",
        registerButton: "registerButton",
        participateButton: "participateButton",
        pagination: "pagination",
        maxPages: "maxPages",
        claim: "claim",
      },
    };
  },
};
</script>

<style>
.button {
  background: linear-gradient(253.94deg, #09f2c3 8.37%, #15dce4 69.71%);
  color: #202020;
  border-radius: 14px;
  padding: 15px 20px;
  text-align: center;
  cursor: pointer;
}
.registerButton {
  font-weight: 600;
  font-style: 16px;
}
.balanceButton {
  border-radius: 14px;
  background: #3c3c3c;
  padding: 15px 13px;
  text-align: center;
  color: #fff;
  margin-left: 20px;
  font-size: 16px;
  font-weight: 400;
}
.participateButton {
  padding: 15px 148px;
  font-weight: 600;
  font-size: 16px;
}
.pagination {
  width: 40px;
  height: 40px;
  padding: 8px 16px;
  margin: 0 16px;
  border-radius: 10px;
}
.maxPages {
  color: #fff;
  font-weight: 400;
  font-size: 16px;
  margin: 0 23px;
}
.claim {
  padding: 15px 119px;
}
span {
  margin-left: 15px;
  font-weight: 600;
  font-size: 16px;
}
</style>