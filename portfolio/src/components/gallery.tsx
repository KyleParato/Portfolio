import {Accordion, AccordionItem} from "@heroui/accordion";
import {Card, CardBody, CardHeader} from "@heroui/card";


export const Gallery = () => {
      return (
        <section className="justify-center">
        <h1 className="text-xl font-bold text-center">Some of my Photos</h1>
        {/* Photo Gallery */}
        <div className="flex grid grid-cols-2">
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/Profile.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="1" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/IMG_9788.JPG"></img>
                    <Accordion>
                        <AccordionItem key="2" aria-label="Ice Cave at Castner Glacier, Alaska" title="Ice Cave at Castner Glacier, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/IMG_0027.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="3" aria-label="Ice Cave at Castner Glacier, Alaska" title="Ice Cave at Castner Glacier, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/IMG_0241.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="4" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/IMG_0380.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="5" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/DSC_0573.JPG"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="6" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/C33.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="7" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/M51.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="8" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/NGC6888.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="10" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
            <Card className="m-2">
                <CardBody>
                    <img src="/src/img/M101_2023_05_fast_attempt.png"></img>
                    <Accordion>
                        <AccordionItem className="overflow-hidden" key="9" aria-label="Northern Lights at Chena Lake, Alaska" title="Northern Lights at Chena Lake, Alaska">Test Text</AccordionItem>
                    </Accordion>
                </CardBody>
            </Card>
        </div>
        </section>
    );
};