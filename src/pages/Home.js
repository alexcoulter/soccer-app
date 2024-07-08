import { Image, Container } from "react-bootstrap";
import ballImage from "../images/ballInStadium.jpg";
export function Home() {
  
  return (
    <>
      <Container className="bg-darkgrey body-container">
      <h1 className="my-4 theme-blue" style={{textAlign: "center"}}>Durham Soccer League</h1>
      <Image src={ballImage} className="rounded mx-auto d-block home-image" alt="soccer on field" width="600" height="350" />
      
      <h4 className="mt-5 theme-blue">About:</h4>
      <p>I'm very excited to announce that Durham Adult Soccer League is now serving the Triangle Area.</p>
      <p>With leagues available to many ages and skill levels, we want to provide fun and fitness to as many people as possible.  </p>
      <p>We look forward to supporting the beautiful community of adults playing soccer in Orange and Durham counties.</p>
      <p>If you have any questions, please email DurhamLeague@gmail.com and Alex will be glad to assist!  Phone 919-555-5555"</p>
      <h4 className="mt-4 theme-blue">History:</h4>
      <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur
Durham Soccer League is a 501c (4) not for profit organization governed by a volunteer Board of Directors."</p>
</Container>
    </>
  );
}