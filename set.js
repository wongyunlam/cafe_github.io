document
  .querySelector('.faq-block')
  .addEventListener('click', function(e) {
    console.log(e.target.classList.value)
    const element = closest(e.target, 'faq-item')
    if (element) {
      console.log(element)
      element.classList.toggle('faq-item--hide')
    }
  })

document
.querySelector('.faq-block')
.addEventListener('click', function(e) {
  console.log(e.target.classList.value)
  const element = closest(e.target, 'faq-item1')
  if (element) {
    console.log(element)
    element.classList.toggle('Q')
  }
})



function closest(node, className) {
  while(node && node.classList) {
    if (node.classList.contains(className)) {
      return node
    }
    node = node.parentNode
  }
} 

if (screen.width < 768) {
  document.getElementById('myLink').setAttribute('href', "https://mypaper.m.pchome.com.tw/windcat13n/category/");
}