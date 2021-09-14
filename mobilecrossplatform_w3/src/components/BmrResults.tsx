import { IonCard, IonCardContent, IonLabel, IonGrid, IonRow, IonCol } from "@ionic/react";

const BmrResults: React.FC<{bmrVal:number}> = props => {
    return (
        <IonCard class = 'ion-text-center'>
            <IonCardContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                        <IonLabel class = 'ion-text-center'>
                            BMR = {props.bmrVal} Calories/day 
                        </IonLabel>
                        </IonCol>
                    </IonRow>
                    {/* Sedentary: little or no exercise: BMR x 1,2
                        Exercise 1-3 times/week: BMR x 1,375
                        Exercise 4-5 times/week: BMR x 1,55
                        Daily exercise or intense exercise 3-4 times/week: BMR x 1,725
                        Intense exercise 6-7 times/week: BMR x 1,9
                    */}
                    <IonRow>
                        <IonCol>
                        <IonLabel class = 'ion-text-center'>
                            Daily Calorie needs based on faculty level
                        </IonLabel>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class = 'ion-text-left'>
                            <b>Activity Level</b>
                        </IonCol>
                        <IonCol class = 'ion-text-right'>
                            <b>Calorie</b>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class = 'ion-text-left'>
                            Sedentary: little to no exercise
                        </IonCol>
                        <IonCol class = 'ion-text-right'>
                            {props.bmrVal * 1.2}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class = 'ion-text-left'>
                            Exercise 1 - 3 times/week
                        </IonCol>
                        <IonCol class = 'ion-text-right'>
                            {props.bmrVal * 1.375}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class = 'ion-text-left'>
                            Exercise 4 - 5 times/week
                        </IonCol>
                        <IonCol class = 'ion-text-right'>
                            {props.bmrVal * 1.55}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class = 'ion-text-left'>
                            Daily exercise or intense exercise 3 - 4 times/week
                        </IonCol>
                        <IonCol class = 'ion-text-right'>
                            {props.bmrVal * 1.725}
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol class = 'ion-text-left'>
                            Intense exercise 6-7 times/week
                        </IonCol>
                        <IonCol class = 'ion-text-right'>
                            {props.bmrVal * 1.9}
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonCardContent>
        </IonCard>
    );
}

export default BmrResults;