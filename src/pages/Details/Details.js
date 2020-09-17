import React, { useState, useEffect } from "react";
import "./Details.style.css";
import { facilities } from "../../FakeData/Places";
import DetailsComponent from "../../components/DetailsComponent/DetailsComponent";
import { useParams, useHistory } from "react-router-dom";
import { places } from "../../FakeData/Places";
import MapCompo from "../../components/Map/MapCompo";

function Details() {
  const id = useParams().placeId;
  const place = places[id];
  return (
    <div className="details d-flex justify-content-center">
      <div className="container con">
        <div className="row flex-column">
          <p className="m-0">252 stays sep 10-13 3 guests</p>
          <h2 className="m-0">Stay in {place?.name}</h2>
        </div>

        <div className="row my-3">
          <div className="col-md-6">
            {console.log(facilities)}
            {facilities.map((facility) => (
              <DetailsComponent key={facility.id} facility={facility} />
            ))}
          </div>
          <div className="col-md-6">
            <MapCompo place={place} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
