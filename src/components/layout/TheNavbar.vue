<template>
  <div class="navbar">
    <div class="navbar--left">
      <!-- <div class="navbar__menu-icon"></div> -->
      <div
        class="navbar__app-container"
        @click="$router.replace('/employee')"
        style="cursor: pointer"
      >
        <!-- <div class="app-logo"></div> -->
        <div class="app-name">Pico Admin</div>
      </div>
    </div>
    <div class="navbar--right">
      <!-- <div
        class="navbar__notification"
        v-tooltip="ACCOUNTING_TEXT.words.Notification"
      ></div>
      <div class="navbar__help" v-tooltip="ACCOUNTING_TEXT.words.Help"></div>
      <div
        class="navbar__other"
        v-tooltip="ACCOUNTING_TEXT.words.OtherFeature"
      ></div> -->
      <div class="navbar__avatar"></div>
    </div>
  </div>
</template>
<script>
import { ACCOUNTING_TEXT } from "@/helpers/resources";
export default {
  name: "TheNavbar",
  data() {
    return { ACCOUNTING_TEXT };
  },
};
</script>
