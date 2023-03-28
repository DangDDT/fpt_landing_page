import { Box, Fade } from "@mui/material";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
interface Props {
  listImage: string[];
}

function ImageView({ listImage }: Props) {
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
      {listImage.map((item, index) => {
        return (
          <PhotoView key={index} src={item}>
            <Box pr={2} display={"inline-flex"}>
              <img src={item} width={480} style={{ objectFit: "cover" }} />
            </Box>
          </PhotoView>
        );
      })}
    </PhotoProvider>
  );
}
export default ImageView;
