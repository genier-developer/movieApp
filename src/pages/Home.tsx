import {
    IonContent,
    IonHeader,
    IonItem, IonLabel,
    IonPage,
    IonSearchbar,
    IonSelect,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';
import {useApi} from "../hooks/useApi";
import {useEffect, useState} from "react";

const Home = () => {
    const {searchData} = useApi()

    const [searchTerm, setSearchTerm] = useState('')
    const [type, setType] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        console.log('Search:', searchTerm)
    }, [searchTerm]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Blank</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonSearchbar value={searchTerm}
                              debounce={300}
                              onIonChange={(e) => setSearchTerm(e.detail.value!)}>

                </IonSearchbar>

                <IonItem>
                    <IonLabel>Select Search Type</IonLabel>
                </IonItem>
                <IonSelect value={type}
                           onIonChange={(e) => setType(e.detail.value)}>
                </IonSelect>
            </IonContent>
        </IonPage>
    );
};

export default Home;
