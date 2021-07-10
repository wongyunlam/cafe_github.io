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



function closest(node, className) {
  while(node && node.classList) {
    if (node.classList.contains(className)) {
      return node
    }
    node = node.parentNode
  }
} 