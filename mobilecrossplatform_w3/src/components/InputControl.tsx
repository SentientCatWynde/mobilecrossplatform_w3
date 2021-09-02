import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import React from 'react';

const InputControl: React.FC<{
    selectedValue: 'cmkg' | 'ftlbs'; onReset: () => void;
    onSelectedValue: (value: "cmkg" | "ftlbs") => void
}> = props => { 
    const inputChangeHandler = (event:CustomEvent) => {
        props.onSelectedValue(event.detail.value);
    }

    return (
        <IonSegment value = {props.selectedValue} onIonChange = {inputChangeHandler} >
            <IonSegmentButton value = "cmkg" onClick = {props.onReset} >
                <IonLabel>
                    cm | Kg
                </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value = "ftlbs" onClick = {props.onReset}>
                <IonLabel>
                    feet | lbs
                </IonLabel>
            </IonSegmentButton>
        </IonSegment>
    );
};

export default InputControl;