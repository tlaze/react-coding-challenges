import { TextField, Box } from "@mui/material";

interface FilterBarProps{
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterBar({value, onChange} : FilterBarProps){
    return(
        <Box component="section" sx={{ display: 'flex', alignItems:'center', justifyContent:'center', p: 2 }}>
            <TextField
                type="text"
                placeholder="Filter by movie title"
                value={value}
                onChange={onChange}
                />
        </Box>
    )
}
export default FilterBar