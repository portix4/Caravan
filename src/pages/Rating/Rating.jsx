import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './Rating.css'
import Review1 from './../../assets/Review1.png'
import Review2 from './../../assets/Review2.png'
import Review3 from './../../assets/Review3.png'
import Review4 from './../../assets/Review4.png'
import Review5 from './../../assets/Review5.png'
import Review6 from './../../assets/Review6.png'
import Review7 from './../../assets/Review7.png'
import Review8 from './../../assets/Review8.png'

const Rating = () => {
  const images = [Review1, Review2, Review3, Review4, Review5, Review6, Review7, Review8]

  return (
    <div className='rating-container mt-5'>
      <Container>
        <h2>Opiniones de nuestros clientes</h2>
        <p>
          Nuestros clientes nos avalan. Aquí tienes algunas de las opiniones que han
          dejado en nuestra web
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={3500}
          centerMode={false}
          className=''
          containerClass='container-with-dots'
          customTransition='all 1s linear'
          dotListClass=''
          draggable
          focusOnSelect={false}
          infinite
          itemClass=''
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1200
              },
              items: 2,
              partialVisibilityGutter: 40
            },
            mobile: {
              breakpoint: {
                max: 1200,
                min: 0
              },
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=''
          slidesToSlide={1}
          swipeable
          transitionDuration={1000}
        >
          <img src={Review1} />
          <img src={Review2} />
          <img src={Review3} />
          <img src={Review4} />
          <img src={Review5} />
          <img src={Review6} />
          <img src={Review7} />
          <img src={Review8} />
        </Carousel>
      </Container>
    </div>
  )
}

export default Rating
