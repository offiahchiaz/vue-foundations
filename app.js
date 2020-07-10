new Vue({
  el: "#vue-app",
  data: {
    name: "Okeke",
    age: 25,
    x: 0,
    y: 0,
    job: "Engineer",
    website: "https://cohotek.tech",
    websiteTag: "<a href='https://cohotek.tech'>New Cohotek</a>",
  },

  methods: {
    greet(time = "Morning") {
      return `Good ${time} ${this.name}`;
    },
    add(inc) {
      this.age += inc;
    },
    subtract(dec) {
      this.age -= dec;
    },
    updateXY(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click() {
      alert("Welcome");
    },
  },
});
