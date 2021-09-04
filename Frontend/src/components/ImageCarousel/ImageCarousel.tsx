import React, {useState, useCallback} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = Dimensions.get('window').width;

  // cada vez que cambio algun estado el componente se recarga... entonces crea una nueva funcion lo que no es bueno y react-native no lo permite.
  //por lo tanto uso callback function para que no se cree una y otra vez la funcion , sino que use la misma
  const onFlatlistUpdate = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
    //  cada vez que cambio algo de aqui me obliga a kill an re run la app
  }, []);

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 45}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 45}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50, //el item solos se considerara visible si ocupa mas del 50% del area del flatlist
          minimumViewTime: 100,
        }}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.dots}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              // eslint-disable-next-line react-native/no-inline-styles
              {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'},
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {},
  image: {
    height: 250,
    resizeMode: 'contain',
  },
  dots: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#c9c9c9',
  },
});
