// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import Header from "../components/Header";
// import FooterStreetHockey from "../components/FooterStreetHockey";

// import arrowIcon from "../assets/icons/SVG/Icon-arrow-right.svg";

// export default class StreetHockey extends Component {
//   state = {
//     hockeyList: [],
//   };

//   componentDidMount() {
//     axios
//       .get("http://localhost:5000/street-hockey")
//       .then((response) => {
//         this.setState({
//           hockeyList: response.data,
//         });
//       })
//       .catch((err) => console.log(err));
//   }

//   // removeClick = (id) => {
//   //   axios
//   //     .delete(`http://localhost:5000/street-hockey/${id}`)
//   //     .then(window.location.reload(false))
//   //     .catch((err) => console.log(err));
//   // };

//   // kebabClick = (event) => {
//   //   this.state.hide
//   //     ? this.setState({ hide: false })
//   //     : this.setState({ hide: true });
//   // };

//   // newItemClick = (event) => {
//   //   let newItemObject = document.getElementsByClassName("new-item")[0];
//   //   newItemObject.style.display = "block";
//   // };

//   render() {
//     return (
//       <div>
//         <Header />
//         <div className="hockey-all">
//           <div className="hero-hockey">
//             <div className="hero-hockey__container">
//               <h1 className="hero-hockey__slogan">STREET-HOCKEY</h1>
//               <div className="hero-hockey__desktop">
//                 <h2 className="hero-hockey__description">
//                   Find local pick-up street-hockey games in your area below or
//                   create your own.
//                 </h2>
//               </div>
//             </div>
//           </div>

//           <div className="hockey">
//             <div className="hockey__top-flex">
//               <h1 className="hockey__title">Vancouver, BC:</h1>
//             </div>
//             <div className="hockey__tablet">
//               <label className="hockey__tablet-item">DESCRIPTION</label>
//               <div className="hockey__tablet-stats">
//                 <label className="hockey__tablet-right">DATE</label>
//                 <label className="hockey__tablet-right">TIME</label>
//                 <label className="hockey__tablet-right">LOCATION</label>
//                 {/* <label className="hockey__tablet-right hockey__tablet-spacing">
//                   ADDRESS
//                 </label> */}
//               </div>
//             </div>

//             {this.state.hockeyList.map((hockey) => {
//               return (
//                 <div className="hockey__container" key={hockey.gameId}>
//                   <div className="hockey__flex">
//                     <label className="hockey__game-margin hockey__mobile">
//                       DESCRIPTION
//                     </label>
//                     <div className="hockey__tablet-game">
//                       <Link
//                         key={hockey.gameId}
//                         to={`/street-hockey/${hockey.gameId}`}
//                         className="hockey__game"
//                       >
//                         <p className="hockey__shrink">{hockey.description}</p>
//                       </Link>
//                     </div>
//                     <div className="hockey__tablet-stats">
//                       <label className="hockey__mobile">DATE</label>
//                       <p className="hockey__tablet-right">{hockey.date}</p>
//                       <label className="hockey__mobile">TIME</label>
//                       <p className="hockey__tablet-right">{hockey.time}</p>
//                       <label className="hockey__mobile">LOCATION</label>
//                       <p className="hockey__tablet-right">{hockey.park}</p>
//                       {/* <label className="hockey__mobile">ADDRESS</label>
//                       <p className="hockey__tablet-right arrow">
//                         {hockey.address}
//                       </p> */}
//                     </div>
//                   </div>
//                   <div className="hockey__options">
//                     <Link
//                       key={hockey.gameId}
//                       to={`/street-hockey/${hockey.gameId}`}
//                       className="hockey__game"
//                     >
//                       <img
//                         src={arrowIcon}
//                         alt="Arrow Icon"
//                         // onClick={this.kebabClick}
//                       />
//                     </Link>
//                     {/* {this.state.hide ? (
//                     <div
//                       className="hockey__remove"
//                       onClick={() => this.removeClick(hockey.gameId)}
//                       onMouseOut={this.kebabClick}
//                     >
//                       {" "}
//                       Remove{" "}
//                     </div>
//                   ) : (
//                     ""
//                   )} */}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//         <FooterStreetHockey />
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import FooterStreetHockey from "../components/FooterStreetHockey";

