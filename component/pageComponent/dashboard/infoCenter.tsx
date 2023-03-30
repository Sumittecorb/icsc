import { Box, styled, Typography } from "@mui/material"
import { FC, useState } from "react"
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

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
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                        <Typography>Where are the 10x10, 10x20, etc booth packages?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Since the show provides white walls, exhibitors can now go directly to Expresso to order any wall graphics and furniture they need.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                        <Typography>Is custom carpet available to order?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Yes.  Please visit GES Expresso to order: https://ordering.ges.com/011602308

                            FYI:  Exhibitor must complete the form stating the standard show carpet is not wanted.
                            If the form is not completed and standard carpet has been installed, it is the exhibitor's
                            responsibility for labor charges to remove the carpet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                        <Typography>May we hang our own graphics on the walls of our booth?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Exhibitors may not attach anything to the walls.  Exhibitors must visit the GES Servicenter, on-site,
                            during set up to obtain wall hanging brackets.
                            Wall hanging brackets are given on-site on a first-come first-serve basis and cannot be pre-ordered or reserved.
                            Exhibitors are responsible for any damage to the fabric from wall-hanging brackets.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}
export default InfoCenter