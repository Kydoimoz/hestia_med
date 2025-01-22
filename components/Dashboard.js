
import * as React from "react";
import classes from "./Dashboard.module.css";
export default function DashBoard(){
    return(
        <div className={classes.main}>
            <div className={classes.inner__main}>
                <div className={classes.manage__accounts}>
                    <h3 className={classes.heading}>Verwalten Sie bzw. Fügen Sie andere Mitarbeiter hinzu!</h3>
                    <div className={classes.content}>
                        <span className={classes.inner}>

                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}