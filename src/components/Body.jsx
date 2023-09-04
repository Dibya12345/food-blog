import React from "react";
import "./Body.css";
import Forward from "../assets/forward.svg";
import Backward from "../assets/backward.svg";
import Data from "../constants";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.item_url} alt="tomato" />
      <h2>{props.item_name}</h2>
      <p>
        PLorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard...
      </p>
      <button>Read More</button>
    </div>
  );
};
export default function Body() {
  console.log(Data);
  return (
    <body>
      <section className="body-container-1">
        <img
          src="https://s3-alpha-sig.figma.com/img/5b80/babf/a1ef27ac038072c6f30264ab0d7bc72d?Expires=1694390400&Signature=PJUgHSv7Gk5PF1bffvv-QnUW2wsOJqil1GlWILlFxIcQUxzqxAxLDGfYxk9QUQjuCjx7LYAk6ivYdfPdr5OwIq1w9UrucJzHUAUeRW44jwVnzguPSouil0CiK-8O06aY0F-5uELsBUH8Njci77A1SHGhGYcMP4plpc3rgMuj-sMG1Ci4OnDIAJSXiO8cGdE9awGy5NIP4rvm6~dqa5NgSrbXYQtJ8uOlbP6hJeCs-76tS8rA69A8tIxVGTYlE3dtul6DWYFkKe3mrovmfdfoJqE-4pwHfWh52y5RrN-UOwDfaXZHpQBRa-CDwOMdxSELioJdARAQsrfz~ZW9WWdkow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="food"
        />
        <div className="body-cover">
          <h1>About Us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button>Read More</button>
        </div>
      </section>
      <section className="body-container-2">
        <h1>Latest Articles</h1>
        <div className="card-container">
          {Data.map((item) => {
            return (
              <>
                <Card item_name={item.image_name} item_url={item.image_url} />;
              </>
            );
          })}
        </div>
        <div className="btn-container">
          <span className="btn-1">
            <img src={Backward} alt="" srcset="" />
          </span>
          <span className="btn-text">1/2</span>
          <span className="btn-1">
            <img src={Forward} alt="" srcset="" />
          </span>
        </div>
      </section>
    </body>
  );
}