import arrowIcon from "../assets/icons/SVG/Icon-arrow-right.svg";
import CreateNewStreetHockey from "./CreateNewStreetHockey";

export default class StreetHockey extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      hockeyList: [],
      isFormActive: false,
    };
  }

  scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop);

  setFormState = () => {
    this.setState({
      isFormActive: !this.state.isFormActive,
    });
  };

  componentDidMount() {
    axios
      .get("http://localhost:5000/street-hockey")
      .then((response) => {
        this.setState({
          hockeyList: response.data,
        });
      })
      .catch((err) => console.log(err));
  }

  // removeClick = (id) => {
  //   axios
  //     .delete(`http://localhost:5000/street-hockey/${id}`)
  //     .then(window.location.reload(false))
  //     .catch((err) => console.log(err));
  // };

  // kebabClick = (event) => {
  //   this.state.hide
  //     ? this.setState({ hide: false })
  //     : this.setState({ hide: true });
  // };

  // newItemClick = (event) => {
  //   let newItemObject = document.getElementsByClassName("new-item")[0];
  //   newItemObject.style.display = "block";
  // };

  render() {
    return (
      <div>
        <Header />
        <div className="hockey-all">
          {!this.state.isFormActive ? (
            <div className="hero-hockey">
              <div className="hero-hockey__container">
                <h1 className="hero-hockey__slogan">STREET-HOCKEY</h1>
                <div className="hero-hockey__desktop">
                  <h2 className="hero-hockey__description">
                    Find local pick-up street-hockey games in your area below or
                    create your own.
                  </h2>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {!this.state.isFormActive ? (
            <div className="hockey">
              <div className="hockey__top-flex">
                <h1 className="hockey__title">Vancouver, BC:</h1>
              </div>
              <div className="hockey__tablet">
                <label className="hockey__tablet-item">DESCRIPTION</label>
                <div className="hockey__tablet-stats">
                  <label className="hockey__tablet-right">DATE</label>
                  <label className="hockey__tablet-right">TIME</label>
                  <label className="hockey__tablet-right">LOCATION</label>
                  {/* <label className="hockey__tablet-right hockey__tablet-spacing">
                  ADDRESS
                </label> */}
                </div>
              </div>
              {this.state.hockeyList.map((hockey) => {
                return (
                  <div className="hockey__container" key={hockey.gameId}>
                    <div className="hockey__flex">
                      <label className="hockey__game-margin hockey__mobile">
                        DESCRIPTION
                      </label>
                      <div className="hockey__tablet-game">
                        <Link
                          key={hockey.gameId}
                          to={`/street-hockey/${hockey.gameId}`}
                          className="hockey__game"
                        >
                          <p className="hockey__shrink">{hockey.description}</p>
                        </Link>
                      </div>
                      <div className="hockey__tablet-stats">
                        <label className="hockey__mobile">DATE</label>
                        <p className="hockey__tablet-right">
                          {hockey.date}
                          {/* {new Date()} */}
                        </p>
                        <label className="hockey__mobile">TIME</label>
                        <p className="hockey__tablet-right">{hockey.time}</p>
                        <label className="hockey__mobile">LOCATION</label>
                        <p className="hockey__tablet-right">{hockey.park}</p>
                        {/* <label className="hockey__mobile">ADDRESS</label>
                      <p className="hockey__tablet-right arrow">
                        {hockey.address}
                      </p> */}
                      </div>
                    </div>
                    <div className="hockey__options">
                      <Link
                        key={hockey.gameId}
                        to={`/street-hockey/${hockey.gameId}`}
                        className="hockey__game"
                      >
                        <img src={arrowIcon} alt="Arrow Icon" />
                      </Link>
                      {/* {this.state.hide ? (
                    <div
                      className="hockey__remove"
                      onClick={() => this.removeClick(hockey.gameId)}
                      onMouseOut={this.kebabClick}
                    >
                      {" "}
                      Remove{" "}
                    </div>
                  ) : (
                    ""
                  )} */}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
          {/* {this.state.isFormActive ? (
                          <p>Form is Active</p>
                        ) : (
                          <p>Form is not Active</p>
                        )} */}
          {this.state.isFormActive ? (
            <CreateNewStreetHockey ref={this.myRef} />
          ) : (
            ""
          )}
        </div>
        <FooterStreetHockey setFormState={this.setFormState} />
      </div>
    );
  }
}
