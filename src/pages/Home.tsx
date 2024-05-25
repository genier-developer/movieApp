import {
    IonAvatar,
    IonContent,
    IonHeader,
    IonIcon,
    IonImg,
    IonItem,
    IonLabel, IonList,
    IonPage,
    IonSearchbar,
    IonSelect,
    IonSelectOption,
    IonTitle,
    IonToolbar, useIonAlert, useIonLoading
} from '@ionic/react';
import './Home.css';
import {SearchResult, SearchType, useApi} from "../hooks/useApi";
import {useEffect, useState} from "react";
import {gameControllerOutline, tvOutline, videocamOutline} from "ionicons/icons";


const Home = () => {
    const {searchData} = useApi()

    const [searchTerm, setSearchTerm] = useState('')
    const [type, setType] = useState<SearchType>(SearchType.all)
    const [results, setResults] = useState<SearchResult[]>([])
    const [presentAlert] = useIonAlert()
    const [loading, dismiss] = useIonLoading()

    useEffect(() => {
        if (searchTerm === '') {
            setResults([])
            console.log('No results')
            return
        }
        const fetchData = async () => {
            await loading()
            const result: any = await searchData(searchTerm, type)
            await dismiss()
            if(result.Error){
                presentAlert(result.Error)
            } else {
                setResults(result.Search)
            }
        }
        void fetchData()
    }, [searchTerm, type]);

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
                    <IonLabel>Search type</IonLabel>
                    <IonSelect
                        value={type}
                               onIonChange={(e) => setType(e.detail.value)}>
                        <IonSelectOption value={''}>All</IonSelectOption>
                        <IonSelectOption value={'movie'}>Movie</IonSelectOption>
                        <IonSelectOption value={'series'}>Series</IonSelectOption>
                        <IonSelectOption value={'episode'}>Episode</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonList>
                    {results.map((item) => (
                        <IonItem button key={item.imdbID}
                                 routerLink={`/movies/${item.imdbID}`}>
                            <IonAvatar slot={'start'}>
                                <IonImg src={item.Poster}></IonImg>
                            </IonAvatar>
                            <IonLabel className={'ion-text-wrap'}>{item.Title}</IonLabel>
                            {item.Type==="movie" && <IonIcon slot={'end'} icon={videocamOutline}/>}
                            {item.Type==="series" && <IonIcon slot={'end'} icon={tvOutline}/>}
                            {item.Type==="game" && <IonIcon slot={'end'} icon={gameControllerOutline}/>}
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Home;
