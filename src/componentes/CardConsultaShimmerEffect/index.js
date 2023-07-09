
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "../CardConsulta/styles";
import shimmerGif from '../../assets/shimmer.gif';



export function CardConsultaShimmerEffect() {



  return (
    <View style={styles.container}>
      <View style={styles.pessoaArea}>
        <Image source={shimmerGif} style={[styles.foto, {overlayColor: '#FFFFFF'}]} />
        <View style={styles.informacoes}>
          <Image source={shimmerGif} style={[{width: 180, height: 22, marginBottom:3}]} />
          <View style={styles.consultaArea}>
            <Image source={shimmerGif} style={[{width: 100, height: 15}]} />
          </View>
        </View>
      </View>
      <View style={styles.informacoesAgendamento}>
      <Image source={shimmerGif} style={[{width: 150, height: 15}]} />
        <View style={styles.botoesArea}>
          <Image source={shimmerGif} style={[styles.botao,{width: '100%', height: 45, overlayColor: '#FFFFFF'}]} />
        </View>
      </View>
    </View>
  );
}