// Get to the top with a button
// const mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     // mybutton.style.display = 'block';
//   } else {
//     // mybutton.style.display = 'none';
//   }
// }

// window.onscroll = () => {
//   scrollFunction();
// };

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topFunction();
