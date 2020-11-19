import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Box from 'common/src/components/Box';
import Text from 'common/src/components/Text';
import Heading from 'common/src/components/Heading';
import 'react-image-gallery/styles/css/image-gallery.css';
import Container from 'common/src/components/UI/Container';
import FeatureSliderWrapper from './featureSlider.style';

import Thumb1 from 'common/src/assets/image/app/6.svg';
import Thumb2 from 'common/src/assets/image/app/1.svg';
import Thumb3 from 'common/src/assets/image/app/2.svg';
import Thumb4 from 'common/src/assets/image/app/3.svg';
import Thumb5 from 'common/src/assets/image/app/4.svg';
import Thumb6 from 'common/src/assets/image/app/5.svg';

import Image1 from 'common/src/assets/image/maalem/product1_en.png';
import Image2 from 'common/src/assets/image/maalem/product1_ar.png';
import Image3 from 'common/src/assets/image/maalem/product2_en.png';
import Image4 from 'common/src/assets/image/maalem/product2_ar.png';
import Image5 from 'common/src/assets/image/app/howtoapply/Create account 1-3 Eng.png';

// import DomainSection from '../container/Hosting/Domain';
const cmsItems = JSON.parse(window.sessionStorage.getItem('cmsItems'));
const langIndex = window.sessionStorage.getItem('lang') === 'en' ? 1 : 0;
const cmsData = [
  'أدخل المعرف # اختر منتج # تطبيق # احصل على موافقة فورية',
  'Enter Your Id # Choose A Product # Apply # Get Instant Approval',
];
const title = cmsData[langIndex].split('#'); // cmsItems[langIndex].websiteMaalemRow1Text.split('#');
const applyNowHeading = langIndex != 1 ? 'Apply Now' : 'تطبيق الآن';
console.log('abcd from view 1');

const images = [
  {
    original: `${Image1}`,
    thumbnail: `${Thumb1}`,
    thumbnailLabel: title[0],
    originalAlt: 'slide one',
    thumbnailAlt: 'thumb one',
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb2}`,
    thumbnailLabel: title[1],
    originalAlt: 'slide two',
    thumbnailAlt: 'thumb two',
  },
  {
    original: `${Image4}`,
    thumbnail: `${Thumb5}`,
    thumbnailLabel: title[2],
    originalAlt: 'slide five',
    thumbnailAlt: 'thumb five',
  },
  {
    original: `${Image5}`,
    thumbnail: `${Thumb6}`,
    thumbnailLabel: title[3],
    originalAlt: 'slide six',
    thumbnailAlt: 'thumb six',
  },
  /* {
    original: `${Image3}`,
    thumbnail: `${Thumb3}`,
    thumbnailLabel: 'Customer Support',
    originalAlt: 'slide three',
    thumbnailAlt: 'thumb three'
  },
  {
    original: `${Image2}`,
    thumbnail: `${Thumb4}`,
    thumbnailLabel: '100% response time',
    originalAlt: 'slide four',
    thumbnailAlt: 'thumb four'
  } */
];

const FeatureSlider = ({ sectionSubTitle, sectionTitle, sectionHeader }) => {
  const [cmsItems, setSmsItems] = useState([]);
  const [lang, setLang] = useState(1);

  /* useEffect(() => {
    console.log('::calling useEffect::'); 
  }, [cmsItems]); */
  return (
    <>
      <FeatureSliderWrapper>
        <div className="FeatureSliderInner">
          <span> </span>
          <span> </span>
          <span> </span>
        </div>
        <Container>
          <Box {...sectionHeader}>
            {/* <Text {...sectionSubTitle} /> */}
            <Heading {...sectionTitle} />
          </Box>
          <Box className="FeatureSlider">
            <ImageGallery
              items={images}
              className="Slider-img"
              showPlayButton={false}
              showFullscreenButton={false}
              showNav={false}
              showBullets={true}
              autoPlay={true}
            />
          </Box>
        </Container>
      </FeatureSliderWrapper>
    </>
  );
};

// FeatureSlider style props
FeatureSlider.propTypes = {
  sectionSubTitle: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionHeader: PropTypes.object,
};

// FeatureSlider default style
FeatureSlider.defaultProps = {
  sectionHeader: {},
  sectionSubTitle: {
    content: 'WHY CHOOSE US',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.13em',
    fontWeight: '700',
    color: '#1a73e8',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    //content: 'Key Features of Our App',
    //fontSize: ['20px', '24px', '24px', '24px', '30px'],
    //fontWeight: '400',
    textAlign: 'center',
    content: applyNowHeading,
    fontSize: ['20px', '28px', '28px', '28px', '30px'],
    fontWeight: 'bold',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
  },
};

export default FeatureSlider;
