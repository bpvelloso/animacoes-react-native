import { FlatList, View, Image, Text } from "react-native";
import styles from './styles'
import { useEffect, useRef, useState } from "react";
export default function Carrossel({data}) {


    const carrosselRef = useRef()
    const [indice, setIndice] = useState(0)

    function alteraPosicao() {
        if(indice<data.length-1){
            setIndice(indice + 1)
        }else{
            setIndice(0)
        }
    }

    useEffect(() => {
        carrosselRef.current.scrollToIndex({ index: indice})

        const intervalo = setInterval(() => {
            alteraPosicao()
        }, 2000);

        return ()=>clearInterval(intervalo)
    }, [indice])

    return (
        <View style={styles.container}>
            <FlatList
              data={data}
              ref={carrosselRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={({ item, index }) => (
                <Image 
                  source={item.imagem}
                  style={[styles.imagem, index==data.length-1?{marginRight:200}:null]}
                  resizeMode="contain"
                  aria-label={console.log(item.imagem)}
                />
              )}
            />
        </View>
    )
}