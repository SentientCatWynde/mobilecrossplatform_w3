import React from 'react';
import { 
    IonIcon, IonRow, 
    IonCol, IonButton
    } from '@ionic/react';

import {
    calculator, refreshOutline
    } from 'ionicons/icons';

export const BmiControls: React.FC<{onCalculate: () => void; onReset: () => void}> = props => {
    return (
        <IonRow  className = "ion-text-center ion-margin" >
            <IonCol></IonCol>
            <IonCol>
      {/* Calculate your inputted BMI */}
              <IonButton onClick = {props.onCalculate} color = 'warning' >
                Count
                <IonIcon class = 'icon-margin' slot = "start" icon = {calculator} ></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol></IonCol>
            <IonCol >
      {/* Reset Inputted BMI */}
              <IonButton onClick = {props.onReset} color = 'warning' >
                Reset
                <IonIcon slot = "start" icon = {refreshOutline} ></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
    );
};