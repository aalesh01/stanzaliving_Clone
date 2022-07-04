import React from "react";
import "./homepage.css";
import { Link } from "react-router-dom";
import StanzaSpeak from "./StanzaSpeak";

const Homepage = () => {
  const [cities, setCities] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      await fetch(`http://localhost:8080/allCities`)
        .then((res) => res.json())
        .then((res) => {
          setCities(res);
          console.log(res[1].image);
        });
    };
    getData();
  }, []);
  return (
    <div>
      <div id="container">
        <div id="left">
          <h1>SAY HELLO</h1>
          <h1>TO YOUR</h1>
          <h1 style={{ color: "teal" }}>SECOND HOME</h1>
          <p>
            A new city can sometimes feel too new, right? New people, new
            streets, even new languages. In times like these, wouldn’t it be
            nice to have a place to stay that feels like home?
          </p>
          <div id="number">
            <div className="one">
              <div style={{ color: "teal" }}>
                <h1>22+</h1>
              </div>
              <div>CITIES</div>
            </div>
            <div className="two">
              <div style={{ color: "teal" }}>
                <h1>450+</h1>
              </div>
              <div>RESIDENCES</div>
            </div>
            <div className="three">
              <div style={{ color: "teal" }}>
                <h1>70,000+</h1>
              </div>
              <div>BEDS</div>
            </div>
          </div>
          <br />
          <input
            type="search"
            placeholder="Search for your second home near..."
            id="search"
          />
          <p>Popular Searches:Bannerghatta RoadBellandurBTM Layout</p>
        </div>
        <div id="right">
          <img
            src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_650,h_630/v1581672037/about-image-desktop.png"
            alt=""
          />
        </div>
      </div>
      <div id="container-two">
        <h1>A PLACE THAT'S NOT OPEN FOR ALL</h1>
        <p>
          Yeah, you read it right. In one particular case, we have a strict
          no-entry policy. And it's for the coronavirus. Ever since the news
          broke, we have implemented our best in class ‘COVID-19 Combat-ready
          Framework’ to protect our residents.
        </p>
        <hr />
        <div id="box">
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1588756570/NewWebsite/SANITISATION.png"
              alt=""
            />
            <p>Residences Sanitisation</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1588755892/NewWebsite/THERMAL_MONITORING.png"
              alt=""
            />
            <p>Thermal Monitorin at Entry/Exit</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1588755867/NewWebsite/TRAVEL_HISTORY.png"
              alt=""
            />
            <p>Medical and Travel History</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1589121024/NewWebsite/ICONS_ROOM_FEATURES_03_Storage_Space_2x.png"
              alt=""
            />
            <p>24x7 Quick Response Teams</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1588756495/NewWebsite/DISINFECTING.png"
              alt=""
            />
            <p>Daily Disinfecting High Touch Areas</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1588756691/NewWebsite/DISPENSER.png"
              alt=""
            />
            <p>Sanitisers Placed at Multiple Areas</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1588757309/NewWebsite/contactless_food.png"
              alt=""
            />
            <p>No-Touch Dining Facility</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1589121303/NewWebsite/ICONS-WHO_2x.png"
              alt=""
            />
            <p>Training As per WHO norms</p>
          </div>
          <div className="four">
            <img
              src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1589121144/NewWebsite/Covid_Icons-Frontline_Ecosystem-01_Mandatory_PPE_for_Staff_2x.png"
              alt=""
            />
            <p>Mandatory PPE for Staff</p>
          </div>
        </div>
        <hr />
        <h2>
          <Link to="">KNOW MORE ...</Link>
        </h2>
      </div>

      <div className="allCities">
        <h1 className="homepageHeading">SO WHERE IS THIS PLACE?</h1>
        <p>
          Let’s take you there. It’s a place that has opened its doors in 22+
          cities and counting, for young, passionate, energetic students and
          working professionals like you to stay and make a home together. Come
          and belong to this ever-growing family.
        </p>
        <div className="cityCards">
          {cities.map((ele) => (
            <div>
              <img className="cityLogo" src={ele.image} alt="" />
              <p>{ele.title}</p>
              <img src="" alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="bedDiv">
        <div>
          <img
            src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1581672162/bed-desktop.png"
            alt=""
          />
        </div>
        <div>
          <h1>MAKE ROOM FOR COMFORT</h1>
          <p>
            Your room will have all the furniture and facilities you need for a
            comfortable stay. Because your chair shouldn’t multitask as a
            clothes rack. And your bed is not meant to be a study table.
          </p>
          <div className="roomFeatureIcons">
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/v1582273698/NewWebsite/services/bed-with-mattress.png"
                alt=""
              />
              <p>Bed with Mattress</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197397/NewWebsite/services/cupboard.png"
                alt=""
              />
              <p>Spacious Cupboard</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1583257057/NewWebsite/services/storage-space.png"
                alt=""
              />
              <p>Storage Space with Bed</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197400/NewWebsite/services/study-table.png"
                alt=""
              />
              <p>Study Table</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197398/NewWebsite/services/curtains.png"
                alt=""
              />
              <p>Bright Curtains</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bedDiv">
        <div>
          <h1>AN UNCOMMON COMMON AREA</h1>
          <p>
            From breaking a sweat at the fitness zone to breaking the record for
            most time spent on a bean bag - it’s your common area and whatever
            you need, it’s got you sorted.
          </p>
          <div className="roomFeatureIcons">
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197398/NewWebsite/services/dining-area.png"
                alt=""
              />
              <p>Bed with Planned Dining Area</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197399/NewWebsite/services/lounge-zone.png"
                alt=""
              />
              <p>Spacious Flat Screen Television</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197398/NewWebsite/services/gaming-corner.png"
                alt=""
              />
              <p>Gaming Corner</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197398/NewWebsite/services/fitness-zone.png"
                alt=""
              />
              <p>Workout & Fitness Zone</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/v1582521233/NewWebsite/services/microwave.png"
                alt=""
              />
              <p>Appliances for Common use</p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/stanza-living/image/upload/w_1122,f_auto,q_auto/v1581672461/experience-desktop.png"
            alt=""
          />
        </div>
      </div>
      <div className="bedDiv">
        <div>
          <img
            style={{ height: "90%", width: "90%" }}
            src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1581672881/vas-desktop.png"
            alt=""
          />
        </div>
        <div>
          <h1>AT YOUR SERVICE</h1>
          <p>
            No excuse for postponing laundry day. No waiting in the sun for an
            auto. Doorstep laundry, transport and other essential services are
            just a tap away.
          </p>
          <div className="roomFeatureIcons">
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197399/NewWebsite/services/hot-meals.png"
                alt=""
              />
              <p>Delicious Meals</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197397/NewWebsite/services/booster-packs.png"
                alt=""
              />
              <p>Internet Booster Packs</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1583257057/NewWebsite/services/storage-space.png"
                alt=""
              />
              <p>Storage Space with Bed</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197400/NewWebsite/services/study-table.png"
                alt=""
              />
              <p>Study Table</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582197398/NewWebsite/services/curtains.png"
                alt=""
              />
              <p>Bright Curtains</p>
            </div>
          </div>
        </div>
      </div>
      <StanzaSpeak />
      <div className="foot">
        <img src="/foot.png" alt="" />
      </div>
    </div>
  );
};

export default Homepage;
