import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Button } from "@heroui/button";
import {Card, CardBody, CardFooter, CardHeader} from "@heroui/card";
import { Divider } from "@heroui/divider";
import {Link} from "@heroui/link"
import {  Modal,  ModalContent,  ModalHeader,  ModalBody,  ModalFooter, useDisclosure,} from "@heroui/modal";

export default function DocsPage() {
  const modal1 = useDisclosure()
  const modal2 = useDisclosure()
  const modal3 = useDisclosure()
  const modal4 = useDisclosure()
  const modal5 = useDisclosure()
  const modal6 = useDisclosure()
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-9/10">
        <div className="inline-block max-w-9/10 text-center justify-center ">
          <h1 className={title()}>Projects</h1>
          
        <div className="flex grid grid-cols-2 jsutify-center">
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Incoming Work Order Managment System - Edwards Lifesciences</h1>
                  <p className="card-date">May 2025</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">A two semester business project working with Edwards Lifescienes to help them improve their work 
                    order managment system for three of their teams.
                  </p>
              </CardBody>
              <Divider/>
              <CardFooter>
                  <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal1.onOpen}>Learn More</Button>
                  <Modal className="h-fit" size="4xl" isOpen={modal1.isOpen} onClose={modal1.onClose}>
                    <ModalContent>
                          <ModalHeader className="flex flex-col gap-1">Incoming Work Order Managment System - Edwards Lifesciences</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">The task given to our group was to develop and update the work order system for a machine 
                              shop, a material testing lab, and a prototyping team. We were able to update existing systems and infrastrcture to 
                              be a modern and uniform system across the teams.
                            </p>
                            <p className=""><b>Tools used:</b><br/>Microsoft SharePoint<br/>Microsoft PowerApps
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/edwards.png"/>
                            <img className="w-full max-w-3xl" src="/src/img/edwards-form.png"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                          <Link className="overflow-hidden text-ellipsis" isExternal showAnchorIcon href="https://github.com/KyleParato/491">Edwards Lifesciences </Link>
                          </ModalFooter>
                     
                  </ModalContent>
                </Modal>
                </CardFooter>
        </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">AWS Real Time Cloud Document Collaboration</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">A basic real time document collaboration web app. Project focused on designing the microservices and 
                  security.</p>
              </CardBody>
              <Divider/>
              <CardFooter>
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal2.onOpen}>Learn More</Button>
                  <Modal className="h-fit" size="4xl"isOpen={modal2.isOpen} onClose={modal2.onClose}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">AWS Real Time Cloud Document Collaboration</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">A basic real time document collaboration web app. Project focused on designing the microservices and 
                              security.
                            </p>
                            <p className=""><b>Tools used:</b><br/>AWS<br/>Vite
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/"/>
                            <img className="w-full max-w-3xl" src="/src/img/"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/rtde">AWS Real Time Document Collaboration</Link>
                            </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Chess AI - Alpha Beta Pruning</h1>
                  <p className="card-date">December 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal3.onOpen}>Learn More</Button>
                  <Modal className="h-fit" size="4xl"isOpen={modal3.isOpen} onOpenChange={modal3.onOpenChange}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">Chess AI - Alpha Beta Pruning</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">
                            </p>
                            <p className=""><b>Tools used:</b><br/>Python3<br/>
                            </p>
                            
                            <img className="object-scale-down w-full max-w-sm" src="/src/img/chessai-result.png"/>
                            <img className="object-scale-down w-full max-w-3xl" src="/src/img/chessai-table.png"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/481Final">Chess AI</Link>
                            </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                </CardFooter>
            </Card>
          
          {/* Project */}
            <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">SFT - Simple Fitness Tracker</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal4.onOpen}>Learn More</Button>
                  <Modal className="h-fit" size="4xl"isOpen={modal4.isOpen} onClose={modal4.onClose}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">SFT - Simple Fitness Tracker</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">
                            </p>
                            <p className=""><b>Tools used:</b><br/>XCode<br/>SwiftUI
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/"/>
                            <img className="w-full max-w-3xl" src="/src/img/"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/SFT">SFT - Simple Fitness Tracker</Link>
                            </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Basic FTP Server</h1>
                  <p className="card-date">May 2024</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal5.onOpen}>Learn More</Button>
                  <Modal className="h-fit" size="4xl"isOpen={modal5.isOpen} onClose={modal5.onClose}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">Basic FTP Server</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">Details here
                            </p>
                            <p className=""><b>Tools used:</b><br/>Python3<br/>
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/"/>
                            <img className="w-full max-w-3xl" src="/src/img/"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/471_Group_Project">Basic FTP Sever</Link>
                            </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                </CardFooter>
            </Card>
        
        {/* Project */}
        <Card className="flex m-5 shadow-xl shadow-orange-300/40">
              <CardHeader>
                <div>
                  <h1 className="card-title">Basic Compiler</h1>
                  <p className="card-date">May 2023</p>
                </div>
              </CardHeader>
              <Divider/>
              <CardBody>
                  <p className="text-sm">Desc</p>
              </CardBody>
              <Divider/>
              <CardFooter>
              <Button className="text-orange bg-white shadow-lg shadow-orange-300/40" onPress={modal6.onOpen}>Learn More</Button>
                  <Modal className="h-fit" size="4xl"isOpen={modal6.isOpen} onClose={modal6.onClose}>
                    <ModalContent>
                      {(onClose) => (
                        <>
                          <ModalHeader className="flex flex-col gap-1">Basic Compiler</ModalHeader>
                          <ModalBody className="justify-center">
                            <p className="">Detailed Desc Here
                            </p>
                            <p className=""><b>Tools used:</b><br/>C++<br/>
                            </p>
                            <img className="w-full max-w-3xl content-center" src="/src/img/"/>
                            <img className="w-full max-w-3xl" src="/src/img/"/>
                          </ModalBody>
                          <ModalFooter className="justify-between">
                            <p className="font-light">Visit GitHub Repo</p>
                            <Link isExternal showAnchorIcon href="https://github.com/KyleParato/CPSC323_Final">Basic Compiler</Link>
                            </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
                </CardFooter>
            </Card>
        </div>
        
        </div>
      </section>
    </DefaultLayout>
  );
}
