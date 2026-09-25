import { useEffect, useState } from "react"
import { FlatList, Image, Pressable, View } from "react-native"

type ImageListingProps = {
    imageUrl: string
}
const ImageListing = (props: ImageListingProps) => {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        setImages((prev) => [...prev, props.imageUrl])
    }, [props.imageUrl]);
    return (
        <FlatList style={{ marginHorizontal: 10 }} horizontal showsHorizontalScrollIndicator={false} data={images} renderItem={({ item }) => {
            return <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item }} style={{ height: 100, width: 100, borderRadius: 5 }} />

                <Pressable style={{ left: -12, bottom: 3 }} >
                    <Image source={require('../assets/close.png')} style={{ height: 24, width: 24 }} />
                </Pressable>

            </View>
        }} />
    )
}



export default ImageListing;