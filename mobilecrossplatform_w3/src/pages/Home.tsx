import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Calculators</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = 'ion-padding' fullscreen>
        <IonGrid>
          <IonRow>
            <IonCol>
            <IonTitle size="large"> 00000029584 - Gusti Bagus Bill Isai Gian </IonTitle>
            <IonButton color = 'warning' expand = 'block' routerLink = '/bmi'> BMI Calculator</IonButton>
            <IonButton color = 'warning' expand = 'block' routerLink = '/bmr'> BMR Calculator</IonButton>
            </IonCol>
            <IonCol></IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>
        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
