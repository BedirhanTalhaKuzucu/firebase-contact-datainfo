// Database bilgi ekleme,bilgiyi alma, bilgi silme ve değiştirme
import {useState,useEffect} from "react";
import { getDatabase,ref,set,push,onValue, remove, update} from "firebase/database";

// Bilgi Ekleme
export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef=ref(db,"bilgiler");
    const newUserRef=push(userRef)
    set((newUserRef),{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender,
    })
}

// Bilgi Çağırma

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef=ref(db,"bilgiler");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const bilgilerArray=[];

            for(let id in data){
                bilgilerArray.push({id,...data[id]})
            }          
            setContactList(bilgilerArray);
            setIsLoading(false);
        });
    },[])
    return {isLoading,contactList}
}

// Bilgi silme
export const DeleteUser=(id)=>{
        const db = getDatabase();
        remove(ref(db,"bilgiler/"+id))
}

// Bilgi Değiştirme

export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["bilgiler/"+info.id]=info;
    return update(ref(db),updates);

}