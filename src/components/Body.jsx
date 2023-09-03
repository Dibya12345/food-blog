import React from "react";
import "./Body.css";

export default function Body() {
  return (
    <div className="body">
      <div className="body-container-1">
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
      </div>
      <div className="body-container-2">
        <h1>Latest Articles</h1>
        <div className="card-container">
          <div className="card">
            <img
              src="https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1694390400&Signature=h9IQMg-rO~jz6JuUtRybUxJfXS7tt5AC6Vldu1akswjflecMi6ZC4cXDty3VqkKDJHZWSjFZB5gLXHGJlaaANhQM-ccJM1SJSr~wj7oq-gBG6hNjjthRhF7KuMLdehwocSpcrn~lTbEhp3U8kJ3nUfGGV45MOPpRsyJweJtZ4fLlPUN6Ome5a2tbA8KFVeV8NK6cpUVtT-6KnWRlnktWzyuImdFQDy4ucKDyjltbPOCOm0oRPMYgqnIvMUagCM2J72aXKXPeobHHb~uIMgzYU8vmEwIepYvaZqhpoXwUzTUzoy2NCbv8AN8qdmobeOs8Efe5vcAuQSQ-Ukk5z7lFxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="tomato"
            />
            <h2>Grilled Tomatoes at Home</h2>
            <p>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img
              src="https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1694390400&Signature=h9IQMg-rO~jz6JuUtRybUxJfXS7tt5AC6Vldu1akswjflecMi6ZC4cXDty3VqkKDJHZWSjFZB5gLXHGJlaaANhQM-ccJM1SJSr~wj7oq-gBG6hNjjthRhF7KuMLdehwocSpcrn~lTbEhp3U8kJ3nUfGGV45MOPpRsyJweJtZ4fLlPUN6Ome5a2tbA8KFVeV8NK6cpUVtT-6KnWRlnktWzyuImdFQDy4ucKDyjltbPOCOm0oRPMYgqnIvMUagCM2J72aXKXPeobHHb~uIMgzYU8vmEwIepYvaZqhpoXwUzTUzoy2NCbv8AN8qdmobeOs8Efe5vcAuQSQ-Ukk5z7lFxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="tomato"
            />
            <h2>Grilled Tomatoes at Home</h2>
            <p>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button>Read More</button>
          </div>
          <div className="card">
            <img
              src="https://s3-alpha-sig.figma.com/img/47d5/04a0/5c72c6b4f096bbbec0680ab784a5dcef?Expires=1694390400&Signature=h9IQMg-rO~jz6JuUtRybUxJfXS7tt5AC6Vldu1akswjflecMi6ZC4cXDty3VqkKDJHZWSjFZB5gLXHGJlaaANhQM-ccJM1SJSr~wj7oq-gBG6hNjjthRhF7KuMLdehwocSpcrn~lTbEhp3U8kJ3nUfGGV45MOPpRsyJweJtZ4fLlPUN6Ome5a2tbA8KFVeV8NK6cpUVtT-6KnWRlnktWzyuImdFQDy4ucKDyjltbPOCOm0oRPMYgqnIvMUagCM2J72aXKXPeobHHb~uIMgzYU8vmEwIepYvaZqhpoXwUzTUzoy2NCbv8AN8qdmobeOs8Efe5vcAuQSQ-Ukk5z7lFxQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="tomato"
            />
            <h2>Grilled Tomatoes at Home</h2>
            <p>
              PLorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard...
            </p>
            <button>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
