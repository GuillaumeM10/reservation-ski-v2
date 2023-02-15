import { FormGroup, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

const PostFilters = ({ filterPosts }) => {
  const handleChange = (e) => {
    const label = e.target.parentElement.firstChild.name;
    const value = e.target.value;
    filterPosts(label, value);
  }

  const search = (value) => {
    console.log(value);
    filterPosts("title", value);
  }

  return (
    <Box
      sx={{
        zIndex: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(10px)',
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography
        variant="h5"
        component="h2"
        sx={{
          color: '#000',
          textAlign: 'center',
          p: 2,
        }}
      >
        PostFilters
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 2,
          p: 2,
          flexWrap: 'wrap',
        }}
      >
        {/* i want a Search bar here */}
        <input onInput={(e) => {search(e.target.value)}} type="search" placeholder="Search" />
        
        <FormGroup>
          <TextField
            sx={{width: 300}}
            label="Price"
            variant="outlined"
            type="number"
            name="price"
            required
            onChange={(e)=>handleChange(e)}
        />
        </FormGroup>
        <FormGroup>
          <TextField
            sx={{width: 300}}
            label="Weight"
            select
            SelectProps={{
              native: true,
            }}
            variant="outlined"
            type="number"
            name="weight"
            required
            onChange={(e)=>handleChange(e)}
          >
            <option>Choisir</option>
            <option value="45">Plus de 45kg</option>
            <option value="4565">Entre 45 et 65kg</option>
            <option value="65">Plus de 65kg</option>
          </TextField>
        </FormGroup>
        <FormGroup>
          <TextField
            sx={{ width: 300 }}
            select
            SelectProps={{
              native: true,
            }}
            label="Size"
            variant="outlined"
            type="number"
            name="size"
            required
            onChange={(e)=>handleChange(e)}
          >
            <option>Choisir</option>
            <option value="140">140cm</option>
            <option value="145">145cm</option>
            <option value="150">150cm</option>
            <option value="155">155cm</option>
            <option value="160">160cm</option>
            <option value="165">165cm</option>
            <option value="170">170cm</option>
            <option value="175">175cm</option>
            <option value="180">180cm</option>
            <option value="185">185cm</option>
            <option value="190">190cm</option>
          </TextField>
        </FormGroup>
        <FormGroup>
          <TextField
            sx={{ width: 300 }}
            select
            SelectProps={{
              native: true,
            }}
            label="Style"
            variant="outlined"
            type="text"
            name="style"
            required
            onChange={(e)=>handleChange(e)}
          >
            <option>Choisir</option>
            <option value="Freeride">Freeride</option>
            <option value="Freestyle">Freestyle</option>
            <option value="Piste">Piste</option>
            <option value="Polyvalant">Polyvalant</option>
          </TextField>
        </FormGroup>

        {/* Select Styles */}
        {/* Select Weight */}
        {/* Select Size */}
        {/* Select Price */}
      </Box>
    </Box>
  );
};

export default PostFilters;