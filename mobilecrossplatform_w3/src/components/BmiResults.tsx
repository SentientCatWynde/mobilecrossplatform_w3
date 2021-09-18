import React from 'react';
import './comp-common.css';
import { 
    IonCard, IonCardContent
    } from '@ionic/react';

const BmiResults: React.FC<{bmiVal: number, bmiCat: String}> = props => {

    return (
        <>
        {
            props.bmiCat === 'Normal' ? (
                <IonCard id = 'result' class = 'ion-card-success ion-text-center'>
                    <IonCardContent>
                        <p>  {props.bmiVal} </p>
                        <h3> {props.bmiCat} </h3>
                    </IonCardContent>
                </IonCard>   
            ) : (props.bmiCat === 'Obese') ? (
                <IonCard id = 'result' class = 'ion-card-danger ion-text-center'>
                    <IonCardContent>
                        <p>  {props.bmiVal} </p>
                        <h3> {props.bmiCat} </h3>
                    </IonCardContent>
                </IonCard>  
            ) : (
                <IonCard id = 'result' class = 'ion-card-warning ion-text-center'>
                    <IonCardContent>
                        <p>  {props.bmiVal} </p>
                        <h3> {props.bmiCat} </h3>
                    </IonCardContent>
                </IonCard>  
            )
        }
        
        </>
        
    );
};

export default BmiResults;