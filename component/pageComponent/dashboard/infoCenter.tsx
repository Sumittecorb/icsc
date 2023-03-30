import { Box, styled, Typography } from "@mui/material"
import { FC, useState } from "react"
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import dashboardData from "../../helpers/data/dashboard.json"
const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({

    marginBottom: '20px',
    backgroundColor: '#fafafb',
    borderRadius: '12px',
    boxShadow: '0 5px 15px #00000021',
    overflow: 'hidden',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<img src="/images/plus.svg" style={{}} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const InfoCenter: FC<{}> = () => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };
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
                Information Center
            </Typography>
            <Box sx={{
                minHeight: '548px',
                maxHeight: '549px',
                overflowY: 'auto',
                overflowX: 'hidden',
                padding: '39px 20px 19px',

            }}>
                {dashboardData.infocenterData.map((data) => {
                    return (
                        <Accordion expanded={expanded === `${data.id}`} onChange={handleChange(`${data.id}`)}>
                            <AccordionSummary aria-controls={`panel{${data.id}}-content`} id={`panel{${data.id}}-header`}>
                                <Typography>{data.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {data.desc}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    );
                })}
            </Box>
        </Box>
    )
}
export default InfoCenter