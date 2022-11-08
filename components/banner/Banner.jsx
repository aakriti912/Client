import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background-color: #90a17d;
  height: 50vh;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled(Typography)`
  font-size: 70px;
  color: #ffffff;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>NOTE SEWA</Heading>
      <SubHeading>
        our most popular products based on Sales. Update hourly
      </SubHeading>
    </Image>
  );
};

export default Banner;
