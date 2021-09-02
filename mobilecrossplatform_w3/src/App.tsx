// import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonPage, IonHeader, IonFooter,
  IonToolbar, IonTitle, IonGrid, IonRow, IonCol,
  IonContent, IonItem, IonLabel, IonInput, IonAlert
 } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router'; // IonRouterOutlet is also deleted from @ionic/react
// import Home from './pages/Home';
import { BmiControls } from './components/BmiControls';
import BmiResults from './components/BmiResults';

import { useRef, useState } from 'react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import InputControl from './components/InputControl';


const App: React.FC = () => {
  const heightInputRef = useRef<HTMLIonInputElement>(null);
  const weightInputRef = useRef<HTMLIonInputElement>(null);

  const [ show, setShow ] = useState<Boolean>(false);
  const [ error, setError ] = useState<string>();
  const [ calculatedBMI, setCalculatedBMI ] = useState<number>(0);
  const [ bmiCategory, setBMICategory ] = useState<String>('BMI Category');
  const [ measurementUnit, setMeasUnit ] = useState<'cmkg' | 'ftlbs'>('cmkg');  

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
        <IonToolbar color = 'warning' >
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className = "ion-padding" >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">BMI Calc</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Reads src/components/ExploreContainer.tsx */}
        {/* <ExploreContainer /> */}
        <IonGrid >
          <IonRow>
            {/* INPUT CONTROL */}
            <IonCol>
              <InputControl selectedValue = {measurementUnit} onSelectedValue = {selectMeasUnitHandler} onReset = {reset} ></InputControl>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position= "floating" >
                  Input Body Height [{measurementUnit === 'cmkg' ? ' cm ' : ' feet | in decimal '}]
                </IonLabel>
      {/* INPUT HEIGHT OF USER TO CHECK FOR BMI */}
                <IonInput ref = {heightInputRef} ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position= "floating" >
                  Input Body Weight [{measurementUnit === 'cmkg' ? ' Kg ' : ' lbs  | in decimal '}]
                </IonLabel>
      {/* INPUT WEIGHT OF USER TO CHECK FOR BMI */}
                <IonInput  ref = {weightInputRef} ></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
      {/* CALLS THE BUTTONS FROM ./COMPONENTS */}
          <BmiControls onCalculate = {calculateBMI} onReset = {reset} ></BmiControls>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
      {/*  CALLS THE CALLING CARD THAT SHOWS THE RESULTS */}
              {show &&  
                <BmiResults bmiVal = {calculatedBMI} bmiCat = {bmiCategory} />
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
      </IonContent>
      {/* Changes to Footer, 3rd and 4th commit, test if sent */}
      <IonFooter>
        <IonToolbar color = 'warning' class = 'ion-text-sm-center ion-padding-horizontal'>
          Kalkulator BMI,  LAB Week 2 
        </IonToolbar>
      </IonFooter>
    </IonPage> 
  </IonApp>
  </>
  );
};

export default App;
