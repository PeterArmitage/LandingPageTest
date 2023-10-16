import { Container, Button, Select, MultiSelect, Textarea } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import animals from './Cats';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
import '@mantine/dates/styles.css';
import classes from './AppointmentCard.module.css';

const AppointmentCard = () => {
 
   

    return (
        
       <Container size="xl">
           
            <br />
            <Container size="md">
               

                <Select 
                    label="Breed"
                    placeholder="Pick Breed"
                    data={animals}
                   
                />
                <br />
                <Select 
                    label="Size"
                    placeholder="Choose Size"
                    data={['Mini', 'Small', 'Medium', 'Large', 'Extra Large']}
                  
                />
                <br />
                <MultiSelect 
                    label="Service"
                    placeholder="Choose one"
                    data={['Bath only', 'Bath and Trim', 'Medical Bathing', 'Other']}
                    searchable
                    nothingFoundMessage="Nothing found..."
               
                />
                <br />
                <Textarea 
                    label="Special Observations"
                    description="Anything we need to know about?"
                    placeholder="Type here..."
                    
                />
                <br />
                <Textarea 
                    label="Address"
                    placeholder="4 Privet Drive, Surrey..."
                />
                <br />
               <DateTimePicker 
                    label="Pick date and time"
                    placeholder="Pick date and time"
               />
            </Container>
            <br />
            <Button type="submit" className={classes.submit}>Submit</Button>
              
        </Container>
    )
}

export default AppointmentCard