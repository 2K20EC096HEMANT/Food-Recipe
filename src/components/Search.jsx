import { useState } from 'react';
import {Grid, Form, Input} from 'semantic-ui-react';



const Search = ({setSearchedQuery}) => {
    const [value, setvalue] = useState("");
    
    
    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
       <Grid columns={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2 className='search-heading'>
                    Search Recipes with <span style={{color: '#2185D0'}}>Our Recipes</span>  </h2>
                    <h4>Input Recipes separated by comma</h4>
                    <Form onSubmit={onFormSubmit}>
                        <Input 
                            placeholder="tomata,potata,pizza"
                            action={{icon: 'search', color: 'blue'}}
                            onChange={(e) => setvalue(e.target.value)}
                            value={value}
                        />
                    </Form>
            </Grid.Column>
       </Grid>
    )
}

export default Search;