import React, { useEffect, useState, useRef }   from 'react';
import Swiper from 'react-id-swiper';
import { 
  HeroContainer,
  SwiperLeftIcon,
  SwiperRightIcon,
  VideoCover,
  SlideContainer,
  SlideItemContainer,
  SlideItem,
  SlideItemTwo,
  SlideImageContainer,
  SlideImage,
  SlideInfo,
  SlideTitle,
  SlideDesc,
  BtnDefault,
  BtnWhite,
  ContentContainer,
  FeaturedFlavor,
  FlavorContainer,
  FlavorImg,
  ContentBlock,
  ContentBlockContainer,
  ContentImg,
  ContentDetail,
  RedP
} from '../../style/home';



export const Home = () => {
  const params = {
    loop: true,
    // spaceBetween: 50,
    autoplay: {
      delay: 1000,
    }
  }
  const swiperRef = useRef(null);
  const goNext = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiperRef.current !== null && swiperRef.current.swiper !== null) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  useEffect(() => {
    
  });
  return (
    <div>

        <div>
          <HeroContainer>
            <SwiperLeftIcon className="fa fa-arrow-circle-o-left fa-2x" onClick={goPrev}></SwiperLeftIcon>
            <SwiperRightIcon className="fa fa-arrow-circle-o-right fa-2x" onClick={goNext}></SwiperRightIcon>
            <VideoCover />
            {/* <div id="gifFrame"></div> */}
            <SlideContainer>
              <Swiper {...params} ref={swiperRef}>
                <SlideItemContainer>
                  <SlideItem>
                    <SlideImageContainer>
                      <SlideImage src="http://res.cloudinary.com/saltea/image/upload/dpr_1.0,f_auto,fl_lossy.progressive,q_70/v1473645494/saltea.co/globe-caribbean-sea.gif"/>
                    </SlideImageContainer>
                    <SlideInfo>
                      <SlideTitle>An energetic drink, not an energy drink.</SlideTitle>
                      <SlideDesc>You&rsquo;ve Never Tasted Anything Like It. Lightly salted, juicy juicy</SlideDesc>
                      <BtnDefault>Wait, what?</BtnDefault>
                      <BtnWhite>OMG, I get it.</BtnWhite>
                    </SlideInfo>
                  </SlideItem>
                </SlideItemContainer>

                <SlideItemContainer>
                  <SlideItemTwo>
                    <SlideImageContainer>
                      <SlideImage src="http://res.cloudinary.com/saltea/image/upload/dpr_1.0,f_auto,fl_lossy.progressive,q_70/v1473645493/saltea.co/globe-rio-grande.gif"/>
                    </SlideImageContainer>
                    <SlideInfo>
                      <SlideTitle>A New Class of Tea.</SlideTitle>
                      <SlideDesc>Its like an all-natural organic healthier (and tastier) version of that orange drink with the lightning bolt.</SlideDesc>
                      <SlideDesc>Its actually healthy enough for you .</SlideDesc>
                      <BtnDefault>Still Clueless</BtnDefault>
                      <BtnWhite>Find A Store</BtnWhite>
                    </SlideInfo>
                  </SlideItemTwo>
                </SlideItemContainer>

                <SlideItemContainer>
                  <SlideItemTwo>
                    <SlideImageContainer>
                      <SlideImage src="http://res.cloudinary.com/saltea/image/upload/dpr_1.0,f_auto,fl_lossy.progressive,q_70/v1473647398/saltea.co/globe-finger-lakes.gif"/>
                    </SlideImageContainer>
                    <SlideInfo>
                      <SlideTitle>Flavor that comes to life.</SlideTitle>
                      <SlideDesc>Some would say its the "roundest" tasting drink. Imagine if coconut water and your favorite sports drink had a baby.</SlideDesc>
                      <BtnDefault>You Crazy</BtnDefault>
                      <BtnWhite>Genius, Buy Now</BtnWhite>
                    </SlideInfo>
                  </SlideItemTwo>
                </SlideItemContainer>

              </Swiper>
            </SlideContainer>
          </HeroContainer>
        </div>

        <ContentContainer>
          <FeaturedFlavor>
            <FlavorContainer>
              <FlavorImg>
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473645492/saltea.co/caribbean-sea.gif" title="The Caribbean Sea" alt="The Caribbean Sea"></img>
                <h1>The Caribbean Sea</h1>
                <p>
                  Fresh strawberries, dried rose petals, hibiscus tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </FlavorImg>
              <FlavorImg>
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473645492/saltea.co/rio-grande.gif" title="The Rio Grande" alt="The Rio Grande"></img>
                <h1>The Rio Grande</h1>
                <p>
                  Fresh lemons, fresh mint, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </FlavorImg>
              <FlavorImg>
                <img src="http://res.cloudinary.com/saltea/image/upload/c_scale,dpr_1.0,f_auto,fl_lossy.progressive,q_70,w_800/v1473645492/saltea.co/finger-lakes.gif" title="The Finger Lakes" alt="The Finger Lakes"></img>
                <h1>The Finger Lakes</h1>
                <p>
                  Fresh green apples, fresh rosemary, jasmine green tea, a touch of pure himalayan crystal sea salt, and a touch of pure cane sugar.
                </p>
              </FlavorImg>
            </FlavorContainer>
          </FeaturedFlavor>
        </ContentContainer>


        <ContentBlock>
          <ContentBlockContainer>
            <ContentImg src="http://res.cloudinary.com/saltea/image/upload/c_crop,f_auto,fl_lossy.progressive,h_662,q_70,w_575/v1496612697/mint_lemon_scene.jpg" alt="Mint & Lemon"/>
            <ContentDetail>
                <h1>But Is It Healthy?</h1>
                <p>
                  The truth is, adding unrefined natural crystal salt to water is extremely good for your body. The combination turns into a healing formula that helps balance blood sugar, keep bones strong, regulates metabolism, boosts the immune system, and more.
                </p>
                <RedP>
                  The crystalline structure of salt is of primary importance in the cellular uptake and movement of water and if the structure of the water and salt available to the cell is not appropriate, then life energy and its information cannot be effectively communicated.<sup><a href="http://www.positivehealth.com/review/water-salt-the-essence-of-life" target="_blank" title="">[1]</a></sup>
                </RedP>
                <h1>Why So Salty?</h1>
                <RedP>
                  Since the beginning of recorded history, people have been adding salt to drinks. The Tibetans have been making salted tea called cha süma (butter tea) since the 10th century. The Mongolians have a traditional drink called suutei tsai, which has milk and salt in it.<sup><a href="http://www.nytimes.com/2002/02/24/books/nacl.html" target="_blank" title="">[2]</a></sup> Turns out, many people in many cultures understand the benefits of drinking salty bevs, for both health reasons and those of flavor.
                </RedP>
                <p>
                  But the best part, is that adding a little bit of pure natural crystal salt to tea or juice tastes really good. So we decided to start a movement. Ok the good bartenders salting the rims of margaritas started the movement, you we are taking things a step further...
                </p>
            </ContentDetail>
          </ContentBlockContainer>
        </ContentBlock>

        </div>
      // </div>
  );
}