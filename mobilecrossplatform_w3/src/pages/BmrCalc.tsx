import { IonApp, IonHeader, IonToolbar, IonContent, 
    IonGrid, IonRow, IonCol, IonFooter, IonIcon,
    IonItem, IonLabel, IonInput, IonButton, IonAlert,
    IonList, IonRadio, IonRadioGroup, IonListHeader
} from '@ionic/react';

import { useRef, useState } from 'react';
// import { IonReactRouter } from '@ionic/react-router'; // IonRouterOutlet is also deleted from @ionic/react

import InputControl from '../components/InputControl';
import BmrResults from '../components/BmrResults';
import { BmiControls } from '../components/BmiControls';
import { arrowBack } from 'ionicons/icons';

const BmrCalc: React.FC = () => {
    const [ measurementUnit, setMeasUnit ] = useState<'cmkg' | 'ftlbs'>('cmkg');  
    const ageInputRef = useRef<HTMLIonInputElement>(null);      // age
    const heightInputRef = useRef<HTMLIonInputElement>(null);   // height
    const weightInputRef = useRef<HTMLIonInputElement>(null);   // weight
    const [ selected, setSelected ] = useState<string>('Male');   // gender
    const [ calculatedBMR, setCalculatedBMR ] = useState<number>(0);
    const [ show, setShow ] = useState<Boolean>(false);
    const [ error, setError ] = useState<string>();

    const selectMeasUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
        setMeasUnit(selectedValue);
    };

    const unparsing = (unparse: String) => {
        return unparse.split(' ')[0];
    };

    const calculateBMR = () => {
        console.log("meow");
        setShow(true);
        const age = ageInputRef.current!.value ;
        const height = heightInputRef.current!.value ;
        const weight = weightInputRef.current!.value ;
        var bmr: number = 0;
        var meow: number = 0;
        var unparse: String;
        var nya: number = 0;
        var meong: number = 0;

        if(!weight || !height || !age ) {
            setError('Please enter a valid (non-negative) input number');  
            return;
        }

        unparse = height.toString();
        meow = parseFloat(unparsing(unparse));
        unparse = weight.toString();
        nya = parseFloat(unparsing(unparse));
        unparse = age.toString();
        meong = parseFloat(unparsing(unparse));

        /* Laki-laki: 66 + (13,7 x berat badan dalam kg) + (5 x tinggi badan dalam cm) - (6,8 x usia)
        Perempuan: 655 + (9,6 x berat badan dalam kg) + (1,8 x tinggi badan dalam cm) - (4,7 x usia) */
        
        if (measurementUnit === 'cmkg'){
            if (selected === 'Male'){
                bmr = 66 + (13.7 * nya) + (5 * meow) - (meong * 6.8);
            } else {
                bmr = 65 + (9.6 * nya) + (1.8 * meow) - (meong * 4.7);
            }
        } else {
            nya = nya / 2.205;
            meow = meow * 30.48;
            if (selected === 'Male'){
                bmr = 66 + (13.7 * nya) + (5 * meow) - (meong * 6.8);
            } else {
                bmr = 65 + (9.6 * nya) + (1.8 * meow) - (meong * 4.7);
            }
        }

        setCalculatedBMR(bmr);
    }

    const clearError = () => { setError(''); };

    const reset = () => {
        ageInputRef.current!.value = '';
        heightInputRef.current!.value = '';
        weightInputRef.current!.value = '';
        setShow(false);
        console.log("reset!");
    }

    return (
        <>
        <IonAlert 
            isOpen = {!!error} 
            message = {error}
            buttons = {[
                {text: "Ok!", handler: clearError}
            ]}
        />
        <IonApp>
            <IonHeader>
                <IonToolbar  color = 'warning' >
                    <IonButton routerLink = '/home' class = 'ion-margin' color = 'warning' >
                    <IonIcon class = 'ion-margin' slot = "start" icon = {arrowBack} ></IonIcon>
                    </IonButton>
                    <IonLabel class = 'ion-margin-top ion-text-center ion-margin ion-padding-vertical' >
                        BMR Calculator
                    </IonLabel>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                
                <IonGrid>
                    <IonRow>
                    {/* INPUT CONTROL */}
                        <IonCol>
                            <InputControl 
                            selectedValue = {measurementUnit} 
                            onSelectedValue = {selectMeasUnitHandler} 
                            onReset = {reset}>
                            </InputControl>
                        </IonCol>
                    </IonRow>
                    <div className = 'ion-margin-horizontal'>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonLabel position = 'floating'>
                                    Age
                                </IonLabel>
                                <IonInput ref = {ageInputRef}></IonInput>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                {/* CHOICE BUTTON, GENDER */}
                        <IonCol class = 'ion-margin-horizontal'>
                            <IonList>
                                <IonRadioGroup onIonChange={e => setSelected(e.detail.value)}>
                                    <IonListHeader>
                                        <IonLabel>Gender</IonLabel>
                                    </IonListHeader>

                                    <IonItem>
                                        <IonLabel>Male</IonLabel>
                                    <IonRadio slot="start" value="Male" />
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Female</IonLabel>
                                    <IonRadio slot="start" value="Female" />
                                    </IonItem>
                                </IonRadioGroup>
                            {/* <IonItemDivider>Your Selection</IonItemDivider>
                            <IonItem>{selected ?? '(none selected'}</IonItem> */}
                            </IonList>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol>
                        <IonItem>
                            <IonLabel position = 'floating'>
                                Input Body Height [{measurementUnit === 'cmkg' ? ' cm ' : ' feet | in decimal '}]
                            </IonLabel>
                            <IonInput ref = {heightInputRef} ></IonInput>
                        </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow >
                        <IonCol>
                        <IonItem>
                            <IonLabel position = 'floating'>
                                Input Body Weight [{measurementUnit === 'cmkg' ? ' Kg ' : ' lbs '}]
                            </IonLabel>
                            <IonInput ref = {weightInputRef} ></IonInput>
                        </IonItem>
                        </IonCol>
                    </IonRow>
                    <BmiControls onCalculate = {calculateBMR} onReset = {reset} ></BmiControls>
                    </div>
                    {show && <BmrResults bmrVal = {calculatedBMR}/>}
                    {/* BMR RESULTS */}
                </IonGrid>
            </IonContent>
            <IonFooter>
            <IonToolbar color = 'warning' class = 'ion-text-sm-center ion-padding-horizontal'>
                Kalkulator BMI,  LAB Week 2 
            </IonToolbar>
            </IonFooter>
        </IonApp>
        </>
    );
}

export default BmrCalc;