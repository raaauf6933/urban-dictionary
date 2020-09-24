import React, { Component } from "react";

import Logo from "../assets/img/urban.png";
import Body from "./Body";
import { Empty } from "antd";

class Header extends Component {
  constructor(props) {
    super(props);
    this.getDefine = this.getDefine.bind(this);

    this.state = {
      search: "",
      num: 1,
      query: "rauf",
      show: false,
      define: [],
    };
  }

  componentDidMount = () => {
    this.getDefine();
  };

  getDefine = async () => {
    var unirest = require("unirest");
    await unirest
      .get("https://mashape-community-urban-dictionary.p.rapidapi.com/define")
      .query({ term: this.state.query })
      .headers({
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "9196cfb95cmsh64bb4272c1f6e0bp1aa2bejsnb01c091dff35",
        useQueryString: true,
      })
      .end((res) => {
        this.setState({
          define: res.body,
          show: true,
        });
        console.log(this.state.define.list);
      });
  };

  result = () => {
    const res = this.state.define;
    const len = res.length;
    if (
      Object.keys(this.state.define.list).length === 0 ||
      this.state.define === undefined ||
      this.state.define.length === 0
    ) {
      return false;
    } else {
      return true;
    }
  };
  onChangeInput = (e) => {
    this.setState({
      search: e.target.value,
    });

    /*
    var unirest = require("unirest");
    unirest
      .get("https://mashape-community-urban-dictionary.p.rapidapi.com/define")
      .query({ term: e.target.value })
      .headers({
        "x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
        "x-rapidapi-key": "9196cfb95cmsh64bb4272c1f6e0bp1aa2bejsnb01c091dff35",
        useQueryString: true,
      })
      .end((res) => {
        this.setState({
          define: res.body,
          showResult: true,
        });
      });
 */
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState(
      {
        query: this.state.search,
        search: "",
      },
      () => {
        this.getDefine();
      }
    );
  };
  render() {
    return (
      <React.StrictMode>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5">
                <img
                  src={Logo}
                  className="img-fluid rounded mx-auto d-block"
                  alt="..."
                ></img>
              </div>
              <div className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 mx-auto">
                <form onSubmit={this.onSubmit}>
                  <div className="form__group field mx-auto">
                    <input
                      type="input"
                      className="form__field"
                      placeholder="search"
                      name="search"
                      id="search"
                      required
                      autoComplete="off"
                      onChange={this.onChangeInput}
                    ></input>
                    <label className="form__label">Type any word</label>
                    <div className="form__group field ml-auto mr-auto mb-auto">
                      <button type="submit" className="btn btn-primary w-100">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {this.state.show ? (
          this.result() ? (
            this.state.define.list.map((define) => (
              <Body
                key={define.defid}
                title={define.word}
                definition={define.definition}
                example={define.example}
                author={define.author}
                thumbsup={define.thumbs_up}
                thumbsdown={define.thumbs_down}
                permalink={define.permalink}
              />
            ))
          ) : (
            <div className="d-flex justify-content-center">
              <h1>Not Found</h1>
            </div>
          )
        ) : (
          <div className="d-flex justify-content-center">
            <h1>Please Wait</h1>
          </div>
        )}
      </React.StrictMode>
    );
  }
}

export default Header;
