
// Header//
const nav = document.querySelector('.nav-start-wrap')
  fetch('/Navbar.html')
  .then(res=>res.text())
  .then(data=>{
      nav.innerHTML=data
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, 'text/html')
      eval(doc.querySelector('script').textContent)
  })
// Header Ends//

// Footer//
const footer = document.querySelector('.footer')
  fetch('/footer.html')
  .then(res=>res.text())
  .then(data=>{
    footer.innerHTML=data
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, 'text/html')
      eval(doc.querySelector('script').textContent)
  })
  // Footer Ends//