const getScroll = () => {
  const element = document.querySelector(".container-servicios");
  var scrollHeight = document.documentElement.scrollHeight;
  console.log(element.scrollHeight);
  window.addEventListener("scroll", (e) => {
    console.log(document.documentElement.scrollHeight);
  });

  // Calculate the total scrollable height in percentage
};
getScroll();
export default getScroll;
