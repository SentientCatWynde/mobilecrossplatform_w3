import React from 'react';
import './comp-common.css';
import { 
    IonCard, IonCardContent
    } from '@ionic/react';

const BmiResults: React.FC<{bmiVal: number, bmiCat: String, first: Boolean}> = props => {
    
    const card = document.getElementById('result');

    /* const refresh = () => { */
        if (props.first){
            console.log(props.first);
            card?.classList.remove('ion-card-warning');
            card?.classList.remove('ion-card-success');
            card?.classList.remove('ion-card-danger');
        }

        if(props.bmiVal < 18.5){
            card?.classList.add('ion-card-warning');
        }else if(props.bmiVal < 25){
            card?.classList.add('ion-card-success');
        }else if(props.bmiVal < 30){
            card?.classList.add('ion-card-warning');
        }else if(props.bmiVal > 30){
            card?.classList.add('ion-card-danger');
        }
    
        
    /* } */

    /* const refresh = () => {
        card?.classList.remove('ion-card-warning');
        card?.classList.remove('ion-card-success');
        card?.classList.remove('ion-card-danger');
    } */
    /* card?.classList.add('ion-card-success'); */
    /* const cardStyles: CSS.Properties = {
        --background = 'grey';
    } */
    /* const colour = card?.style.getPropertyValue('grey'); */

    /* Yellow, SpringGreen, Crimson */
    /* const setColour = () => {
        if(props.bmiVal < 18.5){
            card?.classList.add('ion-card-warning');
        }else if(props.bmiVal < 25){
            card?.classList.add('ion-card-success');
        }else if(props.bmiVal < 30){
            card?.classList.add('ion-card-warning');
        }else if(props.bmiVal > 30){
            card?.classList.add('ion-card-danger');
        }
    } */

    return (
        <>
        <IonCard id = 'result' class = ' ion-text-center'>
            <IonCardContent>
                <p>  {props.bmiVal} </p>
                <h3> {props.bmiCat} </h3>
            </IonCardContent>
        </IonCard>    
        
        </>
        
    );
};

export default BmiResults;