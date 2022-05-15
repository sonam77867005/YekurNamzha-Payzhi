import {React} from "react";
import {View,StyleSheet} from "react-native";
import { DrawerItem,DrawerContentScrollView } from "@react-navigation/drawer";
import { 
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
 } from "react-native-paper";
export default function DrawerContent(){
    return(
       <DrawerContentScrollView>
           <View style={styles.drawerContent}>
               <View style={styles.userInfoSection}>
                   <Avatar.Image
                   size={80}
                   source={
                       require('../../assets/sonam.jpg')
                   }/>
                   <Title style={styles.title}>Sonam Wangchuk</Title>
                   <Caption style={styles.caption}>@WangchukGCIT</Caption>
                   <View style={styles.row}>
                       <View style={styles.section}>
                           <Paragraph style={[styles.paragraph,styles.caption]}>
                               54
                           </Paragraph>
                           <Caption style={styles.caption}>Following</Caption>
                       </View>
                       <View style={styles.section}>
                           <Paragraph style={[styles.paragraph,styles.caption]}>
                               199
                           </Paragraph>
                           <Caption style={styles.caption}>Followers</Caption>
                       </View>
                   </View>
               </View>
               <Drawer.Section sytle={styles.drawerSection}>
                   <DrawerItem
                   label="Setting"
                   onPress={() => {}}/>
               </Drawer.Section>
               <Drawer.Section title="Preferences">
                   <TouchableRipple onPress={() =>{}}>
                       <View sytle={styles.preference}>
                           <Text>Notifications</Text>
                           <View pointerEvents="none">
                               <Switch value={false}/>
                           </View>
                       </View>
                   </TouchableRipple>
               </Drawer.Section>
           </View>
       </DrawerContentScrollView>
    );
   
}

const styles = StyleSheet.create({
    drawerContent:{
        flex:1,
    },
    userInfoSection:{
        paddingLeft:20,
    },
    title:{
        marginTop:20,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        lineHeight:14,
    },
    row:{
        marginTop:20,
        flexDirection:'row',
        alignItems:'center',
    },
    section:{
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraph:{
        fontWeight:'bold',
        marginRight:3,
    },
    drawerSection:{
        marginTop:15,
    },
    preference:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:12,
        paddingHorizontal:16,
    }
})