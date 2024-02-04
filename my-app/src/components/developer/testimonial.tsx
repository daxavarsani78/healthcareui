import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import Slider, { Settings } from "react-slick";
import { profile1, profile2 } from "../../assets/images";

interface BgColorprop {
  bgColor: string;
}

const Testimonial: React.FC<BgColorprop> = (props) => {
  const { bgColor } = props;

  const slickSettings: Settings = {
    lazyLoad: "ondemand",
    accessibility: false,
    draggable: false,
    dots: false,
    arrows: true,
    // infinite: true,
    // autoplay: true,
    speed: 1000,
    centerPadding: "0",
    className: "testimonial-slider",
    slidesToShow: window.innerWidth <= 768 ? 1 : 2,
    slidesToScroll: window.innerWidth <= 768 ? 1 : 2,
  };

  return (
    <Box className={"testimonial " + `${bgColor}`}>
      <Box className="container">
        <Typography variant="h2" className="heading testimonial-heading">
          People’s Say About our Love & Caring
        </Typography>
        <Box className="slider-container">
          <Slider {...slickSettings}>
            <div>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                  <Box className="testimonial-info">
                    <img src={profile1} alt="Pofile" />
                    <Box>
                      <Typography variant="h6" component="span">
                        Ashlynn Kenter
                      </Typography>
                      <Typography variant="body2" component="span">
                        School Teacher
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                  <Box className="testimonial-info">
                    <img src={profile2} alt="Pofile" />
                    <Box>
                      <Typography variant="h6" component="span">
                        Carter Dorwart
                      </Typography>
                      <Typography variant="body2" component="span">
                        Company CEO{" "}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                  <Box className="testimonial-info">
                    <img src={profile1} alt="Pofile" />
                    <Box>
                      <Typography variant="h6" component="span">
                        Ashlynn Kenter
                      </Typography>
                      <Typography variant="body2" component="span">
                        School Teacher
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                  <Box className="testimonial-info">
                    <img src={profile2} alt="Pofile" />
                    <Box>
                      <Typography variant="h6" component="span">
                        Carter Dorwart
                      </Typography>
                      <Typography variant="body2" component="span">
                        Company CEO{" "}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </div>
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonial;
