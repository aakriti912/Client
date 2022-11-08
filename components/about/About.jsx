import { Box, styled, Typography, Link } from "@mui/material";
import { GitHub, Instagram, Email } from "@mui/icons-material";

const Banner = styled(Box)`
  background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px bottom 0px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const About = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">NOTE SEWA</Typography>
        <Text variant="h5">
          welcome to our app NOTESEWA. This app is related to buying and selling
          of old universities notes and other related materials to one another.
          <br />
          intrested buyer and seller can also interact with each other through
          chat application. for more information you can contact me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://github.com/aakriti912"
              color="inherit"
              target="_blank"
            >
              <GitHub />
            </Link>
          </Box>
        </Text>
        <Text variant="h5">
          Reach out to me on
          <Box component="span" style={{ marginLeft: 5 }}>
            <Link
              href="https://www.instagram.com/_aakriti_thapa__/"
              color="inherit"
              target="_blank"
            >
              <Instagram />
            </Link>
          </Box>
          or send me an Email
          <Link
            href="mailto:thapaaakriti570@gmail.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default About;
