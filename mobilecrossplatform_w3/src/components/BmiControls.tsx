import React from 'react';
import { 
    IonIcon, IonRow, 
    IonCol, IonButton
    } from '@ionic/react';

import {
    calculator, refreshCircle
    } from 'ionicons/icons';

export const BmiControls: React.FC<{onCalculate: () => void; onReset: () => void}> = props => {
    return (
        <IonRow  className = "ion-text-center ion-margin" >
            
            <IonCol size = '12' size-md = '6'  >
      {/* Calculate your inputted BMI */}
              <IonButton expand = 'block' color = 'success' onClick = {props.onCalculate}  >
                Calculate
                <IonIcon class = 'icon-margin' slot = "start" icon = {calculator} ></IonIcon>
              </IonButton>
            </IonCol>
            <IonCol size = '12' size-md = '6' >
      {/* Reset Inputted BMI */}
              <IonButton fill = 'clear' color = 'medium' onClick = {props.onReset}  >
                Reset
                <IonIcon slot = "start" icon = {refreshCircle} ></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
    );
};