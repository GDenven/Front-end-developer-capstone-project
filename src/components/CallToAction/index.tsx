import { FC } from "react";
import Button from "../Button";
import { useNavigate, NavigateFunction } from "react-router-dom";
import { Container, Content, Image } from "./styles";
import restaurant_food from "../../assets/restaurantfood.jpg";

const CallToAction: FC = ():  JSX.Element => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Kuala Lumpur</h2>
        <p className="lead-txt">
          Little Lemon Restaurant in Kuala Lumpur, Malaysia, is a culinary gem where the zest 0f flavors meets warm hospitality.
        </p>
        <Button onClick={() => navigate("/bookings")} aria-label="Go to reservation table page.">Reserve a Table</Button>
      </Content>
      <Image>
        <img src={restaurant_food} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default CallToAction;