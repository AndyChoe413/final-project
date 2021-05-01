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
const bryan = new Audio('music/bryan.m4a')
bryan.loop = true
const aerosmith = new Audio('music/aerosmith.m4a')
aerosmith.loop = true

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
      aerosmith.pause()
      jovi.pause()
      cure.pause()
      clapton.play()
   }
   if (slidePosition === 1) {
      aerosmith.pause()
      clapton.pause()
      cure.pause()
      jovi.play()
   }
   if (slidePosition === 2) {
      aerosmith.pause()
      jovi.pause()
      clapton.pause()
      cure.play()
   }
   if (slidePosition === 3) {
      aerosmith.pause()
      jovi.pause()
      clapton.pause()
      cure.pause()
      bryan.play()
   }
   if (slidePosition === 4) {
      cure.pause()
      bryan.pause()
      jovi.pause()
      clapton.pause()
      aerosmith.play()
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

   if (slidePosition === 3) {
   makeSmaller()
   info.style.display = 'block'
   info.style.maxWidth = '50%'
   info.innerText = `ARTISTS DISCOGRAPHY
   
Singer Bryan Adams has released fourteen studio albums, six compilation albums, two soundtrack albums, four live albums, and sixty-nine singles. After the success of his debut single, "Let Me Take You Dancing" (1979), Adams signed a recording contract with A&M Records. Bryan Adams (1980), his debut album, peaked at number 69 on the Canadian RPM Albums Chart. Adams followed this with You Want It You Got It (1981), which peaked at number 118 on the Billboard 200 and was certified gold in Canada. Cuts Like a Knife, his third release, became his first successful work outside Canada. The album charted within the top ten in Canada and the United States and was certified three-times platinum by the Canadian Recording Industry Association (CRIA) and platinum by the Recording Industry Association of America (RIAA). Reckless (1984), his fourth studio album, selling over 12 million copies worldwide[1] and featured the hit singles "Run to You", "Heaven" and "Summer of '69". In 1987, he released Into the Fire, which reached platinum status in the United States and triple-platinum in Canada.

Adams entered the 1990s with the release of Waking Up the Neighbours (1991), which contained "(Everything I Do) I Do It for You", the theme song for the film Robin Hood: Prince of Thieves. It went on to sell more than 15 million copies worldwide, making it Adams's most successful song, and one of the best-selling singles of all time.  The album was sold in approximately 16 million copies, including being certified diamond in Canada.[4] He also released his first greatest hits compilation, So Far So Good, in 1993. This album topped the charts in nine countries and was certified six-times platinum and seven-times platinum by the RIAA and CRIA respectively. His seventh studio album, 18 til I Die, was released in 1996. It sold five million copies worldwide and was certified platinum in the United States.MTV Unplugged, an acoustic live album released in 1997, reached the top ten in four countries while selling two million copies in Europe. Adams' eighth studio album, On a Day Like Today (1998), was certified double-platinum by the CRIA and platinum by the IFPI Platinum Europe Awards. His second compilation album, The Best of Me (1999), sold two million copies in Europe and went three-times platinum in Canada.`
   }

   if (slidePosition === 4) {
   makeSmaller()
   info.style.display = 'block'
   info.style.maxWidth = '50%'
   info.innerText = `ARTISTS DISCOGRAPHY

Aerosmith is an American rock band formed in Boston in 1970. The group consists of Steven Tyler (lead vocals), Joe Perry (guitar), Tom Hamilton (bass), Joey Kramer (drums) and Brad Whitford (guitar). Their style, which is rooted in blues-based hard rock,[3][4] has also incorporated elements of pop rock,[5] heavy metal, glam metal, and rhythm and blues,[10] and has inspired many subsequent rock artists. They are sometimes referred to as "the Bad Boys from Boston" and "America's Greatest Rock and Roll Band".  The primary songwriting team of Tyler and Perry is often known as the "Toxic Twins".

Perry and Hamilton, originally in a band together called the Jam Band, met up with Tyler, Kramer, and guitarist Ray Tabano, and formed Aerosmith; in 1971, Tabano was replaced by Whitford. They released a string of multi-platinum albums starting with their eponymous debut in 1973, followed by Get Your Wings in 1974. The band broke into the mainstream with Toys in the Attic (1975) and Rocks (1976). Draw the Line and Night in the Ruts followed in 1977 and 1979. Throughout the 1970s, the band toured extensively and charted a dozen Hot 100 singles, including their first Top 40 hit "Sweet Emotion" and the Top 10 hits "Dream On" and "Walk This Way". By the end of the decade, they were among the most popular hard rock bands in the world and developed a following of fans, often referred to as the "Blue Army". Drug addiction and internal conflict led to the departures of Perry and Whitford in 1979 and 1981. The band did not fare well and the album Rock in a Hard Place (1982) failed to match previous successes.

Perry and Whitford returned to Aerosmith in 1984. After a comeback tour, they recorded Done with Mirrors (1985), which did not meet commercial expectations. It was not until a 1986 collaboration with rap group Run–D.M.C. on a remake of "Walk This Way", and the 1987 multi-platinum release, Permanent Vacation, that they regained their previous level of popularity. In the late 1980s and 1990s, the band won numerous awards for music from the multi-platinum albums Pump (1989), Get a Grip (1993), and Nine Lives (1997), while they embarked on their most extensive concert tours to date. Their biggest hits during this period included "Dude (Looks Like a Lady)", "Angel", "Rag Doll", "Love in an Elevator", "Janie's Got a Gun", "What it Takes", "Livin' on the Edge", "Cryin'", and "Crazy". The band also filmed popular music videos and made notable appearances in television, film, and video games. In 1998, they achieved their first number-one hit with "I Don't Want to Miss a Thing" from Armageddon's soundtrack and the following year, their roller coaster attraction opened at Walt Disney World. Their comeback has been described as one of the most remarkable and spectacular in rock history.Additional albums Just Push Play (which included the hit "Jaded"), Honkin' on Bobo (a collection of blues covers), and Music from Another Dimension! followed in 2001, 2004, and 2012. In 2008, they released Guitar Hero: Aerosmith, which is considered to be the best-selling band-centric video game. After five decades, the band continues to tour and record music. Prior to the COVID-19 pandemic, they had an ongoing concert residency in Las Vegas.

Aerosmith is the best-selling American hard rock band of all time, having sold more than 150 million records worldwide, including over 70 million records in the United States. With 25 gold, 18 platinum, and 12 multi-platinum albums, they hold the record for the most total certifications by an American group and are tied for the most multi-platinum albums by an American group. They have achieved twenty-one Top 40 hits on the US Hot 100, nine number-one Mainstream Rock hits, four Grammy Awards, six American Music Awards, and ten MTV Video Music Awards. They were inducted into the Rock and Roll Hall of Fame in 2001, and were ranked number 57 and 30, respectively, on Rolling Stone's and VH1's lists of the 100 Greatest Artists of All Time. In 2013, Tyler and Perry were inducted into the Songwriters Hall of Fame, and in 2020, the band received the MusiCares Person of the Year award.`
   }
});




