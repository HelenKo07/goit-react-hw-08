import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Stack,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { setNameFilter } from "../../redux/filters/slice";
import { selectNameFilters } from "../../redux/filters/selectors";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilters) || "";

  const handleFilterSearch = (event) => {
    dispatch(setNameFilter(event.target.value));
  };

  const handleClearSearch = () => {
    dispatch(setNameFilter(""));
  };

  return (
    <Stack spacing={2} sx={{ maxWidth: 400 }}>
      <Typography variant="h6">Find contacts by name</Typography>
      <TextField
        value={filter}
        onChange={handleFilterSearch}
        label="Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: filter && (
            <InputAdornment position="end">
              <IconButton onClick={handleClearSearch}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}
