import { Image } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

interface UrlImageProps {
  image: string;
}

export const UrlImage = ({ image }: UrlImageProps) => {
  const [imgWidth, setImgWidth] = useState(100);
  const [ImgHeight, setImgHeight] = useState(100);
  const [imageScale, setImgScale] = useState(1);

  const window = Dimensions.get('screen');
  const imageRatio = window.width / imgWidth;

  useEffect(() => {
    Image.getSize(image, (width, height) => {
      setImgHeight(height);
      setImgWidth(width);
    });
  }, []);

  return (
    <Image
      source={{ uri: image }}
      style={{
        height: ImgHeight * imageRatio * imageScale,
        width: window.width * imageScale,
      }}
    />
  );
};
