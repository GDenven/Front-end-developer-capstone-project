import { FC, HTMLAttributes } from "react";
import { Container, Title, Cards } from "./styles";
import CustomersSayCard from "../CustomersSayCard";

const CustomersSay: FC<HTMLAttributes<HTMLDivElement>> = (props): JSX.Element => {
  return (
    <Container {...props}>
      <Title>What ours customers say!</Title>
      <Cards>
        <CustomersSayCard
          rating={5}
          customerImg="https://static.displate.com/270x380/displate/2023-01-25/88ceee52dae7f595ae699fd73737ecf1_13f9d75db1f6b23e5d8f842a98eb87ad.jpg"
          customerName="Invoker"
          testimonial="Great experience at Little Lemon! The food was delicious, service was prompt and friendly, and the ambiance was lovely. Will definitely be returning soon!"
        />
        <CustomersSayCard
          rating={4}
          customerImg="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ac8c6ac4-f054-4bec-b48b-51c704ef85c0/dcqvzxm-8f515ad3-7c62-4448-8a85-ae853c1bf143.jpg/v1/fill/w_1024,h_1545,q_75,strp/luna_dota2___fanart_by_razaras_dcqvzxm-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU0NSIsInBhdGgiOiJcL2ZcL2FjOGM2YWM0LWYwNTQtNGJlYy1iNDhiLTUxYzcwNGVmODVjMFwvZGNxdnp4bS04ZjUxNWFkMy03YzYyLTQ0NDgtOGE4NS1hZTg1M2MxYmYxNDMuanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.zSnFe0kmrsecacGBNXl8JGi4DFyIDefOtOq_0u8DF5Y"
          customerName="Luna"
          testimonial="Visited Little Lemon for the first time and was thoroughly impressed. The staff was attentive, the food was fresh and flavorful, and the presentation was top-notch. Highly recommend!"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://i.redd.it/eiglw5ha1az41.jpg"
          customerName="Kunkka"
          testimonial="Had a wonderful dining experience at Little Lemon! The menu offered a great variety, the portions were generous, and the prices were reasonable. Can't wait to come back and try more dishes!"
        />
        <CustomersSayCard
          rating={5}
          customerImg="https://images.nightcafe.studio/jobs/EooUJceEed5hXGfYfEDm/EooUJceEed5hXGfYfEDm--1--00n37_2x.jpg?tr=w-1600,c-at_max"
          customerName="Rylai"
          testimonial="Absolutely fantastic meal at Little Lemon! From the appetizers to dessert, every dish was bursting with flavor. The attention to detail and commitment to quality really shines through. Definitely a new favorite spot!"
        />
      </Cards>
    </Container>
  );
};

export default CustomersSay;