import {
    IonContent,
    IonHeader,
    IonItem,
    IonLabel, IonList,
    IonPage,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import './Home.css';
import {SearchType, useApi} from "../hooks/useApi";
import {useEffect, useState} from "react";

const Home = () => {
    const {searchData} = useApi()

    const [searchTerm, setSearchTerm] = useState('')
    const [type, setType] = useState<SearchType>(SearchType.all)
    const [results, setResults] = useState([])

    useEffect(() => {
        if (searchTerm === '') {
            setResults([])
            console.log('No results')
            return
        }
        const fetchData = async () => {
            const result = await searchData(searchTerm, type)
            setResults(result)
            console.log( result)
        }
        fetchData()
    }, [searchTerm]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'primary'}>
                    <IonTitle>My Movie App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonSearchbar value={searchTerm}
                              debounce={300}
                              onIonChange={(e) => setSearchTerm(e.detail.value!)}>

                </IonSearchbar>
                <IonItem>
                    <IonLabel>Select Search type</IonLabel>
                    <IonSelect value={type}
                               onIonChange={(e) => setType(e.detail.value)}>
                        <IonSelectOption value={''}>All</IonSelectOption>
                        <IonSelectOption value={'movie'}>Movie</IonSelectOption>
                        <IonSelectOption value={'series'}>Series</IonSelectOption>
                        <IonSelectOption value={'episode'}>Episode</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonList>
                    {results}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Home;
