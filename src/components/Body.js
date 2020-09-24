import React, { Component } from "react";
import { ThumbsUp, ThumbsDown } from "react-feather";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      define: [],
    };
  }

  render() {
    return (
      <section>
        <div className="container mt-5">
          <blockquote className="blockquote m-5">
            <div className="row">
              <div className="col-md-12 col-lg-12 ">
                <div className="content">
                  {" "}
                  <h6 className="text-info">Defenition</h6>
                  <p className="title">{this.props.title}</p>
                  <p className="text-definition">{this.props.definition}</p>
                  <p className="text-example">{this.props.example}</p>
                  <div className="author">By: {this.props.author}</div>
                  <div className="thumbs">
                    <span className="badge badge-primary mr-1">
                      <ThumbsUp size={20} className="m-1" />{" "}
                      {this.props.thumbsup}
                    </span>
                    <span className="badge badge-danger">
                      <ThumbsDown size={20} className="m-1" />{" "}
                      {this.props.thumbsdown}
                    </span>
                  </div>
                  <div>
                    <h5 className="m-4">
                      Source:{" "}
                      <a href={this.props.permalink}>UrbanDictionary.com</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
        </div>
      </section>
    );
  }
}

export default Body;
