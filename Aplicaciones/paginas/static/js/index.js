const mydate = new Date()
let year = mydate.getYear()
const doFecha = document.getElementById('fecha')

if (year < 1000) year += 1900
const day = mydate.getDay()
const month = mydate.getMonth()
let daym = mydate.getDate()

if (daym < 10) daym = '0' + daym

const dayarray = new Array(
  'DOMINGO',
  'LUNES',
  'MARTES',
  'MIERCOLES',
  'JUEVES',
  'VIERNES',
  'SABADO'
)

const montharray = new Array(
  'ENERO',
  'FEBRERO',
  'MARZO',
  'ABRIL',
  'MAYO',
  'JUNIO',
  'JULIO',
  'AGOSTO',
  'SEPTIEMBRE',
  'OCTUBRE',
  'NOVIEMBRE',
  'DICIEMBRE'
)

doFecha.innerHTML = `<small><font fontSize='20px' color='FFFFFF' face='Mountains of Christmas' style='font-size:20px'> ${dayarray[day]} ${daym} DE <br>${montharray[month]} DE
${year}</font></small>`

//TODO: Hacer que el reloj se actualice cada segundo
const docHora = document.getElementById('hora')

function reloj() {
  const mydate = new Date()
  let hour = mydate.getHours()
  let minute = mydate.getMinutes()
  let second = mydate.getSeconds()
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const textBefore = 'La hora es:'

  if (hour < 10) hour = '0' + hour
  if (minute < 10) minute = '0' + minute
  if (second < 10) second = '0' + second

  docHora.innerHTML = `<small><font fontSize='23px' color='FFFFFF' face='Signika' style='font-size:23px' >${textBefore} <br> ${hour}:${minute}:${second} ${ampm}</font></small>`
}

setInterval(reloj, 1000)

//TODO: Slide
document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0
  let startX = 0
  const slides = document.querySelectorAll('.carousel-slide')

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none'
    })
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    showSlide(currentIndex)
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    showSlide(currentIndex)
  }

  function handleTouchStart(e) {
    startX = e.touches[0].clientX
  }

  function handleTouchMove(e) {
    const currentX = e.touches[0].clientX
    const diffX = currentX - startX

    if (diffX > 50) {
      prevSlide()
    } else if (diffX < -50) {
      nextSlide()
    }
  }

  showSlide(currentIndex)
  setInterval(nextSlide, 4000)

  document.getElementById('prevBtn').addEventListener('click', function () {
    prevSlide()
    clearInterval(intervalId)
    intervalId = setInterval(nextSlide, 4000)
  })

  document.getElementById('nextBtn').addEventListener('click', function () {
    nextSlide()
    clearInterval(intervalId)
    intervalId = setInterval(nextSlide, 4000)
  })

  let intervalId = setInterval(nextSlide, 4000)
})
