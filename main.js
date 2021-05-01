//slide call and positioning keeper
const slides = document.getElementsByClassName('carousel-item');
let slidePosition = 0;
const totalSlides = slides.length;

//music keepers
const clapton = new Audio('music/eric-clapton.m4a');
const jovi = new Audio('music/jovi.m4a')
jovi.loop = true
const cure = new Audio('music/cure.m4a')
cure.loop = true


//---------helper functions container-------------------//

//helper function to hide slides
const updateSlides =() => {
   for (let slide of slides) {
      slide.classList.remove('carousel-item-visible');
      slide.classList.add('carousel-item-hidden');
   }
   slides[slidePosition].classList.add("carousel-item-visible")
}

//make images smaller helper function
const makeSmaller = () => {
   const images = document.querySelectorAll('.images')
   for (let image of images) {
      image.style.maxwidth = '50%'
   }
}

//makes images bigger helper function 
const makeLarger =()=> {
   const images = document.querySelectorAll('.images')
   for (let image of images) {
      image.style.maxWidth = '100%'
   }
}

//clears the artist info div
const clearInfo = () => {
   const info = document.querySelector('.artist-info')
   info.style.display = 'none'
   info.textContent = ''
}

//music helper function
const musicFinder = () => {
      if (slidePosition === 0) {
      jovi.pause()
      cure.pause()
      clapton.play()
   }
   if (slidePosition === 1) {
      clapton.pause()
      cure.pause()
      jovi.play()
   }
   if (slidePosition === 2) {
      jovi.pause()
      clapton.pause()
      cure.play()
   }
}

//---------helper functions container end-------------------//

//event to handle clicking next slide button
document.querySelector('#carousel-button-next').addEventListener('click', () => {
   console.log('next button pressed');
   if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
   } else {
      slidePosition++
   }
   musicFinder()
   updateSlides()
   makeLarger()
   clearInfo()
});

//event to handle clicking previous slide button
document.querySelector('#carousel-button-prev').addEventListener('click', () => {
   console.log('prev button pressed');
   if (slidePosition === 0) {
      slidePosition = totalSlides - 1
   } else {
      slidePosition --
   }
   musicFinder()
   updateSlides()
   makeLarger()
   clearInfo()
});

//event to handle when artist info is clicked
document.querySelector('#carousel-button-info').addEventListener('click', () => {
   
   const info = document.querySelector('.artist-info')
   if (slidePosition === 0) {
      makeSmaller()
      info.style.display = 'block'
      info.style.maxWidth = '50%'
      info.innerText = `ARTISTS DISCOGRAPHY
      
      British guitarist and singer-songwriter Eric Clapton has released 24 studio albums, 26 singles, 18 compilations, 15 live albums and six soundtrack albums as a solo artist and scores of collaborations on records with other artists.
 
      Before his career as a solo artist, Clapton became famous as a guitarist in several bands, including The Yardbirds (1963–65), John Mayall & the Blues breakers (1965–1966), Cream (1966–1968), Blind Faith (1968–1969) and Derek and the Dominos (1970–1971). Clapton released his debut solo album in 1970 Eric Clapton, which charted at number 17 in the US charts and at number 14 in the British charts. Four years later he released his second album 461 Ocean Boulevard, which received two gold certifications in the US and UK and peaked at number 1 in the US charts. His 1977 album, Slow hand, named after his nickname given by Giorgio Gomelsky, received three times Platinum in the United States. His most commercial recognized period was from 1989 through 2000, where his albums received at least five certifications and peaked in several countries in the top 10. Eric Clapton's best-selling album to date is the live album Unplugged, which has sold more than ten million copies in the United States alone.  It is one of the best-selling live albums in the United States.`
   }

   if (slidePosition === 1) {
      // clearInfo()
      makeSmaller()
      info.style.display = 'block'
      info.style.maxWidth = '50%'
      info.innerText = `ARTISTS DISCOGRAPHY
      
      Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey. It consists of singer Jon Bon Jovi, keyboardist David Bryan, drummer Tico Torres, guitarist Phil X, and bassist Hugh McDonald.[1] Original bassist Alec John Such quit the band in 1994, and longtime guitarist and co-songwriter Richie Sambora left in 2013.

      In 1984 and 1985, Bon Jovi released their first two albums and their debut single "Runaway" managed to crack the Top 40. In 1986, the band achieved widespread success and global recognition with their third album, Slippery When Wet, which sold over 20 million copies and included three Top 10 singles, two of which reached No. 1 ("You Give Love a Bad Name" and "Livin' on a Prayer")Their fourth album, New Jersey (1988), was also very successful, selling over 10 million copies and featuring five Top 10 singles (a record for a glam metal, heavy metal and hard rock album), two of which reached No. 1 ("Bad Medicine" and "I'll Be There for You"). After the band toured and recorded extensively during the late 1980s, culminating in the 1988–1990 New Jersey Tour, Jon Bon Jovi and Richie Sambora released successful solo albums in 1990 and 1991, respectively.

      Bon Jovi has released 15 studio albums, five compilations and three live albums. They have sold more than 100 million records worldwide, making them one of the best-selling American rock bands,and performed more than 2,700 concerts in over 50 countries for more than 34 million fans. Bon Jovi was inducted into the UK Music Hall of Fame in 2006, and into the US Rock and Roll Hall of Fame in 2018.The band received the Award of Merit at the American Music Awards in 2004, and Jon Bon Jovi and Richie Sambora were inducted into Songwriters Hall of Fame in 2009.`
   }

   if (slidePosition === 2) {
      // clearInfo()
      makeSmaller()
      info.style.display = 'block'
      info.style.maxWidth = '50%'
      info.innerText = `ARTISTS DISCOGRAPHY
      
      The Cure are an English rock band formed in Crawley, West Sussex, in 1978. The band members have changed several times, and guitarist, lead vocalist, and songwriter Robert Smith is the only constant member. The band's debut album was Three Imaginary Boys (1979) and this, along with several early singles, placed the band in the post-punk and new wave movements that had sprung up in the United Kingdom. Beginning with their second album, Seventeen Seconds (1980), the band adopted a new, increasingly dark and tormented style, which, together with Smith's stage look, had a strong influence on the emerging genre of gothic rock as well as the subculture that eventually formed around the genre.

      Following the release of their fourth album Pornography in 1982, the band's future was uncertain. Smith was keen to move past the gloomy reputation his band had acquired, introducing a greater pop sensibility into the band's music. Songs such as "Let's Go to Bed" (1982), "The Love Cats" (1983), "Inbetween Days" (1985), "Close To Me" (1985), "Just Like Heaven" (1987), "Lovesong" (1989), and "Friday I'm in Love" (1992) aided the band in receiving commercial popularity. The band have released 13 studio albums, two EPs, over 30 singles, and have sold over 30 million albums worldwide.

      The Cure were inducted into the Rock and Roll Hall of Fame in 2019.`
   }
});




