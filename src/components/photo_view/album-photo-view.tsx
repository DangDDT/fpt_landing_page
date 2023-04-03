import { Box, Fade } from "@mui/material";
import PhotoAlbum, { Photo } from "react-photo-album";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import FadeInSection from "../animations/fade-in-section";
import Image from "next/image";
interface Props {
  listImage: { src: string; width: number; height: number }[];
}
function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
function AlbumImageView({ listImage }: Props) {
  const listImageShuffled = shuffle(listImage);
  const photos: Photo[] = listImageShuffled.map((e, index) => ({
    src: e.src,
    width: e.width,
    height: e.height,
  }));
  return (
    <PhotoProvider
      maskOpacity={0.5}
      speed={() => 410}
      easing={(type) =>
        type === 2
          ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
          : "cubic-bezier(0.34, 1.56, 0.64, 1)"
      }
    >
      <PhotoAlbum
        layout="columns"
        columns={(containerWidth) => {
          if (containerWidth < 500) return 1;
          else if (containerWidth < 900) return 2;
          else if (containerWidth < 1200) return 3;
          else return 4;
        }}
        photos={photos}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <FadeInSection>
            <PhotoView key={photo.key} src={photo.src}>
              <div
                style={{
                  position: "relative",
                  ...wrapperStyle,
                }}
              >
                {renderDefaultPhoto({ wrapped: true })}
              </div>
            </PhotoView>
          </FadeInSection>
        )}
      />
    </PhotoProvider>
  );
}
export default AlbumImageView;
