import React from "react";

export default function About(props) {
  return (
    <div className="my-4" id="ajju">
        <div className="my-4" style={{backgroundColor:'blue', height:'5px'}}></div>
      <h2
        style={{
          backgroundColor: props.mode === "dark" ? "#192734" : "white",
          color: props.mode === "dark" ? "white" : "#343a40",
        }}
      >
        About
      </h2>
      <strong
        style={{
          backgroundColor: props.mode === "dark" ? "#192734" : "white",
          color: props.mode === "dark" ? "white" : "#343a40",
        }}
      >
        Welcome to TextUtil, your go-to destination for all your text editing
        needs! Whether you're a writer, a student, or just someone who works
        with text regularly, TextUtil is here to make your life easier. <br />{" "}
        <br /> At TextUtil, we understand the importance of simplicity and
        efficiency when it comes to text manipulation. That's why we've created
        a user-friendly web application using ReactJS that offers a range of
        essential text editing features: 
      </strong>
      <div className="accordion my-4" id="accordionExample">
        <div className="accordion-item ">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
              <strong>Copy:</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
            >
              Easily copy text from our interface with just a click of a button.
              No more hassle with selecting and right-clicking!
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Convert to Uppercase: </strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-body"
            >
              Transform your text to uppercase instantly. Perfect for headings,
              titles, or emphasizing important points.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Convert to Lowercase:</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-body"
            >
              Need your text in lowercase? No problem. With TextUtil, you can
              swiftly convert your text to lowercase format.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <strong>Remove Extra Spaces: </strong>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-body"
            >
              Say goodbye to messy, cluttered text. Our tool efficiently removes
              extra spaces, ensuring your text looks clean and professional.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <strong>Clear Text Area: </strong>
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              style={{
                backgroundColor: props.mode === "dark" ? "#22303c" : "white",
                color: props.mode === "dark" ? "white" : "#343a40",
              }}
              className="accordion-body"
            >
              Start afresh with a single click. Clear the text area effortlessly
              whenever you need a clean slate.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
