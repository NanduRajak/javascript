const obj = {
  a: 10,
  x: function () {
    // console.log(this.a);
    const y = () => {
      console.log(this);
    };
    y();
  },
};
obj.x();

// Global space
// console.log(this);
