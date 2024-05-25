import React from 'react';
import {IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export const Details = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot={'start'}>
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className={'ion-padding'}>UI goes here</IonContent>
        </IonPage>
    );
};
