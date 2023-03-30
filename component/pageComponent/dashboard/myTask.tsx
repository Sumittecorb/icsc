import { FC } from "react"
import { Box, Checkbox, CheckboxProps, FormControlLabel, FormGroup, styled, Typography } from "@mui/material"
import dashboardData from "../../helpers/data/dashboard.json"
const BpIcon = styled('span')(({ }) => ({
    borderRadius: 8,
    width: 24,
    height: 24, 
    backgroundColor: '#ddd',
    backgroundImage:'#ddd',
    '.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor:'#ddd',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(57,75,89,.5)',
    },
  }));
  // Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps) {
    return (
      <Checkbox
        sx={{
          '&:hover': { bgcolor: 'transparent' },
        }}
        disableRipple
        color="default"
        checkedIcon={<BpCheckedIcon />}
        icon={<BpIcon />}
        inputProps={{ 'aria-label': 'Checkbox demo' }}
        {...props}
      />
    );
  }
  const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: '#141e4e',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 24,
      height: 24,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  });
const MyTask: FC<{}> = () => {
    return (
        <Box
            sx={{
                background: '#f4f6f8',
                boxShadow: '0 20px 50px #00000040',
                opacity: 1,
                borderRadius: '30px',
                padding: '15px',
                marginTop: '30px',
                position: 'relative',
                minHeight: '424px',
                overflowY: 'auto',
                overflowX: 'hidden',
                maxHeight: '425px',
                width: '100%',
            }}>
            <Typography
                variant="h4"
                sx={{
                    textShadow: '0 7px 13px #0000001a',
                    marginBottom: '0',
                    font: '500 20px/50px Montserrat',
                    height: '41px',
                    textAlign: 'left',
                    letterSpacing: '.5px',
                    color: '#474299',
                    opacity: '1',
                }}>
                My Tasks
            </Typography>
            <Typography
                sx={{

                    display: 'flex',
                    marginBottom: '17px',
                    font: '400 13px/18px Montserrat',
                    letterSpacing: '.17px',
                    color: '#707070',
                    textShadow: '0 7px 13px #0000001a',
                    opacity: '1',
                    width: '181px',
                }}>
                Please use the list below to track your progress.
            </Typography>
            <Box sx={{

            }}> 
              {dashboardData.myTaskData.map((data) => {
                    return (
                <FormGroup>
                    <FormControlLabel 
                    sx={{
                        font: '400 13px/30px Montserrat',
                        color: '#666',
                        cursor: 'pointer',
                        marginBottom: '14px',
                    }}
                    control={<BpCheckbox  />} 
                    label={data.title} />
                </FormGroup>
                   );
                  })}
              
            </Box>
        </Box >
    )
}
export default MyTask