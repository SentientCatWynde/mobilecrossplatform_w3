import { IonApp, IonPage, IonHeader, IonFooter, IonIcon,
    IonToolbar,  IonGrid, IonRow, IonCol, IonButton,
    IonContent, IonItem, IonLabel, IonInput, IonAlert
   } from '@ionic/react';

import { useRef, useState } from 'react';
import InputControl from '../components/InputControl';
import { BmiControls } from '../components/BmiControls';
import BmiResults from '../components/BmiResults';
import './common.css';
import { arrowBack } from 'ionicons/icons';

const BmiCalc: React.FC = () => {
    const heightInputRef = useRef<HTMLIonInputElement>(null);
    const weightInputRef = useRef<HTMLIonInputElement>(null);
  
    const [ show, setShow ] = useState<Boolean>(false);
    const [ error, setError ] = useState<string>();
    const [ calculatedBMI, setCalculatedBMI ] = useState<number>(0);
    const [ bmiCategory, setBMICategory ] = useState<String>('BMI Category');
    const [ measurementUnit, setMeasUnit ] = useState<'cmkg' | 'ftlbs'>('cmkg');  

    var first : Boolean = false;
  
    const unparsing = (unparse: String) => {
      return unparse.split(' ')[0];
    };
  
    const calculateBMI = () => {
      const weight = weightInputRef.current!.value;
      const height = heightInputRef.current!.value;
      // console.log(weight, height); // Cannot read when there's a cm/kg behind the input
      var unparse: String;
      var netWeight, netHeight: number;
      var meow : Boolean = true;
      var bmi : number = 0;
      var bmiCat : String = 'BMI Category';
      first = true;
      
    
      if(!weight || !height || +weight <= 0 || +height <= 0 ) {
        setError('Please enter a valid (non-negative) input number');  
        return;
      }
  
      unparse = height.toString();
      // console.log(unparsing(unparse));
      netHeight = parseFloat(unparsing(unparse));
      unparse = weight.toString();
      // console.log(unparsing(unparse));
      netWeight = parseFloat(unparsing(unparse));
  
      if(!netWeight || !netHeight || +netWeight <= 0 || +netHeight <= 0 ) {
        setError('Please enter a valid (non-negative) input number');  
        return;
      }
  
      if (measurementUnit === 'cmkg'){
        bmi = +netWeight / ( ( +netHeight / 100 ) * ( +netHeight / 100 ) );
        // console.log("meow");
        if(bmi < 18.5){
          bmiCat = 'Underweight';
        }else if(bmi < 25){
          bmiCat = 'Normal || Healthy';
        }else if(bmi < 30){
          bmiCat = 'Overweight';
        }else if(bmi > 30){
          bmiCat = "Obese";
        }
      } else {
        netWeight = netWeight / 2.205;
        netHeight = netHeight * 30.48;
        bmi = +netWeight / ( ( +netHeight / 100 ) * ( +netHeight / 100 ) );
      
        if(bmi < 18.5){
          bmiCat = 'Underweight';
        }else if(bmi < 25){
          bmiCat = 'Normal || Healthy';
        }else if(bmi < 30){
          bmiCat = 'Overweight';
        }else if(bmi > 30){
          bmiCat = "Obese";
        }
      }
      console.log(bmi);
      if ( !bmi || +bmi < 0) return;
      
      setCalculatedBMI(bmi);
      setBMICategory(bmiCat);
      // showBMIVal(); showBMICat();
      setShow(meow);
      // console.log(bmi);
    };
  
   /*  
    const showBMIVal = () => {
      return (<p>BMI Value: {calculatedBMI}</p>);
    }
  
    const showBMICat = () => {
      return (<h1>{bmiCategory}</h1>);
    } 
  */
    
    const reset = () => {
      weightInputRef.current!.value = '';
      heightInputRef.current!.value = '';
      var meow : Boolean = false; 
      first = false;
      var defaultBMIVal : number = 0;
      var defaultBMICategory : String = 'BMI Category';
  
      setShow(meow);
      setCalculatedBMI(defaultBMIVal);
      setBMICategory(defaultBMICategory);
    };
  
    const clearError = () => { setError(''); };
  
    const selectMeasUnitHandler = (selectedValue: 'cmkg' | 'ftlbs') => {
      setMeasUnit(selectedValue);
    };
  
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
      <IonPage>
        <IonHeader >
          <IonToolbar color = 'primary' >
          <IonButton routerLink = '/home' class = 'ion-margin' >
          <IonIcon class = 'ion-margin' slot = "start" icon = {arrowBack} ></IonIcon>
          </IonButton>
          <IonLabel class = 'ion-margin-top ion-text-center ion-margin ion-padding-vertical' >
              BMI Calculator
          </IonLabel>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className = "ion-padding" >
          
          {/* Reads src/components/ExploreContainer.tsx */}
          {/* <ExploreContainer /> */}
          <IonGrid>
            <IonRow>
              <IonCol size-sm = '8' offset-sm = '2' size-md = '8' offset-md = '0.5'>
          <IonGrid >
            <IonRow>
              {/* INPUT CONTROL */}
              <IonCol>
                <InputControl selectedValue = {measurementUnit} onSelectedValue = {selectMeasUnitHandler} onReset = {reset} ></InputControl>
              </IonCol>
            </IonRow>
            <IonRow class = 'ion-margin-horizontal' >
              <IonCol>
                <IonItem>
                  <IonLabel color = 'light' position= "floating" >
                    Input Body Height [{measurementUnit === 'cmkg' ? ' cm ' : ' feet | in decimal '}]
                  </IonLabel>
        {/* INPUT HEIGHT OF USER TO CHECK FOR BMI */}
                  <IonInput color = 'light' ref = {heightInputRef} ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
            <IonRow class = 'ion-margin-horizontal' >
              <IonCol>
                <IonItem>
                  <IonLabel color = 'light' position= "floating" >
                    Input Body Weight [{measurementUnit === 'cmkg' ? ' Kg ' : ' lbs  '}]
                  </IonLabel>
        {/* INPUT WEIGHT OF USER TO CHECK FOR BMI */}
                  <IonInput color = 'light' ref = {weightInputRef} ></IonInput>
                </IonItem>
              </IonCol>
            </IonRow>
        {/* CALLS THE BUTTONS FROM ./COMPONENTS */}
            <BmiControls  onCalculate = {calculateBMI} onReset = {reset} ></BmiControls>
            <IonRow>
              <IonCol></IonCol>
              <IonCol>
        {/*  CALLS THE CALLING CARD THAT SHOWS THE RESULTS */}
                {show &&  
                  <BmiResults bmiVal = {calculatedBMI} bmiCat = {bmiCategory} first = {first} />
                  // <BmiResults></BmiResults>
                 /*  <IonCard class = 'ion-text-center'>
                    <IonCardContent>
                    <p>BMI Value: {calculatedBMI}</p>
                    <h1>{bmiCategory}</h1>
                    </IonCardContent>
                    
                  </IonCard> */
                }
              </IonCol>
              <IonCol></IonCol>
            </IonRow>
          </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
          
        </IonContent>
        {/* Changes to Footer, 3rd and 4th commit, test if sent */}
        <IonFooter >
          <IonToolbar class = 'ion-text-sm-center ion-padding-horizontal'>
            Kalkulator BMI,  LAB Week 2 
          </IonToolbar>
        </IonFooter>
      </IonPage> 
    </IonApp>
    </>
    );
};

export default BmiCalc;