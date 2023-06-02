"use client"
import Counter from '../components/Counter';
import Button from "../components/Button";
import dattebayo1 from '../../public/wav/Datebayo1.wav';
import dattebayo2 from '../../public/wav/Datebayo2.wav';
import dattebayo3 from '../../public/wav/Datebayo3.wav';
import {useEffect, useState} from "react";
import {
    getFirestore,
    collection,
    onSnapshot,
    updateDoc,
    doc,
    increment
} from 'firebase/firestore'
import { initializeApp } from "firebase/app";

export default function Home() {
    const [counter, setCounter] = useState(0);
    const [ref, setRef] = useState({})

    useEffect(() => {
        const app = initializeApp({
            apiKey: "AIzaSyCwFTbnx1F18or2KW_yfAZ2cXZ18ONNQb8",
            authDomain: "dattebayo-68ea5.firebaseapp.com",
            projectId: "dattebayo-68ea5",
            storageBucket: "dattebayo-68ea5.appspot.com",
            messagingSenderId: "709699638738",
            appId: "1:709699638738:web:533a0d064dab527400a40b",
            measurementId: "G-STP8M84ZG4"
        });
        const ref = doc(collection(getFirestore(app), 'count'), 'YTkJkPazo3OSuPB3Z02Y');
        setRef(ref)
        onSnapshot(ref, async function(snapshot) {
            setCounter(snapshot.data().count)
        });
    }, [],)

    const onClickCounter = async () => {
        playAudio()
        await updateDoc(ref, {count: increment(1)})
    }

    const playAudio = () => {
        new Audio(randomWav()).play()
    }

    const randomWav = () => {
        const wavArray = [
            dattebayo1,
            dattebayo2,
            dattebayo3
        ]
        const randomSelection = Math.floor(Math.random() * 3) + 1;

        return wavArray[randomSelection - 1];
    }
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-6">
            <Counter counter={counter}/>
            <Button handleClick={onClickCounter} />
        </div>
    </main>
  )
}
