import { IonContent, IonHeader, IonPage, IonTitle, IonButton, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
// import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color = 'primary' >
          <IonTitle> Calculators</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = 'ion-padding' fullscreen>
        <IonGrid>
          <IonRow>
          <IonTitle color = 'light' size="large"> 29584 - Gusti Billi </IonTitle>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonButton expand = 'block' routerLink = '/bmi'> BMI Calculator</IonButton>
            <IonButton expand = 'block' routerLink = '/bmr'> BMR Calculator</IonButton>
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
