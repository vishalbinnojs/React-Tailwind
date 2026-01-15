
import Box from "@mui/material/Box"
import RCard from "./Card"
const Feed = () => {
 
  return (
    <>
    <Box sx={{display:"flex",flexDirection:"column",gap:"2rem" }}
     padding={"1rem"} flex={4}>
<RCard />
<RCard />
<RCard />
<RCard />
<RCard />
    </Box>
    </>
  )
};

export default Feed;
