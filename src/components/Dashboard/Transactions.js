import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native'

import { images, icons, COLORS, FONTS, SIZES } from './constants';

const ScrollableTab = ({ tabList, selectedTab, onPress }) => {

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={{ marginHorizontal: SIZES.padding }}
            onPress={() => onPress(item)}
        >
            <Text style={{ color: COLORS.secondary, ...FONTS.body3 }}>{item.name}</Text>

            {
                selectedTab.id == item.id &&
                <View style={{ alignItems: 'center', marginTop: SIZES.base }}>
                    <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.blue }}></View>
                </View>
            }
        </TouchableOpacity>
    );

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tabList}
                renderItem={renderItem}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
}

const ScrollableCard = ({ navigation, productList }) => {

    const renderCard = ({ item }) => (
        <TouchableOpacity
            style={{ marginLeft: SIZES.padding }}
            onPress={() => navigation.navigate("ItemDetail", { "itemInfo": item })}
        >
            <View style={{ width: 290, height: 220,  }}>
                <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%', borderRadius: SIZES.radius * 2 }}
                />

                <View style={{ position: 'absolute', top: 15, left: '10%', right: '10%' }}>
                    <Text style={{ color: COLORS.lightGray2, ...FONTS.h3 }}></Text>
                    <Text style={{ marginTop: SIZES.base, color: COLORS.white, ...FONTS.h2 }}>{item.productName}</Text>
                </View>

               
            </View>
        </TouchableOpacity>
    )

    return (
        <View style={{ marginTop: SIZES.padding }}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={productList}
                renderItem={renderCard}
                keyExtractor={item => `${item.productId}`}
            />
        </View>
    )
}

const Home = ({ navigation }) => {

    const [tabList, setTabList] = React.useState([
        {
            id: 0,
            name: "Cartões Pré-pago",
            title: "Cartões Pré-pago",
            productList: [
                {
                    productId: 1,
                    productName: '',
                    price: 10.00,
                    image: images.greenChair,
                },
                {
                    productId: 2,
                    productName: '',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 3,
                    productName: '',
                    price: 10.00,
                    image: images.whiteChair,
                },
            ]
        },
        {
            id: 1,
            name: "Cartões presente",
            title: 'Cartões presente',
            productList: [
                {
                    productId: 4,
                   
                    price: 10.00,
                    image: images.spotify,
                },
                
                {
                    productId: 5,
                   
                    price: 10.00,
                    image: images.netflix,
                },
                {
                    productId: 6,
                    
                    price: 10.00,
                    image: images.amazon,
                },
                {
                    productId: 7,
                   
                    price: 10.00,
                    image: images.google,
                },
                {
                    productId: 8,
                   
                    price: 10.00,
                    image: images.itunes,
                },
                {
                    productId: 9,
                   
                    price: 10.00,
                    image: images.microsoft,
                },
                {
                    productId: 10,
                   
                    price: 11.00,
                    image: images.skype,
                },

            ]
        },
        {
            id: 2,
            name: "Cartões de jogos",
            title: 'Cartões de jogos',
            productList: [
                {
                    productId: 11,
                    
                    price: 12.00,
                    image: images.PlayStation,
                },
                {
                    productId: 12,
                    productName: '',
                    price: 10.00,
                    image: images.xbox,
                },
                {
                    productId: 13,
                    productName: '',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 14,
                    productName: '',
                    price: 10.00,
                    image: images.nitendo,
                },

            ]
        },
        {
            id: 3,
            name: "Jogos",
            title: 'Jogos',
            productList: [
                {
                    productId: 15,
                    productName: '',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 16,
                    productName: '',
                    price: 10.00,
                    image: images.redChair,
                },
                {
                    productId: 17,
                    productName: '',
                    price: 10.00,
                    image: images.redChair,
                },

                
                

            ]
        },

        {
          id: 4,
          name: "Bilhetes digitais",
          title: 'Bilhetes digitais',
          productList: [
              {
                  productId: 18,
                  productName: '',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 19,
                  productName: '',
                  price: 10.00,
                  image: images.redChair,
              },
              {
                  productId: 20,
                  productName: '',
                  price: 10.00,
                  image: images.redChair,
              },

              
              

          ]
      }
    ])

    const [selectedTab, setSelectedTab] = React.useState({
        id: 0,
        name: "Cartões Pré-pago",
        title: 'Cartões Pré-pago',
        productList: [
            {
                productId: 21,
                productName: '',
                price: 10.00,
                image: images.greenChair,
            },
            {
                productId: 23,
                productName: '',
                price: 10.00,
                image: images.redChair,
            },
            {
                productId: 24,
                productName: '',
                price: 10.00,
                image: images.whiteChair,
            },

        ]
    })

    // Render

    function renderHeader() {
        return (
            <View style={{ paddingHorizontal: SIZES.padding }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <TouchableOpacity
                            onPress={() => console.log("Menu on clicked")}
                        >
                            <Image
                                source={icons.menu}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <TouchableOpacity
                            onPress={() => { console.log("Cart on clicked") }}
                        >
                            <Image
                                source={icons.cart}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                    color: COLORS.primary,
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    function renderTitle(title) {
        return (
            <View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>

                <Text style={{ color: COLORS.black, ...FONTS.largeTitle }}>{title}</Text>
            </View>
        )
    }

    function renderPromotionCard() {
        return (
            <View
                style={[styles.shadow, {
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    padding: SIZES.radius,
                    height: 110,
                    borderRadius: 20,
                    backgroundColor: COLORS.backGlobal
                }]}
            >
              

                {/* Wordings section */}
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: 'center' }}>
                    <Text style={{ ...FONTS.h2 }}>Oferta especial</Text>
                    <Text style={{ ...FONTS.body3 }}>Saber mais</Text>
                </View>

                {/* Button */}
                <View style={{ marginRight: SIZES.radius, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.bulGobal,
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '70%',
                            width: 40,
                            borderRadius: 10
                        }}
                        onPress={() => { console.log("Promo on clicked") }}
                    >
                        <Image
                            source={icons.chevron}
                            resizeMode="contain"
                            style={{
                                height: '50%',
                                width: '50%',
                               
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
     
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <ScrollView>
            {renderTitle(selectedTab.title)}

            <ScrollableTab
                tabList={tabList}
                selectedTab={selectedTab}
                onPress={(item) => setSelectedTab(item)}
            />

            <View style={{ flex: 1 }}>
                <ScrollableCard
                    navigation={navigation}
                    productList={selectedTab.productList}
                />
            </View>

            {/* Footer - Promotion Card */}
            <View style={{ height: "19%", justifyContent: 'flex-end' }}>
                {renderPromotionCard()}
            </View>


            
            
         
            </ScrollView>



        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    }
})

export default Home;