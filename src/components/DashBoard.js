import React from "react";

export const DashBoardCard = (props) => {
    return(
        <React.Fragment>
            <div className="card size-adjust" style={{marginLeft: props.marginLeft}} >
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.vehicleName}
                        <div>
                            UID: {props.uid}
                        </div>
                        <div>
                            Location: {props.locationLat} , {props.locationLong}
                        </div>
                        <div>
                            Engine Oil Temp: {props.engOil}
                        </div>
                    </p>
                </div>
            </div>
        </React.Fragment>
    );
}