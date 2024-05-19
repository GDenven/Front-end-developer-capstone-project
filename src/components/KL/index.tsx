import { FC } from "react";
import { Container, Content, Image } from "./styles";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";

const Chicago: FC = (): JSX.Element => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Kuala Lumpur</h2>
        <p className="lead-txt">
          Little Lemon Restaurant in Kuala Lumpur, Malaysia, is a culinary gem where the zest 0f flavors meets warm hospitality.
        </p>
        <p className="lead-txt">
          Our vibrant menu features a delightful fusion of local and international cuisines, curated with care to tantalize your taste buds. 
          Nestled in the heart of Kuala Lumpur, our cozy ambience and impeccable service make Little Lemon the perfect destination for memorable dining experience. 
          Join us for a culinary journey that celebrates the essence of Malaysian gastronomy with a touch of global inspiration at Little Lemon Restaurant.
        </p>
      </Content>
      <Image>
        <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
      </Image>
    </Container>
  );
};

export default Chicago;