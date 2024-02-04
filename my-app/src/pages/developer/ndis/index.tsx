import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import {
  activateNdisBanner,
  ndisBanner,
  ndisEligibility2Banner,
  ndisEligibility3Banner,
  ndisEligibility4Banner,
  ndisEligibilityBanner,
  ndisHelpBanner,
  ndisWorkBanner,
} from "../../../assets/images";
import ContactForm from "../../../components/developer/contact-form";
import { scrollToTop } from "../../../utility/helper";
import ContactUs from "../../../components/developer/contact-us";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`eligibility-tabpanel-${index}`}
      aria-labelledby={`eligibility-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className="ndis-eligibility-tab-content">{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `eligibility-tab-${index}`,
    "aria-controls": `eligibility-tabpanel-${index}`,
  };
}

const NdisPage: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div className="wrapper">
      <div
        className="overlay"
        onClick={(e) => document.body.classList.toggle("sidebar-toggle")}
      ></div>
      <section className="ndis-home">
        <Box className="container">
          <Box className="ndis-home-content">
            <Typography variant="h1" className="ndis-home-heading">
              NDIS
            </Typography>
          </Box>
          <Box className="ndis-home-banner">
            <img src={ndisBanner} alt="Banner" />
          </Box>
        </Box>
      </section>

      <section className="what-ndis">
        <Box className="container">
          <Typography variant="h2" className="heading">
            What is the NDIS?
          </Typography>
          <Box className="what-ndis-content">
            <Typography variant="h6" component="p">
              The NDIS is Australia’s first national scheme for people with
              disability.
            </Typography>
            <Typography variant="h6" component="p">
              It moves away from the previous system of providing block funding
              to agencies and community organisations, to give funding directly
              to people with a disability.
            </Typography>
            <Typography variant="h6" component="p">
              There are about 4.3 million Australians who have a disability.
              Within the next five years, the NDIS will provide more than $22
              billion in funding a year to an estimated 500,000 Australians who
              have permanent and significant disability. For many people, it
              will be the first time they receive the disability supports and
              services they need.
            </Typography>
            <Typography variant="h6" component="p">
              The NDIS also provides people with disability, including those not
              eligible for funding, with information and connections to services
              in their communities. This includes connections to doctors,
              sporting clubs, support groups, libraries and schools, as well as
              providing information about what support is provided by each state
              and territory government.
            </Typography>
          </Box>
          <Box className="what-ndis-banner"></Box>
        </Box>
      </section>

      <section className="ndis-word">
        <Box className="container">
          <Typography variant="h2" className="heading">
            What does NDIS Stand for?
          </Typography>
          <Grid
            container
            spacing={{ xs: "16px", md: "20px", lg: "24px", xl: "32px" }}
          >
            <Grid item xs={12} md={6} lg={3}>
              <Box className="ndis-word-content">
                <Typography variant="h5" className="ndis-word-meaning">
                  National
                </Typography>
                <Typography variant="h1" className="ndis-word-letter">
                  N
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box className="ndis-word-content">
                <Typography variant="h5" className="ndis-word-meaning">
                  Disability
                </Typography>
                <Typography variant="h1" className="ndis-word-letter">
                  D
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box className="ndis-word-content">
                <Typography variant="h5" className="ndis-word-meaning">
                  Insurance
                </Typography>
                <Typography variant="h1" className="ndis-word-letter">
                  I
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box className="ndis-word-content">
                <Typography variant="h5" className="ndis-word-meaning">
                  Scheme
                </Typography>
                <Typography variant="h1" className="ndis-word-letter">
                  S
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className="ndis-eligibility">
        <Box className="container">
          <Typography variant="h2" className="heading">
            NDIS Eligibility
          </Typography>
          <Box className="ndis-tabs-container">
            <Tabs
              value={value}
              onChange={handleChange}
              centered
              variant="scrollable"
              scrollButtons={false}
            >
              <Tab label="Disability from an Early Age" {...a11yProps(0)} />
              <Tab
                label="Figuring out the functional Capability"
                {...a11yProps(1)}
              />
              <Tab label="Permanent Disability" {...a11yProps(2)} />
              <Tab label="Participation" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Box className="ndis-eligibility-tab-1">
              <Box className="ndis-eligibility-banner">
                <img src={ndisEligibilityBanner} alt="Banner" />
              </Box>
              <Box className="ndis-eligibility-content">
                <Typography
                  variant="h6"
                  className="ndis-eligibility-text"
                  component="p"
                >
                  A permanent development delay, in a child, showing signs of
                  some early intervention. The agenda of early intervention is
                  to support the child in the earliest stage rather than in the
                  later period through:
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding disableGutters>
                    <ListItemText
                      primary="Effective support for improvising their caring ability."
                      primaryTypographyProps={{ variant: "h6" }}
                    />
                  </ListItem>
                  <ListItem disablePadding disableGutters>
                    <ListItemText
                      primary="Empowering the support group including their family members."
                      primaryTypographyProps={{ variant: "h6" }}
                    />
                  </ListItem>
                  <ListItem disablePadding disableGutters>
                    <ListItemText
                      primary="Assisting them to diminish the impact of disability."
                      primaryTypographyProps={{ variant: "h6" }}
                    />
                  </ListItem>
                </List>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Box className="ndis-eligibility-tab-1">
              <Box className="ndis-eligibility-banner">
                <img src={ndisEligibility2Banner} alt="Banner" />
              </Box>
              <Box className="ndis-eligibility-content">
                <Typography
                  variant="h6"
                  className="ndis-eligibility-text"
                  component="p"
                >
                  Disability in some individuals affects their functional
                  capacity, therefore the caretakers assure the family members
                  in assisting them in normalizing their communication,
                  socialization, interaction activities. It also assures the
                  members to support daily tasks and personal care.
                </Typography>
                <Typography
                  variant="h6"
                  className="ndis-eligibility-text"
                  component="p"
                >
                  However, if your family member is suffering from disability
                  and has the ability then they are not eligible for the NDIS
                  package.
                </Typography>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Box className="ndis-eligibility-tab-1">
              <Box className="ndis-eligibility-banner">
                <img src={ndisEligibility3Banner} alt="Banner" />
              </Box>
              <Box className="ndis-eligibility-content">
                <Typography
                  variant="h6"
                  className="ndis-eligibility-text"
                  component="p"
                >
                  No temporary disability is eligible for the NDIS package. This
                  means the disability assistance package is designed only for
                  individuals holding permanent disability. No disabilities are
                  regarded as permanent if they can be treated and cured in a
                  short period.
                </Typography>
              </Box>
            </Box>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <Box className="ndis-eligibility-tab-1">
              <Box className="ndis-eligibility-banner">
                <img src={ndisEligibility4Banner} alt="Banner" />
              </Box>
              <Box className="ndis-eligibility-content">
                <Typography
                  variant="h6"
                  className="ndis-eligibility-text"
                  component="p"
                >
                  Disability confines people from participating and performing
                  social interactions. It also prevents them from joining
                  employment.
                </Typography>
              </Box>
            </Box>
          </CustomTabPanel>
        </Box>
      </section>

      <section className="ndis-help">
        <Box className="container">
          <Box className="ndis-help-banner">
            <Box className="ndis-help-banner-img">
              <img src={ndisHelpBanner} alt="Banner" />
            </Box>
          </Box>
          <Box className="ndis-help-content">
            <Typography variant="h2" className="heading">
              Who is helping the NDIS?
            </Typography>
            <Typography variant="h6" className="sub-heading" component="p">
              The National Disability Insurance Agency
            </Typography>
            <List disablePadding>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="The National Disability Insurance Agency (NDIA) is the independent government organisation that runs the NDIS"
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="The NDIA makes decisions about whether someone is eligible to become an NDIS participant and, if so, how much funding they receive."
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
              <ListItem disablePadding disableGutters>
                <ListItemText
                  primary="These decisions are based on legislation called the National Disability Insurance Scheme Act 2013 which sets out: the eligibility requirements every NDIS participant must meet what supports and services are considered reasonable and necessary for the NDIS to fund."
                  primaryTypographyProps={{ variant: "h6" }}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </section>

      <section className="ndis-work">
        <Box className="container">
          <Typography variant="h2" className="heading">
            What does the NDIS do?
          </Typography>
          <Typography variant="h6" className="sub-heading" component="p">
            Provide funding to eligible people based on their individual needs
          </Typography>
          <Box className="ndis-work-content">
            <Box className="ndis-work-banner">
              <img src={ndisWorkBanner} alt="Banner" />
            </Box>
            <Box className="ndis-work-para">
              <Typography variant="h6" className="ndis-work-text" component="p">
                The NDIS provides reasonable and necessary funding to people
                with a permanent and significant disability to access the
                supports and services they need to live and enjoy their life.
                Every NDIS participant has an individual plan that lists their
                goals and funding.
              </Typography>
              <Typography variant="h6" className="ndis-work-text" component="p">
                NDIS participants use their funding to purchase supports and
                services to help them pursue their goals. Everyone has different
                goals. Goals might include things like volunteering, getting and
                keeping a job, making friends or participating in a local
                community activity. NDIS participants and their nominee or third
                party decision makers control the support they receive, when
                they receive it and who provides it.
              </Typography>
            </Box>

            <Box className="ndis-work-snackbar-group">
              <Typography
                variant="h6"
                className="ndis-work-text title"
                component="p"
              >
                The NDIS cannot fund a support:
              </Typography>
              <Box className="ndis-work-snackbars">
                <Box className="snackbar">
                  <Typography
                    variant="h6"
                    className="ndis-work-text"
                    component="span"
                  >
                    Responsibility of another government system or community
                    service
                  </Typography>
                </Box>
                <Box className="snackbar">
                  <Typography
                    variant="h6"
                    className="ndis-work-text"
                    component="span"
                  >
                    Not related to a person’s disability.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      {/* <section className="activate-ndis">
        <Box className="container">
          <Box className="activate-ndis-content">
            <Typography variant="h4" className="heading-small">
              Activate your NDIS Plan with our Supports and Services
            </Typography>
            <Button variant="contained" className="btn-light">
              Contact Us
            </Button>
          </Box>
          <Box className="activate-ndis-banner">
            <img src={activateNdisBanner} alt="Banner" />
          </Box>
        </Box>
      </section> */}
      <ContactUs />
    </div>
  );
};
export default NdisPage;
