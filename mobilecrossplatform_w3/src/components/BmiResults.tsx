import React from 'react';
import { 
    IonCard, IonCardContent
    } from '@ionic/react';
// const BmiResults: React.FC = () => {
const BmiResults: React.FC<{bmiVal: number, bmiCat: String}> = props => {
    // bmiValue = bmiVal;

    /* RETURN THE VALUE OF BMI AS CALCBMI AND RUN IT TO THE BMICAT */
    // setCalculatedBMI(props.onShowBMIVal);
    // setBMICategory(props.onShowBMICat);

    return (
        <IonCard class = 'ion-text-center'>
            <IonCardContent>
                <p>  {props.bmiVal} </p>
                <h3> {props.bmiCat} </h3>
            {/* <p>BMI Value: {calculatedBMI}</p> */}
            {/* {props.onShowBMIVal}
            {props.onShowBMICat} */}
            {/* <h1>{bmiCategory}</h1> */}
            </IonCardContent>
        </IonCard>
    );
};

export default BmiResults;