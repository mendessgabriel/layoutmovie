import React from 'react';
import Card from '../../card/Card';
import './Anteriores.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AddIcon from '@material-ui/icons/Add';

function Anteriores() {
  const meetupsMOCK = ['Reac Hooks', 'SharePoint', '.NET', 'Por que o Java é tão lento?', 'Angular js e Angular 7', 'Flutter', 'Como ficar rico', 'Segredos da vida'];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
      slidesToSlide: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const [viewIndex, setViewIndex] = useState<number>(-1);

  return (
    <div className="meetup">
      <h2>Próximos meetups</h2>
      <div className="cards-meetup">
        <Carousel responsive={responsive} infinite={true}>
          {meetupsMOCK && meetupsMOCK.map((meetup, index) => {
            return (
              <div onMouseLeave={() => setViewIndex(-1)} onMouseEnter={() => setViewIndex(index)} key={index}>
                <div className="item" >
                  {Card(meetup)}
                </div>
                {viewIndex === index ? <div className="card-description">
                  {/* {meetup} */}
                  <div style={{ height: '5px' }}></div>
                  <div className="button-player">
                    <div className="adjust-btn-icons tooltip">
                      <PlayArrowIcon />
                      <span className="tooltiptext">Iniciar Player</span>
                    </div>
                  </div>
                  <div className="button-player">
                    <div className="adjust-btn-icons tooltip">
                      <ThumbUpIcon />
                      <span className="tooltiptext">Gostei</span>
                    </div>
                  </div>
                  <div className="button-player">
                    <div className="adjust-btn-icons tooltip">
                      <ThumbDownIcon />
                      <span className="tooltiptext">Não gostei</span>
                    </div>
                  </div>
                  <div className="button-player rigth">
                    <div className="adjust-btn-icons tooltip">
                      <AddIcon />
                      <span className="tooltiptext">Mais informações</span>
                    </div>
                  </div>
                </div> : null}
              </div>
            )
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Anteriores;
