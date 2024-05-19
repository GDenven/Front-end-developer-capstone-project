import { FC, HTMLAttributes } from "react";
import { Container, Top, Cards } from "./styles";
import Button from "../Button";
import SpecialFoodCard from "../SpecialFoodCard";
import burgerKing from "../../assets/burgerKing.jpg";
import salads from "../../assets/salads.jpg";
import greenTeaLemon from "../../assets/greenTeaLemon.jpeg";

const Specials: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props} id="menu">
      <Top>
        <h1>This weeks specials!</h1>
        <Button>Online Menu</Button>
      </Top>
      <Cards>
        <SpecialFoodCard
          imageUrl={burgerKing}
          title="Burger King"
          price={13.99}
          description="Iconic fast-food chain known for flame-grilled burgers, Whoppers, and diverse menu options, served in a welcoming, casual dining atmosphere worldwide."
        />
        <SpecialFoodCard
          imageUrl={salads}
          title="Salads"
          price={7.00}
          description="Crisp greens, vibrant veggies, tossed with tangy dressings, and topped with nuts or cheese for a refreshing, healthy meal. A delightful burst of flavors!"
        />
        <SpecialFoodCard
          imageUrl={greenTeaLemon}
          title="Green Tea Lemon"
          price={3.99}
          description="Refreshing green tea with a zesty twist of lemon. Delicate, invigorating blend harmonizing the earthy notes of green tea with the citrusy brightness of lemon. Energizing and revitalizing."
        />
      </Cards>
    </Container>
  );
};

export default Specials;