<template>
  <div class="about">
    <div class="content">
      <h1>
        Contact
      </h1>
      <p>
        This is just my collection of Sova arrows that I have learnt or come
        across. My current plan is to continue adding content as it is still a
        little lacking (especially the shock darts). I don't have plans to add
        other characters as there is still a lot to be done for Sova and I would
        rather have one character done decently than many characters with no
        content. Other features on my mind are: more filters, recommended arrows
        for beginners, wallbangs, and possibly plant locations with lineups
      </p>
      <p>
        If you would like to support this, send me a message on
        <a href="https://www.reddit.com/user/norufu">reddit</a> with any setups,
        feature ideas, issues, or questions!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  methods: {},
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
  justify-items: center;
}
.content {
  width: 50%;
}
h1 {
  margin-top: 5%;
  color: whitesmoke;
  font-size: 50px;
}
p {
  font-size: 20px;
  margin-top: 20px;
  color: whitesmoke;
}
a {
  color: red;
}
</style>
