import React, {useState} from 'react';
import {
    IonBackButton,
    IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonHeader, IonIcon, IonImg, IonItem, IonLabel,
    IonPage,
    IonTitle,
    IonToolbar, useIonAlert, useIonViewWillEnter,
    useIonViewWillLeave
} from "@ionic/react";
import {RouteComponentProps} from "react-router";
import {DetailResult, useApi} from "../hooks/useApi";
import {starHalfOutline} from "ionicons/icons";


interface DetailsPageProps extends RouteComponentProps<{ id: string }> {
}

export const Details: React.FC<DetailsPageProps> = ({match}) => {
    const {getDetails} = useApi()
    const [information, setInformation] = useState<DetailResult | null>(null)

    useIonViewWillEnter(() => {
        const fetchData = async () => {
            try {
                const id = match.params.id
                const data = await getDetails(id)
                setInformation(data)
                console.log(data)
            } catch (error) {
                console.log('Error occurred: ', error)
            }

        }
        void fetchData()
    })
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot={'start'}>
                        <IonBackButton defaultHref={'/movies'}></IonBackButton>
                    </IonButtons>
                    <IonTitle>{information?.Genre}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                {information &&
                    (<IonCard>
                        <IonCardHeader>
                            <IonCardTitle>{information.Title}</IonCardTitle>
                            <IonCardSubtitle>{information.Year}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonImg src={information.Poster}/>
                            <IonItem lines={'none'}>
                                <IonIcon icon={starHalfOutline} slot={'start'} color={'warning'}/>
                                <IonLabel>{information.imdbRating}</IonLabel>
                            </IonItem>
                        </IonCardContent>
                    </IonCard>)}
            </IonContent>
        </IonPage>
    );
};
