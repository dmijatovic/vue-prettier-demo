<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div>
      <BuiButton variant="secondary" @click.native="showModal">
        Open modal
      </BuiButton>

      <BuiModal v-model="isVisible">
        <template slot="header">
          <BuiModalTitle>We price match</BuiModalTitle>
          <BuiModalSubtitle
            >Just remember to contact us after booking with us and at least 24
            hours before your check-in date. You'll need to provide us with the
            link to the other offer and it must be online and
            available.</BuiModalSubtitle
          >
        </template>
        <template slot="footer">
          <BuiGroup variant="inline">
            <BuiButton @click.native="makeClaim">Make a claim</BuiButton>
          </BuiGroup>
        </template>
      </BuiModal>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "Show BUI modal"
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    showModal() {
      this.isVisible = true;
    },
    makeClaim() {
      console.log("Make claim");
      this.isVisible = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
